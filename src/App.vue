<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$api.loginCellphoneFn("13974975922", "zhongjiahui20312").then(
      res => {
        // console.log(res.data);
        this.$store.dispatch("userInfo/setInfo", res.data);
      },
      err => {
        console.log(res.data);
      }
    );
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/reset";
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 10px;
}
</style>
