import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ButtonModule } from 'primeng/button';

// Services
import { ApiKeyService } from '../../services/api-key.service';
import { ImageProcessorService, VisionAnalysisResult } from '../../services/image-processor';
import { ImageAssistantStateService, FileProcessingResult } from '../../services/image-assistant-state.service';
import { PdfConverterService } from '../../services/pdf-converter.service';

// Components
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ModelSelectorComponent } from './components/model-selector/model-selector.component';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';
import { ImageResultComponent } from './components/image-result/image-result.component';
import { CsvDownloadComponent } from './components/csv-download/csv-download.component';

@Component({
  selector: 'ca-image-assistant',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    FileUploadComponent,
    ModelSelectorComponent,
    ProgressIndicatorComponent,
    ImageResultComponent,
    CsvDownloadComponent
  ],
  templateUrl: './image-assistant.component.html',
  styles: [`
    .results-section {
      margin-top: 2rem;
    }
  `]
})
export class ImageAssistantComponent implements OnInit, OnDestroy {
  // Processing State
  selectedVisionModel: string = 'openai/gpt-4o-mini';
  filesToProcess: Array<{file: File, displayName: string}> = [];
  state$!: Observable<any>;
  
  private subscriptions: Subscription[] = [];

  constructor(
    public apiKeyService: ApiKeyService,
    private imageProcessorService: ImageProcessorService,
    private stateService: ImageAssistantStateService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private pdfConverterService: PdfConverterService
  ) {
    this.state$ = this.stateService.state$;
  }

  ngOnInit(): void {
    // Check for API key in URL parameters
    this.route.queryParams.subscribe(params => {
      const apiKey = params['key'];
      if (apiKey) {
        // Set the API key from URL parameter
        this.apiKeyService.setKey(apiKey);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onFilesSelected(files: FileList): void {
    console.log('Files selected:', files);
    
    // Convert FileList to Array and count non-PDF files
    this.filesToProcess = [];
    let actualFileCount = 0;
    
    for (let i = 0; i < files.length; i++) {
      this.filesToProcess.push({
        file: files[i],
        displayName: files[i].name
      });
      
      // Only count non-PDF files for the progress indicator
      if (files[i].type !== 'application/pdf') {
        actualFileCount++;
      }
    }
    
    // Reset state and start processing
    this.stateService.resetState();
    this.stateService.updateState({
      filesInProgress: actualFileCount, // Use actual count, not including PDFs
      processedCount: 0,
      showProgressArea: true,
      progressText: this.translate.instant('image.progress.starting', { count: actualFileCount })
    });
    
    this.processNextFile();
  }

  onModelChange(model: string): void {
    this.selectedVisionModel = model;
    alert(this.translate.instant('image.model.changeAlert'));
    this.stateService.resetState();
  }

  private async processNextFile(): Promise<void> {
    if (this.filesToProcess.length === 0) {
      this.finalizeProcessing();
      return;
    }

    const fileInfo = this.filesToProcess.shift()!;
    const file = fileInfo.file;
    const displayName = fileInfo.displayName;
    const isPdfPage = displayName.includes(' - Page ');
    
    // Only initialize result for non-PDF files
    if (file.type !== 'application/pdf') {
      const result: FileProcessingResult = {
        fileName: displayName,
        type: 'image',
        status: 'processing',
        data: { imageBase64: null, english: null, french: null, error: null },
        showFullText: false
      };
      
      this.stateService.addResult(displayName, result);
    }
    
    // Update progress
    const state = this.stateService.getCurrentState();
    this.stateService.updateState({
      progressText: this.translate.instant('image.progress.processing', {
        fileName: displayName,
        current: state.processedCount + 1,
        total: state.filesInProgress
      })
    });
    
    try {
      // Handle PDFs by converting to images first
      if (file.type === 'application/pdf') {
        console.log('Converting PDF to images:', displayName);
        const images = await this.pdfConverterService.convertPdfToImages(file);
        
        if (images.length > 0) {
          console.log(`PDF has ${images.length} pages. Processing all pages...`);
          
          // Add each page as a separate file to process
          images.forEach((imageDataUrl, index) => {
            const pageFileName = `${displayName} - Page ${index + 1}`;
            const imageFile = this.pdfConverterService.dataUrlToFile(imageDataUrl, `${displayName}_page${index + 1}.png`);
            
            // Add to processing queue with custom display name
            this.filesToProcess.push({
              file: imageFile,
              displayName: pageFileName
            });
            
            // Update total files count
            const currentState = this.stateService.getCurrentState();
            this.stateService.updateState({
              filesInProgress: currentState.filesInProgress + 1
            });
          });
          
          // Don't add the PDF filename as a result and don't increment count (PDFs aren't counted)
          this.processNextFile();
        } else {
          throw new Error('PDF has no pages');
        }
      } else if (file.type.startsWith('image/')) {
        // Process regular images (including PDF pages)
        this.imageProcessorService.analyzeImage(file, this.selectedVisionModel, displayName, isPdfPage).subscribe({
          next: (result: VisionAnalysisResult) => {
            this.stateService.updateResult(displayName, {
              status: result.error ? 'error' : 'completed',
              data: {
                imageBase64: result.imageBase64 || null,
                english: result.english,
                french: result.french,
                error: result.error
              }
            });
            
            this.stateService.incrementProcessedCount();
            this.processNextFile();
          },
          error: (err: any) => {
            console.error(`Error analyzing image ${displayName}:`, err);
            this.stateService.updateResult(displayName, {
              status: 'error',
              data: {
                imageBase64: null,
                english: null,
                french: null,
                error: err.message || this.translate.instant('image.error.unknown')
              }
            });
            
            this.stateService.incrementProcessedCount();
            this.processNextFile();
          }
        });
      } else {
        // Handle unsupported files
        this.stateService.updateResult(displayName, {
          status: 'error',
          data: {
            imageBase64: null,
            english: null,
            french: null,
            error: 'Unsupported file type. Please upload images (PNG, JPG, JPEG) or PDF files.'
          }
        });
        this.stateService.incrementProcessedCount();
        this.processNextFile();
      }
    } catch (error: any) {
      console.error(`Error processing file ${displayName}:`, error);
      
      // Only update result if it's not a PDF (PDFs don't have result entries)
      if (file.type !== 'application/pdf') {
        this.stateService.updateResult(displayName, {
          status: 'error',
          data: {
            imageBase64: null,
            english: null,
            french: null,
            error: error.message || 'Failed to process file'
          }
        });
        this.stateService.incrementProcessedCount();
      }
      this.processNextFile();
    }
  }

  private finalizeProcessing(): void {
    const state = this.stateService.getCurrentState();
    this.stateService.updateState({
      progressText: this.translate.instant('image.progress.complete', { count: state.processedCount })
    });
    
    setTimeout(() => {
      this.stateService.updateState({ showProgressArea: false });
    }, 3000);
  }

  // Helper method for template to convert object to array
  getResultsArray(results: { [key: string]: FileProcessingResult }): FileProcessingResult[] {
    return Object.values(results);
  }
}