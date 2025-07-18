<template>
	<div>
		<div class="grid gap-y-4">
			<template v-for="(block, index) in blocks" :key="index">
				<news-block-paragraph v-if="block?.type === 'paragraph'" :data="block"></news-block-paragraph>
				<news-block-spacer v-if="block?.type === 'spacer'" :data="block"></news-block-spacer>
				<news-block-heading v-if="block?.type === 'heading'" :data="block"></news-block-heading>
				<news-block-quote v-else-if="block?.type === 'quote' && quotes?.length === 1" :data="block"></news-block-quote>
				<news-block-image v-else-if="block?.type === 'image'" :data="block"></news-block-image>
				<news-block-list v-else-if="block?.type === 'list'" :data="block"></news-block-list>
				<news-block-partners v-else-if="block?.type === 'partners'" :data="block"></news-block-partners>
				<news-block-link v-else-if="block?.type === 'link'" :data="block"></news-block-link>
				<news-block-gallery v-else-if="block?.type === 'gallery'" :data="block"></news-block-gallery>

			</template>
			<news-block-quotes class="!order-[-6]" v-if="quotes?.length > 1" :data="quotes"></news-block-quotes>
		</div>



	</div>	
</template>
<script setup lang="ts">
const props = defineProps({
	blocks : {
		type : Array,
		required : true
	}
})



const quotes = computed(()=> props?.blocks?.filter(item => item?.type === 'quote'))
</script>
