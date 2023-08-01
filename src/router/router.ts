import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import About from "@/views/about/About.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/", redirect: "/home" }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
