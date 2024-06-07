
import { Injectable } from '@angular/core';
import { HttpService } from './general/http.service';
import {  AddUserRequest, AddUserResponse, UpdateUserRequest, UpdateUserResponse, User } from '../models/users.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_RESOURCES } from '../resources/url.resource';
import { ApiToGetAllUsersMapper } from '../mappers/api-to-get-users.mapper';
import { ApiToRegisterUserMapper } from '../mappers/api-to-register-user.mapper';
import { ApiToUpdateUserMapper } from '../mappers/api-to-update-user.mapper';
@Injectable({
  providedIn: 'root',
})

export class UserService{
  constructor(
    private readonly httpService: HttpService,
    private readonly registerMapper: ApiToRegisterUserMapper,
    private readonly getUsersMapper: ApiToGetAllUsersMapper,
    private readonly updateUserMapper: ApiToUpdateUserMapper

  ){}

  getUser(): Observable<User[]>{
    const url = URL_RESOURCES.getAllUsers;
    return this.httpService.get<any[]>(url).pipe(
      map((response: any[]) => {
        return response.map((item) => this.getUsersMapper.map(item));
  })
  );
  }

  saveUser(request: AddUserRequest): Observable<AddUserResponse>{
    const url = URL_RESOURCES.createUser;
    return this.httpService
    .post(url, JSON.stringify(request))
    .pipe(map((response: any) => this.registerMapper.map(response)));
  }

  updateUser(request: UpdateUserRequest, userId: string): Observable<UpdateUserResponse>{
    const url = `${URL_RESOURCES.updateUser}/${userId}`;
    return this.httpService
    .put(url, JSON.stringify(request))
    .pipe(map((response: any) => this.updateUserMapper.map(response)));
  }

  deleteUser(userId: string): Observable<void>{
    const url = `${URL_RESOURCES.deleteUser}/${userId}`;
    return this.httpService
    .delete(url);
  }
}
