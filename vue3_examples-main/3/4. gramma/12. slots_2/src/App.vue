<template>
  <div id="app">
    <child-slot-component>
      <template v-slot:header>
        <h1>Header</h1>
        <!-- 이곳을 주석 처리 하면? -->
      </template>
      <h3>default</h3>
      <template v-slot:contents>
        <h3>contents</h3>
      </template>
      <template v-slot:footer>
        <h1>Footer</h1>
      </template>
    </child-slot-component>
  </div>
</template>

<script setup>
import ChildSlotComponent from "./Component.vue";
</script>
