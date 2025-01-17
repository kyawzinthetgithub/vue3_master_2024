import type { Projects } from '@/utils/supaQueriests'
import { projectsQuery } from '@/utils/supaQueriests'
import { useMemoize } from '@vueuse/core'

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Projects>([])
  const loadProjects = useMemoize(async (key: string) => projectsQuery)

  const validateCache = () => {
    if (projects.value?.length) {
      projectsQuery.then(({ data, error }) => {
        if (JSON.stringify(projects.value) === JSON.stringify(data)) {
          return
        } else {
          loadProjects.delete('projects')
          if (!error && data) projects.value = data
        }
      })
    }
  }

  const getProjects = async () => {
    const { data, error, status } = await loadProjects('projects')
    if (error) useErrorStore().setError({ error, customCode: status })
    if(data) projects.value = data
    validateCache()
  }

  return {
    projects,
    getProjects,
    loadProjects,
  }
})
