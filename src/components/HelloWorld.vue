<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

  <button type="button" @click="count++">count is: {{ count }}</button>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
