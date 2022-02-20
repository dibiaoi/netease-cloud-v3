import store from "@/store";
import router from "@/router";
import Cookies from "js-cookie";

const whitelist = ["/"];

router.beforeEach((to, from, next) => {
  if (Cookies.get("UserToken")) {
    let roles = store.state.userInfo.roles;
    if (roles) {
      next();
    } else {
      roles = ["user"];
      store
        .dispatch("GenerateRoutes", { roles })
        .then(routers => {
          // console.log(routers);
          routers.push(
            {
              path: "*",
              redirect: "/404"
            },
            {
              path: "/404",
              name: "404",
              meta: {
                title: "未找到"
              },
              component: () => import("@/views/404.vue")
            }
          );
          // console.log(router.options.routes);
          // console.log(routers);
          store.state.userInfo.roles = roles;
          store.state.userInfo.loginState = true;
          /**
           * router.addRoutes(routers); 旧方法
           */
          for (let x of routers) {
            router.addRoute(x);
          }
          next({ ...to, replace: true });
        })
        .catch(err => console.log(err));
    }
  } else {
    // console.log(to);
    if (whitelist.indexOf(to.path) !== -1) {
      console.log(whitelist.indexOf(to.path));
      console.log(router.options.routes);
      next();
    } else {
      store.state.userInfo.loginState = false;
      next();
    }
  }
});
