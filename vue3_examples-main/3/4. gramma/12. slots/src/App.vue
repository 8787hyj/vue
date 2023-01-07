<template>
  <Component>
    <template v-slot="slotProps"> ✔️ {{ slotProps.item }} </template>
  </Component>
</template>

<script setup>
import Component from "./Component.vue";
</script>
