
import { Injectable } from '@angular/core';
import { HttpService } from './general/http.service';
import {  AddUserRequest, AddUserResponse, UpdateUserRequest, UpdateUserResponse, User } from '../models/users.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_RESOURCES } from '../resources/url.resource';
import { ApiToGetAllUsersMapper } from '../mappers/api-to-get-users.mapper';
import { ApiToRegisterUserMapper } from '../mappers/api-to-register-user.mapper';
import { ApiToUpdateUserMapper } from '../mappers/api-to-update-user.mapper';
import { Book } from '../models/book.model';
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

  getSupplierBooks(supplierId: string): Observable<Book[]> {
    const url = `${URL_RESOURCES.getSupplierBooks}/${supplierId}`;
    return this.httpService.get<any[]>(url).pipe(
      map((response: any[]) => {
        return response.map((item) => ({
          id: item.id,
          title: item.title,
          author: item.author,
          sellPrice: item.sellPrice,
          stock: item.stock,
          itemType: item.itemType,
        }) as Book);
      })
    );
  }

  requestQuote(supplierId: string, items: { itemIdList: { id: string; amount: number }[] }): Observable<any> {
    const url = `${URL_RESOURCES.requestQuote.replace('{supplierId}', supplierId)}`;
    return this.httpService.post(url, JSON.stringify(items));
  }

}
