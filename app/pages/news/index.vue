<template>
	<div class="sections grid gap-6 md:gap-20">

		<Head>
			<Title>Latest News - {{$groupLtd}}</Title>
			<Meta name="description" :content="`Puzuri Agro is a leader in Ghana’s agricultural sector, blending innovation with excellence.`" />
			<Meta name="keywords" :content="`Agriculture, Agric, Agro Company, Farm, Farmland, Farming`"></Meta>
			<Meta name="robots" content="index, follow"></Meta>
		</Head>

		<section class="grid gap-6 md:gap-8">
			<div class="container p-0 md:pt-6">
				<div class="grid gap-6 md:gap-12" >

					<div class="bg-found flex bg-cover bg-no-repeat object-bottom h-90 md:h-130  flex flex-col rounded-t-none rounded-4xl md:rounded-t-4xl relative">

						<img :src="first?.poster" alt="" class="w-full h-full object-cover rounded-t-none rounded-4xl md:rounded-t-4xl">
						


						<nuxt-link :to="{name: 'news-article', params : {article : first?.slug}}" class="w-full top-0 absolute rounded-t-none rounded-4xl md:rounded-t-4xl bg-linear-to-b from-black/10 to-black h-full flex flex-col">	
							<div class="p-6 md:p-20  mt-auto flex flex-wrap gap-6">
								<div class="md:w-4/5">
									<h1 class="text-2xl md:text-4xl font-black text-white mb-4 line-clamp-3 underline">
										{{first?.title}}
									</h1>

									<p class="text-sm md:text-lg text-white/80 line-clamp-2">
										{{first?.teaser}}
									</p>
								</div>	

							</div>
						</nuxt-link >
					</div>

				</div>	
			</div>
		</section>


		<section>
			<div class="container ">
				<div class="grid md:grid-cols-2 gap-2 md:gap-4">
					<template v-for="article in list?.slice(0,6)" :key="article?.slug">
						<news-article-card :article="article"></news-article-card>
					</template>
				</div>		
			</div>
		</section>


		


	</div>	
</template>
<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'

import news from "../app/data/articles.json"
const sortedNews = computed(()=> news.sort((a, b) => new Date(b.date) - new Date(a.date)))
const list = computed(()=> sortedNews?.value?.slice(1, sortedNews?.value?.length))
const first = computed(()=> sortedNews?.value?.[0])
</script>
