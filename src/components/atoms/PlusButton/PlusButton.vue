<template>
  <button
    class="cursor-pointer rounded-2xl bg-slate-300 p-2 font-extrabold shadow-2xl hover:bg-slate-400 hover:text-white"
    @click="saludar"
  >
    {{ counter }}
  </button>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "PlusButton",
    props: {},
    data() {
      const counter = 0
      return { counter }
    },
    methods: {
      saludar() {
        this.counter++
      },
    },
  })
</script>

<style scoped />
