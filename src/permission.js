import store from "@/store";
import router from "@/router";
import Cookies from "js-cookie";

const whitelist = ["/"];

router.beforeEach((to, from, next) => {
  console.log(to);
  // Cookies.remove("UserToken");
  console.log(Cookies.get("UserToken"));

  console.log(store.state.userInfo.roles);
  if (Cookies.get("UserToken")) {
    let roles = store.state.userInfo.roles;

    if (roles) {
      next();
    } else {
      roles = ["user"];
      store
        .dispatch("GenerateRoutes", { roles })
        .then(routers => {
          console.log(routers);
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
          console.log(router.options.routes);
          console.log("******");
          console.log(routers);
          store.state.userInfo.roles = roles;
          // console.log(store.state.userInfo.roles);
          router.addRoutes(routers); //新方法

          console.log(router.options.routes);
          next({ ...to, replace: true });
        })
        .catch(err => console.log(err));
    }
  } else {
    console.log(to);
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
