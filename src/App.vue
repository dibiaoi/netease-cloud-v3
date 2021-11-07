<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.logout();
  },
  methods: {
    logout() {
      this.$store.dispatch("userInfo/cleanInfo");
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/reset";
#app {
  width: 100vw;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f2f2;
}
</style>
