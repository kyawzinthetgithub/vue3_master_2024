<script setup lang="ts">

const value = defineModel<string>();

defineEmits(['commit']);

</script>

<template>

  <textarea class="w-full bg-transparent p-1 focus:outline-none focus:border-none focus:bg-gray-800 focus:rounded-md"
    v-model="value" rows="3" type="text" @blur="$emit('commit')"></textarea>

</template>
