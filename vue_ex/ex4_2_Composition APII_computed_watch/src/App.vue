<template>
  <div>
    <p>성: "{{ firstName }} "</p>
    <p>이름: "{{ lastName }}"</p>
    <p>1: {{ firstName + ' : ' + lastName }}</p>
    <p>2 methods : {{ getFullName() }}</p>
    <p>3 computed : {{ fullName }}</p>
    <p>4 watch : {{ firstName + ' : ' + lastName }}</p>
    <button type="button" @click="changeName">변경</button>
  </div>
</template>

<script setup>
// firstName : 홍 -> 박
import { ref } from 'vue';

const firstName = ref('홍');
const lastName = ref('길동');
const fName = ref('');

function getFullName() {
  return firstName.value + ' : ' + lastName.value;
}
function changeName() {
  firstName = '박';
}

const fullName = computed(() => {
  return firstName.value + ' : ' + lastName.value;
});

// watch(
//   fName(() => {
//     flName.value = firstName.value + ' : ' + lastName.value;
//   }),
//   lName(() => {
//     flName.value = firstName.value + ' : ' + lastName.value;
//   })
// )
</script>
