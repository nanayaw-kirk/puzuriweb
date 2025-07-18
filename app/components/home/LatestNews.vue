<template>
	<div>
		<div class="space-y-4">
			<div class="grid md:grid-cols-2 gap-2 md:gap-4">
				<template v-for="article in list?.slice(0,6)" :key="article?.slug">
					<news-article-card :article="article"></news-article-card>
				</template>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">

import news from "../app/data/articles.json"

const {smAndDown} = useScreenSize()

const slider = ref(null)
const currentSlide = ref(0)



const sortedNews = computed(()=> news.sort((a, b) => new Date(b.date) - new Date(a.date)))
const list = computed(()=> sortedNews?.value?.slice(0, smAndDown?.value ? 4 : 6))

</script>
