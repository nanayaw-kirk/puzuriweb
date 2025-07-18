<template>
	<div>

		<div class="flex flex-col gap-y-4">
			<h3 v-if="data?.name" class="font-medium text-lg md:text-xl">
				{{data?.name}}
			</h3>

			<div>
				<ul class="flex flex-col !gap-y-1" :class="data?.attrs?.bullets ? 'list-disc pl-4' : '' ">
					<li class="text-sm md:text-base" v-for="(entry, index) in data?.content" :key="index">
						{{entry}}
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>
<script setup lang="ts">
const props = defineProps({
	data : {
		type : Object,
		required : true
	}
})
</script>
