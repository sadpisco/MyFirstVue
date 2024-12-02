<template>
  <section
    class="flex flex-col justify-center items-center w-full bg-slate-50 min-h-screen gap-4"
  >
    <VModelInput />
    <ListingItems />
    <ActualForm />
  </section>
</template>
<script setup>
import VModelInput from "@/components/atoms/VModelInput";
import ListingItems from "@/components/atoms/ListingItems";
import ActualForm from "@/components/atoms/ActualForm";
</script>
