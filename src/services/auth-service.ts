import $api from "@/http/api";
import { AxiosResponse } from "axios";
import { AuthResponse } from "@/models/response/AuthResponse";
// POST auth/login
// лог пасс для теста leonid leonid

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/login", {
      username,
      password,
    });
    // .then(res=>res.data ) проверочный комент
  }
  // static async registration(
  //   username: string,
  //   password: string
  // ): Promise<AxiosResponse<AuthResponse>> {
  //   return $api.post<AuthResponse>("/auth/login", {
  //     username,
  //     password,
  //   });
  // }
  // static async logout(): Promise<AxiosResponse<AuthResponse>> {
  //   return $api.post<AuthResponse>("/auth/login");
  // }
}
