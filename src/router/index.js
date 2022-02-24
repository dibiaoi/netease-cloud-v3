import Vue from "vue";
import Router from "vue-router";

import userRoutes from "@/router/modules/userRouters.js";
import findRouters from "@/router/modules/find.js";
import blogRoutes from "@/router/modules/blog.js";
import friendsRoutes from "@/router/modules/friends.js";
import cloudVillageRouters from "@/router/modules/cloudVillage.js";

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
    path: "/user",
    name: "user",
    meta: {
      title: "我的"
    },
    component: () => import("@/views/user/userIndex.vue")
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
  },
  ...findRouters,
  ...cloudVillageRouters,
  ...blogRoutes,
  ...friendsRoutes
];

// 当用户登录时添加权限的页面进入路由
export const asyncRouterMap = [...userRoutes];

const router = new Router({
  linkExactActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

export default router;
// console.log(router.options.routes);
