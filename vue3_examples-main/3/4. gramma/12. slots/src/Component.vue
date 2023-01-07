<template>
  <ul style="list-style-type: none">
    <li v-for="item in items">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const items = ref([1, 2, 3]);
</script>
