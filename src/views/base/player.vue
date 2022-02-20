<template>
  <div class="player"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showLrc: false, // 切换唱片和歌词
      lrcTop: 200 + "px", // 歌词滑动
      nowTime: "00.00", // 播放开始时间
      songTime: "00.00", // 播放结束时间
      curLength: 0, // 进度条的位置
      progressLength: 0, // 进度条长度
      touchStartX: 0 // 拖拽开始位置
    };
  },
  props: ["id"],
  created() {
    this.$store.commit("play/setCurMusicId", id);
  },
  computed: {
    ...mapGetters("play", [
      "isPlay",
      "playBtnIcon",
      "curMusicId",
      "musicTitle",
      "artist",
      "musicPicUrl",
      "musicCurTime",
      "musicDuration",
      "lrc",
      "curSongsList",
      "musicListIndex",
      "autoNextSong"
    ])
  }
};
</script>

<style></style>
