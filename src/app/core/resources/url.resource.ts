import { environment } from "../../../environments/environment.development";

export const URL_RESOURCES={
  getAllUsers:`${environment.apiUrl}/User/GetAllUsers`,
  createUser: `${environment.apiUrl}/User/CreateUser`,
  updateUser: `${environment.apiUrl}/User/UpdateUser`,
  deleteUser: `${environment.apiUrl}/User/DeleteUserById`,
  getSupplierBooks: `${environment.apiUrl}/SupplierItems/GetAll`,
  token:"https://pinguinera-module-auth.onrender.com/api/v1/token/refresh",

  adminRefreshToken:"b04251bf-42f4-4f66-9706-554c3fc48a31"

}
