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

import { api } from "@/services/api";

export default class InstructorService {
  async getInstructor(id: string) {
    const res = await fetch(`${api}/instructor/:${id}`);
    return res;
  }
  async getInstructorList() {
    const res = await fetch(`${api}/instructor/get_list`);
    return res;
  }
  async editInstructorById(id: string) {
    const res = await fetch(`${api}/instructor/edit/:${id}`);
    return res;
  }
  async createInstructorById() {
    const res = await fetch(`${api}/instructor/create}`);
    return res;
  }
}
