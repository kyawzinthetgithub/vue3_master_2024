import type { QueryData } from '@supabase/supabase-js'
import { supabase } from '../libs/superbaseClient'

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
  *,
  projects(
    id,
    name,
    slug
  )
`)

export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `
  *,
  tasks(
    id,
    name,
    status,
    due_date
  )
  `,
    )
    .eq('slug', slug)
    .single();

export const projectsQuery = supabase.from('projects').select()

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>
export type Projects = QueryData<typeof projectsQuery>
export type Project = QueryData<ReturnType<typeof projectQuery>>
