<template>
	<div @click="isDark = !isDark" class="cursor-pointer rounded-xl">
		<client-only>
			<slot name="switcher">
				<SunMedium v-if="isDark" class="size-7 rounded-[inherit]"/>
				<Moon v-else class="size-7 rounded-[inherit]"/>
			</slot>
		</client-only>
	</div>
</template>
<script setup>

import { Moon, SunMedium } from 'lucide-vue-next'

const {isDark} = useTheme()
useHead({
	script: [{
		children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			document.documentElement.setAttribute("data-theme", "dark")
		} else {
			document.documentElement.removeAttribute("data-theme")
	}`}]
})
</script>
