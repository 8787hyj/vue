
export default {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    this.counter = 1;
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
    getCounter() {
      return this.counter;
    },
  },
};

