<template>
  <div>{{ first.name }}</div>
  <h1>{{ second }}</h1>
</template>

<script setup>
import { ref, reactive, toRefs, toRaw } from 'vue';

const val = { name: 'tom' };
const reactiveValue = reactive(val)
const refValue = ref(10)

const first = reactiveValue;
const second = refValue;

// proxy 제거 : toRaw
const test = toRaw(reactiveValue);

console.log('val: ', val); // {name: 'tom'}
console.log('reactiveValue: ', reactiveValue); // Proxy {name: 'tom'}
console.log('test: ', test); // {name: 'tom'}
console.log('val === reactiveValue: ', val === reactiveValue);  // false
console.log('val === reactiveValue: ', val === test);           // true
console.log('val === reactiveValue: ', reactiveValue === test); // false
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
