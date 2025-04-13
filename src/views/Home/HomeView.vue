<template>
  <section class="flex min-h-screen w-full flex-col items-center justify-center bg-slate-600">
    <PostContainer />
  </section>
</template>

<script lang="ts">
  import PostContainer from "@/components/molecules/PostContainer"
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "HomePage",
    components: {
      PostContainer,
    },
  })
</script>
