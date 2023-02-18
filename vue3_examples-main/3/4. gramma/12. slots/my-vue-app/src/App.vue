<template>
  <First>
    <template v-slot="slotProps"> ✔️ {{ slotProps.item }} </template>
  </First>
</template>

<script setup>
import First from './components/First.vue'
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
