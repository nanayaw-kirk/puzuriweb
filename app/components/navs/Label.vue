

<template>
  <ui-sidebar-menu>
    <ui-sidebar-menu-item>
      <ui-dropdown-menu>
        <ui-dropdown-menu-trigger as-child>
          <nuxt-link :to="{name: 'index'}">
            <ui-sidebar-menu-button size="lg" class="bg-border/80 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                LL
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">
                  App Name
                </span>
                <span class="truncate text-[10px] text-foreground/70">{{ 'Admin Console' }}</span>
              </div>
            </ui-sidebar-menu-button>
          </nuxt-link>
        </ui-dropdown-menu-trigger>
   <!--      <ui-dropdown-menu-content
        class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="start"
        :side="isMobile ? 'bottom' : 'right'"
        :side-offset="4"
        >
        <ui-dropdown-menu-label class="text-xs text-muted-foreground">
          Teams
        </ui-dropdown-menu-label>
        <ui-dropdown-menu-item
        v-for="(team, index) in teams"
        :key="team.name"
        class="gap-2 p-2"
        @click="activeTeam = team"
        >
        <div class="flex size-6 items-center justify-center rounded-sm border">
          <component :is="team.logo" class="size-4 shrink-0" />
        </div>
        {{ team.name }}
        <ui-dropdown-menu-shortcut>⌘{{ index + 1 }}</ui-dropdown-menu-shortcut>
      </ui-dropdown-menu-item>
      <ui-dropdown-menu-separator />
      <ui-dropdown-menu-item class="gap-2 p-2">
        <div class="flex size-6 items-center justify-center rounded-md border bg-background">
          <Plus class="size-4" />
        </div>
        <div class="font-medium text-muted-foreground">
          Add team
        </div>
      </ui-dropdown-menu-item>
    </ui-dropdown-menu-content> -->
  </ui-dropdown-menu>
</ui-sidebar-menu-item>
</ui-sidebar-menu>
</template>

<script setup lang="ts">
import { ChevronsUpDown, Plus } from 'lucide-vue-next'

import { type Component, ref } from 'vue'

import { useSidebar } from '@/components/ui/sidebar'
const { isMobile } = useSidebar()
</script>
