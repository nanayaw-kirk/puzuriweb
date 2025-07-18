<template>
	<div>
		<p class="text-sm md:text-base text-foreground/80">
			{{data?.content}}
		</p>
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
