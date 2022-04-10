<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from "./components/Header.vue";
</script>

<template>
  <Header class="w-full" />
  <router-view></router-view>
</template>

<style>
html {
  background-image: linear-gradient(0deg, #33526C 20% , #000000 100%);
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}
body, #app {
  width: 100%;
  height: 100%;
}
</style>
