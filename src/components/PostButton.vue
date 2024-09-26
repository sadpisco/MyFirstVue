<template>
  <button
    className="rounded-2xl p-2 shadow-2xl bg-slate-300 font-extrabold cursor-pointer"
    class="post-button"
    :onclick="() => console.log('123')"
  >
    Post
  </button>
</template>

<script lang="ts" setup></script>

<style scoped>
.post-button:hover {
  cursor: pointer;
  scale: 20px;
  background-color: grey;
  transition: all;
  transition-duration: 1s;
}
</style>
