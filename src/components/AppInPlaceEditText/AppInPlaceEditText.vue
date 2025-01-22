<script setup lang="ts">

const value = defineModel();

defineEmits(['commit']);

</script>

<template>

  <input class="w-full bg-transparent p-1 focus:outline-none focus:border-none focus:bg-gray-800 focus:rounded-md"
    v-model="value" type="text" @blur="$emit('commit')" @keyup.enter="($event.target as HTMLInputElement).blur()" />

</template>
