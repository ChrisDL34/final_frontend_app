import { RoleType } from './users.model';

export interface AddUserRequest {
  username: string;
  email: string;
  password: string;
  role: RoleType;
}

export interface AddUserResponse {}
