import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { RoleType, UpdateUserRequest, UpdateUserResponse, User } from '../../core/models/users.model';
import { SelectedUserState } from '../../core/states/selected-user.state';

@Injectable({
  providedIn: 'root',
})
export class EditUserContainerFacade {
  private subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService,
    private selectedUserState:SelectedUserState
  ) {}

  initSubscription(): void {
    this.subscription = new Subscription();
  }

  destroySubscription(): void {
    this.subscription.unsubscribe();
  }

  getSelectedUser():User|null{
    return this.selectedUserState.getSelectedUser();
  }

  updateUser(
    username: string,
    email: string,
    role: RoleType,
    userId:string
  ): Observable<UpdateUserResponse> {
    console.log(userId)
    const userRegisterForm: UpdateUserRequest = {
      username,
      email,
      role
    };
    console.log(userRegisterForm);
    return this.userService.updateUser(userRegisterForm,userId);
  }
}
