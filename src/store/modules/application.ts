import { defineStore } from "pinia";
import ApplicationsService from "@/services/applications-service";
import {
  IApplication,
  IApplicationGetListFilter,
} from "@/models/response/ApllicationsResponse";
interface IState {
  applications: IApplication[] | [];
}

export const useApplicationStore = defineStore("application", {
  state: (): IState => ({
    applications: [],
  }),

  actions: {
    setApplication(value: IApplication[]) {
      this.applications = value;
    },
    // получить лист заявок
    async getApplications(filters?: IApplicationGetListFilter) {
      try {
        const response = await ApplicationsService.applicationGetList(filters);
        this.setApplication(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async createApplication(application: IApplication) {
      //   if (!application) return;
      try {
        const response = await ApplicationsService.applicationCreate(
          application
        );
        this.setApplication(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});