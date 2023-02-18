<template>
    <div>
        Second 이름: {{ name }}
    </div>
</template>



<script setup>
import { ref, inject } from 'vue';

defineProps(["name"]);
</script>
  
  