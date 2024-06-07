import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { AddUserState } from '../../core/states/add-user.state';
import { CreateUserService } from '../../core/services/create-new-user.service';
import { RoleType } from '../../core/models/users.model';
import { AddUserResponse, AddUserRequest } from '../../core/models/add-user.model';

@Injectable({
  providedIn: 'root',
})
export class AddUserContainerFacade {
  private subscription: Subscription = new Subscription();

  constructor(
    private userState: AddUserState,
    private storeUser: CreateUserService
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
    return this.storeUser.saveUser(userRegisterForm);
  }
}
