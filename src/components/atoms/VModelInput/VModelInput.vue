<template>
  <section>
    <h1 v-if="conditional">Form View</h1>
    <p>{{ text || "Fallback Text" }}</p>
    <input v-model="text" class="text-black" />
  </section>
</template>
<script setup>
import { ref } from "vue";
const text = ref("");
const conditional = ref("0");
</script>
