const ip = "localhost";
// const ip = "192.168.43.214";
const port = "3000";
const baseURL = `http://${ip}:${port}`;
const URL = `http://${ip}:${port}`;

const API = process.env.NODE_ENV === "development" ? baseURL : "";
// const API = baseURL;
export const bannerSwiper = API + "/banner?type=1";
//localhost:3000/login/cellphone?phone=13974975922&password=123123
export const loginCellphone = API + "/login/cellphone"; //手机号登录
export const captcha = API + "/captcha/sent"; //发送验证码
export const homepageDragonBall = API + "/homepage/dragon/ball"; //首页-发现-圆形图标入口列表
export const relatedPlaylist = API + "/related/playlist"; //根据歌单id相关歌单推荐
export const personalized = API + "/personalized"; //歌单推荐 limit
export const timelineRecommend = API + "/video/timeline/recommend"; //推荐视频
export const playlistDetail = API + "/playlist/detail"; //歌单详情
export const songURL = API + "/song/url"; //音乐url