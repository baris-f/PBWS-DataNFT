<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
  <div class="container mx-auto flex items-center h-screen text-black">
    <div>
      <div class="text-6xl mb-4">
        SELL
      </div>
      <div class="text-2xl mb-4">
        Monetize your assets.
      </div>
      <div class="text-lg mb-8 text-gray-700">
        Thanks for your data :)))
      </div>
      <button class="btn btn-primary mr-4"> Browse Datasets</button>
      <button class="btn btn-secondary" type="button"> Sell your data </button>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
