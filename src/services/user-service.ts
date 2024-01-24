import $api from "@/http/api";
import { AxiosResponse } from "axios";
import { AuthResponse } from "@/models/response/AuthResponse";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<any>> {
    return $api.get<AuthResponse>("/auth/login");
    // .then(res=>res.data ) проверочный комент
  }
}
