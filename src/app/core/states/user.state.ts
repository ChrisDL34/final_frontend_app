import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  usersData$: Observable<User[]> = this.users$.asObservable();


  constructor() {}

  setUsers(users: User[]) {
    this.users$.next(users);
  }

  getUsers(): User[] {
    return this.users$.value;
  }
}
