import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'ca-not-found',
  imports: [TranslateModule],
  template: `
    <h1 id="wb-cont">{{ 'title.404' | translate}}</h1>
    <p>{{'404.content' | translate }}</p>  
  `,
  styles: ``
})
export class NotFoundComponent {
  
}
