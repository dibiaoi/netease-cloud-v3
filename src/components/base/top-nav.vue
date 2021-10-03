<template>
  <div class="top-nav">
    <van-icon name="wap-nav" size="25px" class="icon" :dot="true" />
    <slot></slot>
    <van-icon class="icon">
      <svg
        t="1632382934592"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3201"
        width="20"
        height="20"
      >
        <path
          d="M960 448a64 64 0 0 0-64 64A384 384 0 0 1 128 512a64 64 0 0 0-128 0 512 512 0 0 0 1024 0 64 64 0 0 0-64-64z"
          fill="#383B48"
          p-id="3202"
        ></path>
        <path
          d="M512 768a256 256 0 0 0 256-256V256a256 256 0 0 0-512 0v256a256 256 0 0 0 256 256zM384 256a128 128 0 0 1 256 0v256a128 128 0 0 1-256 0z"
          fill="#383B48"
          p-id="3203"
        ></path>
      </svg>
    </van-icon>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/global";
.top-nav {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-bottom: 0px;
  border-bottom: 0.5px solid #f5f5f5;
  background: #fff;
  .icon {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  slot {
    flex: 5;
  }
}
</style>
