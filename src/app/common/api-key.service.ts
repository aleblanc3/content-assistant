import { Injectable } from '@angular/core';
import {ApiKeyValue} from './api-key-value';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
protected apiKeyList: ApiKeyValue[] = [
    {apiKey: 1234,},
  ]
  constructor() { }
}
