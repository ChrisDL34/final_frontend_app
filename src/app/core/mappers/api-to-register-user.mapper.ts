import { Injectable } from "@angular/core";
import { AddUserRequest } from "../models/add-user.model";

@Injectable({
  providedIn: 'root'
})
export class ApiToRegisterUsersMapper{
  map(response: any): AddUserRequest{
    return{
      username: response.username,
      email: response.email,
      password:response.password,
      role: response.role
    }
  }
}
