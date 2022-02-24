<template>
  <div
    class=""
    :class="{
      'bottom-card-square': rangeType === 'square',
      'bottom-card-horizontal': rangeType === 'horizontal'
    }"
  >
    <div
      class="block"
      v-for="songs in infoList"
      :key="songs.id"
      v-throttle="turnToRouter(songs)"
    >
      <!-- 上下结构 -->
      <div class="front">
        <span class="cover"
          ><van-icon name="play-circle-o" />&nbsp;{{
            numberConversion(songs.playCount)
          }}</span
        >
        <img class="pic" :src="songs.picUrl" />
      </div>

      <label class="title">{{ songs.name }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  directives: {
  },
  props: ["infoList", "rangeType"],
  created() {
    console.log(this.rangeType);
  },
  methods: {
    numberConversion(value) {
      const newValue = ["", "", ""];
      let fr = 1000;
      let num = 3;
      let txt = "";
      let fm = 1;
      while (value / fr >= 1) {
        fr *= 10;
        num += 1;
      }
      if (num > 5 && num < 9) {
        newValue[0] = parseInt(value / 10000);
        newValue[1] = "万";
      }
      if (value < 100000) {
        newValue[0] = value + "";
        newValue[1] = "";
      }
      if (num >= 9 && num <= 16) {
        // 亿
        txt = (num - 8) / 3 > 1 ? "千亿" : "亿";
        txt = (num - 8) / 4 > 1 ? "万亿" : txt;
        txt = (num - 8) / 7 > 1 ? "千万亿" : txt;
        fm = 1;
        if (txt === "亿") {
          fm = 100000000;
          //   160244096
        } else if (txt === "千亿") {
          fm = 100000000000;
        } else if (txt === "万亿") {
          fm = 1000000000000;
        } else if (txt === "千万亿") {
          fm = 1000000000000000;
        }
        if (value % fm === 0) {
          newValue[0] = parseInt(value / fm) + "";
        } else {
          newValue[0] = parseFloat(value / fm).toFixed(1) + "";
        }
        newValue[1] = txt;
      }

      return newValue.join("");
    },
    turnToRouter(item) {
      this.$store.commit("setPlaylistInfo", item);
      console.log("跳转到歌单详情页");
      this.$router.push({ name: "songsList", query: { playlistId: item.id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-card-square {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin: 0.2rem 0;
  .block {
    padding: 0.1rem;
    width: 30%;
    height: auto;
    flex: 0 0 30%;
  }
}
.bottom-card-horizontal {
  display: flex;
  overflow-x: hidden;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  margin: 0.2rem 0;
  .block {
    padding: 0.1rem;
  }
}
</style>
<style scoped>
.front {
  position: relative;
}
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
.title {
  font-size: 0.2rem;
  text-align: left;
}
</style>
