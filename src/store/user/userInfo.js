import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        userId: "",
        profile: "",
        token: "",
        loginState: false,

    },
    mutations: {},
    actions: {
        setInfo({ commit, state }, data) {
            // console.log(data);
            state.userId = data.account.id;
            state.profile = data.profile;
            state.token = data.token;
            localStorage.setItem("UserToken", data.token);
        }
    },
    modules: {}
};