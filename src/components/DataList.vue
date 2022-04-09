<template>

  <h1 class="text-3xl mb-5">All Data sets</h1>


  <input placeholder="Search" class="input-bordered w-full max-w-xs input input-accent" name="Search">

  <div class="grid grid-cols-5 mb-10 px-2 my-10">
  <div class="px-2">
    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text">Topic A</span>
        <input type="checkbox" class="checkbox checkbox-secondary">
      </label>
    </div>

    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text">Topic B</span>
        <input type="checkbox" class="checkbox checkbox-secondary">
      </label>
    </div>

    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text">Topic C</span>
        <input type="checkbox" class="checkbox checkbox-secondary">
      </label>
    </div>

  </div>


    <div class="container mx-auto grid grid-cols-3 gap-3 col-span-4">
      <DataSetCard/>
      <DataSetCard/>
      <DataSetCard/>
      <DataSetCard/>
    </div>
  </div>


</template>

<script>
import DataSetCard from "./DataSetCard.vue";
export default {
  name: "DataList",
  components: {
    DataSetCard
  }
}
</script>

<style scoped>

</style>