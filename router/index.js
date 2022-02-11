import { createRouter, createWebHistory } from "vue-router";

import Home from "../src/components/Home.vue";
import About from "../src/components/About.vue";
import Products from "../src/components/Products.vue";
// import Errors from '../src/components/Errors.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
