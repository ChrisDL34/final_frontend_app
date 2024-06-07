import { Injectable } from "@angular/core";
import { AddUserResponse, UpdateUserResponse } from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class ApiToUpdateUserMapper{
  map(response: any): UpdateUserResponse{
    return{
      username: response.username,
      email: response.email,
      userId:response.userId,
      role: response.role
    }
  }
}
