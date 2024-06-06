import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.usersSubject.asObservable();


  constructor() {}

  setUsers(users: User[]): void {
    this.usersSubject.next(users);
  }

  getUsers(): User[] {
    return this.usersSubject.value;
  }
}
