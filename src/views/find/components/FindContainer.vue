<template>
  <div>
    <Swiper></Swiper>
    <Icons></Icons>
    <div class="content-list" v-if="showCards">
      <HorizontalList
        :headline="'最新音乐'"
        :infoList="contentList[0].infoList"
        :type="contentList[0].type"
      ></HorizontalList>
      <SquareList
        :headline="'热门推荐'"
        :infoList="contentList[1].infoList"
        :type="contentList[1].type"
      ></SquareList>
    </div>
  </div>
</template>

<script>
import HorizontalList from "@/components/find/horizontal-list.vue";
import swiper from "@/components/find/swiper.vue";
import SquareList from "@/components/find/square-list.vue";
import Icons from "@/components/base/icons.vue";
export default {
  data() {
    return {
      showCards: false, //当获取到infoList时显示
      contentList: []
    };
  },
  components: {
    Swiper: swiper,
    Icons,
    HorizontalList,
    SquareList
  },
  created() {
    this.recommendSongs();
    this.recommendVideo();
  },
  methods: {
    recommendSongs() {
      let limit = 9;
      let arr = [
        this.$api.personalizedNewSongFn(limit),
        this.$api.personalizedFn(limit)
      ];
      Promise.all(arr).then(
        res => {
          for (const item of res) {
            console.log("data", item.data);
            let { code, result } = item.data;
            // console.log('result',result)
            if (code == 200) {
              let item = {
                headline: result[0].copywriter,
                infoList: result,
                type: "songs"
              };
              // console.log(result);
              this.contentList.push(item);
              this.showCards = true;
            }
          }
          console.log("contentList", this.contentList);
        },
        err => {
          console.log(err);
        }
      );
    },
    recommendVideo() {
      /**
      this.$api.timelineRecommendFn().then(
        res => {
          console.log(res.data);
        },
        err => {
          console.log(err);
        }
      );*/
    }
  }
};
</script>

<style></style>
