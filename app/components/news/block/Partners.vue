<template>
	<div>
		<div class="flex flex-col gap-y-4">
			<div v-if="data?.preface">
				<span>
					{{data?.preface}}
				</span>
			</div>
			<div class="grid grid-cols-4 gap-1 md:gap-3" :class="data?.content?.length > 5 ? 'md:grid-cols-5' : 'grid-cols-3'">
				<template v-for="(partner, index) in data?.content" :key="index">
					<div class="w-full bg-border dark:bg-muted/50 md:rounded-md h-[55px] md:h-[120px]">
						<img :src="partner?.logo" alt="" class="w-full h-full object-cover md:rounded-md">
					</div>
				</template>
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
