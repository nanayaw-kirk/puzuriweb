<template>
	<div>
		<!-- <ui-scroll-area class="h-dvh">
			<div class="flex flex-col">
				
				<navs-header class="border-b"></navs-header>
				<main class="min-h-dvh">
					<slot :key="`ref-${GLOBAL_PAGE_REFERESH}`"></slot>
				</main>
				<navs-footer class="py-12 md:py-20 pb-0"></navs-footer>
			</div>
		</ui-scroll-area> -->

		<Head>
			<Title>{{$appName}} Group of Companies - This is not a mistake!</Title>
<!-- 			<Meta name="description" :content="`Group of Companies - Empowering Growth, Building Futures.`" />
			<Meta name="keywords" :content="`Agriculture, Agric, Agro Company, Farm, Farmland, Farming, Mechanized Agriculture, Logistics, Last Mile Logistics, Construction, Construction Company, Real Estate`"></Meta>
			<Meta name="robots" content="index, follow"></Meta> -->
		</Head>


		<div class="container p-0">
			<div class="aspect-video">
				<iframe class="w-full h-full !rounded-[inherit] !object-cover" src="https://www.youtube.com/embed/pJLk-IIjFek?list=RDpJLk-IIjFek&autoplay=1" title="Bad Meets Evil-Above The Law-Lyrics [HQ]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
		</div>

	</div>

	<partials-themer class="hidden"/>
</template>

<script setup lang="ts">
import {useStorage} from "@vueuse/core"
// const { authenticated, user } = storeToRefs(useAuthStore())
const GLOBAL_PAGE_REFERESH = ref(false) //useStorage('GLOB_DID_ADM_REF', false)

</script>
