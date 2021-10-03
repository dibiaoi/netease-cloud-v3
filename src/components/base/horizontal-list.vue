<template>
  <div class="horizontal-list">
    <van-tabs type="none">
      <van-tab v-for="item in list" :key="item.id">
        <template #title>
          <slot></slot>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return { icons: [] };
  },
  props:['list']

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
