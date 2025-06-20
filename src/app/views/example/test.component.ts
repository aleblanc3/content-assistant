import { Component, OnInit } from '@angular/core'; //remove OnInit if not using
import { TranslateModule } from "@ngx-translate/core";
import { LocalStorageService } from '../../services/local-storage.service'; //Delete if you aren't using anything from local storage

@Component({
  selector: 'ca-test',
  imports: [TranslateModule],
  templateUrl: './test.component.html',
  styles: ``
})
export class TestComponent implements OnInit { //remove implements OnInit if not using
  //Initialize stuff here

  //This runs first, use it to inject services & other dependencies (delete if not needed)
  constructor(public localStore: LocalStorageService) { } //Replace with any services you're actually using

  //Your functions go here

  //This runs once after the constuctor, delete if not needed.
  ngOnInit(): void {
    console.log(`Test page - your API key is: this.localStore.getData('apiKey')`);
  }
}
