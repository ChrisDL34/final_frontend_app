import { Injectable } from "@angular/core";
import { User } from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class ApiToGetAllUsersMapper{
  map(response: any): User{
    return{
      userId: response.userId,
      userName: response.userName,
      email: response.email,
      role: response.role
    }
  }
}
