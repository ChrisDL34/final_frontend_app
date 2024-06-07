import { Component } from '@angular/core';
import { EditUserComponent } from '../../ui/forms/edit-user/edit-user.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditUserContainerFacade } from './edit-user-container.facade';

@Component({
  selector: 'app-edit-user-container',
  standalone: true,
  imports: [EditUserComponent],
  templateUrl: './edit-user-container.component.html',

})
export class EditUserContainerComponent{
  registerForm: FormGroup;
  error: string | null = null;
  userId: string;
  public modalTitle:string ="";
  public modalMessage:string ="";
  public modalCloseButtonMessage:string ="";
  public modalIsShown:boolean =false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private editUserFacade: EditUserContainerFacade,
  ) {
    const selectedUser = editUserFacade.getSelectedUser();
    this.userId = selectedUser!.userId;
    this.registerForm = this.formBuilder.group({
      username: [selectedUser?.username, [Validators.required, Validators.minLength(3)]],
      email: [selectedUser?.email, [Validators.required, Validators.email]],
      role: [selectedUser?.role, Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, role } = this.registerForm.value;
      this.editUserFacade.updateUser(username, email, role,this.userId).subscribe(
        response => {
          this.modalCloseButtonMessage="OK";
        this.modalMessage="The user has been updated";
        this.modalTitle="User updated";
        this.modalIsShown=true;
          console.log('User successfully updated', response);
          this.registerForm.reset();
          this.router.navigate(['/admin-managment']);
        },
        error => {
          this.error = 'Failed to update user';
          console.error('Error update user', error);
        }
      );
    }
  }

  modalClose=():void=>{
    this.modalIsShown=false;
  }
}
