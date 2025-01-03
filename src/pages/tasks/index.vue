<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
<script setup lang="ts">

import { columns } from '@/utils/tableColumns/tasksColumns';
import { tasksWithProjectsQuery } from '@/utils/supaQueriests';
import { type TasksWithProjects } from '@/utils/supaQueriests';
usePageStore().pageData.title = 'My Tasks';

const tasks = ref<TasksWithProjects | null>(null);

const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery;
  if (error) console.log(error);
  tasks.value = data;
};

await getTasks();

</script>
