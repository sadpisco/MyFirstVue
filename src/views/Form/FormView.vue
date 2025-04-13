<template>
  <section class="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-slate-50">
    <VModelInput />
    <ListingItems />
    <ActualForm />
  </section>
</template>
<script setup>
  import VModelInput from "@/components/atoms/VModelInput"
  import ListingItems from "@/components/atoms/ListingItems"
  import ActualForm from "@/components/atoms/ActualForm"
</script>
