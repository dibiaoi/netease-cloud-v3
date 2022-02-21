import Vue from "vue";
import Router from "vue-router";

import userRoutes from "@/router/modules/userRouters.js";

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export const constantRouterMap = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/find",
    name: "find",
    meta: {
      title: "发现页"
    },
    component: () => import("@/views/find/find.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/login-phone",
    name: "login-phone",
    meta: {
      title: "手机号登录"
    },
    component: () => import("@/views/login/loginPhoneNum.vue")
  },
  {
    path: "/songsList",
    name: "songsList",
    //  props: router => ({
    //    playlist: router.query.playlistInfo
    //  }),
    meta: {
      title: "歌单详情页"
    },
    component: () => import("@/views/base/songsList.vue")
  },
  {
    path: "/player/:id",
    name: "player",
    // props: router => ({
    //   id: router.query.id
    // }),
    meta: {
      title: "播放页"
    },
    component: () => import("@/views/base/player.vue")
  }
];

export const asyncRouterMap = [...userRoutes];

const router = new Router({
  linkExactActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

export default router;
// console.log(router.options.routes);
