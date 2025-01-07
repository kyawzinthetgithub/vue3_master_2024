import type { ColumnDef } from "@tanstack/vue-table"
import type { TasksWithProjects } from "../supaQueriests"
import { RouterLink } from "vue-router"

export const columns: ColumnDef<TasksWithProjects[0]>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(RouterLink, { to: `/tasks/${row.original.id}`, class: 'text-left hover:bg-muted hover:block w-full' }, () => row.getValue('name'))
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
    },
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-left' }, 'Due Date'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('due_date'))
    },
  },
   {
    accessorKey: 'projects',
    header: () => h('div', { class: 'text-left' }, 'Project'),
    cell: ({ row }) => {
      return row.original.projects ? h(RouterLink, { to: `/projects/${row.original.projects.slug}`, class: 'text-left hover:bg-muted hover:block w-full' }, () => row.original.projects?.name) : ''
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, JSON.stringify(row.getValue('collaborators')))
    },
  }
]
