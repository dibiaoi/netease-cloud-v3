import Cookies from "js-cookie";

export default {
  namespaced: true,
  state: {
    userId: "",
    userProfile: "",
    token: "",
    loginState: false,
    roles:""
  },
  mutations: {},
  actions: {
    setInfo({ commit, state }, data) {
      // console.log(data);
      state.userId = data.account.id;
      state.userProfile = data.profile;
      state.token = data.token;
      console.log("-------------");
      state.loginState = true;
      state.roles = ["user"];
      // localStorage.setItem("UserToken", data.token);
      Cookies.set("UserToken", data.token, {
        expires: 1
      });
    }
  },
  modules: {}
};
