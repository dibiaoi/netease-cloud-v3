<template>
  <div>
    <top-nav>
      <van-search
        v-model="value"
        shape="round"
        background-color="#00"
        placeholder="请输入搜索关键词"
        class="search"
    /></top-nav>
  </div>
</template>

<script>
import topNav from "@/components/base/top-nav.vue";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {
    topNav
  }
};
</script>

<style lang="scss" scoped>
.search {
  // padding: 0;
  width: -webkit-fill-available;
  background-color: transparent;
  .van-search__content {
    background-color: #f5f5f5;
    .van-cell {
      line-height: 25px;
    }
  }
}
</style>
