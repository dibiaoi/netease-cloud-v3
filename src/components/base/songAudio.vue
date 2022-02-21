<template>
  <div class="song-audio">
    <audio
      :src="curMusicUrl"
      controls="controls"
      id="player"
      preload="true"
      @canplay="startPlay"
      @timeupdate="timeupdate"
      @ended="ended"
    >
      <!--（1）属性：controls，preload（2）事件：canplay，timeupdate，ended（3）方法：play()，pause() -->
      <!--controls：向用户显示音频控件（播放/暂停/进度条/音量）-->
      <!--preload：属性规定是否在页面加载后载入音频-->
      <!--canplay：当音频/视频处于加载过程中时，会发生的事件-->
      <!--timeupdate：当目前的播放位置已更改时-->
      <!--ended：当目前的播放列表已结束时-->
    </audio>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "song-audio",
  computed: {
    ...mapGetters("play", [
      "curMusicId", // 音乐id
      "curMusicUrl", // 音乐链接
      "curSongsList", // 存放的音乐
      "isPlay", // 播放状态
      "musicCurTime", // 当前音乐的播放位置
      "changeMusicTime", // 指定播放时刻
      "autoNextSong" // 用于触发自动播放下一首
    ])
  },
  watch: {
    // 得到id
    curMusicId: function() {
      this.getSong();
    },
    // 监听播放还是暂停
    isPlay: function() {
      this.togglePlay();
    },
    changeMusicTime: function() {
      //  跳到指定时刻播放
      let player = document.querySelector("#player");
      player.currentTime = this.changeMusicTime;
    }
  },
  methods: {
    // 得到id后获取歌曲
    getSong() {
      this.$store.commit("play/setCurTime", 0);
      this.$store.commit("play/setIsPlay", false);

      this.$api
        .songURLFn(this.curMusicId)
        .then(res => {
          this.$store.commit("play/setUrl", res.data.data[0].url);
        })
        .catch(error => {
          this.$store.commit("play/setUrl", "");
          console.log(error);
        });
    },
    // 开始/暂停
    togglePlay(e) {
      let player = document.querySelector("#player");
      if (this.isPlay) {
        player.play();
      } else {
        player.pause();
      }
    },
    // 获取歌曲链接后准备播放
    startPlay() {
      let player = document.querySelector("#player");
      this.$store.commit("play/setDuration", player.duration);
      // 开始播放;
      player.play();
      this.$store.commit("play/setIsPlay", true);
    },
    // 音乐播放时记录音乐的播放位置
    timeupdate() {
      let player = document.querySelector("#player");
      this.$store.commit("play/setCurTime", player.currentTime);
    },
    // 音乐播放结束时触发
    ended() {
      this.$store.commit("play/setIsPlay", false);
      this.$store.commit("play/setCurTime", 0);
      this.$store.commit("play/setAutoNext", !this.autoNextSong);
    }
  }
};
</script>

<style>
#player {
  display: none;
}
</style>
