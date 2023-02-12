<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { reactive } from 'vue';

const address = reactive({
  name: "",
  addressLine: "",
  streetNumber: "",
  town: "",
  country: "",
  postcode: "",
  phoneNumber: "",
  homeAddress: false,
});
</script>

<template>
  <div>
    <HelloWorld v-model:name="address.name" v-model:addressLine="address.addressLine"
      v-model:streetNumber="address.streetNumber" v-model:town="address.town" v-model:country="address.country"
      v-model:postcode="address.postcode" v-model:phoneNumber="address.phoneNumber"
      v-model:homeAddress="address.homeAddress" />
    <hr />
    <pre :style="{ 'text-align': 'left' }">{{
  JSON.stringify(address, null, 2)
    }}</pre>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
