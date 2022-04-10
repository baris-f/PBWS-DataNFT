<template>
    <card class="card card-compact w-82 pt-3 bg-gray-300 text-primary shadow-xl ">
      <h2 class="card-title mx-2.5 px-3">{{ DataSets.Name }}</h2>
      <span class="card-body pt-3">{{ DataSets.Description }}</span>
      <div class="card-actions justify-end py-2 px-2">
        <div v-for="Tag in DataSets.Tags" class="badge badge-outline badge-accent">{{ Tag }}</div>
      </div>
      <button class="btn btn-secondary">"More Info"</button>
    </card>

</template>

<script>
export default {
  name: "DataSetCard",
  data() {
    return {
      DataSets:{
        Name: 'Data Test I',
        Description : "Nam erat diam, dapibus ac sodales in, maximus eget lacus. Suspendisse iaculis suscipit efficitur. Aenean feugiat, ex ac mollis consectetur, sapien odio malesuada diam, et volutpat elit metus sit amet libero. Suspendisse id quam metus. Ut pulvinar turpis id nibh finibus, vel ornare elit sollicitudin.",
        Tags: ['Tag 1', "Tag 2", "Tag 3"]
      },
      Bonjour:"Coucou",
    }
  }
}

</script>


<style scoped>
a {
  color: #42b983;
}
</style>
