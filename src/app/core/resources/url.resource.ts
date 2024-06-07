import { environment } from "../../../environments/environment.development";

export const URL_RESOURCES={
  getAllUsers:`${environment.apiUrl}/User/GetAllUsers`,
  createUser: `${environment.apiUrl}/api/User/CreateUser`
}
