<template>
  <div class="hlist">
    <div class="top">
      <!-- 左右 -->
      <span class="headline">{{ headline }}</span>
      <div class="more">更多<van-icon name="arrow" /></div>
    </div>
    <div class="bottom">
      <!-- list -->
      <div
        class="block"
        v-for="songs in infoList"
        :key="songs.id"
        @click="turnToRouter(songs)"
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["headline", "infoList", "type"],
  created() {},
  mounted() {},
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
