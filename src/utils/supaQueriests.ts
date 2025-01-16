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
    .single()

export const taskQuery = (id: string) => {
  return supabase
    .from('tasks')
    .select(
      `
  *,
  projects(
  id,
  name,
  slug
  )
  `,
    )
    .eq('id', id)
    .single()
}

export const profileQuery = ({column, value} : {column:string, value:string}) => {
  return supabase.from('profiles').select(`*`).eq(column,value).single()
}

export const projectsQuery = supabase.from('projects').select()

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>
export type Projects = QueryData<typeof projectsQuery>
export type Project = QueryData<ReturnType<typeof projectQuery>>
export type Task = QueryData<ReturnType<typeof taskQuery>>
