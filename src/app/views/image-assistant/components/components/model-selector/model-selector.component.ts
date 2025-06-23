import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';

interface VisionModel {
  name: string;
  value: string;
}

@Component({
  selector: 'ca-model-selector',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, DropdownModule],
  templateUrl: './model-selector.component.html',
  styles: [`
    .model-selector-container {
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
    }
    
    :host ::ng-deep .p-dropdown {
      min-width: 300px;
    }
    
    label {
      font-weight: bold;
      margin-right: 0.5rem;
    }
  `]
})
export class ModelSelectorComponent {
  @Input() selectedModel = 'openai/gpt-4o-mini';
  @Output() modelChange = new EventEmitter<string>();
  
  visionModels: VisionModel[] = [
    { name: 'OpenAI GPT-4o Mini', value: 'openai/gpt-4o-mini' },
    { name: 'Qwen2.5 VL 32B (Free)', value: 'qwen/qwen2.5-vl-32b-instruct:free' }
  ];

  onModelChange(event: any): void {
    this.modelChange.emit(event.value);
  }
}