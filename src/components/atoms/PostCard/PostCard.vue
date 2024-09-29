<template>
  <div
    class="post-card"
    className="w-64 h-auto flex flex-col justify-center gap-3 bg-slate-100 p-5 rounded-xl shadow-2xl"
  >
    <h3 className="font-semibold">Titulo</h3>
    <p className="text-sm">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
      voluptates eos nemo officiis repudiandae maxime illo sapiente, ullam optio
      quod dolores velit eius similique dolore facere ducimus harum dignissimos
      at?
    </p>
    <PostButton />
  </div>
</template>

<script lang="ts" setup>
import PostButton from "@/components/atoms/PostButton/PostButton.vue";
</script>

<style scoped></style>
