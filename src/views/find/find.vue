<template>
  <div>
    <topNavFind></topNavFind>
    <Find-container></Find-container>
    <Horizontal-List></Horizontal-List>
  </div>
</template>

<script>
import topNavFind from "@/components/find/top-nav-find.vue"; 
import HorizontalList from "@/components/base/horizontal-list.vue"; 
import FindContainer from "@/views/find/components/FindContainer.vue";
export default {
  components: {
    topNavFind,
    FindContainer,
    HorizontalList
  }
};
</script>

<style></style>
