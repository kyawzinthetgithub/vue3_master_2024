import type { ColumnDef } from '@tanstack/vue-table'
import type { Projects } from '../supaQueriests'
import { RouterLink } from 'vue-router'
import type { Ref } from 'vue'
import type { GroupedCollabs } from '@/types/GroupedCollabs'
import Avatar from '@/components/ui/avatar/Avatar.vue'
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue'
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue'
import AppInPlaceEditStatus from '@/components/AppInPlaceEditText/AppInPlaceEditStatus.vue'

export const columns = (collabs: Ref<GroupedCollabs>): ColumnDef<Projects[0]>[] => [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.slug}`,
          class: 'text-left hover:bg-muted hover:block w-full',
        },
        () => row.getValue('name'),
      )
    },
  },
  {
    accessorKey: 'slug',
    header: () => h('div', { class: 'text-left' }, 'Slug'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left' }, row.getValue('slug'))
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left' },
        h(AppInPlaceEditStatus, { modelValue: row.original.status, readonly: true }),
      )
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left font-medium h-20 flex items-center' },
        collabs.value[row.original.id]
          ? collabs.value[row.original.id].map((collab) => {
              return h(RouterLink, { to: `/users/${collab.username}` }, () => {
                return h(Avatar, { class: 'hover:scale-110 transition-transform' }, () =>
                  h(AvatarImage, { src: collab.avatar_url || '' }),
                )
              })
            })
          : row.original.collaborators.map(() => {
              return h(Avatar, { class: 'animate-pulse' }, () => h(AvatarFallback))
            }),
      )
    },
  },
]
