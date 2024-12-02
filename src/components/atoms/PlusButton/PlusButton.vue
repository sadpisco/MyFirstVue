<template>
  <button
    class="rounded-2xl p-2 shadow-2xl bg-slate-300 font-extrabold cursor-pointer hover:bg-slate-400 hover:text-white"
    :onclick="saludar"
  >
    {{ counter }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlusButton",
  props: {},
  data() {
    const counter = 0;
    return { counter };
  },
  methods: {
    saludar() {
      this.counter++;
    },
  },
});
</script>

<style scoped />
