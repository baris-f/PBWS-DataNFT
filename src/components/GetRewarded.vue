<script setup>

</script>

<template>
    <div class="form-control p-6 space-y-2">
      <div class="ml-2 lg:ml-16">
        <div class="text-2xl">Receive payment</div>
        <div class="text-md text-gray-600 ml-2">Your Iban or ETH wallet to get rewarded</div>
      </div>
      <div class="space-x-2 mx-auto flex">
        <div>
          <label class="label">
            <span class="label-text">IBAN</span>
          </label>
          <label class="input-text">
            <input type="text" placeholder="FR56 3567..." class="input input-bordered">
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">ETH Wallet</span>
          </label>
          <label class="input-text">
            <input type="text" placeholder="0x6584..." class="input input-bordered">
          </label>
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>
