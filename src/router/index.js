import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TabPage from "../views/TabPage.vue";
import Interact from "../views/Interaction.vue";
import Form from "../views/Form.vue";
import SearchPage from "../views/SearchPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search-page",
    name: "SearchPage",
    component: SearchPage,
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
