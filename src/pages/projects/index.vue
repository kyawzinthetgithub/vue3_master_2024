<template>
  <div>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
  </div>
</template>
<script setup lang="ts">

import { columns } from '@/utils/tableColumns/projectsColumns';
import { projectsQuery, type Projects } from '@/utils/supaQueriests';

usePageStore().pageData.title = 'Projects';

const projects = ref<Projects | null>(null);

const getProjects = async () => {
  const { data, error, status } = await projectsQuery;
  if (error) useErrorStore().setError({error,customCode:status});
  projects.value = data;
};

await getProjects();

</script>
