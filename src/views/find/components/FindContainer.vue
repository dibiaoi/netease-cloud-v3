<template>
  <div>
    <Swiper></Swiper>
    <HorizontalList></HorizontalList>
  </div>
</template>

<script>
import swiper from "@/components/base/swiper.vue";
import HorizontalList from "@/components/base/horizontal-list.vue";
export default {
  data() {
    return {};
  },
  components: {
    Swiper: swiper,
    HorizontalList
  }
};
</script>

<style></style>
