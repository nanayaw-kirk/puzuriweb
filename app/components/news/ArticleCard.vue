<template>
	<div>
		<nuxt-link :to="{name: 'news-article', params : {article : article?.slug}}" class="w-full border dark:bg-muted/50 hover:!bg-muted/70 flex">
			<div class="expand p-4 md:p-6">
				<div class="flex flex-col gap-2 w-full">
					<span class="text-xs uppercase ">{{$formatDate(article?.date, 'MMM D, YYYY')}}</span>
					<h4 class="line-clamp-2 font-semibold text-sm md:text-lg leading-4 sm:leading-none"> {{article?.title}}</h4>
					<p class="text-xs sm:text-sm text-foreground/70 line-clamp-2">{{article?.teaser}}</p>
				</div>
			</div>

			<div class="min-h-35 w-1/3 md:w-40 bg-linear-to-tl from-primary to-log">
				<img :src="article?.thumbnail ? article?.thumbnail : '/news/thumbnails/fallback.jpg'" class="w-full h-full object-cover object-left" alt="">
			</div>
		</nuxt-link>
	</div>
</template>
<script setup lang="ts">

const props = defineProps({
	article : {
		type : Object,
		required : true
	}
})

</script>
