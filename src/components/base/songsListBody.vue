<template>
  <div>
    <div id="item-top" v-if="playListDetails!==null">
      <div class="item-l">
        <!--播放-->
        <div>
          <svg class="icon-iconfont" aria-hidden="true">
            <use xlink:href="#icon-shipin" />
          </svg>
        </div>
        播放全部(共{{ trackCount }}首)
      </div>
      <div class="item-r">+ 收藏({{ collectNum }})</div>
    </div>
    <div class="song-list-dic">
      <div
        @click="toPlayPage(song.id, index)"
        v-for="(song, index) in curSongsList"
        :key="index"
        class="song-item"
      >
        <!-- <div >{{ song.id }}</div> -->
        <!--序号-->
        <div class="line-l">{{ index + 1 }}</div>
        <!--歌曲-->
        <div class="line-m">
          <span>{{ song.name }}</span>
          <span>{{ song.ar[0].name }} - {{ song.al.name }}</span>
        </div>
        <!--三个点-->
        <div class="line-r">
          <svg class="icon-iconfont" aria-hidden="true">
            <use xlink:href="#icon-gengduoxiao" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false,
      collectNum: "",
      trackCount: 0
    };
  },
  created() {
    console.log("curSongsList", this.curSongsList);
  },
  mounted() {},

  methods: {
    toPlayPage(id, index) {
      this.$store.commit("play/setMusicListIndex", index);
      this.$router.push({
        path: "/player/" + id
      });
    }
  },
  props: ["playListDetails"],
  computed: {
    ...mapGetters("play", ["curSongsList"])
  },
  watch: {
    playListDetails(newVal) {
      console.log("playListDetails", newVal);
      this.show = true;
      const { playlist } = newVal;
      this.collectNum = playlist.subscribedCount;
      this.trackCount = playlist.trackCount;
    }
  }
};
</script>

<style scoped>
/*------------------白红框框----------------------*/
#item-top {
  top: 60px;
  position: sticky;
  display: flex;
  width: 100%;
  z-index: 1;
}

#item-top .item-l,
#item-top .item-r {
  line-height: 60px;
  vertical-align: middle;
  height: 60px;
}

#item-top .item-l {
  width: 60%;
  background-color: #fcfdfe;
  border-radius: 20px 0 0 0;
}

#item-top .item-l > div {
  display: inline-block;
  width: 30px;
  height: 49px;
  margin-left: 15px;
  vertical-align: middle;
}

#item-top .item-l .icon {
  color: black;
}

#item-top .item-r {
  width: 40%;
  background-color: #d7463f;
  color: white;
  border-radius: 0 20px 0 0;
  text-align: center;
}
/*--------------------歌曲列表--------------------------*/
.song-list-dic {
  width: 100%;
  position: relative;
}

.song-list-dic .song-item {
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e4e5;
}

.song-list-dic .song-item .line-l,
.song-list-dic .song-item .line-r {
  width: 50px;
  height: 50px;
  text-align: center;
  color: #a1a2a2;
  line-height: 60px;
}

.song-list-dic .song-item .line-m {
  width: 80%;
  height: 50px;
  overflow: hidden;
  font-size: 1em;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.song-list-dic .song-item .line-m span:last-child {
  font-size: 0.8em;
  color: #959696;
}

.song-list-dic .song-item .icon {
  color: #a1a2a2;
}

.icon {
  color: #ffffff;
}
</style>
