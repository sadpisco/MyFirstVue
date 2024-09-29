<template>
  <section
    class="post-container"
    className="flex flex-wrap justify-between rounded-2xl w-full max-w-screen-layout gap-12"
  >
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </section>
</template>
<script lang="ts" setup>
import PostCard from "@/components/atoms/PostCard/PostCard.vue";
</script>

<style scoped>
.post-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
