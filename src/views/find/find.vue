<template>
  <div>
    <topNavFind></topNavFind>
    <Find-container></Find-container>
    <Footer></Footer>
  </div>
</template>

<script>
import topNavFind from "@/components/find/top-nav-find.vue";
import Footer from "@/components/base/TheFooter.vue";

import FindContainer from "@/views/find/components/FindContainer.vue";
export default {
  components: {
    topNavFind,
    FindContainer,
    Footer
  }
};
</script>

<style></style>
