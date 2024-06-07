import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/users.model";
import { StateFactory } from "./factory.state";

@Injectable({
  providedIn: 'root'
})
export class AddUserState {
  private createUserSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public createUser$ = this.stateFactory.state(this.createUserSubject$);

  constructor(private stateFactory: StateFactory) {}

  setCreateUser(user: User) {
    this.createUserSubject$.next(user);
  }

  getCreateUser(): User | null {
    return this.createUserSubject$.getValue();
  }

  resetCreateUser() {
    this.createUserSubject$.next(null);
  }
}
