import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { AddUserRequest, AddUserResponse, RoleType } from '../../core/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class AddUserContainerFacade {
  private subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService
  ) {}

  initSubscription(): void {
    this.subscription = new Subscription();
  }

  destroySubscription(): void {
    this.subscription.unsubscribe();
  }

  saveUser(
    username: string,
    email: string,
    password: string,
    role: RoleType
  ): Observable<AddUserResponse> {
    const userRegisterForm: AddUserRequest = {
      username,
      email,
      password,
      role
    };
    return this.userService.saveUser(userRegisterForm);
  }
}
