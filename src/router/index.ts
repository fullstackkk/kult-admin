import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/k/main",
    name: "main",
    component: () => import("../modules/pages/main-page.vue"),
  },
  {
    path: "/k/instructor-schedule",
    name: "instructor-schedule",
    component: () => import("../modules/pages/instructor-schedule-page.vue"),
  },
  {
    path: "/k/applications-for-training",
    name: "applications-for-training",
    component: () =>
      import("../modules/pages/applications-for-training-page.vue"),
  },
  {
    path: "/k/student-table",
    name: "student-table",
    component: () => import("../modules/pages/student-table-page.vue"),
  },
  {
    path: "/k/list-of-instructors",
    name: "list-of-instructors",
    component: () => import("../modules/pages/list-of-instructors-page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
