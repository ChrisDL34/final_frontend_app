import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-literatures',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-literatures.component.html',
  styleUrls: ['./create-literatures.component.css']
})
export class CreateLiteraturesComponent {
  @Input() literatureForm!: FormGroup;
  @Input() onSubmit!: () => void;
  @Input() selectedType: string = '';

  constructor() {}

  onTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.selectedType = target.value;
    }
  }
}
