<template></template>

<script setup>
// https://medium.com/arcana-network-blog/vue-3-composition-api-basics-and-patterns-44813f2c785d

import { ref, onMounted, computed, watch, defineProps } from "vue";

const props = defineProps({
  prop1: String
})

// one
const logicOneVar = ref('')
onMounted(() => {
  logicOneVar.value = 'Hi Vue 3'
})

// two
const logicTowVar = ref(0)
function incrementLogicTwoVar() {
  logicTowVar.value++;
}
function decrementLogicTwoVar() {
  logicTowVar.value--;
}

// three
const logicThreeVar = ref(false)
watch(() => logicTowVar.value, () => {
  logicThreeVar.value = !logicThreeVar.value
})

// four
const logicFourVar = computed(() => {
  return `${props.prop1} is a prop1 value`
})

</script>
