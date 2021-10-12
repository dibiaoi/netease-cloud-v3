<template>
  <div class="icons">
    <van-tabs type="none">
      <van-tab v-for="icon in icons" :key="icon.id">
        <template #title>
          <div class="icon">
            <div class="icon-size">
              <van-image
                width="0.6rem"
                height="0.6rem"
                fit="contain"
                :src="icon.iconUrl"
              />
            </div>
            <label class="icon-txt">{{ icon.name }}</label>
          </div>
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
          // console.log(res.data.data);
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
  }
};
</script>

<style scoped>
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon-size {
  width: 0.6rem;
  height: 0.6rem;
  background-color: #e6463a;
  border-radius: 50%;
}
.icon-txt{
  font-size: 0.18rem;
}
</style>
<style lang="scss" scoped>
.icons {
  background-color: #fff;
  border-bottom: 0.2px solid #f5f5f5;
  padding-bottom: 0.2rem;
  .van-tabs {
    .van-tabs__wrap {
      height: 100%;
    }
  }
}
</style>
