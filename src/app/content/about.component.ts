import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'ca-about',
  imports: [TranslateModule],
  template: `
    <h1 id="wb-cont">{{ 'title.about' | translate}}</h1>
    <p>{{'about.content' | translate }}</p>    
  `,
  styles: ``
})
export class AboutComponent {
  constructor(){}
  
}
