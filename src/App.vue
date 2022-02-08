<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, provide, type Ref } from "vue";
import router from "./router";
const clientWidth: Ref<number | null> = ref(null);
clientWidth.value = document.documentElement.clientWidth;
const asideVisible = ref(clientWidth.value <= 500 ? false : true);
provide("asideVisible", asideVisible);
provide("clientWidth", clientWidth);
router.afterEach(() => {
  if ((clientWidth.value as number) <= 500) {
    asideVisible.value = false;
  }
});
window.onresize = () => {
  clientWidth.value = document.body.clientWidth;
  if (clientWidth.value <= 500) {
    asideVisible.value = false;
  } else {
    asideVisible.value = true;
  }
};
</script>

<template>
  <!-- <Topnav /> -->
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
