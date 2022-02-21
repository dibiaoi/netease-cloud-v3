<template>
  <div class="song-list">
    <div
      class="bac-bur"
      :style="{ backgroundImage: 'url(' + coverImgUrl + ')' }"
    ></div>
    <div
      class="bu-kong"
      :style="{ backgroundImage: 'url(' + coverImgUrl + ')' }"
    ></div>
    <div class="song-head">
      <!--返回-->
      <router-link :to="{ name: 'find' }">
        <div class="back">
          <svg class="icon-iconfont" aria-hidden="true">
            <use xlink:href="#icon-fanhui01" />
          </svg>
        </div>
      </router-link>
      <div class="song-title">歌单</div>
      <div class="san-dian">
        <svg class="icon-iconfont" aria-hidden="true">
          <use xlink:href="#icon-gengduoxiao" />
        </svg>
      </div>
      <router-link :to="{ name: 'player' }">
        <!-- 右上固定的当前播放歌曲 -->
        <img src="@/assets/img/music.png" class="musicIcon" />
      </router-link>
    </div>
    <!--歌单信息-->
    <div class="song-box">
      <div class="song-dic">
        <!--左侧图片-->
        <div class="dic-l">
          <img :src="coverImgUrl" alt />
        </div>
        <!--右侧信息-->
        <div class="dic-r">
          <div class="song-name">{{ name }}</div>
          <div class="song-author">
            <img class="author-pic" :src="avatarUrl" alt />
            <span class="author-name">{{ nickname }}</span>
          </div>
        </div>
      </div>
    </div>
    <the-icon
      textColor="#ffffff"
      iconColor="#ffffff"
      fontSize="12px"
      :data="songListIcon"
    ></the-icon>
    <div class="header">
      <Songs-List-Body :playListDetails="playListDetails"></Songs-List-Body>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { songListIcon } from "@/assets/js/icon";
import TheIcon from "@/components/base/TheIcon.vue";
import songsListBody from "@/components/base/songsListBody.vue";
export default {
  data() {
    return {
      playListDetails: null,
      name: "",
      nickname: "",
      avatarUrl: "",
      commentCount: "",
      shareCount: "",
      coverImgUrl: "",
      songListIcon
    };
  },
  props: ["playlistId"],
  created() {
    console.log("playlistId", this.playlistId);
    this.$api
      .playlistDetailFn(this.playlistId)
      .then(res => {
        let { code, playlist, privileges } = res.data;
        // console.log(res.data);
        if (code == "200") {
          this.$store.commit("play/setCurSongsList", playlist.tracks);
          this.coverImgUrl = playlist.coverImgUrl;
          this.name = playlist.name;
          this.avatarUrl = playlist.creator.avatarUrl;
          this.nickname = playlist.creator.nickname;
          this.songListIcon[0].name = playlist.commentCount;
          this.songListIcon[1].name = playlist.shareCount;
          this.playListDetails = { playlist, privileges };
        }
      })
      .catch(err => console.log(err));
  },
  computed: {
    ...mapGetters("play", ["curMusicId"])
  },
  mounted() {},
  components: {
    "the-icon": TheIcon,
    "Songs-List-Body": songsListBody
  }
};
</script>

<style scoped>
.bac-bur {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  height: 300px;
  background-position: center top;
  background-size: 100%;
  background-attachment: fixed;
  filter: blur(30px);
}
.bu-kong {
  position: fixed;
  height: 55px;
  width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center top;
  background-size: 100%;
  background-attachment: fixed;
  filter: blur(10px);
  z-index: 1;
}
.song-head {
  position: fixed;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
}

.song-head .song-title {
  flex: 1;
  color: white;
  font-size: 1.3em;
  padding: 0 20px;
}

.song-head div {
  width: 40px;
}

.song-head .icon {
  font-size: 25px;
}

.song-head .song-item4 .icon {
  font-size: 1.4em;
  color: white;
}
/*-----------------歌单信息显示区-----------------------*/
.song-box {
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.song-dic {
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  min-height: 150px;
  width: 100%;
  align-items: center;
  color: white;
  padding: 0 5%;
}

.song-dic > .dic-l {
  display: flex;
  justify-content: center;
  width: 40%;
}

.song-dic > .dic-l > img {
  height: 110px;
}

.song-dic > .dic-r {
  height: 110px;
}

.song-dic > .dic-r .song-name {
  margin-top: 5px;
  padding: 0 10%;
}

.song-dic > .dic-r .song-author {
  padding-left: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.song-dic > .dic-r .song-author .author-pic {
  margin-right: 10px;
}

.song-dic > .dic-r .song-author img {
  width: 25px;
  border-radius: 25px;
}

.song-dic > .dic-r .song-author span {
  color: #dbd6d2;
  font-size: 0.9em;
}
</style>
