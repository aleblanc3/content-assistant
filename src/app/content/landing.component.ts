import { Component } from '@angular/core';
import {ApiKeyComponent} from '../common/api-key.component';

@Component({
  selector: 'ca-landing',
  imports: [ApiKeyComponent],
  template: `
    <p>
      landing works!
    </p>
    <ca-api-key></ca-api-key>
  `,
  styles: ``
})
export class LandingComponent {

}
