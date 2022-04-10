<template>
  <div class="pt-20 grid place-items-center">
    <h1 class="text-3xl mb-10 items-center">{{DataSets.Name}}</h1>
  </div>

  <div class="container mx-auto mb-10">
    <div class="flex flex-col col-span-2 bg-gray-300 rounded-md p-2">
      <p class="whitespace-pre-line m-5">{{DataSets.Description}}</p>
      <div class="card-actions justify-end py-2 px-2">
      <div v-for="tag in DataSets.Tags" class="badge badge-gray-900 text-gray-200">{{ tag }}</div>
      </div>
      <div class="absolute rounded-md p-2">
        <button class="btn btn-secondary content-center justify-center place-items-center">Access data</button>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "DataSetPresentation",
  data() {
    return {
      DataSets:{
        Name: "UK Traffic 2'177'207 Accidents and Vehicles from 2005 to 2017",
        Description : "Context\n" +
            "\n" +
            "The UK government collects and publishes (usually on an annual basis) detailed information about traffic accidents across the country. This information includes, but is not limited to, geographical locations, weather conditions, type of vehicles, number of casualties and vehicle manoeuvres, making this a very interesting and comprehensive dataset for analysis and research.\n" +
            "\n" +
            "This dataset contains detailed information about road accidents and involved vehicles in the UK between 2005 and 2017. Key Information:\n" +
            "\n" +
            "Most of the coded data variables have been transformed to textual strings using relevant lookup tables, enabling more efficient and \"human-readable\" analysis.\n" +
            "It features detailed information about the vehicles involved in the accidents.\n" +
            "Content\n" +
            "\n" +
            "The data come from the Open Data website of the UK government, where they have been published by the Department of Transport.\n" +
            "\n" +
            "The dataset comprises of two csv files:\n" +
            "\n" +
            "AccidentInformation.csv: every line in the file represents a unique traffic accident (identified by the AccidentIndex column), featuring various properties related to the accident as columns. Date range: 2005-2017\n" +
            "\n" +
            "Vehicle_Information.csv: every line in the file represents the involvement of a unique vehicle in a unique traffic accident, featuring various vehicle and passenger properties as columns. Date range: 2004-2016\n" +
            "\n" +
            "The two above-mentioned files/datasets can be linked through the unique traffic accident identifier (Accident_Index column).\n" +
            "\n" +
            "The dataset will keep being updated as more data become available by the Department of Transport.\n" +
            "\n" +
            "Acknowledgements\n" +
            "\n" +
            "Thanks to data.gov.uk for making this information publicly available and thanks to Dave Fisher-Hickey and Thanasis for contributing towards what I consider to be, the first solid and structured version of this dataset.\n" +
            "\n" +
            "Inspiration Go crazy using the dataset. Don't go crazy while driving.",
        Tags: ["automobiles","vehicles","transportation","law","games","demographics"]
      },
      Bonjour:"Coucou",
    }
  }
}
</script>

<style scoped>

</style>