// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/app",
    component: () => import("@/layouts/default/App.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: ":id",
        name: "listDetail",
        component: () => import("@/views/ListDetail.vue"),
      },
    ]
  },
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "login",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "REGISTER",
        name: "Register",
        component: () => import("@/views/Cadastro.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
