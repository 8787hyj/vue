<template>
  <p>줄임말과 원래말을 입력하세요.</p>
  <input type="text" v-bind:value="abbr" />
  <input type="text" v-model="normal" />
  <hr />
  <abbr v-bind:title="normal">{{ abbr }}</abbr>
</template>

<script setup>
import { ref } from "vue";

const abbr = ref("DOPT");
const normal = ref("Dong Project Team");
</script>
