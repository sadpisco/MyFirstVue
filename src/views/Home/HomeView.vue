<template>
  <section
    class="flex flex-col justify-center items-center w-full bg-slate-600 min-h-screen"
  >
    <img alt="Vue logo" src="../../assets/logo.png" className="self-center" />
    <PostContainer />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </section>
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/atoms/HelloWorld/HelloWorld.vue";
import PostContainer from "@/components/molecules/PostContainer/PostContainer.vue";
</script>
