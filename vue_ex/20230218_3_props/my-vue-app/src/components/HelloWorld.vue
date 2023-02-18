<!-- HelloWorld.vue -->
<template>
	<div
    :style="{ backgroundColor: color }"
    class="btn">
    button
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  color: {
    type: String,
    default: 'gray',
  }
})
</script>



<style scoped>
.read-the-docs {
  color: #888;
}
</style>
