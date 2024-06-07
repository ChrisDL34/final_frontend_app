import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { User } from '../../core/models/users.model';
import { UserState } from '../../core/states/user.state';
import { UserService } from '../../core/services/user.service';
import { SelectedUserState } from '../../core/states/selected-user.state';

@Injectable({
  providedIn: 'root',
})
export class AdminManagementContainerFacade {
  private subscription: Subscription = new Subscription();

  constructor(
    private userState: UserState,
    private selectedUserState: SelectedUserState,
    private usersService: UserService
  ) {}

  initSubcristion(): void {
    this.subscription = new Subscription();
  }
  destroySubscription(): void {
    this.subscription.unsubscribe();
  }

  users$(): Observable<User[]> {
    return this.userState.usersData$;
  }

  getAllUsers(): void {
    this.subscription.add(
      this.usersService
        .getUser()
        .pipe(tap((users) => this.userState.setUsers(users)))
        .subscribe()
    );
  }

  deleteUser(userId: string):Observable<void>{
    return this.usersService.deleteUser(userId);
  }

  setSelectedUser(user:User):void{
    this.selectedUserState.setSelectedUser(user);

  }

}
