import { defineStore } from "pinia";
import AuthService from "@/services/auth-service";
import { IAuthResponse } from "@/models/response/AuthResponse";

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
        localStorage.setItem("token", response.data.token);
        this.setIsAuth(true);

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

    // async checkAuth() {
    //   try {
    //     const response = await axios.get<AuthResponse>(`${API_URL}/refresh`);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
});
