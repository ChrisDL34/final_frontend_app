import { Component, OnInit, OnDestroy } from '@angular/core';
import { Assistant } from '../../core/models/assistant.model';
import { Observable } from 'rxjs';
import { AssistantBlockComponent } from '../../ui/blocks/assistant-block/assistant-block.component';
import { AsyncPipe } from '@angular/common';
import { AssistantFacade } from './assistant-container.facade';


@Component({
  selector: 'app-assistant-container',
  standalone: true,
  imports: [AssistantBlockComponent, AsyncPipe],
  templateUrl: './assistant-container.component.html',
})
export class AssistantContainerComponent implements OnInit, OnDestroy {
  public assistants$: Observable<Assistant[]> | undefined;

  constructor(private readonly facade: AssistantFacade) {}

  ngOnInit() {
    this.facade.initSubscription();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }
  private initializeSubscriptions(): void {
    this.assistants$ = this.facade.getAssistants$();
    this.facade.getAssistants$();
  }

}
