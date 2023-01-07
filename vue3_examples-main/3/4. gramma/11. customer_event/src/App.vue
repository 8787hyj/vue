<template>
  <p>{{ `[${msg}] : ${msg2}` }}</p>
  <Component v-model:msg="msg" v-model:msg2="msg2" />
</template>

<script setup>
import Component from "./Component.vue";
import { ref } from "vue";

const msg = ref("초기 메시지");
const msg2 = ref("초기 메시지");
</script>
