<template>
  <div id="app">
    <song-audio />
    <router-view />
  </div>
</template>

<script>
import songAudio from "@/components/base/songAudio.vue";
import SongAudio from "./components/base/songAudio.vue";
export default {
  name: "App",
  created() {
    this.logout();
  },
  methods: {
    logout() {
      this.$store.dispatch("userInfo/cleanInfo");
    }
  },
  components: {
    songAudio
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/reset";
#app {
  // width: 100vw;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background-color: #f2f2f2;
}
.icon-iconfont {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
