<template>
  <div
    class="post-card"
    className="w-64 h-auto flex flex-col justify-center gap-3 bg-slate-100 p-5 rounded-xl shadow-2xl"
  >
    <h3 className="font-semibold text-black">Titulo</h3>
    <p className="text-sm">{{ cardInfo }}</p>
    <PlusButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlusButton from "../PlusButton/PlusButton.vue";
export default defineComponent({
  name: "PostCard",
  components: {
    PlusButton,
  },
  props: {
    cardInfo: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped></style>
