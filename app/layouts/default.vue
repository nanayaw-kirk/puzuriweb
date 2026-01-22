<template>
	<div>
		<ui-scroll-area class="h-dvh">
			<div class="flex flex-col">
				
				<navs-header class="border-b"></navs-header>
				<main class="min-h-dvh">
					<slot :key="`ref-${GLOBAL_PAGE_REFERESH}`"></slot>
				</main>
				<navs-footer class="py-12 md:py-20 pb-0"></navs-footer>
			</div>
		</ui-scroll-area>

	</div>

	<partials-themer class="hidden"/>
</template>

<script setup lang="ts">
import {useStorage} from "@vueuse/core"
const GLOBAL_PAGE_REFERESH = ref(false)

</script>
