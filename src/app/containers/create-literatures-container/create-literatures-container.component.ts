import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateLiteraturesComponent } from '../../ui/forms/create-literatures/create-literatures.component';
import { CreateLiteraturesContainerFacade } from './create-literatures-container.facade';

@Component({
  selector: 'app-create-literatures-container',
  standalone: true,
  imports: [CreateLiteraturesComponent],
  templateUrl: './create-literatures-container.component.html',
 
})
export class CreateLiteraturesContainerComponent {
  literatureForm: FormGroup;
  selectedType: string = '';

  @ViewChild(CreateLiteraturesComponent) childComponent!: CreateLiteraturesComponent;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private facade: CreateLiteraturesContainerFacade
  ) {
    this.literatureForm = this.formBuilder.group({
      supplierId: ['', Validators.required],
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
      const formValues = this.literatureForm.value;
      const supplierId = formValues.supplierId;

      if (formValues.type === 'novela') {
        this.facade.addNovel(supplierId, formValues).subscribe(
          response => {
            console.log('Novela creada exitosamente', response);
            this.literatureForm.reset();
            this.childComponent.showModal();
          },
          error => {
            console.error('Error al crear novela', error);
          }
        );
      } else if (formValues.type === 'libro') {
        this.facade.addBook(supplierId, formValues).subscribe(
          response => {
            console.log('Libro creado exitosamente', response);
            this.literatureForm.reset();
            this.childComponent.showModal();
          },
          error => {
            console.error('Error al crear libro', error);
          }
        );
      }
    }
  }
}