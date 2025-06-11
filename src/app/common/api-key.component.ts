import { Component } from '@angular/core';

@Component({
  selector: 'ca-api-key',
  imports: [],
  templateUrl: './api-key.component.html',
  styles: ``
})
export class ApiKeyComponent {
  saveValue(value: string) {
         console.log(value);
       }
}
