import { defineStore } from "pinia";
import ApplicationsService from "@/services/applications-service";
import { IApplication } from "@/models/response/ApllicationsResponse";

interface IState {
  applications: IApplication[] | IApplication | null;
}

export const useApplicationStore = defineStore("application", {
  state: (): IState => ({
    applications: null,
  }),
  getters: {
    // applications: (state) => state.applications,
  },
  actions: {
    setApplication(value: IApplication[] | IApplication) {
      this.applications = value;
    },
    // тут по идее еще надо бы фильтры добавить
    async getApplications() {
      console.log("getApplications");
      try {
        const response = await ApplicationsService.applicationGetList();
        console.log(response.data);
        this.setApplication(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
