import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

 constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
    console.log(`Saved ` + key + `: ` + value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
    console.log(`Removed ` + key);
  }

  public clearData() {
    localStorage.clear();
    console.log(`Removed all stored values`);
  }
}