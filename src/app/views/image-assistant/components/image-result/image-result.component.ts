import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FileProcessingResult } from '../../../../services/image-assistant-state.service';
import { ImageProcessorService } from '../../../../services/image-processor';

@Component({
  selector: 'ca-image-result',
  standalone: true,
  imports: [
    CommonModule, 
    TranslateModule, 
    ButtonModule, 
    CardModule, 
    DividerModule,
    MessageModule,
    ProgressSpinnerModule
  ],
  templateUrl: './image-result.component.html',
  styles: [`
    .result-container {
      margin-bottom: 2rem;
    }
    
    .result-image {
      max-height: 200px;
      width: auto;
      border: 1px solid #eee;
      margin-bottom: 1rem;
      display: block;
      border-radius: 4px;
    }
    
    .result-columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    
    @media (max-width: 768px) {
      .result-columns {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
    
    .result-column {
      background-color: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
    }
    
    .collapsible-container {
      margin: 0.5rem 0;
    }
    
    .processing-message {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .copy-button {
      margin-top: 0.5rem;
    }
  `]
})
export class ImageResultComponent {
  @Input() result!: FileProcessingResult;
  
  constructor(
    private translate: TranslateService,
    private imageProcessor: ImageProcessorService
  ) {}

  toggleFullText(): void {
    this.result.showFullText = !this.result.showFullText;
  }

  async copyText(text: string | null, event: MouseEvent): Promise<void> {
    if (!text) return;
    
    const button = event.target as HTMLButtonElement;
    const originalText = button.textContent;
    
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = this.translate.instant('image.result.copied');
      setTimeout(() => button.textContent = originalText, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      button.textContent = this.translate.instant('image.result.copyFailed');
      setTimeout(() => button.textContent = originalText, 2000);
    }
  }

  formatDescription(text: string | null): string {
    return this.imageProcessor.formatDescription(text);
  }

  getTruncatedText(text: string | null, maxLength: number = 150): string {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) : text;
  }

  shouldShowToggle(text: string | null): boolean {
    return (text || '').length > 150;
  }
}