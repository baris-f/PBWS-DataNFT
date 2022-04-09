<script setup>
import { ref } from 'vue'

defineProps({
})

</script>

<template>
  <div class="container mx-auto flex items-center h-screen text-black">
    <div>
      <div class="text-6xl mb-4">
        DataNest
      </div>
      <div class="text-2xl mb-4">
        We steal your Data.
      </div>
      <div class="text-lg mb-8 text-gray-700">
        Thanks for your data :)))
      </div>
      <router-link to="/marketplace"><button class="btn btn-primary mr-4"> Browse Datasets</button></router-link>
      <router-link to="/sell"><button class="btn btn-secondary" type="button"> Sell your data </button></router-link>
    </div>
  </div>
</template>

<style scoped>


</style>
