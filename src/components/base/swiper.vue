<template>
  <div class="banner-div">
    <van-swipe :autoplay="3000" :height="150" class="banner">
      <van-swipe-item v-for="(data, bannerId) in banners" :key="bannerId">
        <img class="banner-img" :src="data.pic" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  data() {
    return {
      banners: []
    };
  },
  created() {
    this.$api.bannerSwiperFn().then(
      res => {
        if (res.data.code == 200) {
          //   console.log(res.data.banners);
          this.banners = res.data.banners;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
};
</script>

<style lang="scss" scoped>
// @import url("~styles/global.scss");
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.banner-div {
    padding: 0.2rem;
  .banner {
    border-radius: 0.2rem;
    width: 100%;
    .banner-img {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }
}
</style>
