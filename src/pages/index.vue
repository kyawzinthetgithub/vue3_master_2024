<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/project/[id]' , params:{id:1} }">Go to projects</RouterLink>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>
