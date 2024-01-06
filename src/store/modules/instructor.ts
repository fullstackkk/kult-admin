import { defineStore } from "pinia";

import InstructorService from "@/services/instructor-service";

const instructorService = new InstructorService();

export const useInstructorService = defineStore("instructor", {
  state: () => ({
    instructors: <any>[],
  }),
  getters: {
    instructor: (state) =>
      state.instructors.map((el: { name: string }) => el.name),
  },
  actions: {
    async getInstructorList() {
      return await instructorService
        .getInstructorList()
        .then((res) => (this.$state.instructors = res.json()))
        .then((res) => console.log(res));
    },
  },
});
