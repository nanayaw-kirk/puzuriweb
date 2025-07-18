<template>
	<ui-sidebar-provider>
		<navs-sidebar />
		<ui-sidebar-inset>
			<header class="flex p-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full border-b">
				<div class="flex items-center gap-2 w-full">
					<ui-sidebar-trigger class="-ml-1" />
					<ui-separator orientation="vertical" class="mr-2 h-4" />
					<div class="expand">
						<!-- <navs-main class="w-full"></navs-main> -->
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>
			</header>
			<div class="w-full bg-border/20 dark:bg-[#5f5f67]/10">
				<div class="w-full max-w-screen h-[95dvh] max-h-screen flex flex-col relative overflow-hidden">
					<ui-scroll-area class="h-full">
						<main>
							<slot :key="`ref-${GLOBAL_PAGE_REFERESH}`"></slot>
						</main>
					</ui-scroll-area>

					<div class="fixed bottom-0 w-full   md:hidden p-2 z-50">
						<!-- <navs-bottom class="border rounded-lg bg-background/90 shadow-2xl w-fit mx-auto px-3 py-[2px]"></navs-bottom> -->
					</div>
				</div>
			</div>
		</ui-sidebar-inset>
	</ui-sidebar-provider>

	<!-- <utils-color-mode class="hidden"></utils-color-mode> -->
</template>

<script setup lang="ts">
import {useStorage} from "@vueuse/core"
// const { authenticated, user } = storeToRefs(useAuthStore())
const GLOBAL_PAGE_REFERESH = ref(false) //useStorage('GLOB_DID_ADM_REF', false)

</script>
