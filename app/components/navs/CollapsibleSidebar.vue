

<template>
  <ui-sidebar-group>
    <!-- <ui-sidebar-group-label>Inventory</ui-sidebar-group-label> -->
    <ui-sidebar-menu>
      <ui-collapsible v-for="item in list" :key="item.title" as-child :default-open="item.isActive" class="group/collapsible">
        <ui-sidebar-menu-item>
          <ui-collapsible-trigger as-child>
            <ui-sidebar-menu-button :tooltip="item.title">
              <component :is="item.icon" v-if="item.icon" />
              <span class="font-semibold">{{ item.title }}</span>
              <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </ui-sidebar-menu-button>
          </ui-collapsible-trigger>
          <ui-collapsible-content>
            <ui-sidebar-menu-sub>
              <ui-sidebar-menu-sub-item v-for="subItem in item.subList" :key="subItem.title">
                <ui-sidebar-menu-sub-button as-child>
                  <nuxt-link :to="{name : subItem?.url}">
                    <span>{{ subItem.title }}</span>
                  </nuxt-link>
                </ui-sidebar-menu-sub-button>
              </ui-sidebar-menu-sub-item>
            </ui-sidebar-menu-sub>
          </ui-collapsible-content>
        </ui-sidebar-menu-item>
      </ui-collapsible>
    </ui-sidebar-menu>
  </ui-sidebar-group>
</template>

<script setup lang="ts">
import { ChevronRight, type LucideIcon } from 'lucide-vue-next'

defineProps<{
  list: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    subList?: {
      title: string
      url: string
    }[]
  }[]
}>()
</script>
