import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class SelectedUserState {
  private user$: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);
  userData$: Observable<User|null> = this.user$.asObservable();


  constructor() {}

  setSelectedUser(user: User) {
    this.user$.next(user);
  }

  getSelectedUser(): User|null {
    return this.user$.value;
  }
}
