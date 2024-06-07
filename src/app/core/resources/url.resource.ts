import { environment } from "../../../environments/environment.development";

export const URL_RESOURCES={
  getAllUsers:`${environment.apiUrl}/User/GetAllUsers`,
  createUser: `${environment.apiUrl}/User/CreateUser`,
  updateUser: `${environment.apiUrl}/User/UpdateUser`,
  deleteUser: `${environment.apiUrl}/User/DeleteUserById`,
  getSupplierBooks: `${environment.apiUrl}/SupplierItems/GetAll` ,
  requestQuote: `${environment.apiUrl}/Quote/request/{supplierId}`
}
