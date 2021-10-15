import { test } from "@/request/api.js";

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
        },
        test({ commit, state }, data) {
            console.log(data);
            return new Promise((Resolve, reject) => {
                test(data).then(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
            })
        }
    },
    modules: {}
};