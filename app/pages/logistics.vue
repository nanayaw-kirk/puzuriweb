<template>
	<div class="sections grid gap-6 md:gap-12">
		
		<Head>
			<Title>{{$agro}} - Nurturing Growth & Sustainability in Agriculture</Title>
			<Meta name="description" :content="`Puzuri Agro is a leader in Ghana’s agricultural sector, blending innovation with excellence.`" />
			<Meta name="keywords" :content="`Agriculture, Agric, Agro Company, Farm, Farmland, Farming`"></Meta>
			<Meta name="robots" content="index, follow"></Meta>
		</Head>



		<div class="grid gap-6 md:gap-8">
			<div class="container p-0 md:pt-6">
				<div class="grid gap-6 md:gap-12" >

					<div class="hidden md:flex bg-cover bg-no-repeat object-bottom min-h-120 md:min-h-130  flex flex-col rounded-t-none rounded-4xl md:rounded-t-4xl relative" style="background-image : url(/static/puzuri.jpg)">


						<div class="w-full top-0 absolute rounded-t-none rounded-4xl md:rounded-t-4xl bg-linear-to-b from-transparent to-black h-full flex flex-col">



							<div class="p-6 md:p-20  rounded-xl mt-auto">


								<div class="w-full grid md:grid-cols-3 gap-2 md:gap-10">
									<div class="lg:col-span-2">
										<h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
											Empowering Growth, <br> Building Futures.
										</h1>
									</div>

									<div class="flex flex-col gap-y-4">
										<p class="text-sm md:text-lg text-white/80">
											Improve efficiency, provide a better customer experience with modern technology services.

										</p>


										<div class="grid grid-cols-2 md:flex md:flex-row gap-4">
											<nuxt-link :to="{name: 'about'}">
												<ui-button size="lg">
													Learn More
												</ui-button>
											</nuxt-link>


											<nuxt-link :to="{name: 'contact'}">
												<ui-button class="text-white bg-transparent !border-white" size="lg" variant="outline">
													<span>
														Get In Touch
													</span>

													<MoveRight/>

												</ui-button>
											</nuxt-link>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>


					<div class="md:hidden bg-cover bg-no-repeat object-bottom min-h-120 md:min-h-130  flex flex-col rounded-t-none rounded-4xl md:rounded-t-4xl relative" style="background-image : url(/static/puzuri_mobi.jpg)">


						<div class="w-full top-0 absolute rounded-t-none rounded-4xl md:rounded-t-4xl bg-linear-to-b from-transparent to-black h-full flex flex-col">



							<div class="p-6 md:p-20  rounded-xl mt-auto">


								<div class="w-full grid md:grid-cols-3 gap-2 md:gap-10">
									<div class="lg:col-span-2">
										<h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
											Empowering Growth, <br> Building Futures.
										</h1>
									</div>

									<div class="flex flex-col gap-y-4">
										<p class="text-sm md:text-lg text-white/80">
											Improve efficiency, provide a better customer experience with modern technology services.

										</p>


										<div class="grid grid-cols-2 md:flex md:flex-row gap-4">
											<nuxt-link :to="{name: 'about'}">
												<ui-button size="lg" class="w-full">
													Learn More
												</ui-button>
											</nuxt-link>


											<nuxt-link :to="{name: 'contact'}">
												<ui-button class="text-white bg-transparent !border-white w-full" size="lg" variant="outline">
													<span>
														Get In Touch
													</span>

													<MoveRight/>

												</ui-button>
											</nuxt-link>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>	
			</div>
		</div>


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
</template>
<script setup lang="ts">



</script>
