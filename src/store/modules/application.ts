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
    async createApplication(application?: IApplication) {
      // это моковый объект для теста
      const applicationMoc: IApplication = {
        isActive: true,
        number: 89103232323,
        fio: {
          firstname: "Андрей",
          lastname: "Филипов",
          patronomic: "Евгеньевич",
        },
        phone: 89103232323,
        filial: "Межда",
        chosenCourse: "A+B",
        cpp: "АКПП",
        typeOfTraining: "Онлайн",
        offerStatus: "Думает",
        paymentType: "Безнал",
      };
      //   if (!application) return;
      try {
        const response = await ApplicationsService.applicationCreate(
          applicationMoc
        );
        this.setApplication(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
