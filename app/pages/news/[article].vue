<template>
	<div class="page pb-15">

		<Head>
			<Title>{{article?.title}} | News | {{$appName}}</Title>
			<Meta property="og:type" content="article" />
			<Meta property="og:title" :content="article?.title" />
			<Meta property="og:image" itemprop="image" :content="article?.poster ? article?.poster : '/placeholder_rec.png'" />
			<Meta property="og:url" :content="ogURL"/>
			<meta property="og:site_name" :content="`${$appName} Website`"/>
			<meta property="og:description" :content="`Official website of the ${$appName}`"/>
			<Meta property="og:image:width" content="300"/>
			<Meta property="og:image:height" content="300"/>


		</Head>
		<div class="container grid gap-14 md:gap-20">

			<div class="grid gap-6">
				<div>
					<h2 class="text-xl md:text-4xl line-clamp-5 lg:text-5xl font-bold leading-5 sm:leading-none">
						{{article?.title}}
					</h2>
				</div>

				<div class="flex gap-x-2 md:gap-x-4 md:items-center">
					<span class="text-xs mb-2 font-medium uppercase">{{$formatDate(article?.date, 'MMM D')}} <br> {{$formatDate(article?.date, 'YYYY')}}</span>
					<ui-separator orientation="vertical" decorative></ui-separator>
					<div class="expand">
						<p class="text-sm md:text-base text-foreground/80 sm:text-foreground/70">
							{{article?.teaser}}
						</p>
					</div>
				</div>

				<div class="w-full  bg-primary h-[200px] md:h-[550px] mx-auto row-start-2 md:row-start-3 rounded-xl md:rounded-2xl">
					<img :src="article?.poster ? article?.poster : 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/lush_lens_storyboard_photo__2_1.width-1200.format-webp.webp'" :alt="`Poster image for article : ${article?.title}`" class="w-full h-full object-cover group-hover:scale-110 transition duration-500 object-top rounded-xl md:rounded-2xl">
				</div>



				<div class="md:max-w-4/5 mx-auto w-full">
					<news-block-renderer :blocks="article?.blocks?.length > 0 ? article?.blocks : []"></news-block-renderer>
				</div>
			</div>

			<div class="grid gap-6 md:p-8 md:border" v-if="recommended?.length > 0">
				<h3 class="text-2xl font-black uppercase">
					You May Also Like
				</h3>


				<div class="grid md:grid-cols-2 gap-2 md:gap-4">
					<template v-for="entry in recommended" :key="entry?.slug">
						<news-article-card :article="entry"></news-article-card>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import news from "../app/data/articles.json"

const article = computed(()=> news.find(item => item?.slug === useRoute()?.params?.article))

const recommended = computed(()=> news.sort((a, b) => new Date(b.date) - new Date(a.date))?.filter(item => item?.slug !== useRoute()?.params?.article)?.slice(0,3))


const ogURL = computed(()=> location?.href)
</script>
