import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ca-header',
  imports: [CommonModule, TranslateModule, ButtonModule],
  template: `
  <header id="header">
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-6 text-start">
      <img
        class="img-fluid fip-colour"
        src="cra-logo.png"
        width="471"
        height="38"
        alt="Government of Canada"
        priority="true"
      />
    </div>
    <div class="col-lg-9 col-md-8 col-sm-6 col-6 text-end lang-toggle">
      <div class="language-picker-area">
        <div class="picker-label"></div>
        <button
          pButton
          icon="pi pi-moon"
          class="p-button-rounded p-button-secondary p-button-outlined p-button-sm mr-3"
          (click)="toggleDarkMode()">
        </button>
        <a
          style="cursor: pointer"
          class="langs"
          tabindex="0"
          (click)="selectLanguage()"> 
          {{ 'opp.lang' | translate }}
        </a>
      </div>
    </div>
  </div>
</header>
  `,
  styles: `
    :host {
      display: block;
    }
    .lang-toggle a:link {
      text-color: black
    }
    .lang-toggle a:visited {
      color: #000
    }
    .lang-toggle a:hover {
      color: #00f
    }
    .language-picker-area {
      display: flex;
      justify-content: flex-end;
    }
    .picker-label {
      margin-right: 20px;
    }
    .language-picker {
      width: 100px;
    }
    .langs, .langs:hover, .langs:visited {
      text-decoration: underline;
      color: #2e5ea7;
    }
  `
})
export class HeaderComponent {
  // constructor(public langToggle: LangToggleService){} //putting the code below into a service works but we aren't calling it anywhere else
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang() || "en");
  }

  selectLanguage(): void {
    var oppLang = ""
    if (this.translate.currentLang == "en") { oppLang = "fr" }
    else { oppLang = "en" }
    this.translate.use(oppLang);
    //console.log(`The opp lang is: ${oppLang}`);
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) { element.classList.toggle('dark-mode'); }
  }

}
