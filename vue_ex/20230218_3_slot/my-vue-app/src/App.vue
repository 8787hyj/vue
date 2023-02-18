<template>
  <First><Second :name="name"></Second></First>
  <hr />
  <button @click="updateName">update name</button>
  <p>name: {{ name }}</p>
</template>

<script setup>
import First from './components/First.vue'
import Second from './components/Second.vue'
import { ref } from 'vue';

const name = ref("Hello");
function updateName() {
  name.value = "Hi";
}
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
