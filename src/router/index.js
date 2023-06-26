// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    component: () => import("@/layouts/default/App.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
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
    component: () => import("@/layouts/default/Access.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "Register",
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
