import { Component} from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { LocalStorageService } from '../../services/local-storage.service'; //Delete if you aren't using anything from local storage
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//primeNG
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { PanelModule } from 'primeng/panel';

//Components
import { UploadContentComponent } from './components/upload-content.component';

@Component({
  selector: 'ca-page-assistant',
  imports: [TranslateModule, CommonModule, FormsModule, RadioButtonModule, CheckboxModule, ButtonModule, StepperModule, UploadContentComponent, PanelModule],
  templateUrl: './page-assistant.component.html',
  styles: ``
})
export class PageAssistantComponent {

  sourceURL: any;

  constructor(public localStore: LocalStorageService, private translate: TranslateService) { } 
  
  //Step 1 radio buttons to select task
  selectedTask: any = null;

  tasks: any[] = [
    { name: 'my content with an AI optimized version', key: 'taskContentAndAI', unavailable: 'false' },
    { name: 'two webpages', key: 'task2Contents', unavailable: 'false' },
    { name: 'two AI models', key: 'task2Models', unavailable: 'false' },
    { name: 'two AI prompts', key: 'task2Prompts', unavailable: 'true' }
  ];

  //Step 2 radio buttons to select upload type
  selectedUpload: any = null;

  uploads: any[] = [
    { name: 'URL', key: 'uploadURL', unavailable: 'false' },
    { name: 'Copy & paste', key: 'uploadCP', unavailable: 'false' },
    { name: 'Word doc (converts to HTML)', key: 'uploadWD', unavailable: 'true' }
  ];
  //Step 2 get upload data from child component
  public receivedUploadData: {
    sourceURL: string;
    sourceHTML: string;
    prototypeURL?: string;
    prototypeHTML?: string;
  } | null = null;

  public handleUpload(uploadData: { sourceURL: string, sourceHTML: string, prototypeURL?: string, prototypeHTML?: string } | null = null) {
    this.receivedUploadData = uploadData;
  }

  //Step 3 checkboxes for AI prompt
  selectedPrompts: any[] = [];

  prompts: any[] = [
    { name: 'Suggest an SEOed title', key: 'promptSEOTitle', unavailable: 'false' },
    { name: 'Suggest a metadata description', key: 'promptMetaDesc', unavailable: 'false' },
    { name: '...', key: 'promptEtc', unavailable: 'true' },
    { name: 'Propose a better heading structure', key: 'promptHeadingStructure', unavailable: 'false' }
  ];

  //Step 3 radio buttons or checkboxes for AI model
  selectedAI: any = null;

  selectedAIs: any[] = [];

  ais: any[] = [
    { name: 'Gemini 2.0 Flash', key: 'aiGenini', unavailable: 'false' },
    { name: 'Llama 3.3 70B', key: 'aiLlama', unavailable: 'false' },
    { name: 'Phi-3 Medium', key: 'aiPhi', unavailable: 'true' },
    { name: 'Mistral Nemo', key: 'aiMistral', unavailable: 'false' },
    { name: 'Dolphin3.0 R1', key: 'aiDolphin', unavailable: 'false' }
  ];

  isSelected(option: any): boolean {
    return this.selectedAIs.includes(option);
  }

  toggleSelection(option: any): void {
    const index = this.selectedAIs.indexOf(option);
    if (index > -1) {
      // Deselect
      this.selectedAIs.splice(index, 1);
    } else if (this.selectedAIs.length < 2) {
      // Add only if under the limit
      this.selectedAIs.push(option);
    }
  }
}