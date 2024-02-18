import $api from "@/http/api";
import { AxiosResponse } from "axios";
import {
  IApplication,
  IApplicationGetListFilter,
} from "@/models/response/ApllicationsResponse";

export default class ApplicationsService {
  // не готово TODO
  static async applicationGet(
    applicationsId: string
  ): Promise<AxiosResponse<IApplication>> {
    return $api.get<IApplication>(`/application/${applicationsId}`);
    // .then(res=>res.data ) проверочный комент
  }
  // ready
  static async applicationGetList(
    filters: IApplicationGetListFilter | undefined
  ): Promise<AxiosResponse<IApplication[]>> {
    return $api.post<IApplication[]>(`/application/get_list`, filters);
  }
  // не готово TODO
  static async applicationEdit(
    applicationsId: string
  ): Promise<AxiosResponse<any>> {
    return $api.patch<any>(`application/edit/${applicationsId}`);
  }
  // не готово TODO
  static async applicationCreate(
    application: IApplication
  ): Promise<AxiosResponse<any>> {
    return $api.put<any>(`application/add`, application);
  }
}
