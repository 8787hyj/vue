<template>

</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '___'
  }
})
console.log(props.title)
</script>
