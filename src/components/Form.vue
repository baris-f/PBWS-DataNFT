<script setup>
import {defineProps, ref} from "vue";
import CompanyInfo from "./CompanyInfo.vue";
import SendDataset from "./SendDataset.vue";
import GetRewarded from "./GetRewarded.vue";
import ValidateDataset from "./ValidateDataset.vue";
import {createRouter, createWebHistory} from "vue-router";
import Landing from "./Landing.vue";
import Sell from "./Sell.vue";
import DataList from "./DataList.vue";
import Notfound from "./404.vue";

defineProps({

})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: "Landing", component: Landing },
    { path: '/sell', name: "Sell", component: Sell },
    { path: '/marketplace', name: "DataList", component: DataList },
    { path: '/:catchAll(.*)', name: "Notfound", component: Notfound }
  ]
// shorthand routes:routes
});

const page = ref(0)
const condition = page > 0
const classtheme = "step-primary"

function displayIfAbove(nb){ return page.value >= nb;}
function displayIfBelow(nb){ return page.value < nb;}
function displayIfEqual(nb){ return page.value === nb;}
function previous(){
  if (page.value > 0)
    page.value--;
}
function next(){
  if (page.value < 4)
    page.value++;
}

function loadPage()
{
  router.push({ path: '/marketplace', replace: true })
  router.replace({ path: '/marketplace' })
  location.reload();
}

</script>

<template>
  <div class="card w-full ml-8 bg-gray-100 shadow-xl max-w-4xl">
    <ul class="steps mt-4">
      <li class="step" :class="displayIfAbove(0) && classtheme">Info</li>
      <li class="step" :class="displayIfAbove(1) && classtheme">Dataset</li>
      <li class="step" :class="displayIfAbove(2) && classtheme">Validate</li>
      <li class="step" :class="displayIfAbove(3) && classtheme">Get rewarded</li>
    </ul>
    <CompanyInfo v-if="displayIfEqual(0)"/>
    <SendDataset v-if="displayIfEqual(1)"/>
    <ValidateDataset v-if="displayIfEqual(2)"/>
    <GetRewarded v-if="displayIfEqual(3)"/>
    <div v-if="displayIfEqual(4)">
      <div class="ml-2 lg:ml-16 mt-4 mb-6">
        <div class="text-2xl"> Almost there !</div>
        <div class="text-md text-gray-600 ml-2 "> Wait a bit while we mint your NFT access token, and deploy it to the marketplace</div>
      </div>
    </div>
    <div class="flex m-4 mt-0">
      <button class="btn btn-outline" v-if="displayIfAbove(1)" @click="previous"> Previous</button>
      <div class="flex-grow"></div>
      <button class="btn btn-primary" v-if="displayIfBelow(3)" @click="next"> Next</button>
        <button class="btn btn-primary" v-if="displayIfEqual(3)" @click="next"> Publish</button>
      <router-link to="/marketplace">
        <button class="btn btn-primary" v-if="displayIfEqual(4)" @click="loadPage">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...</button>
      </router-link>
    </div>
  </div>

</template>

<style scoped>

</style>
