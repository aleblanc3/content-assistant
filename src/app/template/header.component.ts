import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { ApiResetComponent } from '../common/api-reset.component';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'ca-header',
  imports: [CommonModule, TranslateModule, ButtonModule, ToggleButtonModule, ApiResetComponent],
  template: `
  <header id="header">
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-6 text-start">
<img
        id="cra-logo"
        class="img-fluid fip-colour"
        [src]='logoSrc'
        width="471"
        height="38"
        [alt]="'CRA' | translate"
        priority="true"
      />
    </div>
    <div class="col-lg-9 col-md-8 col-sm-6 col-6 text-end"> 
      
    <ca-api-reset class="mr-3" *ngIf="this.localStore.getData('apiKey') != null"></ca-api-reset>  

    <p-togglebutton
          offIcon="pi pi-moon"
          offLabel=""
          onIcon="pi pi-sun"
          onLabel=""
          class="p-button-rounded p-button-secondary p-button-outlined p-button-sm mr-3 pr-0"
          (click)="toggleDarkMode()">
        </p-togglebutton>
        
        <a
          style="cursor: pointer"
          class="langs"
          tabindex="0"
          (click)="selectLanguage()"> 
          {{ 'opp.lang' | translate }}
        </a>
    </div>
  </div>
</header>
  `,
  styles: ``
})
export class HeaderComponent {
  @Output() darkModeToggled = new EventEmitter<void>();
  @Input() darkMode = false;
  get logoSrc() {
    return this.darkMode ? 'cra-logo-dark.png' : 'cra-logo.png';
  }

  // constructor(public langToggle: LangToggleService){} //putting the code below into a service works but we aren't calling it anywhere else
  constructor(private translate: TranslateService, public localStore: LocalStorageService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang() || "en");
  }

  selectLanguage(): void {
    var oppLang = ""
    if (this.translate.currentLang == "en") { oppLang = "fr" }
    else { oppLang = "en" }
    this.translate.use(oppLang);
  }

  toggleDarkMode() {
    this.darkModeToggled.emit();
    const element = document.querySelector('html');
    if (element) { element.classList.toggle('dark-mode'); }
  }
}