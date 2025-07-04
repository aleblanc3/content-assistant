import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { LocalStorageService } from '../services/local-storage.service';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'ca-api-key',
  imports: [CommonModule, FormsModule, TranslateModule, ButtonModule, InputGroupModule, CardModule],
  templateUrl: './api-key.component.html',
  styles: ``
})
export class ApiKeyComponent implements OnInit {
  api: string = '';
  error: string = '';
  emailLink: string = '';
  messageTemplate: string = '';
  apiKeyInstructions: string = '';
  constructor(public localStore: LocalStorageService, public translate: TranslateService) {
    
  }

  ngOnInit() {
    this.emailLink = this.translate.instant('feedback.email');
    this.translate.get('apiKey.instructions').subscribe(value => {
  this.messageTemplate = value;
});
    this.apiKeyInstructions = this.messageTemplate.replace('{{email}}', this.emailLink);
    console.log(this.messageTemplate);
  }

}
