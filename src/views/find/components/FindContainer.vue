<template>
  <div>
    <Swiper></Swiper>
    <Icons></Icons>
    <div class="content-list">
      <HorizontalList
        v-for="(item, index) in contentList"
        :key="index"
        :headline=item.headline
        :infoList=item.infoList
        :type="item.type"
      ></HorizontalList>
    </div>
  </div>
</template>

<script>
import HorizontalList from "@/components/base/horizontal-list.vue";
import swiper from "@/components/base/swiper.vue";
import Icons from "@/components/base/icons.vue";
export default {
  data() {
    return {
      contentList: []
    };
  },
  components: {
    Swiper: swiper,
    Icons,
    HorizontalList
  },
  created() {
    this.recommendSongs();
  },
  methods: {
    recommendSongs() {
      let limit = 5;
      this.$api.personalizedFn(limit).then(
        res => {
          let { code, result } = res.data;
          if (code == 200) {
            let item = {
              headline: result[0].copywriter,
              infoList: result,
              type: "songs"
            };
            this.contentList.push(item);
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style></style>
