import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-literatures',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-literatures.component.html',
  styleUrls: ['./create-literatures.component.css']
})
export class CreateLiteraturesComponent {
  @Input() literatureForm: FormGroup;
  @Input() onSubmit: () => void;
  @Input() selectedType: string = '';
  mostrarModal: boolean = false;

  constructor() {}

  cerrarModal() {
    this.literatureForm.reset();
    this.mostrarModal = false;
    this.selectedType = '';
  }
  
  showModal() {
    this.mostrarModal = true;
  }

  onTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.selectedType = target.value;
    }
  }
}