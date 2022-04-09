<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Landing from "./components/Landing.vue";
</script>

<template>
  <router-view></router-view>
</template>

<style>
html {
  background-image: linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%);
  width: 100%;
  height: 100%;
  @apply text-black;
}
body, #app {
  width: 100%;
  height: 100%;
}
</style>
