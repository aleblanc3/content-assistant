import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'ca-progress-indicator',
  standalone: true,
  imports: [CommonModule, ProgressBarModule],
  templateUrl: './progress-indicator.component.html',
  styles: [`
    .progress-container {
      margin-top: 1.5rem;
      padding: 1rem;
      background-color: #f8f9fa;
      border-radius: 8px;
    }
    
    .progress-text {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .spinner {
      width: 24px;
      height: 24px;
      border: 4px solid #ccc;
      border-top-color: #a7a72e;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class ProgressIndicatorComponent {
  @Input() progressText = '';
  @Input() processedCount = 0;
  @Input() totalFiles = 0;
  @Input() showProgress = false;
  
  get progressValue(): number {
    if (this.totalFiles === 0) return 0;
    return Math.round((this.processedCount / this.totalFiles) * 100);
  }
}