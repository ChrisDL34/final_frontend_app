import { Observable } from "rxjs";

export interface StateModel<T> {
    $: () => Observable<T>;
    snapshot: () => T;
    set: (payload: T) => void;
}
