<template>
  <render></render>
</template>

<script setup>
import { h, useSlots } from 'vue';

const slots = useSlots();

const render = () => {
  return h("div", {}, slots.default ? slots.default() : null);
};


</script>

