import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'ca-header',
  imports: [CommonModule, TranslateModule, ButtonModule, ToggleButtonModule],
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
    <div class="col-lg-9 col-md-8 col-sm-6 col-6 text-end">      
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
