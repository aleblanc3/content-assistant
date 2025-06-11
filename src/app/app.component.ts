import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {$localize} from '@angular/localize/init';
import {HeaderComponent} from './template/header.component';
import {SidebarComponent} from './template/sidebar.component';
import {FooterComponent} from './template/footer.component';

@Component({
  selector: 'ca-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenAI Content Assistant';
  constructor(public titleService: Title) {}
}
