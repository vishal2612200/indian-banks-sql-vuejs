import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name:'banktable',
    component: () =>
      import("../components/BankTable.vue"),
  },
  {
    path: "/banks/:slug",
    name: "banks",
    component: () => import("../components/BankDetail.vue"),
    props:true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
