import { useStorage } from '@vueuse/core'
export default defineNuxtRouteMiddleware((to, from) => {
	const menu = useStorage('puzu_menu_open')
	menu.value = false
})