<template>
	<div>
		<template v-if="data?.content?.length > 0">
			<div class="grid gap-2 w-full" :class="getGridClasses">
				<template v-for="(image, index) in data?.content" :key="index">
					<div :class="['w-full max-h-40 sm:max-h-full overflow-hidden rounded-md', getImageClasses(index)]">
						<img
						:src="image.src"
						:alt="image.alt || ''"
						class="w-full h-full object-cover rounded"
						/>
					</div>
				</template>
			</div>
		</template>

	</div>
</template>

<script setup lang="ts">


const props = defineProps({
	data: {
		type: Array,
		required: true,
		validator: (data) => data?.content?.every(img => img?.src)
	}
})

const imageCount = computed(() => props.data.content.length)

const getGridClasses = computed(() => {
	if (imageCount.value === 1) {
		return 'grid-cols-1'
	} else if (imageCount.value === 2) {
		return 'grid-cols-2'
	} else {
		return 'grid-cols-2 md:grid-cols-3'
	}
})

/**
 * Determine per-image classes dynamically to achieve the layout goals.
 */
const getImageClasses = (index: number) => {
	const count = imageCount.value

  // === Rules for Specific Counts ===

  // 3 images
	if (count === 3) {
		if (index === 2) return 'col-span-2 md:col-span-1'
	}

  // 4 images
if (count === 4) {
	if (index === 3) return 'col-span-2 md:col-span-3'
}

  // 5 images
if (count === 5) {
	if (index === 4) return 'col-span-2 md:col-span-1.5'
}

  // 6+ images (dynamic)
if (count >= 6) {
	const isSmall = index === count - 1 && count % 2 !== 0
	const isLargeRemainder = count % 3

    // Last row handling for large screens
	if (index >= count - isLargeRemainder) {
		if (isLargeRemainder === 1 && index === count - 1) {
			return 'md:col-span-3'
		}
		if (isLargeRemainder === 2) {
			return index === count - 2 ? 'md:col-span-2' : 'md:col-span-1'
		}
	}

    // Last row handling for small screens
	if (isSmall) return 'col-span-2'
}

return 'col-span-1'
}
</script>


