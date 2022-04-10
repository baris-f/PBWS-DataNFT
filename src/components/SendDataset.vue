<script setup>

</script>

<template>
    <div class="form-control p-6 space-y-2">
      <div class="ml-2 lg:ml-16">
        <div class="text-2xl"> Share your data</div>
        <div class="text-md text-gray-600 ml-2 "> We will generate a secure access token to it</div>
      </div>
      <div class="space-x-2 mx-auto flex">
        <div>
          <label class="label">
            <span class="label-text">Private API Endpoint</span>
          </label>
          <label class="input-text">
            <input type="text" placeholder="URL" class="input input-bordered lg:w-80">
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Professional Email</span>
          </label>
          <label class="input-text">
            <input type="text" placeholder="mail@site.com" class="input input-bordered lg:w-80">
          </label>
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>
