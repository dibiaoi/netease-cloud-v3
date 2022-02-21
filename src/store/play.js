export default {
  namespaced: true,
  state: {
    isPlay: false, //播放状态
    playBtnIcon: "", //播放状态图标
    curSongsList: [], //当前歌单列表
    curMusicId: null, //当前音乐id
    curMusicUrl: "", //音乐播放地址
    musicDuration: 0, //音乐时长
    musicCurTime: 0, //当前音乐播放的位置
    changeMusicTime: 0, //改变音乐播放位置
    musicTitle: "", //歌名
    artist: "", //歌手
    musicPicUrl: null, //歌曲图片
    autoNextSong: true, //自动播放下一首
    lyric: "", //未处理的歌词数据
    lrc: [], //处理的歌词数据
    musicListIndex: -1 //当前歌曲在歌曲列表的位置
  },
  getters: {
    isPlay: s => s.isPlay,
    playBtnIcon: s => s.playBtnIcon, //播放状态图标
    curSongsList: state => state.curSongsList, //当前歌单列表
    curMusicId: s => s.curMusicId, //当前音乐id
    curMusicUrl: s => s.curMusicUrl, //音乐播放地址
    musicDuration: s => s.musicDuration, //音乐时长
    musicCurTime: s => s.musicCurTime, //当前音乐播放的位置
    changeMusicTime: s => s.changeMusicTime, //改变音乐播放位置
    musicTitle: s => s.musicTitle, //歌名
    artist: s => s.artist, //歌手
    musicPicUrl: s => s.musicPicUrl, //歌曲图片
    autoNextSong: s => s.autoNextSong, //自动播放下一首
    lyric: s => s.lyric, //未处理的歌词数据
    lrc: s => s.lrc, //处理的歌词数据
    musicListIndex: s => s.musicListIndex //当前歌曲在歌曲列表的位置
  },
  mutations: {
    setCurSongsList: (state, songsList) => {
      state.curSongsList = songsList;
    },
    setMusicListIndex: (state, index) => {
      state.musicListIndex = index;
    },
    setCurMusicId: (s, id) => {
      s.curMusicId = id;
    },
    setCurTime: (s, musicCurTime) => {
      s.musicCurTime = musicCurTime;
    },
    setIsPlay: (s, isPlay) => {
      s.isPlay = isPlay;
    },
    setDuration: (s, musicDuration) => {
      s.musicDuration = musicDuration;
    },
    setAutoNext: (s, autoNextSong) => {
      s.autoNextSong = autoNextSong;
    },
    setUrl: (s, url) => {
      s.curMusicUrl = url;
    },
    setTitle: (s, title) => {
      s.musicTitle = title;
    },
    setArtist: (s, artist) => {
      s.artist = artist;
    },
    setPicUrl: (s, musicPicUrl) => {
      s.musicPicUrl = musicPicUrl;
    },
    setChangeTime: (s, newTime) => {
      s.changeMusicTime = newTime;
    },
    setPlayBtnIcon: (s, iconName) => {
      s.playBtnIcon = iconName;
    },
    setLyric: (s, lyric) => {
      s.lyric = lyric;
    },
    setLrc: (s, lrc) => {
      s.lrc = lrc;
    }
  },
  actions: {},
  modules: {}
};
