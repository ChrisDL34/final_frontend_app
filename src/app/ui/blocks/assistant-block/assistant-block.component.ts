import { Component, Input } from '@angular/core';
import { Assistant } from '../../../core/models/assistant.model';

@Component({
  selector: 'app-assistant-block',
  standalone: true,
  imports: [],
  templateUrl: './assistant-block.component.html',
  styleUrl: './assistant-block.component.css'
})
export class AssistantBlockComponent {
  @Input() assistant!: Assistant[] | null;

}
