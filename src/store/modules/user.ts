import { defineStore } from "pinia";
import AuthService from "@/services/auth-service";
import { IAuthResponse } from "@/models/response/AuthResponse";
import { API_URL } from "@/http/api";
import axios from "axios";
import { setCookie, getCookie } from "@/utils/cookie";
interface IState {
  user: IAuthResponse | null;
  isAuth: boolean;
}
export const useUserStore = defineStore("user", {
  state: (): IState => ({
    user: null, // наш админ школы
    isAuth: false,
  }),
  getters: {
    // user: (state) => state.user,
    // isAuth: (state) => state.isAuth,
  },
  actions: {
    setUser(value: IAuthResponse) {
      this.user = value;
    },
    setIsAuth(value: boolean) {
      this.isAuth = value;
    },
    async login(username: string, password: string) {
      try {
        const response = await AuthService.login(username, password);
        // console.log(response.data);
        this.setUser({ token: JSON.stringify(response.data.token) });
        setCookie("refreshToken", JSON.stringify(response.data.refreshToken));
        localStorage.setItem("token", response.data.token);
        this.setIsAuth(true);

        console.log(document.cookie);
        // const conokie = getCookie("refreshToken");
        // this.setUser(response.data.user) это пока не рабочая логика
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      // try {
      //   const response = await AuthService.logout();
      //   localStorage.removeItem("token");
      //   this.setIsAuth(false);
      //   // this.setUser({});  это пока не рабочая логика
      // } catch (error) {
      //   console.log(error);
      // }
      this.setIsAuth(false);
      localStorage.removeItem("token");
    },

    async checkAuth() {
      const $refreshTokenApi = axios.create({
        withCredentials: true,
        baseURL: `${API_URL}`,
      });

      $refreshTokenApi.interceptors.request.use((config) => {
        if (config.headers) {
          config.headers = {
            Authorization: `Bearer ` + getCookie("refreshToken"),
          };
        }
        return config;
      });

      try {
        const response = await $refreshTokenApi.post<IAuthResponse>("/token", {
          fingerprint: navigator.userAgent,
        });
        console.log(response);
        this.setUser({ token: JSON.stringify(response.data.token) });
        localStorage.setItem("token", response.data.token);
        setCookie("refreshToken", JSON.stringify(response.data.refreshToken));
        this.setIsAuth(true);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
