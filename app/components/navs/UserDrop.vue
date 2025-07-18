<template>
  <ui-sidebar-menu>
    <ui-sidebar-menu-item>

      <ui-alert-dialog v-model:open="open">

        <ui-dropdown-menu>
          <ui-dropdown-menu-trigger as-child>
            <ui-sidebar-menu-button
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
            <ui-avatar class="size-8 bg-gradient-to-b from-pink-400 to-purple-500 rounded-lg">
              <ui-avatar-image src />
              <ui-avatar-fallback class="rounded-lg uppercase">
                A
              </ui-avatar-fallback>
            </ui-avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">User Name</span>
              <span class="truncate text-xs">test@gmail.com</span>
            </div>
            <ChevronsUpDown class="ml-auto size-4" />
          </ui-sidebar-menu-button>
        </ui-dropdown-menu-trigger>
        <ui-dropdown-menu-content
        class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        :side="isMobile ? 'bottom' : 'right'"
        align="end"
        :side-offset="4"
        >
        <ui-dropdown-menu-label class="p-0 font-normal">
          <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <ui-avatar class="size-8 bg-gradient-to-b from-pink-400 to-purple-500 rounded-lg">
              <ui-avatar-image :src="'/avatarr.png'" />
              <ui-avatar-fallback class="rounded-lg uppercase">
               User Name
             </ui-avatar-fallback>
           </ui-avatar>
           <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">User Name</span>
            <span class="truncate text-xs">test@gmail.com</span>
          </div>
        </div>
      </ui-dropdown-menu-label>
      <ui-dropdown-menu-separator />
      <ui-dropdown-menu-group>



        <ui-dropdown-menu-item class="gap-x-4 items-center">
          <ui-label for="switch">Switch to {{isDark ? 'Light' : 'Dark'}} Mode</ui-label>              
          <ui-dropdown-menu-shortcut>
            <ui-switch id="switch" :checked="isDark" @update:checked="isDark = !isDark"></ui-switch>
          </ui-dropdown-menu-shortcut>
        </ui-dropdown-menu-item>

        <ui-dropdown-menu-separator />

        <nuxt-link :to="{name: 'index'}">
          <ui-dropdown-menu-item class="gap-x-4 items-center">
            <span>Your Profile</span>
          </ui-dropdown-menu-item>
        </nuxt-link>

        <ui-dropdown-menu-separator />

        <nuxt-link :to="{name: 'index'}">
          <ui-dropdown-menu-item class="gap-x-4 items-center">
            <span>Your Organization</span>
          </ui-dropdown-menu-item>
        </nuxt-link>
        <ui-dropdown-menu-separator />


        <ui-alert-dialog-trigger as-child>
          <ui-dropdown-menu-item>
            <span>Logout</span>
          </ui-dropdown-menu-item>
        </ui-alert-dialog-trigger>
      </ui-dropdown-menu-group>
    </ui-dropdown-menu-content>
  </ui-dropdown-menu>

  <ui-alert-dialog-content class="max-w-[420px]">
    <ui-alert-dialog-header>
      <ui-alert-dialog-title>
        Are you sure you want to log out?
      </ui-alert-dialog-title>
      <ui-alert-dialog-description>
        You'll need to log back in to access certain features on {{$appName}}.
      </ui-alert-dialog-description>
    </ui-alert-dialog-header>

    <ui-alert-dialog-footer>
      <ui-alert-dialog-cancel>
        Cancel
      </ui-alert-dialog-cancel>
      <ui-alert-dialog-action @click.prevent="">
        Logout
      </ui-alert-dialog-action>
    </ui-alert-dialog-footer>
  </ui-alert-dialog-content>

</ui-alert-dialog>
</ui-sidebar-menu-item>
</ui-sidebar-menu>
</template>


<script setup lang="ts">
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Sparkles} from 'lucide-vue-next'
import { useSidebar} from '@/components/ui/sidebar'
// const {user} = storeToRefs(useAuthStore())
const open = ref(false)
const {isDark} = useTheme()
// const {logout} = useAuthStore()
const { isMobile } = useSidebar()
</script>