/**
 * Этот стор описывает общее состояние всего приложения, такие как заголовок страницы
 */

import { defineStore } from "pinia";

interface IState {
  pageTitle: string;
  currentRoute: string;
}

export const useAppStateStore = defineStore("appState", {
  state: (): IState => ({
    pageTitle: "Админка",
    currentRoute: "/applications-for-training",
  }),

  actions: {
    setPageTitle(pageTitle: string) {
      this.pageTitle = pageTitle;
    },
    setCurrentRoute(newCurrentRoute: string) {
      this.currentRoute = newCurrentRoute;
    },
  },
});
