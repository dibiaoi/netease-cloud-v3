<template>
  <div>
    <HorizontalList>
      <div class="icon-size">
        <van-image
          width="0.8rem"
          height="0.8rem"
          fit="contain"
          :src="icon.iconUrl"
        />
      </div>
      <label class="icon-txt">{{ icon.name }}</label>
    </HorizontalList>
  </div>
</template>

<script>
import HorizontalList from "@/components/base/horizontal-list.vue";
export default {
  data() {
    return {};

  },
    created() {
    this.$api.homepageDragonBallFn().then(
      res => {
        if (res.data.code == 200) {
          this.icons = res.data.data;
        }
      },
      err => {
        console.log(res.data);
      }
    );
  }
  components: {
    HorizontalList
  }
};
</script>

<style></style>
