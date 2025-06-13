import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'ca-footer',
  imports: [CommonModule, TranslateModule],
  template: `
    <footer class="container">
    <div class="d-flex justify-content-between align-items-end mt-auto pb-4">
      <div class="align-self-end">
        <span class="text-muted small">version: 0.0.1 </span>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-4 col-4">
        <img
          class="img-fluid"
          src="canada-logo.png"
          alt="Government of Canada"
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

}
