<template>
  <div class="login-contanier">
    <div class="login-navbar">
      <van-icon v-show="step == 'num'" class="back-icon" name="cross" />
      <van-icon
        v-show="step == 'captcha'"
        @click="step = 'num'"
        class="back-icon"
        name="arrow-left"
      />
      <span>手机号登录</span>
    </div>
    <div class="login-content" v-show="step == 'num'">
      <p>登录体验更多精彩</p>
      <p>末注册手机号登最后将自动创建帐号</p>
      <div class="login-input">
        <div class="select-area">+86</div>
        <div>
          <van-field
            v-model="loginPhoneNum"
            clearable
            placeholder="请输入手机号"
            :formatter="onlyNum"
          />
        </div>
      </div>
    </div>
    <div class="login-psw" v-show="step == 'psw'">
      <div class="login-input">
        <div>
          <van-field
            v-model="loginPsw"
            type="password"
            maxlength="18"
            autofocus
            placeholder="请输入密码"
          />
          <span>忘记密码？</span>
        </div>
      </div>
    </div>
    <div class="login-content login-captcha" v-show="step == 'captcha'">
      <p>请输入验证码</p>
      <div send>
        已发送至+86
        {{
          loginPhoneNum.slice(0, 3) +
            "*".repeat(4) +
            loginPhoneNum.substr(-4, 4)
        }}
        <div resend v-if="resend">重新获取</div>
        <div wait v-else>{{ count }}s</div>
      </div>
      <van-password-input
        :value="captcha"
        :length="4"
        :focused="showKeyboard"
      ></van-password-input>
    </div>
    <button v-show="step == 'num'" @click="verifyPhone" class="next-btn">
      下一步
    </button>
    <button v-show="step != 'num'" @click="login()" class="next-btn">
      登录
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // num填写手机号页 captcha验证码页 psw密码登录页
      step: "captcha",
      loginPhoneNum: "13974975922",
      loginPsw: undefined,
      captcha: undefined,
      resend: false,
      count: 0
    };
  },
  methods: {
    verifyPhone() {
      let phone = this.loginPhoneNum;
      if (!phone) {
        this.$Toast({ message: "请输入手机号", position: "bottom" });
      } else if (/^1\d{10}$/.test(phone) == false) {
        this.$Toast({ message: "请输入正确的手机号", position: "bottom" });
      } else {
        this.step = "captcha";
        sendCaptcha();
      }
    },
    onlyNum(val) {
      if (/\D|^0/g.test(val)) {
        return val.replace(/\D|^0|\D{11}/g, "");
      } else if (val.length > 11) {
        return val.slice(0, 11);
      }
      return val;
    },
    sendCaptcha() {
      // 1.发送验证码
      // 2.倒计时
      
    },
    login() {
      // 网络请求
      let psw = this.$md5(this.loginPsw);
      this.$api.loginCellphoneFn(this.loginPhoneNum, psw, this.captcha).then(
        res => {
          console.log(res.data);
          this.$store.dispatch("userInfo/setInfo", res.data);
        },
        err => {
          console.log(res.data);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/normal";
$nav-fs: 0.3rem;
.login-contanier {
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  background-color: #fff;
  box-sizing: border-box;
  .login-navbar {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: $nav-fs;
    @include flex(row, start, center);
    .back-icon {
      padding: 0.2rem $nav-fs 0.2rem 0;

      font-size: $nav-fs + 0.1rem;
    }
  }
  .login-content {
    margin: 0.2rem 0;
    p,
    div[send] {
      line-height: 0.5rem;
      &:nth-child(1) {
        font-size: $nav-fs;
        font-weight: 500;
      }
      &:nth-child(2) {
        font-size: 0.2rem;
        font-weight: 500;
        color: #e0e0e0;
      }
    }
    .login-input {
      border-bottom: 0.01rem solid #e0e0e0;
      @include flex(row, start, center);
      div {
        .van-cell {
          flex: 1;
          line-height: 0.3rem;
        }
      }
      div:nth-child(2) {
        flex: 1;
      }
    }
  }
  .login-psw {
    border-bottom: 0.01rem solid #e0e0e0;
    margin: 0.2rem 0;
    @include flex(row, start, center);
    div {
      width: 100%;
      @include flex(row, center, center);
      .van-cell {
        padding: 0.1rem 0;
        flex: 4;
        line-height: 0.3rem;
      }
      span {
        flex: 1;
        font-size: 0.2rem;
        color: rgb(13, 72, 148);
        cursor: pointer;
      }
    }
  }
  .login-captcha {
    div[send] {
      @include flex(row, space-between);
    }
    .van-password-input {
      margin: 0;
    }
  }
  .next-btn {
    font-weight: 600;
    font-size: 0.2rem;
    line-height: 0.7rem;
    background: #fe3a3b;
    color: #fff;
    @include btn(100%, 0.7rem);
  }
}
</style>
