<template>
  <section
    class="flex flex-col justify-center items-center w-full bg-slate-500 min-h-screen gap-2"
  >
    <VModelInput />
    <ListingItems />
  </section>
</template>
<script setup>
import VModelInput from "@/components/atoms/VModelInput";
import ListingItems from "@/components/atoms/ListingItems";
</script>
