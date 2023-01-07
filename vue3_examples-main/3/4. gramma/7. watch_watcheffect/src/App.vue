<template>
  <p>{{ count_o }}</p>
  <button @click="count_o++">Watch 1 카운트 증가</button>
  <p>{{ count_c_1 }}</p>
  <button @click="count_c_1++">Composition API 1st 카운트 증가</button>
  <p>{{ count_c_2 }}</p>
  <button @click="count_c_2++">Composition API 2nd 카운트 증가</button>
  <p>상태: {{ state }}</p>
  <button @click="onStop()">watchEffect 중지</button>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

let count_o = ref(0);
const count_c_1 = ref(0);
const count_c_2 = ref(0);
const state = ref("실행 중");

watch(count_o, (cur, prev) => {
  console.log("Watch 1 : " + prev + " ==> " + cur);
});

watch(
  count_c_1,
  (cur, prev) => {
    console.log("Composition API Watch : " + prev + " ==> " + cur);
  },
  {
    immediate: true,
  }
);
watch([count_c_1, count_c_2], (cur, prev) => {
  console.log("Composition API Multiple Watch : " + prev + " ==> " + cur);
});

const stop = watchEffect(
  () => {
    console.log("Composition API watchEffect Called " + count_c_2.value);
  },
  {
    flush: "post",
  }
);

const onStop = () => {
  state.value = "중지";
  stop();
};
</script>
