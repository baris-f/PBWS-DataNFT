<template class="mb-10">

<div class="pb-10">
  <div class="py-20 grid place-items-center">
    <h1 class="text-3xl mb-10 items-center">All Data sets</h1>

    <input placeholder="Search" class="input-bordered w-full max-w-xs input input-accent content-center" name="Search">
  </div>


  <div class="grid grid-cols-5 px-3">
    <div class="text-primary card pl-3 pt-5 bg-gray-100 px-3 font-bold">
      <div class="form-control pl-3">
        <label class="cursor-pointer label">
          <span class="label-text text-primary">Topic A</span>
          <input type="checkbox" class="checkbox checkbox-secondary shadow-xl">
        </label>
      </div>

      <div class="form-control pl-3">
        <label class="cursor-pointer label">
          <span class="label-text text-primary">Topic B</span>
          <input type="checkbox" class="checkbox checkbox-secondary shadow-xl">
        </label>
      </div>

      <div class="form-control pl-3">
        <label class="cursor-pointer label">
          <span class="label-text text-primary">Topic C</span>
          <input type="checkbox" class="checkbox checkbox-secondary shadow-xl">
        </label>
      </div>

    </div>

      <div class="container mx-auto grid grid-cols-3 gap-3 col-span-4 px-5">
        <DataSetCard/>
        <DataSetCard/>
        <DataSetCard/>
        <DataSetCard/>
      </div>
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