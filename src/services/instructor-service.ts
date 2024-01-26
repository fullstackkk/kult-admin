import $api from "@/http/api";
import { AxiosResponse } from "axios";
import { AuthResponse } from "@/models/response/AuthResponse";

// GET instructor/:id
// POST instructor/get_list
// PATCH instructor/edit/:id
// PUT instructor/create

// GET student/:id
// POST student/get_list
// PATCH student/edit/:id

// GET application/:id
// POST application/get_list
// PATCH application/edit/:id
// PUT application/create

// POST auth/login
// лог пасс для теста leonid leonid

// import { api } from "@/http/api";

export default class InstructorService {
  static async getInstructor(id: string) {
    return $api.get<any>(`/instructor/:${id}`);
  }
  static async getInstructorList() {
    return $api.post<any>("/instructor/get_list");
  }
  static async editInstructorById(id: string) {
    return $api.patch<any>(`/instructor/edit/:${id}`);
  }
  static async createInstructorById() {
    return $api.put<any>("/instructor/create");
  }
}
export const a = 4;
