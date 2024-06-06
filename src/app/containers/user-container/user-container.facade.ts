import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { User } from '../../core/models/users.model';
import { UserState } from '../../core/states/user.state';
import { ShowAllUsersService } from '../../core/services/list-all-users.service';

@Injectable({
  providedIn: 'root',
})
export class UserContainerFacade {
  private subscription: Subscription = new Subscription();

  constructor(
    private userState: UserState,
    private showAllUsersService: ShowAllUsersService
  ) {}

  initSubcristion(): void {
    this.subscription = new Subscription();
  }
  destroySubscription(): void {
    this.subscription.unsubscribe();
  }

  users$(): Observable<User[]> {
    return this.showAllUsersService.getUser();
  }

  getAllUsers(): void {
    this.subscription.add(
      this.showAllUsersService
        .getUser()
        .pipe(tap((users) => this.userState.setUsers(users)))
        .subscribe()
    );
  }

}
