<template>
  <div class="red lighten-3 pa-3">
    <h3></h3>
    <p>자식 이름 : {{nameOfChild}}</p>
  </div>
</template>


<script setup>
const props = defineProps(['nameOfChild'])
console.log(props.nameOfChild)
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
}
</style>
