import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  registerForm: FormGroup;
  error: string | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, role } = this.registerForm.value;
      // Aquí puedes realizar acciones adicionales con los datos del formulario
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Role:', role);
      // Restablecer el formulario después de enviarlo
      this.registerForm.reset();
    }
  }

  cancel() {
    this.router.navigate(['/admin-managment']);
  }
}