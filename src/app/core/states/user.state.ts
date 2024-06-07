import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/users.model';
import { IresponseToken } from '../models/refreshToken.models';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  usersData$: Observable<User[]> = this.users$.asObservable();

  private usersAuth$: BehaviorSubject<IresponseToken|null> = new BehaviorSubject<IresponseToken|null>(null);
  userAuthData$: Observable<IresponseToken|null> = this.usersAuth$.asObservable();


  constructor() {}

  setUsers(users: User[]) {
    this.users$.next(users);
  }

  getUsers(): User[] {
    return this.users$.value;
  }

  setUserAuth(usersAuth: IresponseToken) {
    this.usersAuth$.next(usersAuth);
  }

  getUserAuth(): IresponseToken {
    return this.usersAuth$.value;
  }
}
