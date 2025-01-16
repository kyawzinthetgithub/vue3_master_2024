import type {  Projects } from "@/utils/supaQueriests";
import { projectsQuery } from "@/utils/supaQueriests";
import { useMemoize } from "@vueuse/core";

export const useProjectsStore = defineStore('projects-store',()=>{
  const projects = ref<Projects | null>(null);
  const loadProjects = useMemoize(async (key: string)=>  projectsQuery)


const getProjects = async () => {

  const { data, error, status } = await loadProjects('projects');
  if (error) useErrorStore().setError({error,customCode:status});
  projects.value = data;
};

return {
  projects,
  getProjects,
  loadProjects
}

});
