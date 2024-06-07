import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalElementComponent } from '../../elements/modal-element/modal-element.component';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ModalElementComponent],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  @Input() registerForm!: FormGroup;
  @Input() onSubmit!: () => void;
  @Input() error: string | null = null;
  @Input() modalTitle:string;
  @Input() modalMessage:string;
  @Input() modalCloseButtonMessage:string;
  @Input() modalIsShown: boolean;
  @Input() modalCloseBehavior:()=>void;


  constructor(private router: Router) { }

  cancel() {
    this.router.navigate(['/admin-managment']);
  }
}
