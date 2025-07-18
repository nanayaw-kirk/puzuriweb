<template>
	<div>
		<h1 class="font-medium text-2xl md:text-3xl" v-if="data?.attrs?.level === 'one'">{{data?.content}}</h1>
		<h2 class="font-medium text-xl md:text-2xl" v-else-if="data?.attrs?.level === 'two'">{{data?.content}}</h2>
		<h3 class="font-medium text-lg md:text-xl" v-else-if="data?.attrs?.level === 'three'">{{data?.content}}</h3>
		<h4 class="font-medium md:text-lg" v-else-if="data?.attrs?.level === 'four'">{{data?.content}}</h4>
		<h5 class="font-medium text-sm md:text-base" v-else-if="data?.attrs?.level === 'five'">{{data?.content}}</h5>
		<h6 class="font-medium text-sm" v-else>{{data?.content}}</h6>
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
