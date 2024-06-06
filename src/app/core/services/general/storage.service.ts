import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  set<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  remove(key: string):void {
    localStorage.removeItem(key);
  }
}
