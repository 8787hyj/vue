<template>
  <h1>1 Array of Strings</h1>
  <p>이름 : {{ name }}</p>
  <button @click="changeName()">이름 바꾸기</button>
  <br />
  <User :name-of-child="name"></User>
</template>

<script setup>
import User from "./Component.vue";
import { ref } from 'vue';

const name = ref('vue2');

function changeName() {
  console.log(name.value);
  name.value = "vue3";
}
</script>
