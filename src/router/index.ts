import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/Home";
import AboutView from "@/views/About";
import FormView from "@/views/Form";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: "/form",
    name: "form",
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
