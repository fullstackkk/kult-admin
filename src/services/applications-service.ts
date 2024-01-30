import $api from "@/http/api";
import { AxiosResponse } from "axios";
import { IApplication } from "@/models/response/ApllicationsResponse";

interface IApplicationGetListFilter {
  filter: {};
  pagination: {
    skip: number;
    limit: number;
  };
}

export default class ApplicationsService {
  static async applicationGet(
    applicationsId: string
  ): Promise<AxiosResponse<any>> {
    return $api.get<any>(`/application/${applicationsId}`);
    // .then(res=>res.data ) проверочный комент
  }

  // пока фильтры это хардкод
  static async applicationGetList(): Promise<AxiosResponse<any>> {
    return $api.post<any>(`/application/get_list`);
  }
  static async applicationEdit(
    applicationsId: string
  ): Promise<AxiosResponse<any>> {
    return $api.patch<any>(`application/edit/${applicationsId}`, {
      filter: {},
      pagination: {
        skip: 0,
        limit: 20,
      },
    });
  }
  static async applicationCreate(
    application: IApplication
  ): Promise<AxiosResponse<any>> {
    return $api.put<any>(`application/create`, application);
  }
}
