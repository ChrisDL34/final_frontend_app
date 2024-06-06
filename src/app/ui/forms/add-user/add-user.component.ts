import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  registerForm: FormGroup;
  error: string | null = null;
  passwordStrength: number = 0;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      // Aquí puedes realizar acciones adicionales con los datos del formulario
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      // Restablecer el formulario después de enviarlo
      this.registerForm.reset();
    }
  }

  cancel() {
    this.router.navigate(['/admin-managment']);
  }

  
  evaluatePasswordStrength(password: string): number {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  }

  getPasswordStrengthDescription(strength: number): string {
    const description: Record<number, string> = {
      1: 'Muy insegura',
      2: 'Insegura',
      3: 'Normal',
      4: 'Buena',
      5: 'Excelente'
    };
    return description[strength];
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const repeatPassword = formGroup.get('repeatPassword')?.value;
    return password === repeatPassword ? null : { passwordMismatch: true };
  }
}