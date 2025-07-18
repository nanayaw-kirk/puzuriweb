<template>
	<div>
		<div :class="sizeStyle?.container">
			<img :src="data.src" class="h-full w-full" :class="sizeStyle?.media" :alt="data?.attrs?.altText">
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


const imageDimensions = computed(() => 'me')

const sizeStyle = computed(()=>{

	if (props.data.size === 'contain') {
		return {
			container : 'w-full',
			media : 'object-contain'
		}
	}

	if (props.data.size === 'banner') {
		return {
			container : 'aspect-video h-fit md:h-[450px] w-full',
			media : 'object-cover object-top'
		}
	}

	return {
		container : 'w-full h-full',
		media : 'object-cover'
	}

})
</script>
