<template>
  <section
    class="flex w-72 flex-col justify-center gap-4 rounded-xl bg-slate-200 p-4 text-black shadow-2xl shadow-black"
  >
    <h1 v-if="conditional" class="font-bold">V-Model</h1>
    <div class="flex flex-col items-start justify-center">
      <p class="font-bold">Real time text: {{ text || "Fall back text" }}</p>
      <input v-model="text" class="w-full rounded-md px-1 text-black" placeholder="Write here" />
    </div>
    <div class="flex flex-col items-start">
      <p class="font-bold">Real time RadioValue: {{ radioValue }}</p>
      <div>
        <input v-model="radioValue" type="radio" value="high" class="hover:cursor-pointer" />
        <label>high</label>
      </div>
      <div>
        <input v-model="radioValue" type="radio" value="medium" class="hover:cursor-pointer" />
        <label>medium</label>
      </div>
      <div>
        <input v-model="radioValue" type="radio" value="low" class="hover:cursor-pointer" />
        <label>low</label>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <p class="font-bold">Real time SelectValue: {{ selectValue }}</p>
      <div class="w-full">
        <select
          v-model="selectValue"
          class="w-full rounded-md px-2 text-black hover:cursor-pointer"
        >
          <option disabled class="text-black">Select 1 to 5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <p class="font-bold">Real time BooleanCheck: {{ booleanCheck }}</p>
      <div>
        <input v-model="booleanCheck" type="checkbox" class="hover:cursor-pointer" />
        <label>Dark mode</label>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <p class="font-bold">Real time SelectedOptions: {{ arrayResult }}</p>
      <ul>
        <li v-for="(item, index) in arrayOptions" :key="index" class="w-fit">
          <input v-model="arrayResult" type="checkbox" :value="item" class="hover:cursor-pointer" />
          <label>{{ item }}</label>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
  import { ref } from "vue"
  const text = ref("")
  const radioValue = ref("high")
  const selectValue = ref("0")
  const conditional = ref("0")
  const booleanCheck = ref(false)
  const arrayResult = ref([])
  const arrayOptions = ref(["red", "blue", "green", "violet", "black", "white"])
</script>
