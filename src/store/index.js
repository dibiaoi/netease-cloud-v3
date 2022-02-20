import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import userInfo from "./user/userInfo";
import play from "./play";
import Permission from "./permissionMethods";

export default new Vuex.Store({
  state: {
    playlistInfo: null //当前歌单详情
  },
  mutations: {
    setPlaylistInfo: (state, playlistInfo) => {
      state.playlistInfo = playlistInfo;
    }
  },
  getters: {
    playlistInfo: s => s.playlistInfo
  },
  actions: {},
  modules: {
    userInfo,
    play,
    Permission
  }
});
