import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/store/modules/user";
// const userStore = useUserStore();
// const isAuthenticated = userStore.isAuth;
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "auth",
    meta: { layout: "auth" },
    component: () => import("../modules/pages/auth-page.vue"),
  },
  // это моковая страница на случай если в системе понадобится что то вроде главно страницы
  // в данный момент за главную будет открыватся календарь с рассписанием инструкторов
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

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  if (
    // проверка, что пользователь авторизован
    !userStore.isAuth &&
    // ❗️ Избежать бесконечного перенаправления
    to.name !== "auth"
  ) {
    // перенаправить пользователя на страницу входа

    console.log("отработала гарда auth");
    return { name: "auth" };
  }
  console.log("отработала гарда роутера");
});
export default router;
