import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import userInfo from "./user/userInfo";
import Permission from "./permissionMethods";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userInfo,
    Permission
  }
});
