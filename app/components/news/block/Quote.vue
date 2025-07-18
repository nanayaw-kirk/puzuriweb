<template>
	<div>
		<div class="p-6 md:p-12 flex flex-col gap-y-3 bg-primary text-primary-foreground rounded-2xl">

			<div class="flex flex-wrap items-start gap-3">
				<div class="expand">
					<p>
						{{data?.content}}
					</p>
				</div>
				<Quote class="md:size-10"/>
			</div>

			<div class="md:p-0 flex items-center gap-4  gap-y-4">
				<ui-avatar class="w-full h-full size-10 md:size-12 rounded-full bg-primary-foreground">
					<ui-avatar-image class="bg-transparent" :src="data?.image ? data?.image : '/avatar.png'"></ui-avatar-image>
					<ui-avatar-fallback class="bg-primary-foreground text-primary">{{data?.by?.substring(0,1)}}</ui-avatar-fallback>
				</ui-avatar>
				<div class="flex flex-col expand">
					<span class="font-bold line-clamp-1">{{data?.by}}</span>
					<span class="text-xs line-clamp-1">{{data?.designation}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
const props = defineProps({
	data : {
		type : Object,
		required : true
	}
})
</script>
