<script setup>

</script>

<template>
    <div class="form-control p-6 space-y-2">
      <div class="ml-2 lg:ml-16 mb-2">
        <div class="text-2xl"> Validate Dataset</div>
        <div class="text-md text-gray-600 ml-2"> Here is your dataset structure, is it correct ?</div>
      </div>
      <div class="overflow-x-auto mt-2">
        <table class="table w-full">
          <!-- head -->
          <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Color</th>
          </tr>
          </thead>
          <tbody>
          <!-- row 1 -->
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <!-- row 2 -->
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<style scoped>

</style>
