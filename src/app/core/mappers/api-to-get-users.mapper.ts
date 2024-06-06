import { Injectable } from "@angular/core";
import { User } from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class ApiToGetAllUsersMapper{
  map(response: any): User{
    return{
      userId: response.userId,
      username: response.username,
      email: response.email,
      role: response.role
    }
  }
}
