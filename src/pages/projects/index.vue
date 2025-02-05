<template>
  <div>
    <DataTable v-if="projects" :columns="columnsWithCollabs" :data="projects" />
  </div>
</template>
<script setup lang="ts">

import { columns } from '@/utils/tableColumns/projectsColumns';
import { projectsQuery, type Projects } from '@/utils/supaQueriests';
import { useProjectsStore } from '@/stores/loaders/projects';
import { useCollabs } from '@/composables/collabs';
import { title } from 'process';

useMeta({
  title: 'Project | Pulse',
  description:{
    name: 'description',
    context: 'Pulse Project Page'
  }
})

usePageStore().pageData.title = 'Projects';

const projectsLoader = useProjectsStore();
const {projects} = storeToRefs(projectsLoader);
const {getProjects} = projectsLoader

await getProjects();

const { getGroupedCollabs, groupedCollabs} = useCollabs();

getGroupedCollabs(projects.value??[])

const columnsWithCollabs = columns(groupedCollabs)

</script>
