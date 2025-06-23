// src/app/image-alt-assistant/image-alt-assistant.component.ts
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenrouterKeyService } from '../services/openrouter-key.service';
import { ImageProcessorService, VisionAnalysisResult } from '../services/image-processor'; // <--- IMPORT THIS SERVICE
import { Observable, Subscription } from 'rxjs';

// Define an interface for the results displayed in the UI
interface FileProcessingResult {
  fileName: string;
  type: 'image' | 'pdf'; // For now, only 'image' is active
  status: 'pending' | 'processing' | 'completed' | 'error';
  data: {
    imageBase64: string | null;
    english: string | null;
    french: string | null;
    error: string | null;
  };
  showFullText: boolean; // For collapsible sections
}

@Component({
  selector: 'app-image-alt-assistant',
  standalone: true,
  templateUrl: './image-alt-assistant.html',
  styleUrls: ['./image-alt-assistant.css'],
  imports: [CommonModule, FormsModule]
})
export class ImageAltAssistantComponent implements OnInit, OnDestroy {
  apiKeyInput: string = '';
  showApiKeyError: boolean = false;
  hasApiKey$: Observable<boolean>;
  private keySubscription: Subscription | undefined;

  // Image Processing State
  selectedVisionModel: string = 'openai/gpt-4o-mini'; // Initial model selection
  filesToProcess: File[] = []; // Files selected by the user
  processingResults: { [fileName: string]: FileProcessingResult } = {}; // Stores results by filename
  filesInProgress: number = 0;
  processedCount: number = 0;
  progressText: string = '';
  showProgressArea: boolean = false;

  constructor(
    private openrouterKeyService: OpenrouterKeyService,
    private imageProcessorService: ImageProcessorService,
    private cdr: ChangeDetectorRef
  ) {
    this.hasApiKey$ = this.openrouterKeyService.hasApiKey$;
  }

  ngOnInit(): void {
    this.keySubscription = this.openrouterKeyService.apiKey$.subscribe(key => {
      if (key) {
        this.apiKeyInput = key;
        this.showApiKeyError = false;
      } else {
        this.apiKeyInput = '';
        // If API key is removed, clear results and reset state
        this.resetProcessingState();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.keySubscription) {
      this.keySubscription.unsubscribe();
    }
  }

  submitApiKey(): void {
    const key = this.apiKeyInput.trim();
    if (!key) {
      this.showApiKeyError = true;
    } else {
      this.showApiKeyError = false;
      this.openrouterKeyService.setKey(key);
    }
  }

  clearApiKey(): void {
    this.openrouterKeyService.clearKey();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log('File selected event triggered', input.files);
    
    if (input.files && input.files.length > 0) {
      // FIRST: Convert FileList to Array BEFORE clearing anything
      this.filesToProcess = [];
      for (let i = 0; i < input.files.length; i++) {
        this.filesToProcess.push(input.files[i]);
      }
      
      console.log('Files to process:', this.filesToProcess);
      console.log('File details:', this.filesToProcess.map(f => ({ name: f.name, size: f.size, type: f.type })));
      
      // THEN: Clear previous results and setup processing state
      this.processingResults = {};
      this.filesInProgress = this.filesToProcess.length;
      this.processedCount = 0;
      this.showProgressArea = true;
      this.progressText = `Starting processing for ${this.filesInProgress} file(s)...`;
      
      this.processNextFile();
    } else {
      console.log('No files selected');
      this.resetProcessingState();
    }
  }

  // Recursive function to process files one by one
  private processNextFile(): void {
    console.log('processNextFile called, files remaining:', this.filesToProcess.length);
    if (this.filesToProcess.length === 0) {
      this.finalizeProcessing();
      return;
    }

    const file = this.filesToProcess.shift()!; // Get next file and remove from queue
    const fileName = file.name;
    console.log('Processing file:', fileName, 'type:', file.type);

    // Initialize result object for this file
    this.processingResults[fileName] = {
      fileName: fileName,
      type: file.type.startsWith('image/') ? 'image' : 'pdf', // Assuming only image/pdf for now
      status: 'processing',
      data: { imageBase64: null, english: null, french: null, error: null },
      showFullText: false
    };

    // Update progress text
    this.progressText = `Processing: ${fileName} (${this.processedCount + 1}/${this.filesInProgress})`;
    
    // Trigger change detection to show processing state
    this.cdr.detectChanges();

    // Only process images for now (as requested)
    if (file.type.startsWith('image/')) {
      console.log('Calling imageProcessorService.analyzeImage for:', fileName);
      this.imageProcessorService.analyzeImage(file, this.selectedVisionModel, fileName).subscribe({
        next: (result: VisionAnalysisResult) => {
          console.log('Analysis result received for:', fileName, result);
          this.processingResults[fileName].status = result.error ? 'error' : 'completed';
          this.processingResults[fileName].data = {
            imageBase64: result.imageBase64 || null,
            english: result.english,
            french: result.french,
            error: result.error
          };
          
          // Trigger change detection to update UI
          this.cdr.detectChanges();
          
          this.processedCount++;
          this.processNextFile(); // Process next file in queue
        },
        error: (err: any) => {
          console.error(`Error analyzing image ${fileName}:`, err);
          this.processingResults[fileName].status = 'error';
          this.processingResults[fileName].data.error = err.message || 'Unknown error during analysis.';
          
          // Trigger change detection to update UI
          this.cdr.detectChanges();
          
          this.processedCount++;
          this.processNextFile(); // Process next file in queue even on error
        }
      });
    } else {
      // Handle non-image files for now (will be PDF later)
      this.processingResults[fileName].status = 'error';
      this.processingResults[fileName].data.error = 'PDF processing is not yet implemented in this version.';
      this.processedCount++;
      this.processNextFile();
    }
  }

  private finalizeProcessing(): void {
    this.progressText = `Processing complete. ${this.processedCount} file(s) attempted.`;
    this.updateCsvLink();
    
    // Clear the file input after processing is complete
    this.clearFileInput();
    
    // Trigger change detection
    this.cdr.detectChanges();
    
    setTimeout(() => {
      this.showProgressArea = false;
      this.cdr.detectChanges();
    }, 3000);
  }

  private resetProcessingState(): void {
    this.filesToProcess = [];
    this.processingResults = {};
    this.filesInProgress = 0;
    this.processedCount = 0;
    this.showProgressArea = false;
    this.progressText = '';
    this.clearFileInput();
  }

  private clearFileInput(): void {
    // Clear the file input visually
    const fileInput = document.getElementById('file-uploader') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  // --- Display and Output Functions ---

  // This will be called from the template for copying text
  copyText(text: string | null, event: MouseEvent): void {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const button = event.target as HTMLButtonElement;
      const originalText = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => button.textContent = originalText, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      const button = event.target as HTMLButtonElement;
      const originalText = button.textContent;
      button.textContent = 'Copy Failed';
      setTimeout(() => button.textContent = originalText, 2000);
    });
  }

  // This will be called from the template to toggle full text
  toggleFullText(result: FileProcessingResult): void {
    result.showFullText = !result.showFullText;
  }

  // Helper to escape HTML for display
  safeHtml(html: string | null): string {
    if (!html) return '';
    // Uses the helper from the service for consistency and escaping
    return this.imageProcessorService.escapeHtml(html);
  }

  // Helper to format descriptions
  formatDescription(text: string | null): string {
    if (!text) return '';
    // Uses the helper from the service for consistency and formatting
    return this.imageProcessorService.formatDescription(text);
  }

  updateCsvLink(): void {
    let csvContent = "File/Page,English Description,French Description\n";
    let hasData = false;

    // Get sorted keys for consistent CSV output
    const sortedFileNames = Object.keys(this.processingResults).sort();

    sortedFileNames.forEach(fileName => {
      const result = this.processingResults[fileName];
      if (result.status === 'completed') {
        hasData = true;
        const identifier = result.fileName; // For image, it's just the filename
        const english = result.data.english || '';
        const french = result.data.french || '';

        const escapeCsv = (str: string) => `"${(str || '').replace(/"/g, '""')}"`;
        csvContent += `${escapeCsv(identifier)},${escapeCsv(english)},${escapeCsv(french)}\n`;
      }
    });

    const csvDownloadArea = document.getElementById('csv-download-area');
    if (csvDownloadArea) {
      csvDownloadArea.innerHTML = ''; // Clear previous link

      if (hasData) {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = "image_descriptions.csv";
        link.className = "btn btn-primary";
        link.textContent = "Download CSV";
        csvDownloadArea.appendChild(link);
      } else {
        const p = document.createElement('p');
        p.textContent = "No data processed successfully to generate CSV.";
        csvDownloadArea.appendChild(p);
      }
    }
  }

  // Model selection change handler
  onModelChange(event: Event): void {
    this.selectedVisionModel = (event.target as HTMLSelectElement).value;
    alert("Vision model changed. Please re-upload files to process them with the new model.");
    this.resetProcessingState(); // Clear previous results
  }

  // TrackBy function for ngFor performance
  resultTrackBy(index: number, item: any): string {
    return item.key;
  }

  // Sanitize ID for DOM element
  sanitizeId(text: string): string {
    return text.replace(/[^a-zA-Z0-9-_]/g, '-');
  }
}