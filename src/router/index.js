import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TabPage from "../views/TabPage.vue";
import Interact from "../views/Interaction.vue";
import Form from "../views/Form.vue";

const routes = [
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchPage.vue"),
  },
  {
    path: "/tab",
    name: "tabPage",
    component: TabPage,
  },
  {
    path: "/interact",
    name: "interact",
    component: Interact,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
