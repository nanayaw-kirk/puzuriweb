<template>
	<div>
		<ui-accordion type="single" collapsible class="grid divide-y">
			<template v-for="faq,key in faqs" :key="key">
				<ui-accordion-item class="bg-transparent" :value="`item-${key}`">
					<ui-accordion-trigger class="text-left hover:no-underline text-base md:text-xl  data-[state=open]:px-3 data-[state=open]:bg-primary dark:data-[state=open]:bg-primary/50 data-[state=open]:text-primary-foeground font-semibold">
						{{faq.question}}
					</ui-accordion-trigger>
					<ui-accordion-content class="text-left p-3 text-base text-foreground/70 pb-0 md:text-lg pb-4">  <!-- -->
						{{faq.answer}}
					</ui-accordion-content>
				</ui-accordion-item>
			</template>
		</ui-accordion>
	</div>	
</template>
<script setup lang="ts">

import data from "../app/data/agro.json"

const props = defineProps({
	slice : {
		type : Number
	}
})

const faqs = computed(() => props.slice ?  data.slice(0, props.slice) : data)

</script>
