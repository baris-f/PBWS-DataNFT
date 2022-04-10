<template>
  <h1>{{DataSets.Name}}</h1>
</template>

<script>
export default {
  name: "DataSetPresentation",
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

</style>