<template>
  <ui-sidebar-group>
    <slot name="header"></slot>
    <ui-sidebar-menu>
      <ui-sidebar-menu-item v-for="item in list" :key="item.name">
        <ui-sidebar-menu-button as-child>
          <nuxt-link :to="{name : item?.url}">
            <component :is="item.icon" />
            <span>{{ item.name }}</span>
          </nuxt-link>
        </ui-sidebar-menu-button>
      </ui-sidebar-menu-item>

    </ui-sidebar-menu>
  </ui-sidebar-group>
</template>
<script setup lang="ts">
import { Folder, Forward, type LucideIcon, MoreHorizontal, Trash2} from 'lucide-vue-next'

import { useSidebar} from '@/components/ui/sidebar'

defineProps<{
  list: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}>()

const { isMobile } = useSidebar()
</script>