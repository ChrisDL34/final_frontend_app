
import { Injectable } from '@angular/core';
import { HttpService } from './general/http.service';
import {  User } from '../models/users.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_RESOURCES } from '../resources/url.resource';
import { ApiToRegisterUsersMapper } from '../mappers/api-to-register-user.mapper';
import { AddUserRequest } from '../models/add-user.model';
@Injectable({
  providedIn: 'root',
})

export class CreateUserService{
  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToRegisterUsersMapper

  ){}

  saveUser(request: AddUserRequest): Observable<AddUserRequest>{
    const url = URL_RESOURCES.createUser;
    return this.httpService
    .post(url, JSON.stringify(request))
    .pipe(map((response: any) => this.mapper.map(response)));
  }
}
