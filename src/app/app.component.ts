import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateModule } from "@ngx-translate/core";
import {HeaderComponent} from './template/header.component';
import {SidebarComponent} from './template/sidebar.component';
import {FooterComponent} from './template/footer.component';
import {ApiKeyComponent} from './common/api-key.component';
import {LocalStorageService} from './common/local-storage.service';
import {CustomTitleStrategy} from './common/custom-title-strategy';


@Component({
  selector: 'ca-root',
  imports: [CommonModule, RouterOutlet, RouterModule, TranslateModule, HeaderComponent, SidebarComponent, FooterComponent, ApiKeyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenAI Content Assistant';
  
  constructor(public CustomTitle: CustomTitleStrategy, public titleService: Title, public localStore: LocalStorageService) {}
  
}
