import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StateModel } from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class StateFactory {

  state<T>(subject$: BehaviorSubject<T>): StateModel<T> {
      return {
          $: () => subject$.asObservable(),
          snapshot: () => this.copyPayload(subject$.getValue()),
          set: (payload: T) => subject$.next(this.copyPayload(payload))
      }
  }

  copyPayload<T>(payload: T): T {
      return JSON.parse(JSON.stringify(payload)) as T;
  }
}
