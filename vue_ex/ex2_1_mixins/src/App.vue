<template></template>

<script>
// https://medium.com/arcana-network-blog/vue-3-composition-api-basics-and-patterns-44813f2c785d

import CounterMixin from './Component.vue'

export default {
  name: 'MixinExample',
  mixins: [CounterMixin],
  mounted() {
    this.counter = 0;
    this.incrementCounter();
    this.decrementCounter();
    console.log('Counter=', this.getCounter());
  }
}

</script>
