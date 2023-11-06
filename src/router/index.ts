import { createRouter, createWebHistory, RouteRecordRaw, } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/k/main",
    name: "Home",
    component: () => import("../modules/pages/Example.vue")
  },
  {
    path: "/k/instructor-schedule",
    name: "Home",
    component: () => import("../modules/pages/Example.vue")
  },
  {
    path: "/k/applications-for-training",
    name: "About",
    component: () => import("../modules/pages/About.vue")
  },
  {
    path: "/k/student-table",
    name: "About",
    component: () => import("../modules/pages/About.vue")
  },
  {
    path: "/k/list-of-instructors",
    name: "About",
    component: () => import("../modules/pages/About.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router