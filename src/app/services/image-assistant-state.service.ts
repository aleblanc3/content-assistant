import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface FileProcessingResult {
  fileName: string;
  type: 'image' | 'pdf';
  status: 'pending' | 'processing' | 'completed' | 'error';
  data: {
    imageBase64: string | null;
    english: string | null;
    french: string | null;
    error: string | null;
  };
  showFullText: boolean;
}

export interface ProcessingState {
  results: { [fileName: string]: FileProcessingResult };
  filesInProgress: number;
  processedCount: number;
  progressText: string;
  showProgressArea: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ImageAssistantStateService {
  private stateSubject = new BehaviorSubject<ProcessingState>({
    results: {},
    filesInProgress: 0,
    processedCount: 0,
    progressText: '',
    showProgressArea: false
  });

  public state$ = this.stateSubject.asObservable();

  constructor() {}

  getCurrentState(): ProcessingState {
    return this.stateSubject.value;
  }

  updateState(updates: Partial<ProcessingState>): void {
    const currentState = this.stateSubject.value;
    this.stateSubject.next({ ...currentState, ...updates });
  }

  addResult(fileName: string, result: FileProcessingResult): void {
    const currentState = this.stateSubject.value;
    const newResults = { ...currentState.results, [fileName]: result };
    this.updateState({ results: newResults });
  }

  updateResult(fileName: string, updates: Partial<FileProcessingResult>): void {
    const currentState = this.stateSubject.value;
    if (currentState.results[fileName]) {
      const updatedResult = { ...currentState.results[fileName], ...updates };
      const newResults = { ...currentState.results, [fileName]: updatedResult };
      this.updateState({ results: newResults });
    }
  }

  resetState(): void {
    this.stateSubject.next({
      results: {},
      filesInProgress: 0,
      processedCount: 0,
      progressText: '',
      showProgressArea: false
    });
  }

  incrementProcessedCount(): void {
    const currentState = this.stateSubject.value;
    this.updateState({ processedCount: currentState.processedCount + 1 });
  }
}