<script>
import DataSetCard from "./DataSetCard.vue";
export default {
  name: "DataList",
  components: {
    DataSetCard
  },
  data() {
    return {
      datasets: [
        {
          name: "The Metaverse LAND Dataset",
          description: "The data is taken from Etherscan and Opensea and fed to a machine learning algorithm that is trained using past price movements and is retrained on a regular basis to keep the accuracy of the price predictions high. The core of the dataset are the aforementioned price predictions for each land that has enough trading history to compute a reasonable prediction.",
          tags: ["nft", "metaverse", "ai", "virtual-real-estate", "the-sandbox", "land-valuations", "dao"]
        },
        {
          name: "News Headlines",
          description: "The latest headlines of some of the leading English newspapers, including headline text, date of publishing, URL, and other optional data like tags, language, etc. if available.2",
          tags: ["news", "headlines", "new-york-times", "cnbc", "financial-times", "economist", "reuters", "sky-news", "bloomberg", "bbc"]
        },
        {
          name: "Weather Germany 12/2021",
          description: "This data set contains weather data of 69 selected locations (see sample file) in Germany in 12/2021 with an approximate interval of 15 minutes.",
          tags: ["weather","germany","december","2021","temperature","wind","precipitation"]
        },
        {
          name: "Store locations dm-drogerie markt",
          description: "dm-drogerie markt is a chain of retail stores offering cosmetics, healthcare items, household products, health food and drinks in 13 countries (see wikipedia). This data set contains a list of all store locations and will be updateted regularly.",
          tags: ["retail","cosmetics","healthcare","location","stores","retail", "household","food","drinks","germany"],
        },
        {
          name: "UK Traffic 2'177'207 Accidents and Vehicles from 2005 to 2017",
          description: "The UK government collects and publishes (usually on an annual basis) detailed information about traffic accidents across the country. This information includes, but is not limited to, geographical locations, weather conditions, type of vehicles, number of casualties and vehicle manoeuvres, making this a very interesting and comprehensive dataset for analysis and research.",
          tags: ["automobiles","vehicles","transportation","law","games","demographics"],
        }
      ]
    };
  }
}
</script>
<template class="mb-10">

<div class="pb-10">
  <div class="py-20 grid place-items-center">
    <h1 class="text-3xl mb-10 items-center">All Data sets</h1>

    <input placeholder="Search" class="input-bordered w-full max-w-xs input input-accent content-center" name="Search">
  </div>


  <div class="grid grid-cols-5 px-3">
    <div class="text-primary card pl-3 pt-5 bg-gray-100 px-3 font-bold row-end-0">
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

      <div class="container mx-auto grid grid-cols-3 gap-3 col-span-4 pl-5">
        <DataSetCard v-for="dataset in datasets" :tags="dataset.tags" :description="dataset.description" :name="dataset.name"/>
      </div>
  </div>

</div>
</template>
<style scoped>
</style>
