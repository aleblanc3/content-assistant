import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
  private readonly STORAGE_KEY = 'apiKey'; // Using same key as the rest of the app
  private apiKeySubject: BehaviorSubject<string | null>;
  
  public apiKey$: Observable<string | null>;
  public hasApiKey$: BehaviorSubject<boolean>;

  constructor(private localStorageService: LocalStorageService) {
    const storedKey = this.getStoredKey();
    this.apiKeySubject = new BehaviorSubject<string | null>(storedKey);
    this.apiKey$ = this.apiKeySubject.asObservable();
    this.hasApiKey$ = new BehaviorSubject<boolean>(!!storedKey);
  }

  private getStoredKey(): string | null {
    return this.localStorageService.getData(this.STORAGE_KEY);
  }

  setKey(key: string): void {
    this.localStorageService.saveData(this.STORAGE_KEY, key);
    this.apiKeySubject.next(key);
    this.hasApiKey$.next(true);
  }

  getCurrentKey(): string | null {
    return this.apiKeySubject.value;
  }

  clearKey(): void {
    this.localStorageService.removeData(this.STORAGE_KEY);
    this.apiKeySubject.next(null);
    this.hasApiKey$.next(false);
  }
}