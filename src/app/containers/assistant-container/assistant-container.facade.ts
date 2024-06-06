import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AssistantState } from '../../core/states/assistant.state';
import { AssistantService } from '../../core/services/add-assistant.service';
import { Assistant } from '../../core/models/assistant.model';

@Injectable({
  providedIn: 'root',
})
export class AssistantFacade {
  private subscription: Subscription = new Subscription();

  constructor(
    private assistantState: AssistantState,
    private assistantService: AssistantService
  ) {}
  initSubscription(): void {
    this.subscription = this.assistantService.getAssistant().subscribe(assistants => {
      this.assistantState.setAssistants(assistants);
    });
  }

  destroySubscription(): void {
    this.subscription.unsubscribe();
  }

  getAssistants$(): Observable<Assistant[]> {
    return this.assistantState.assistants$;
  }

  addAssistant(assistant: Assistant): void {
    this.assistantState.addAssistant(assistant);
  }

  getAssistantsSnapshot(): Assistant[] {
    return this.assistantState.getAssistants();
  }
}
