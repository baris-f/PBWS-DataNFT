<script setup>

defineProps({
  todos: Object
})
</script>

<template>
  <div>
        <ul class="flex flex-wrap mt-1">
          <li v-for="elem in todos">
            <div class="badge badge-outline text-xl p-4 justify-center align-center mr-1 mb-2">{{ elem }}</div>
          </li>
        </ul>
  </div>
</template>

<style scoped>

</style>
