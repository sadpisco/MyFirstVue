<template>
  <section class="border-white border-2 rounded-xl p-4 w-72">
    <h1 class="font-bold">Listing Items</h1>
    <div class="flex flex-col items-start justify-center">
      <label class="font-bold">Add New Item</label>
      <input
        v-model="newItem"
        placeholder="New Item"
        class="w-full px-1 rounded-md text-black"
      />
    </div>
    <ul>
      <li v-for="({ name, value, expired }, index) in exampleData" :key="value">
        {{ index }} - {{ name }} - Expired: {{ expired }}
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from "vue";

const newItem = ref("");
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
