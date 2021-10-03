import axios from "axios";
axios.defaults.timeout = 30000;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

import {
  bannerSwiper,
  loginCellphone,
  homepageDragonBall
} from "@/api/config.js";
export default {
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
      params: {
        phone: phone || "",
        password: password || ""
      }
    });
  }
};
