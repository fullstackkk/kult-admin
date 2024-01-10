import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "auth",
    meta: { layout: "auth" },
    component: () => import("../modules/pages/auth-page.vue"),
  },
  {
    path: "/main",
    name: "main",
    meta: { layout: "main", auth: true },
    component: () => import("../modules/pages/main-page.vue"),
  },
  {
    path: "/instructor-schedule",
    name: "instructor-schedule",
    meta: { layout: "main", auth: true },
    component: () => import("../modules/pages/instructor-schedule-page.vue"),
  },
  {
    path: "/applications-for-training",
    name: "applications-for-training",
    meta: { layout: "main", auth: true },
    component: () =>
      import("../modules/pages/applications-for-training-page.vue"),
  },
  {
    path: "/student-table",
    name: "student-table",
    meta: { layout: "main", auth: true },
    component: () => import("../modules/pages/student-table-page.vue"),
  },
  {
    path: "/list-of-instructors",
    name: "list-of-instructors",
    meta: { layout: "main", auth: true },
    component: () => import("../modules/pages/list-of-instructors-page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
