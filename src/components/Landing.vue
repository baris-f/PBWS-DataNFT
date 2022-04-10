<script setup>




</script>

<template>

  <div class="container mx-auto flex items-center h-screen text-black">
    <div>
      <div class="flex mb-4">
        <img src="src/assets/logo.png" class="w-32 h-30">
        <div class="text-7xl my-auto">
          DataNest
        </div>
      </div>
      <div class="text-4xl mb-4">
        Buy and monetize data. Decentralized.
      </div>
      <div class="text-xl mb-8 text-gray-800">
        Browse our decentralized marketplace to access over 1000GB of datasets.<br/>
        Monetize your sleeping datasets.
      </div>
      <router-link to="/marketplace"><button class="btn btn-primary mr-4"> Browse Datasets</button></router-link>
      <router-link to="/sell"><button class="btn btn-secondary" type="button"> Sell your data </button></router-link>
    </div>
  </div>
</template>

<style scoped>


</style>
