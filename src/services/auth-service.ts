import $api from "@/http/api";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "@/models/response/AuthResponse";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/auth/login", {
      username,
      password,
      fingerprint: navigator.userAgent,
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
