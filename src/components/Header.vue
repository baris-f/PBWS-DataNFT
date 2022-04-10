<script setup>


</script>

<template>
  <header class="fixed text-black px-10 mt-4 w-full">
    <div to="/" class="flex mb-4 justify-center">
      <router-link class="flex" to="/">
        <img src="src/assets/logo.png" class="w-8 h-8 mr-1">
        <div class="text-2xl my-auto text-black">
          DataNest
        </div>
      </router-link>
      <div class="flex-grow"></div>
      <router-link class="flex" to="/">
        <div class="text-xl hover:underline">Browse</div>
      </router-link>
      <router-link class="flex" to="/sell">
        <div class="text-xl ml-4 hover:underline">Sell</div>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
router-link {
  @apply text-black;
}
</style>
