<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Go To Home</RouterLink>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">

import { supabase } from '@/libs/superbaseClient.ts';
import { ref } from 'vue';
import type { Tables } from '../../../database/types';

const projects = ref <Tables<'projects'>[] | null>(null);

(async () => {
  const { data, error } = await supabase.from('projects').select();
  if (error) console.log(error);
  projects.value = data;
  console.log(projects.value)
})();

</script>
