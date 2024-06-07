import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUserComponent } from '../../ui/forms/add-user/add-user.component';
import { RoleType } from '../../core/models/users.model';
import { AddUserContainerFacade } from './add-user-container.facade';

@Component({
  selector: 'app-add-user-container',
  standalone: true,
  imports: [AddUserComponent],
  templateUrl: './add-user-container.component.html',
})
export class AddUserContainerComponent {
  registerForm: FormGroup;
  error: string | null = null;
  passwordStrength: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private addUserFacade: AddUserContainerFacade
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required]],
      role: [RoleType.Reader, Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password, role } = this.registerForm.value;
      this.addUserFacade.saveUser(username, email, password, role).subscribe(
        response => {
          console.log('User successfully created', response);
          this.registerForm.reset();
          this.router.navigate(['/admin-managment']);
        },
        error => {
          this.error = 'Failed to create user';
          console.error('Error creating user', error);
        }
      );
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const repeatPassword = formGroup.get('repeatPassword')?.value;
    return password === repeatPassword ? null : { passwordMismatch: true };
  }
}
