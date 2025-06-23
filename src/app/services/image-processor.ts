// src/app/services/image-processor.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map, switchMap, tap, timeout } from 'rxjs/operators';
import { ApiKeyService } from './api-key.service';

// Define interfaces for better type safety
export interface VisionAnalysisResult {
  english: string | null;
  french: string | null;
  error: string | null;
  imageBase64?: string | null; // Added to return the image for display
}

@Injectable({
  providedIn: 'root'
})
export class ImageProcessorService {
  private readonly MAX_IMAGE_SIZE = 1024; // Max width/height for resizing
  private readonly OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
  // --- UPDATED: New Translation Model and specific prompt ---
  private readonly TRANSLATION_MODEL_FOR_CRA = "google/gemini-2.5-flash-preview-05-20"; // Updated to a more recent model, flash for speed

  constructor(
    private http: HttpClient,
    private apiKeyService: ApiKeyService
  ) {}

  /**
   * Main method to analyze an image file using OpenRouter's vision API.
   * @param file The image file to analyze.
   * @param selectedVisionModel The OpenRouter vision model ID (e.g., 'openai/gpt-4o-mini').
   * @param identifier A unique identifier for logging (e.g., file name).
   * @param isPdfPage Whether this image is from a PDF page (for different prompting).
   * @returns An Observable emitting the analysis result.
   */
  analyzeImage(file: File, selectedVisionModel: string, identifier: string, isPdfPage: boolean = false): Observable<VisionAnalysisResult> {
    console.log('ImageProcessorService.analyzeImage called with:', file.name, selectedVisionModel);
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      console.error('No API key found');
      return throwError(() => new Error("OpenRouter API Key is missing. Please provide it."));
    }
    console.log('API key found, loading image...');

    return this.loadImage(file).pipe(
      map(img => {
        const base64Data = this.resizeAndConvertToBase64(img, this.MAX_IMAGE_SIZE);
        return { img, base64Data }; // Pass both img and base64Data
      }),
      switchMap(({ img, base64Data }) =>
        this.getVisionAnalysis(base64Data, selectedVisionModel, apiKey, identifier, isPdfPage).pipe(
          map(visionResult => ({ ...visionResult, imageBase64: base64Data })) // Add base64 to result for display
        )
      ),
      switchMap(visionResult => {
        if (visionResult.error || !visionResult.english) {
          return from([visionResult]); // If vision failed or no English, just pass it through
        }
        // If vision succeeded, translate the English text to French using the specific CRA prompt
        return this.translateToFrench(visionResult.english, apiKey, identifier).pipe(
          map(frenchText => ({
            english: visionResult.english,
            french: frenchText,
            error: null, // Clear any vision error if translation proceeds
            imageBase64: visionResult.imageBase64 // Keep the image
          })),
          catchError(translateError => {
            console.error(`Translation error for ${identifier}:`, translateError);
            return from([{
              english: visionResult.english,
              french: `[Translation Error: ${translateError.message || 'Unknown error'}]`,
              error: translateError.message,
              imageBase64: visionResult.imageBase64
            }]);
          })
        );
      }),
      catchError(error => {
        console.error(`Error in image analysis pipeline for ${identifier}:`, error);
        return throwError(() => new Error(`Failed to process image ${identifier}: ${error.message || 'Unknown error'}`));
      })
    );
  }

  private loadImage(file: File): Observable<HTMLImageElement> {
    return new Observable<HTMLImageElement>(observer => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          observer.next(img);
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(new Error(`Failed to load image '${file.name}'.`));
        };
        img.src = e.target?.result as string;
      };
      reader.onerror = (err) => {
        observer.error(new Error(`Failed to read file '${file.name}'.`));
      };
      reader.readAsDataURL(file);
    });
  }


  private resizeAndConvertToBase64(img: HTMLImageElement, maxSize: number): string {
    const canvas = document.createElement('canvas');
    let width = img.width;
    let height = img.height;

    if (width > maxSize || height > maxSize) {
      if (width > height) {
        height = Math.round(height * (maxSize / width));
        width = maxSize;
      } else {
        width = Math.round(width * (maxSize / height));
        height = maxSize;
      }
    }
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error("Could not get 2D context from canvas for image resizing.");
    }
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL('image/png');
  }

  private getVisionAnalysis(base64Data: string, selectedVisionModel: string, apiKey: string, identifier: string, isPdfPage: boolean = false): Observable<VisionAnalysisResult> {
    console.log('getVisionAnalysis called for:', identifier, 'model:', selectedVisionModel, 'isPdfPage:', isPdfPage);
    
    let prompt: string;
    let max_tokens: number;
    
    if (isPdfPage) {
      // Full description for PDF pages
      prompt = "Provide a comprehensive, well-structured description of this document page. Format your response with clear sections and bullet points where appropriate.\n\n" +
               "Include:\n" +
               "• All visible text content (quotes, headings, paragraphs)\n" +
               "• Document structure and layout\n" +
               "• Forms, fields, and what information they request\n" +
               "• Tables and their contents\n" +
               "• Any important visual elements or logos\n\n" +
               "Use line breaks between sections for readability. If there are multiple sections or forms, clearly separate them.\n" +
               "Be thorough and detailed to help someone understand the full content without seeing the page.";
      max_tokens = 2000;
    } else {
      // Short alt text for regular images
      prompt = "Create a short, concise alt text for this image suitable for a website. " +
               "DO NOT start with phrases like 'The image depicts', 'The image shows', or similar. " +
               "Instead, directly describe the main subject in 15-20 words maximum. " +
               "Focus only on the key elements necessary for accessibility. " +
               "Use simple, direct language without unnecessary words.";
      max_tokens = 50;
    }

    let messages;
    if (selectedVisionModel.includes('qwen') || selectedVisionModel.includes('llama')) {
      messages = [{
        "role": "user",
        "content": [
          { "type": "text", "text": prompt },
          { "type": "image_url", "image_url": { "url": base64Data } }
        ]
      }];
    } else { // Standard format for OpenAI, Gemini etc.
      messages = [{
        "role": "user",
        "content": [
          { "type": "image_url", "image_url": { "url": base64Data } },
          { "type": "text", "text": prompt }
        ]
      }];
    }

    const payload = {
      model: selectedVisionModel,
      messages: messages,
      max_tokens: max_tokens,
      temperature: 0.3,
      top_p: 0.85
    };

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    });

    return this.http.post<any>(this.OPENROUTER_API_URL, payload, { headers }).pipe(
      timeout(60000),
      map(response => {
        const englishText = response?.choices?.[0]?.message?.content?.trim();
        if (!englishText) {
          console.warn(`No content or unexpected structure from vision model for ${identifier}. Response:`, response);
          throw new Error("No content returned from vision model.");
        }
        return { english: englishText, french: null, error: null };
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = `Vision API Error (${error.status || 'Network Error'}): ${error.statusText || 'Unknown Error'}`;
        if (error.error && error.error.error && error.error.error.message) {
          errorMessage += ` - ${error.error.error.message}`;
        } else if (typeof error.error === 'string') {
          errorMessage += ` - ${error.error}`;
        }
        console.error(`Error in vision API call for ${identifier}:`, errorMessage, error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  private translateToFrench(text: string, apiKey: string, identifier: string): Observable<string> {
    if (!text) {
      console.log(`Skipping translation for empty text: ${identifier}`);
      return from([""]);
    }

    // --- UPDATED SYSTEM PROMPT FOR CRA-SPECIFIC TERMINOLOGY ---
    const systemPrompt = `You are a professional translator for the Canada Revenue Agency (CRA).
                          Your task is to translate the following English text into clear, concise, and accurate Canadian French,
                          using official CRA terminology and tone where applicable.
                          CRITICAL INSTRUCTION: Provide ONLY the direct translation. DO NOT include any explanations, notes,
                          disclaimers, or additional commentary of any kind. DO NOT include phrases like 'Here is the translation:'.
                          DO NOT wrap your response in quotes. Simply translate the text directly.`;

    const messages = [
      { "role": "system", "content": systemPrompt },
      { "role": "user", "content": text }
    ];

    const payload = {
      model: this.TRANSLATION_MODEL_FOR_CRA,
      messages: messages,
      temperature: 0.1,
      max_tokens: Math.max(500, Math.ceil(text.length * 2.5)),
      top_p: 0.9
    };

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    });

    return this.http.post<any>(this.OPENROUTER_API_URL, payload, { headers }).pipe(
      timeout(45000),
      map(response => {
        let translation = response?.choices?.[0]?.message?.content?.trim();
        if (!translation) {
          console.warn(`No content or unexpected structure from translation model for ${identifier}. Response:`, response);
          throw new Error("No content returned from translation model.");
        }
        // Basic cleanup (though prompt aims to prevent this)
        translation = translation.replace(/^Voici la traduction\s*:\s*/i, '');
        translation = translation.replace(/^Translation\s*:\s*/i, '');
        return translation;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = `Translation API Error (${error.status || 'Network Error'}): ${error.statusText || 'Unknown Error'}`;
        if (error.error && error.error.error && error.error.error.message) {
          errorMessage += ` - ${error.error.error.message}`;
        }
        console.error(`Error translating text for ${identifier}:`, errorMessage, error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  escapeHtml(unsafe: string | null): string {
    if (unsafe === null || typeof unsafe !== 'string') return '';
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  formatDescription(text: string | null): string {
    if (!text) return '';

    let formatted = this.escapeHtml(text);
    formatted = formatted.replace(/\n\s*\n/g, '</p><p>');
    formatted = formatted.replace(/\n/g, '<br>');

    if (!formatted.startsWith('<p>') && formatted.trim() !== '') {
        formatted = '<p>' + formatted;
    }
    if (!formatted.endsWith('</p>') && formatted.trim() !== '') {
        formatted = formatted + '</p>';
    }

    formatted = formatted.replace(/<p>(\s*[-*•][\s\S]*?)<\/p>/g, '<ul><li>$1</li></ul>');
    formatted = formatted.replace(/<br>\s*([-*•])\s+/g, '</li><li>');

    formatted = formatted.replace(/<p>(\s*\d+\.[\s\S]*?)<\/p>/g, '<ol><li>$1</li></ol>');
    formatted = formatted.replace(/<br>\s*(\d+\.)\s+/g, '</li><li>');

    formatted = formatted.replace(/<p>([A-Z][A-Z\s]+[A-Z]:?)<\/p>/g, '<h4>$1</h4>');

    formatted = formatted.replace(/<p>\s*(<br\s*\/?>)?\s*<\/p>/gi, '');
    formatted = formatted.replace(/<p><br\s*\/?>/gi, '<p>');
    formatted = formatted.replace(/<br\s*\/?>\s*<\/p>/gi, '</p>');

    return formatted.trim();
  }
}