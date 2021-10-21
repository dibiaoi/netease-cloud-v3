<template>
  <div class="login-contanier">
    <div class="login-navbar">
      <van-icon class="back-icon" name="cross" />
      <span>手机号登录</span>
    </div>
    <div class="login-content">
      <p>登录体验更多精彩</p>
      <p>末注册手机号登最后将自动创建帐号</p>
      <div class="login-input">
        <div class="select-area">+86</div>
        <div>
          <van-field v-model="phone" placeholder="请输入手机号" 
          clear-trigger="focus"/>
        </div>
      </div>
    </div>
    <button>下一步</button>
  </div>
</template>

<script>
export default {};
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
    p {
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
          line-height: 0.3rem;
        }
      }
    }
  }
}
</style>
