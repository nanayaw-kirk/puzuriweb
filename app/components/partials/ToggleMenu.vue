<template>
	<div>
		<div @click="open = !open">
			<X v-if="open"/>
			<Menu v-else/>
		</div>
	</div>	
</template>
<script setup lang="ts">
import {useStorage} from "@vueuse/core"
const open = useStorage('puzu_menu_open', false)
import { Menu, X } from 'lucide-vue-next'
</script>
