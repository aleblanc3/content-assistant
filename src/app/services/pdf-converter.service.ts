import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Set worker path to local file
GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';

@Injectable({
  providedIn: 'root'
})
export class PdfConverterService {
  
  constructor() {}

  /**
   * Converts a PDF file to an array of image data URLs (one per page)
   * @param file The PDF file to convert
   * @returns Promise with array of base64 image data URLs
   */
  async convertPdfToImages(file: File): Promise<string[]> {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const images: string[] = [];
    
    // Convert each page to an image
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 2.0 }); // Higher scale for better quality
      
      // Create canvas
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) {
        throw new Error('Failed to get canvas context');
      }
      
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      
      // Render PDF page to canvas
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      
      await page.render(renderContext).promise;
      
      // Convert canvas to image data URL
      const imageDataUrl = canvas.toDataURL('image/png');
      images.push(imageDataUrl);
    }
    
    return images;
  }

  /**
   * Creates a File object from a data URL
   * @param dataUrl The data URL of the image
   * @param filename The filename for the created File
   * @returns A File object
   */
  dataUrlToFile(dataUrl: string, filename: string): File {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, { type: mime });
  }
}