<script>
export default {
  name: "DataSetCard",
  props: ['name', 'description', 'tags', 'link','more'],
}
</script>
<template>
    <card class="card card-compact w-82 pt-3 bg-gray-300 text-primary shadow-xl ">
      <h2 class="card-title mx-2.5 px-3 text-black">{{ name }}</h2>
      <span class="card-body pt-3 text-justify">{{ description }}</span>
      <div class="card-actions justify-end py-2 px-2">
        <div v-for="tag in tags" class="badge badge-gray-900 text-gray-200">{{ tag }}</div>
      </div>
      <router-link taf="button" to="/ukTraficAccident" class="btn btn-secondary btn-block">More Info</router-link>
    </card>
</template>
<style scoped>
a {
  color: #42b983;
}
</style>
