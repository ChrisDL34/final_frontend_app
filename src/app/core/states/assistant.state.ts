import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Assistant } from '../models/assistant.model';

@Injectable({
  providedIn: 'root',
})
export class AssistantState {
  private assistantsSubject: BehaviorSubject<Assistant[]> = new BehaviorSubject<Assistant[]>([]);
  assistants$: Observable<Assistant[]> = this.assistantsSubject.asObservable();

  constructor() {}

  setAssistants(assistants: Assistant[]): void {
    this.assistantsSubject.next(assistants);
  }

  addAssistant(assistant: Assistant): void {
    const currentAssistants = this.assistantsSubject.value;
    this.assistantsSubject.next([...currentAssistants, assistant]);
  }
  getAssistants(): Assistant[] {
    return this.assistantsSubject.value;
  }
}
