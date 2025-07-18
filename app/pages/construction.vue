<template>
	<div class="page">
		
		<div class="sections grid gap-10 md:gap-20  md:pt-10">
			<section class="container grid gap-6 md:gap-12">
				<div class="flex flex-col mx-auto sm:max-w-2xl gap-4">
					<h1 class="text-2xl sm:text-5xl font-semibold sm:font-black text-center">
						Building a Foundation for <br>Sustainable Development
					</h1>

					<p class="text-foreground/70 text-sm sm:text-base text-center">
						We are a diversified conglomerate with interests in Agriculture, Logistics, Construction, and Social Impact.
					</p>
				</div>

				<div class="w-full aspect-video bg-transparent -mt-5 md:-mt-30 lg:-mt-40">
					<img src="/static/pc_hero.png" class="w-full h-full object-contain md:object-cover" alt="">
				</div>

			</section>


			<section class="container grid gap-6 md:gap-12 ">
				<div class="md:max-w-4xl mx-auto">
					<p class="md:text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque necessitatibus ut odit reiciendis vitae omnis cum similique ea alias illo rem maiores excepturi aspernatur libero, provident eum fuga aliquid?
					</p>
				</div>

				<div class="grid gap-4 md:gap-8 md:grid-cols-3">
					<div class="flex gap-4">
						<ui-avatar class="size-12 md:size-16 rounded bg-linear-to-l  from-yellow-300 to-amber-400 p-2 mb-2 md:mb-4">
							<ui-avatar-image src="/illustrations/seeds.svg"></ui-avatar-image>
						</ui-avatar>
						<div class="expand flex flex-col gap-y-1">
							<h4 class="text-lg md:text-2xl font-black">Grains & Seeds</h4>
							<p class="text-xs sm:text-sm text-foreground/80">
								Certified Seed & Grain Production and Processing of Soybeans, Rice, Cowpea, Sorghum, and Maize.
							</p>
						</div>
					</div>
					<div class="flex gap-4">
						<ui-avatar class="size-12 md:size-16 rounded bg-linear-to-l  from-yellow-300 to-amber-400 p-2 mb-2 md:mb-4">
							<ui-avatar-image src="/illustrations/chicken.svg"></ui-avatar-image>
						</ui-avatar>
						<div class="expand flex flex-col gap-y-1">
							<h4 class="text-lg md:text-2xl font-black">Animal Husbandary</h4>
							<p class="text-xs sm:text-sm text-foreground/80">
								Aquaculture & Livestock Farming : Fish farming, poultry, and premium livestock breeding.
							</p>
						</div>
					</div>
					<div class="flex gap-4">
						<ui-avatar class="size-12 md:size-16 rounded bg-linear-to-l  from-yellow-300 to-amber-400 p-2 mb-2 md:mb-4">
							<ui-avatar-image src="/illustrations/trees.svg"></ui-avatar-image>
						</ui-avatar>
						<div class="expand flex flex-col gap-y-1">
							<h4 class="text-lg md:text-2xl font-black">Aggregation</h4>
							<p class="text-xs sm:text-sm text-foreground/80">
								Cash Crop Production & Aggregation : Cotton, Cashew, Rubber.
							</p>
						</div>
					</div>
				</div>
				


			</section>

			<section>
				<div class="container">

					<div class="h-100 rounded-2xl bg-primary"></div>

				</div>
			</section>

			<section>
				<div class="container md:border md:rounded-lg md:p-8">


					<div class="grid lg:grid-cols-2 gap-4 md:gap-6 items-start">

						<div class="grid">
							<span class="text-xs uppercase mb-2">New Updates</span>
							<h2 class="text-2xl md:text-4xl font-bold">Latest News From {{$appName}}</h2>
							<p class="text-xs sm:text-base text-foreground/80">Get the latest news and updates from {{$appName}}</p>
						</div>
						<div class="lg:col-span-2">
							<home-latest-news></home-latest-news>
						</div>
					</div>

				</div>
			</section>


			<section>
				<div class="container grid lg:grid-cols-3 gap-6 md:gap-12">
					<div>
						
						<span class="text-xs uppercase mb-2">FAQs</span>
						<h2 class="text-2xl md:text-4xl font-bold">Have Questions?</h2>
						<p class="mt-2 mb-4 text-foreground/80 text-sm">Get Answers about {{$agro}} from frequently asked questions.</p>


						<nuxt-link :to="{name: 'contact'}">
							<ui-button size="lg">
								<span>
									Get In Touch
								</span>

								<MoveRight/>

							</ui-button>
						</nuxt-link>
					</div>

					<div class="lg:col-span-2">
						<faqs-agro></faqs-agro>
					</div>
				</div>
			</section>
			





		</div>

	</div>
</template>
<script setup lang="ts">

</script>
