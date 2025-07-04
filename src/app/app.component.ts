import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateModule } from "@ngx-translate/core";
import { HeaderComponent } from './template/header.component';
import { SidebarComponent } from './template/sidebar.component';
import { FooterComponent } from './template/footer.component';
import { ApiKeyComponent } from './common/api-key.component';
import { LocalStorageService } from './services/local-storage.service';
import { CustomTitleStrategy } from './common/custom-title-strategy';
import { PrimeNG } from 'primeng/config';


@Component({
  selector: 'ca-root',
  imports: [CommonModule, RouterOutlet, RouterModule, TranslateModule, HeaderComponent, SidebarComponent, FooterComponent, ApiKeyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(public CustomTitle: CustomTitleStrategy, public titleService: Title, public localStore: LocalStorageService, private primeng: PrimeNG) { }

  ngOnInit() {
    this.primeng.ripple.set(true);
    //this.localStore.saveData('apiKey', ''); //clears value on init (for testing) <-- can also be used to set initial value for universal api key
    console.log('The initial API key is: ', this.localStore.getData('apiKey'));
  }

  //Handle dark mode states
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
