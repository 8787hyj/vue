<template>
  <p>{{ counter + counter2 }}</p>
  <button @click="counter++">클릭하면 숫자가 올라갑니다.</button>
  <button @click="onClick">클릭하면 숫자가 올라갑니다.</button>
  <button @click="onClick2">클릭하면 숫자가 올라갑니다.</button>
</template>

<script setup>
import { ref } from "vue";

let counter2 = ref(0);
let counter = ref(0);

const onClick = (evt) => {
  if (evt) {
    evt.preventDefault();
    counter.value++;
  }
};

function onClick2(evt) {
  if (evt) {
    evt.preventDefault();
  }
  counter2.value++;
}
</script>
