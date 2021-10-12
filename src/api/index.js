import axios from "axios";
axios.defaults.timeout = 30000;

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";

import {
    bannerSwiper,
    loginCellphone,
    homepageDragonBall,
    relatedPlaylist,
    personalized
} from "@/api/config.js";

axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = localStorage.getItem("UserToken");
        if (token) {
            // config.headers.token = token;
            // config.headers.token = token;
            // console.log(config.headers.token);
        } else {
            console.log("当前没有token，应该获取token");
        }
        return config;
    },
    error => {
        return Promise.error(error);
    }
);
export default {
    /**
     *发现页
     */
    /**
     * 根据歌单推荐歌单
     *@param {number} id : 歌单 id
     */
    relatedPlaylistFn() {
        return axios.get(relatedPlaylist, {
            params: { id }
        });
    },
    /**
     * 推荐歌单
     *@param {number} limit : 歌单数
     */
    personalizedFn(limit) {
        return axios.get(personalized, {
            params: { limit }
        });
    },
    /**发现页的icons */
    homepageDragonBallFn() {
        return axios.get(homepageDragonBall);
    },
    bannerSwiperFn() {
        return axios.get(bannerSwiper);
    },
    /**
     * 用户通过手机登录
     * @param {number} phone 手机号
     * @param {String} password 密码
     */
    loginCellphoneFn(phone, password) {
        return axios.post(loginCellphone, {
            phone: phone || "",
            password: password || ""
        });
    }
};