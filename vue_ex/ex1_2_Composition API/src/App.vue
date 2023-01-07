<template>
  
</template>

<script>
// https://medium.com/arcana-network-blog/vue-3-composition-api-basics-and-patterns-44813f2c785d
export default {
  name: 'OptionsAPIComponent',
  props: ['prop1'],
  data() {
    return {
      logicOneVar: '',
      logicTwoVar: 0,
      logicThreeVar: false,
    }
  },
  computed: {
    logicFourVar() {
      return `${this.prop} is a prop1 value`;
    }
  },

  mounted() {
    this.logicOneVar = 'Hello Vue 2';
  },
  methods: {
    incrementLogicTwoVar() {
      this.logicTwoVar++;
    },
    decrementLogicTwoVar() {
      this.logicTwoVar--;
    }
  },
  watch: {
    logicTwoVar() {
      this.logicThreeVar = !this.logicThreeVar;
    }
  }
}
</script>
