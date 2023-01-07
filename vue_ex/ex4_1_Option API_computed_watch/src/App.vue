<template>
  <div>
    <p>성: "{{ firstName }} "</p>
    <p>이름: "{{ lastName }}"</p>
    <p>1: {{ firstName + ' : ' + lastName }}</p>
    <p>2 methods : {{ getFullName() }}</p>
    <p>3 computed : {{ fullName }}</p>
    <p>4 watch : {{ firstName + ' : ' + lastName }}</p>
    <button type="button" @click="changeName">변경</button>
  </div>
</template>

<script>
// firstName : 홍 -> 박
export default {
  name: 'test',
  data() {
    return {
      firstName: '홍',
      lastName: '길동',
      flName: '',
    };
  },
  methods: {
    getFullName() {
      return this.firstName + ' : ' + this.lastName;
    },
    changeName() {
      this.firstName = '박';
    },
  },
  computed: {
    fullName() {
      return this.firstName + ' : ' + this.lastName;
    },
  },
  watch: {
    fName() {
      this.flName = this.firstName + ' : ' + this.lastName;
    },
    lName() {
      this.flName = this.firstName + ' : ' + this.lastName;
    },
  },
};
</script>
