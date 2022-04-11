import { createRouter, createWebHistory } from "vue-router";

import FontsView from "../views/FontsView.vue";

const routes = [
  {
    path: "/",
    name: "fonts",
    component: FontsView,
  },
  {
    path: "/colors",
    name: "colors",
    component: () => import("../views/ColorsView.vue"),
  },
  {
    path: "/other",
    name: "other",
    component: () => import("../views/OtherView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
