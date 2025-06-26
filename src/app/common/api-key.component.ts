import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from "@ngx-translate/core";
import { LocalStorageService } from '../services/local-storage.service';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'ca-api-key',
  imports: [CommonModule, FormsModule, TranslateModule, ButtonModule, InputGroupModule],
  templateUrl: './api-key.component.html',
  styles: ``
})
export class ApiKeyComponent {
  api: string = '';
  error: string = '';

  saveAPI(value: string) {
        this.localStore.saveData('apiKey', value);
        console.log('The saved API key is: ', this.localStore.getData('apiKey'));
       }
  removeAPI() {
        this.localStore.removeData('apiKey');
        console.log('The saved API key is: ', this.localStore.getData('apiKey'));
         
       }

      constructor(public localStore: LocalStorageService) {

  }
  ngOnInit(): void {
    //this.localStore.saveData('apiKey', ''); //clears value on init (for testing) <-- can also be used to set initial value for universal api key
    console.log('The initial API key is: ', this.localStore.getData('apiKey'));
  }

}
