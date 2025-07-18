
<template>
  <ui-sidebar v-bind="props">
    <ui-sidebar-header>
      <navs-label/>
    </ui-sidebar-header>
    <ui-sidebar-content class="gap-0">
      <navs-collapsible-sidebar class="py-0" :list="data?.collapsibleLinks" />
      <navs-one-level-sidebar class="py-0" :list="data?.oneLevel"/>
    </ui-sidebar-content>
    <ui-sidebar-footer>
      <navs-user-drop/>
    </ui-sidebar-footer>
    <ui-sidebar-rail />
  </ui-sidebar>
</template>

<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import {Map, PieChart, LayoutList, Frame} from 'lucide-vue-next'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  collapsibleLinks: [
    {
      title: 'Some Menu',
      url: '#',
      icon: Frame,
      isActive: true,
      subList: [
        {
          title: 'Drop 1',
          url: 'index',
        },
        {
          title: 'Drop 2',
          url: 'index',
        },
        {
          title: 'Drop 3',
          url: 'index',
        }
      ],
    }
  ],

  oneLevel: [
    {
      name: 'Level 1',
      url: 'index',
      icon: LayoutList,
    },
    {
      name: 'Level 2',
      url: 'index',
      icon: PieChart,
    },
    {
      name: 'Level 3',
      url: 'index',
      icon: Map,
    },

    {
      name: 'Level 4',
      url: 'index',
      icon: Map,
    },
  ],

}
</script>

