<!--
 * @Description: 
 * @Author: yinlele
 * @Date: 2022-02-07 19:07:54
 * @LastEditTime: 2022-02-07 19:07:57
 * @LastEditors: yinlele
 * @FilePath: /y-ui/src/components/Markdown.vue
-->
<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>