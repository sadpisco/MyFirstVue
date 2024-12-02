<template>
  <section
    class="rounded-xl p-4 w-72 flex flex-col justify-center gap-4 shadow-2xl shadow-black bg-slate-200 text-black"
  >
    <h1 v-if="conditional" class="font-bold">V-Model</h1>
    <div class="flex flex-col items-start justify-center">
      <p class="font-bold">Real time text: {{ text || "Fall back text" }}</p>
      <input
        v-model="text"
        class="w-full px-1 rounded-md text-black"
        placeholder="Write here"
      />
    </div>
    <div class="flex flex-col items-start">
      <p class="font-bold">Real time RadioValue: {{ radioValue }}</p>
      <div>
        <input
          type="radio"
          value="high"
          class="hover:cursor-pointer"
          v-model="radioValue"
        />
        <label>high</label>
      </div>
      <div>
        <input
          type="radio"
          value="medium"
          class="hover:cursor-pointer"
          v-model="radioValue"
        />
        <label>medium</label>
      </div>
      <div>
        <input
          type="radio"
          value="low"
          class="hover:cursor-pointer"
          v-model="radioValue"
        />
        <label>low</label>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <p class="font-bold">Real time SelectValue: {{ selectValue }}</p>
      <div class="w-full">
        <select
          v-model="selectValue"
          class="w-full text-black rounded-md px-2 hover:cursor-pointer"
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
        <input
          type="checkbox"
          v-model="booleanCheck"
          class="hover:cursor-pointer"
        />
        <label>Dark mode</label>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <p class="font-bold">Real time SelectedOptions: {{ arrayResult }}</p>
      <ul>
        <li
          v-for="(item, index) in arrayOptions"
          v-bind:key="index"
          class="w-fit"
        >
          <input
            type="checkbox"
            :value="item"
            v-model="arrayResult"
            class="hover:cursor-pointer"
          />
          <label>{{ item }}</label>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const text = ref("");
const radioValue = ref("high");
const selectValue = ref("0");
const conditional = ref("0");
const booleanCheck = ref(false);
const arrayResult = ref([]);
const arrayOptions = ref(["red", "blue", "green", "violet", "black", "white"]);
</script>
