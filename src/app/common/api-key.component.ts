import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'ca-api-key',
  imports: [CommonModule],
  templateUrl: './api-key.component.html',
  styles: ``
})
export class ApiKeyComponent {
  saveAPI(value: string) {
        this.localStore.saveData('apiKey', value);
        console.log('The saved API key is: ', this.localStore.getData('apiKey'));
       }
  removeAPI(value: string) {
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
