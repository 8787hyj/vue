<template>
  <h1 v-my-directive>This is a Upper Case</h1>
  <div>
    <h3 v-mycolor="'red'">Message</h3>
    <!-- 정적 String을 value로 넘길경우 ''로 한번 더 감싼다 -->
    <h3 v-mycolor:background="'red'">Message</h3>
  </div>
  <input v-focus value="sss"/>
</template>

<script setup>
// Directive Hooks : created, beforeMount, mounted, beforeUpdate, updated, ...
const vMyDirective = {
  update: (el, binding, vnode, preNode) => {
    console.log("1 el : ", el);
    console.log("1 binding : ", binding);
    console.log("1 vnode : ", vnode);
    console.log("1 preNode : ", preNode);
  },
};

const vMycolor = {
  mounted: (el, binding, vnode, preNode) => {
    // console.log('2 : ', el);
    // console.log(binding);
    // console.log(vnode);
    // console.log(preNode);

    if (binding.arg == "background") {
      el.style.background = binding.value;
    } else {
      el.style.color = binding.value;
    }
  },
};

const vFocus = {
  mounted: (el, binding, vnode, preNode) => {
    el.focus();
    console.log("3 el : ", el);
    console.log("3 binding : ", binding);
    console.log("3 binding.value : ", binding.value);
    console.log("3 binding.oldValue : ", binding.oldValue);
    console.log("3 binding.arg : ", binding.arg);
    console.log("3 binding.modifiers : ", binding.modifiers);
    console.log("3 binding.instance : ", binding.instance);
    console.log("3 binding.dir : ", binding.dir);
    el.value = el.value.toUpperCase();
  },
};
</script>
