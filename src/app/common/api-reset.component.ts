import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { LocalStorageService } from '../services/local-storage.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ca-api-reset',
  imports: [TranslateModule, ButtonModule],
  template: `
    <p-button icon="pi pi-key" [label]="'apiKey.change' | translate" [rounded]="true" [raised]="true" severity="secondary"
    id="api-key-reset-btn" class="my-2" (click)="this.localStore.removeData('apiKey');" />
  `,
  styles: `
  @media (max-width: 768px) {
  ::ng-deep #api-key-reset-btn .p-button-label {
    display: none;
  }
}`
})
export class ApiResetComponent {
  constructor(public localStore: LocalStorageService) { }
}