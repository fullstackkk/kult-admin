import { defineStore } from "pinia";
import AuthService from "@/services/auth-service";
import axios from "axios";
import { AuthResponse } from "@/models/response/AuthResponse";
import { API_URL } from "@/http/api";
interface IState {
  user: any;
  isAuth: boolean;
}
export const useUserStore = defineStore("user", {
  state: (): IState => ({
    user: {}, // наш админ школы
    isAuth: false,
  }),
  getters: {
    user: (state) => state.user,
    isAuth: (state) => state.isAuth,
  },
  actions: {
    setUser(user: any) {
      // тип пользака еще не написали
      this.user = user;
    },
    setIsAuth(value: boolean) {
      this.isAuth = value;
    },
    async login(username: string, password: string) {
      try {
        const response = await AuthService.login(username, password);
        console.log(response.data);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        this.setIsAuth(true);
        // this.setUser(response.data.user) это пока не рабочая логика
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        const response = await AuthService.logout();
        localStorage.removeItem("token");
        this.setIsAuth(false);
        // this.setUser({});  это пока не рабочая логика
      } catch (error) {
        console.log(error);
      }
    },

    async checkAuth() {
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
