import { Injectable } from "@angular/core";
import { AddUserResponse } from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class ApiToRegisterUserMapper{
  map(response: any): AddUserResponse{
    return{
      username: response.username,
      email: response.email,
      userId:response.userId,
      role: response.role
    }
  }
}
