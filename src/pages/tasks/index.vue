<template>
  <div>
    <h1>Tasks Page</h1>
    <RouterLink to="/">Go To Home</RouterLink>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">

import { supabase } from '@/libs/superbaseClient.ts';
import { ref } from 'vue';
import type { Tables } from '../../../database/types';

const tasks = ref <Tables<'tasks'>[] | null>(null);

(async () => {
  const { data, error } = await supabase.from('tasks').select();
  if (error) console.log(error);
  tasks.value = data;
  console.log(tasks.value)
})();

</script>
