<template>
  <div class="home flex flex-col justify-center">
    <img alt="Vue logo" src="../assets/logo.png" className="bg-slate-200" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <PostContainer slotuiui="123" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostContainer from "@/components/PostContainer.vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
