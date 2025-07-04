import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'ca-footer',
  imports: [CommonModule, TranslateModule],
  template: `
    <footer class="container">
    <div class="d-flex justify-content-between align-items-end mt-auto pb-4">
      <div class="align-self-end">
        <span class="text-muted small">{{'app.version'|translate}}</span>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-4 col-4">
        <img
          class="img-fluid fip-colour"
          [src]="logoSrc"
          [alt]="'GoC' | translate"
        />
      </div>
    </div>
  </footer>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class FooterComponent {
  @Input() darkMode = false;
  get logoSrc() {
    return this.darkMode ? 'canada-logo-dark.png' : 'canada-logo.png';
  }
}
