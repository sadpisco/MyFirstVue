<template>
  <section className=" bg-slate-500 shadow-2xl rounded-lg">
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </section>
</template>
<script>
import PostCard from "./PostCard.vue";
import { defineComponent } from "vue";

console.log(slotuiui);

export default defineComponent({
  name: "PostContainer",
  props: {
    slotuiui: String,
  },
});
</script>
