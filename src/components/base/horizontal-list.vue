<template>
  <div class="horizontal-list">
    <van-tabs type="none">
      <van-tab v-for="icon in icons" :key="icon.id">
        <template #title>
          <div class="icon-size">
            <van-image
              width="0.8rem"
              height="0.8rem"
              fit="contain"
              :src="icon.iconUrl"
            />
          </div>
          <label class="icon-txt">{{ icon.name }}</label>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  created() {
    this.$api.homepageDragonBallFn().then(
      res => {
        if (res.data.code == 200) {
          console.log(res.data.data);
          this.icons = res.data.data;
        }
      },
      err => {
        console.log(res.data);
      }
    );
  },
  data() {
    return { icons: [] };
  },
  // props: ["list"]
};
</script>

<style scoped>
.icon-size {
  width: 0.8rem;
  height: 0.8rem;
  background: #e6463a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
}
</style>
<style lang="scss" scoped>
.horizontal-list {
  .van-tabs {
    .van-tabs__wrap {
      height: 100%;
    }
  }
}
</style>
