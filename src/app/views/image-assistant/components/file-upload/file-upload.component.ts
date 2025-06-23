import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ca-file-upload',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './file-upload.component.html',
  styles: [`
    .file-upload-container {
      border: 2px dashed #ccc;
      border-radius: 8px;
      padding: 2rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }
    
    .file-upload-container:hover {
      border-color: #a7a72e;
      background-color: #f5f5f5;
    }
    
    .file-upload-container.dragover {
      border-color: #a7a72e;
      background-color: #f0f0f0;
    }
    
    input[type="file"] {
      display: none;
    }
    
    .upload-icon {
      font-size: 3rem;
      color: #a7a72e;
      margin-bottom: 1rem;
    }
    
    fieldset {
      border: none;
      padding: 0;
      margin: 0;
    }
    
    legend {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  `]
})
export class FileUploadComponent {
  @Output() filesSelected = new EventEmitter<FileList>();
  
  isDragOver = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.filesSelected.emit(input.files);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.filesSelected.emit(event.dataTransfer.files);
    }
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    fileInput?.click();
  }
}