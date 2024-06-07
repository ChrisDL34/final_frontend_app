export interface User
{
  userId: string;
  username: string;
  email: string;
  role: RoleType;
}

export enum RoleType
{
  Admin = 'ADMIN',
  Assistant = 'ASSISTANT',
  Supplier = 'SUPPLIER',
  Reader = 'READER'
}

export interface AddUserRequest {
  username: string;
  email: string;
  password: string;
  role: RoleType;
}

export interface AddUserResponse {
  userId: string;
  username: string;
  email: string;
  role: RoleType;
}

export interface UpdateUserRequest {
  username: string;
  email: string;
  role: RoleType;
}

export interface UpdateUserResponse {}
