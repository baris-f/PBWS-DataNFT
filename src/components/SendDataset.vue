<script setup>
import FieldList from "./FieldList.vue";
import {ref} from "vue";

let newTodo = '';
let todos = ref([])
let index = 0;
let fieldInput = ''

function addTodo (todo) {
  index++;
  if (todo !== "")
    todos.value.push(todo)
  newTodo = ''
}
function cancelTodo () {
  newTodo = ''
}
function removeTodo (index) {
  todos.splice(index, 1)
}
function clearAll () {
  todos = []
}


</script>

<template>
    <div class="form-control p-6 space-y-2">
      <div class="ml-2 lg:ml-16">
        <div class="text-2xl"> Share your data</div>
        <div class="text-md text-gray-600 ml-2 "> We will generate a secure access token to it.
        Declare the data field you want to share</div>
      </div>
      <div class="space-y-2 ml-8 lg:ml-24 mb-2">
        <div>
          <label class="label">
            <span class="label-text">Private API Endpoint</span>
          </label>
          <label class="input-text">
            <input type="text" placeholder="URL" class="input input-bordered lg:w-80">
          </label>
        </div>
        <div class="flex">
          <div>
            <label class="label">
              <span class="label-text">Add Database Field</span>
            </label>
            <label class="input-text">
              <input type="text" placeholder="Table name" class="input input-bordered lg:w-80" v-model="fieldInput">
            </label>
          </div>
          <div class="flex flex-col mx-auto">
            <div class="flex-grow"></div>
            <button class="btn btn-primary" @click="addTodo(fieldInput)">Add Field</button>
          </div>
        </div>
        <FieldList :todos="todos" :key="index"/>
      </div>
  </div>
</template>

<style scoped>

</style>
