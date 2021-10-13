<template>
  <div>
    <topNavFind></topNavFind>
    <Find-container></Find-container>
  </div>
</template>

<script>
import topNavFind from "@/components/find/top-nav-find.vue";

import FindContainer from "@/views/find/components/FindContainer.vue";
export default {
  components: {
    topNavFind,
    FindContainer
  }
};
</script>

<style></style>
