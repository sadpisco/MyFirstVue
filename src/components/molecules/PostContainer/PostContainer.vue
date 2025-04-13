<template>
  <section
    class="post-container"
    className="flex flex-wrap justify-center rounded-2xl w-full max-w-screen-layout gap-12 text-cyan-700"
  >
    <PostCard :card-info="cardInfo" />
  </section>
</template>
<script lang="ts" setup>
  import PostCard from "@/components/atoms/PostCard"
  const cardInfo = "Example Text"
</script>
<style scoped>
  .post-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
</style>
