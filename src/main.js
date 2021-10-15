// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

import "@/plugins/vant.js";
import api from "api";

import axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.prototype.$api = api;


router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");