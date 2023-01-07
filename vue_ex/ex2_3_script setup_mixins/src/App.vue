<template></template>

<script setup>
// https://medium.com/arcana-network-blog/vue-3-composition-api-basics-and-patterns-44813f2c785d

import CounterMixin from './counterMixin.js'
import { onMounted } from 'vue'

const counter1 = CounterMixin(2);

counter1.incrementCounter();
counter1.incrementCounter();
console.log('Counter= ', counter1.getCounter());

const counter2 = CounterMixin(5);
counter2.decrementCounter();

onMounted(() => {
  counter2.decrementCounter();
  counter2.decrementCounter();
  counter2.incrementCounter();
  console.log('Counter1= ', counter1.getCounter());
  console.log('Counter2= ', counter2.getCounter());
})

</script>
