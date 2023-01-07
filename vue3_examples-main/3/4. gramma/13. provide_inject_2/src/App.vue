<template>
  <MyMarker />
</template>

<script setup>
import { ref, provide } from "vue";
import MyMarker from "./Component.vue";

const geolocation = ref("North Pole");
provide("msg", geolocation);
</script>
