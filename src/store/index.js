import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import userInfo from "./user/userInfo";

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        userInfo
    }
});