<template>
    <card class="card card-compact w-96 bg-gray-100">
      <h2 class="card-title mx-2.5">{{ DataSets.Name }}</h2>
      <span class="card-body  ">{{ DataSets.Description }}</span>
      <button class="btn btn-primary">"More Info"</button>
    </card>

</template>

<script>
export default {
  name: "DataSetCard",
  data() {
    return {
      DataSets:{
        Name: 'Data Test I',
        Description : "Nam erat diam, dapibus ac sodales in, maximus eget lacus. Suspendisse iaculis suscipit efficitur. Aenean feugiat, ex ac mollis consectetur, sapien odio malesuada diam, et volutpat elit metus sit amet libero. Mauris eu est sem. Sed porta, mauris sed gravida viverra, nunc libero bibendum purus, non elementum nibh diam suscipit dui. Proin egestas risus a lacus mattis euismod. Vestibulum convallis ipsum ac leo lobortis, vel lobortis justo tempor. Suspendisse id quam metus. Ut pulvinar turpis id nibh finibus, vel ornare elit sollicitudin. Mauris tincidunt rutrum egestas. Ut tristique purus quis accumsan aliquam. Maecenas malesuada condimentum mattis. Proin tincidunt ligula sed augue rhoncus, sed pellentesque tellus sagittis. Ut semper eleifend risus, eu condimentum risus pretium vel. Mauris sagittis accumsan justo nec mattis."
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
