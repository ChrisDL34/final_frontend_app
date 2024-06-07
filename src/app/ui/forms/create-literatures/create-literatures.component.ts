import { Component } from '@angular/core';
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
  literatureForm: FormGroup;
  selectedType: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.literatureForm = this.formBuilder.group({
      type: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      basePrice: [0, Validators.required],
      quantity: [0, Validators.required],
      suggestedAge: [0],
      genre: [''],
      pages: [0],
      knowledgeArea: ['']
    });
  }

  onSubmit() {
    if (this.literatureForm.valid) {
  
      console.log(this.literatureForm.value);
    }
  }


  onTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.selectedType = target.value;
    }
  }
}