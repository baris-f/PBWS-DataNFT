<script setup>
import { ref } from 'vue'

defineProps({
})


</script>

<template>
  <div class="container mx-auto flex items-center h-screen text-black">
    <div>
      <div class="text-6xl mb-4">
        404
      </div>
      <div class="text-2xl mb-4">
        Sorry, we couldn't find the page you are asking for.
      </div>
      <router-link to="/"><button class="btn btn-secondary" type="button"> Back to homepage </button></router-link>
    </div>
  </div>
</template>

<style scoped>


</style>
