<template>
  <div class="songList">
    <div class="headerBar">
      <van-icon class="back" @click="$router.go(-1)" name="arrow-left" />
      <router-link :to="{ name: 'player' }"
        ><!-- 右上固定的当前播放歌曲-->
        <img src="@/assets/img/music.png" class="musicIcon" />
      </router-link>
      <img src="@/assets/img/more1.png" class="more" />
      <!-- 歌单名-->
      <label class="songFont">{{ playlistInfo.name }}</label>
    </div>
    <div class="header">
      <Songs-List-Body :playListDetails="playListDetails"></Songs-List-Body>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import songsListBody from "@/components/base/songsListBody.vue";
export default {
  data() {
    return {
      playListDetails: null,
      nickname: "",
      avatarUrl: "",
      commentCount: "",
      shareCount: ""
    };
  },
  created() {
    // console.log("playlistInfo", this.playlistInfo);
    this.$api
      .playlistDetailFn(this.playlistInfo.id)
      .then(res => {
        let { code, playlist, privileges } = res.data;
        // console.log(res.data);
        if (code == "200") {
          this.$store.commit("play/setCurSongsList", privileges);
          this.playListDetails = { playlist, privileges };
        }
      })
      .catch(err => console.log(err));
  },
  computed: {
    ...mapGetters(["playlistInfo"])
  },
  mounted() {},
  components: {
    "Songs-List-Body": songsListBody
  }
};
</script>

<style scoped>
.songList {
  width: 100%;
  position: relative;
  overflow-x: hidden;
}
.headerBar {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  background-color: #db4139;
}
.back {
  padding: 10px;
  float: left;
}
.more,
.musicIcon {
  padding: 10px;
  float: right;
}
.songFont {
  width: calc(100% - 150px);
  color: white;
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 占据fixed的空间 */
.emptyClass {
  width: 100%;
  height: 50px;
  position: relative;
  left: 0;
  top: 0;
}
.header {
  width: 100%;
  position: relative;
}
/* 毛玻璃背景图 */
.blurBg {
  width: 100%;
  /* 搜索框50px + 作者部分40vw + 功能bar66px + 20px圆角边框兼容移动端不显示圆角*/
  height: calc(136px + 40vw);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -99;
  overflow: hidden;
  filter: blur(40px);
  -webkit-filter: blur(40px);
  -moz-filter: blur(40px);
  -ms-filter: blur(40px);
  -o-filter: blur(40px);
}
.blurBg::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
}
.searchBox {
  width: 100%;
  height: 30px;
  position: relative;
  margin-bottom: 20px;
}
.search {
  width: 90%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  margin: 10px 0;
  line-height: 30px;
  border: 1px solid #c0c0c0;
  border-radius: 30px;
  /* background: url(.../.../assets/img/search.png) no-repeat 30% 6px; */
  padding-left: calc(30% + 10px);
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  color: #c0c0c0;
}
.songList::after {
  content: "";
  width: 100%;
  height: 50px;
  position: relative;
  left: 0;
  bottom: 0;
  display: block;
}
</style>
