<template>
  <p>{{ userGeolocation }}</p>
</template>

<script setup>
import { inject } from "vue";

const userGeolocation = inject("msg");
</script>
