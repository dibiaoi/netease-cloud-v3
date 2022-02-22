<template>
  <div class="hlist">
    <div class="top">
      <!-- 左右 -->
      <span class="headline">{{ headline }}</span>
      <div class="more">更多<van-icon name="arrow" /></div>
    </div>
    <BlockCard :infoList="infoList" :rangeType="'horizontal'"></BlockCard>
  </div>
</template>

<script>
import BlockCard from "@/components/find/block-card.vue";
export default {
  data() {
    return {};
  },
  props: ["headline", "infoList", "type"],
  components: {
    BlockCard
  },
  created() {},
  mounted() {}
};
</script>

<style>
.bottom::-webkit-scrollbar {
  display: none;
}
</style>
<style lang="scss" scoped>
.hlist {
  background: #fff;
  border-radius: 0.2rem;
  margin: 0.1rem 0;
  .top {
    padding: 0.2rem 0.2rem 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headline {
      font-size: 0.3rem;
      font-weight: 550;
    }
    .more {
      font-size: 0.18rem;
      font-weight: 500;
      padding: 0.12rem 0.18rem;
      border: solid 0.5px #e7e7e7;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
  .bottom {
    display: flex;
    overflow-x: hidden;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    margin: 0.2rem 0;
    .block {
      padding: 0.1rem;

      .front {
        position: relative;
        .cover {
          position: absolute;
          font-size: 0.18rem;
          color: #fff;
          padding: 0.1rem;
          background-color: rgba(128, 128, 128, 0.5);
          border-radius: 0.2rem;
          top: 0.05rem;
          right: 0.05rem;
        }
        .pic {
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 0.1rem;
          box-shadow: 0px -5px 3px #f2f2f2;
          border: solid 0.01rem #ddd;
        }
      }

      .title {
        font-size: 0.2rem;
        text-align: left;
      }
    }
  }
}
</style>
