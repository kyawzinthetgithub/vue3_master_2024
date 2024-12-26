<template>
  <div>
    <h1>Tesk {{ route.params?.id }}</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
