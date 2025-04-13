<template>
  <div
    class="post-card flex h-auto w-64 flex-col justify-center gap-3 rounded-xl bg-slate-100 p-5 shadow-2xl"
  >
    <h3 class="font-semibold text-black">Titulo</h3>
    <input v-model="inputData" type="text" @focusout="resetInput" />
    {{ inputData }}
    <PlusButton />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import PlusButton from "../PlusButton/PlusButton.vue"

  export default defineComponent({
    name: "PostCard",
    components: {
      PlusButton,
    },
    props: {
      cardInfo: {
        type: String,
        required: false,
        default: "",
      },
    },
    data() {
      return {
        inputData: this.cardInfo || "",
      }
    },
    methods: {
      resetInput() {
        this.inputData = this.cardInfo || ""
      },
    },
  })
</script>
