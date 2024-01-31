import $api from "@/http/api";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "@/models/response/AuthResponse";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<any>> {
    return $api.get<IAuthResponse>("/auth/login");
    // .then(res=>res.data ) проверочный комент
  }
}
