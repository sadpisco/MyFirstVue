<template>
  <section
    class="post-container"
    className="flex flex-wrap justify-between rounded-2xl w-full max-w-screen-layout gap-12 text-cyan-700"
  >
    <PostCard :cardInfo="cardInfo" />
    <PostCard :cardInfo="cardInfo" />
    <PostCard :cardInfo="cardInfo" />
    <PostCard :cardInfo="cardInfo" />
  </section>
</template>
<script lang="ts" setup>
import PostCard from "@/components/atoms/PostCard/PostCard.vue";
const cardInfo =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
</script>
<style scoped>
.post-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
