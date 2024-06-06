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
