<template>
  <div className="flex flex-col justify-center">
    <img alt="Vue logo" src="../assets/logo.png" className="self-center" />
    <PostContainer />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import PostContainer from "@/components/PostContainer.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    PostContainer,
  },
});
</script>
