<script setup>
import {defineProps, ref} from "vue";
import CompanyInfo from "./CompanyInfo.vue";
import SendDataset from "./SendDataset.vue";
import GetRewarded from "./GetRewarded.vue";
import ValidateDataset from "./ValidateDataset.vue";

defineProps({

})

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
  if (page.value < 3)
    page.value++;
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
    <div class="flex m-4 mt-0">
      <button class="btn btn-outline" v-if="displayIfAbove(1)" @click="previous"> Previous</button>
      <div class="flex-grow"></div>
      <button class="btn btn-primary" v-if="displayIfBelow(3)" @click="next"> Next</button>
    </div>
  </div>

</template>

<style scoped>

</style>
