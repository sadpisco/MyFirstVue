<template>
  <section class="border-white border-2 rounded-xl p-4">
    <h1 v-if="conditional">Form View</h1>
    <p>{{ text || "Fallback Text" }}</p>
    <input v-model="text" class="text-black" placeholder="Write here" />
  </section>
</template>
<script setup>
import { ref } from "vue";
const text = ref("");
const conditional = ref("0");
</script>
