<template>
  <button
    className="rounded-2xl p-2 shadow-2xl bg-slate-300 font-extrabold cursor-pointer"
    class="post-button"
    :onclick="consolear"
  >
    Post
  </button>
</template>

<script lang="ts" setup>
const consolear = () => {
  console.log("Post");
};
</script>

<style scoped>
.post-button:hover {
  cursor: pointer;
  scale: 20px;
  background-color: grey;
  transition: all;
  transition-duration: 1s;
}
</style>
