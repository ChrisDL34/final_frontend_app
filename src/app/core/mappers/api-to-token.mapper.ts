import { Injectable } from '@angular/core';
import { IresponseToken } from '../models/refreshToken.models';
//import { IUserModel } from "../models/user.mode";

@Injectable({
  providedIn: 'root',
})
export class ApiToTokenMapper {
  map(payload: any): IresponseToken {
    console.log('payload' + payload);
    if (payload !== null) {
      return {
        token: payload.token,
        userId:payload.userId,
        userName:payload.userName
      }
    }

    return { token: null, userId: null, userName: null };
  }
}
