<template>
  <h2>Small Items</h2>
  <p v-for="item in small_items_c" :key="item.id">{{ item.text }}</p>
  <h2>Big Items</h2>
  <p v-for="item in big_items_c" :key="item.id">{{ item.text }}</p>
</template>

<script setup>
import { reactive, computed } from "vue";

const arr = reactive([
  { id: 1, text: "1번 옵션 아이템" },
  { id: 2, text: "2번 옵션 아이템" },
  { id: 3, text: "3번 옵션 아이템" },
  { id: 4, text: "4번 옵션 아이템" },
  { id: 5, text: "5번 옵션 아이템" },
]);

const small_items_c = computed(() => {
  return arr.filter((i) => i.id < 3);
});

const big_items_c = computed(() => {
  return arr.filter((i) => i.id >= 3);
});
</script>
