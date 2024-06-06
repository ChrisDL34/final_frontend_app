import { Injectable } from '@angular/core';
import { HttpService } from './general/http.service';
import { User } from '../models/users.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_RESOURCES } from '../resources/url.resource';
import { ApiToGetAllUsersMapper } from '../mappers/api-to-get-users.mapper';

@Injectable({
  providedIn: 'root',
})
export class ShowAllUsersService{
  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToGetAllUsersMapper
  ){}

  getUser(): Observable<User[]>{
    const url = URL_RESOURCES.getAllUsers;
    return this.httpService.get<any[]>(url).pipe(
      map((response: any[]) => {
        return response.map((item) => this.mapper.map(item));
  })
  );
  }
}
