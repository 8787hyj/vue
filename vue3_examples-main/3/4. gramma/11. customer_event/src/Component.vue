<template>
  <div>
    <div>
      메시지 1 :
      <input :value="msg" @input="$emit('update:msg', $event.target.value)" />
    </div>
    <div>
      메시지 2 :
      <input :value="msg2" @input="emit('update:msg2', $event.target.value)" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: String,
  msg2: String,
});

const emit = defineEmits(["update:msg", "update:msg2"]);
</script>
