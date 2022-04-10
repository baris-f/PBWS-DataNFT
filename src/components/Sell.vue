<script setup>
import { ref } from 'vue'
import Form from "./Form.vue";

defineProps({
})

const count = ref(0)
</script>

<template>
  <div class="container mx-auto flex items-center h-screen text-black">
    <div class="flex w-full">
      <div>
        <div class="text-3xl mb-4">
          Monetize your assets.
        </div>
        <div class="text-lg mb-8 text-gray-700">
          Follow these simple steps, and earn from your data !
        </div>

      </div>
      <div class="flex-grow"></div>
      <Form></Form>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
