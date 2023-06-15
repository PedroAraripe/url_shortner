import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthView from "../views/AuthView.vue";
import HomeView from "../views/HomeView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";
import MostAccessedsUrlsView from "../views/MostAccessedsUrlsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // redirect: { path: "/login" },
  },
  {
    path: "/most-accessed",
    name: "most-accessed",
    component: MostAccessedsUrlsView,
    // redirect: { path: "/login" },
  },
  {
    path: "/login",
    name: "login",
    component: AuthView,
  },
  {
    path: "/register-user",
    name: "register-user",
    component: AuthView,
  },
  { path: "/:catchAll(.*)", component: PageNotFoundView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
