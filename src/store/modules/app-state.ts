import { defineStore } from "pinia";

interface IState {
  pageTitle: string;
}

export const useAppStateStore = defineStore("appState", {
  state: (): IState => ({
    pageTitle: "Админка",
  }),

  actions: {
    setPageTitle(pageTitle: string) {
      this.pageTitle = pageTitle;
    },
  },
});
