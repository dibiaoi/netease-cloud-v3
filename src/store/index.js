import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import userInfo from "./user/userInfo";
import play from "./play";
import Permission from "./permissionMethods";

export default new Vuex.Store({
  state: {
    playlistInfo: null, //当前歌单详情,
    activePage: "发现"
  },
  mutations: {
    setPlaylistInfo: (state, playlistInfo) => {
      state.playlistInfo = playlistInfo;
    },
    setActivePage: (state, page) => {
      state.activePage = page;
    }
  },
  getters: {
    playlistInfo: s => s.playlistInfo,
    activePage: s => s.activePage
  },
  actions: {},
  modules: {
    userInfo,
    play,
    Permission
  }
});
