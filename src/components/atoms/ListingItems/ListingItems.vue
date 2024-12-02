<template>
  <section class="border-white border-2 rounded-xl p-4">
    <h1>Listing Items</h1>
    <ul>
      <li v-for="({ name, value, expired }, index) in exampleData" :key="value">
        {{ index }} - {{ name }} - Expired: {{ expired }}
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from "vue";
const exampleData = ref([
  {
    name: "Example Data 1",
    value: 9,
    expired: true,
  },
  {
    name: "Example Data 2",
    value: 8,
    expired: false,
  },
  {
    name: "Example Data 3",
    value: 7,
    expired: true,
  },
  {
    name: "Example Data 4",
    value: 6,
    expired: false,
  },
  {
    name: "Example Data 5",
    value: 9,
    expired: false,
  },
]);
</script>
