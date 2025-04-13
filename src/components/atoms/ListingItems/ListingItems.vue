<template>
  <section
    class="flex w-72 flex-col justify-center gap-4 rounded-xl bg-slate-200 p-4 text-black shadow-2xl shadow-black"
  >
    <h1 class="font-bold">Listing Items</h1>
    <div class="flex flex-col items-start justify-center">
      <label class="font-bold">Add New Item</label>
      <input
        v-model="newItem"
        type="text"
        placeholder="New Item"
        class="w-full rounded-md px-1 text-black"
      />
    </div>
    <div>
      <button
        class="w-full rounded-md bg-slate-300 p-1 hover:bg-slate-500 hover:text-slate-100"
        @click="
          exampleData.push({
            name: newItem,
            value: exampleData.length + 1,
            expired: false,
          })
        "
      >
        Add Item
      </button>
    </div>
    <ul>
      <li v-for="({ name, value, expired }, index) in exampleData" :key="value" class="w-fit">
        {{ index }} - {{ name }} - Expired: {{ expired }}
      </li>
    </ul>
  </section>
</template>
<script setup>
  import { ref } from "vue"

  const newItem = ref("")
  const exampleData = ref([
    {
      name: "Example 1",
      value: 9,
      expired: true,
    },
    {
      name: "Example 2",
      value: 8,
      expired: false,
    },
    {
      name: "Example 3",
      value: 7,
      expired: true,
    },
    {
      name: "Example 4",
      value: 6,
      expired: false,
    },
    {
      name: "Example 5",
      value: 9,
      expired: false,
    },
  ])
</script>
