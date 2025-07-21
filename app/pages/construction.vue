<template>
	<div class="page">

		<Head>
			<Title>{{$const}} - Building a Foundation for Sustainable Development</Title>
			<Meta name="description" :content="`Building a Foundation for Sustainable Development`" />
			<Meta name="keywords" :content="`Construction, Construction Company, Real Estate, Building, Architecture`"></Meta>
			<Meta name="robots" content="index, follow"></Meta>
		</Head>
		
		<div class="sections grid gap-10 md:gap-20  md:pt-10">
			<section class="container grid gap-6 md:gap-12">
				<div class="flex flex-col items-center mx-auto sm:max-w-2xl gap-4">
					<h1 class="text-2xl sm:text-5xl font-semibold sm:font-black text-center">
						Building a Foundation for <br>Sustainable Development
					</h1>

					<p class="text-foreground/70 text-sm sm:text-base text-center">
						Puzuri Construction is dedicated to high-quality, innovative, and sustainable infrastructure development, delivering projects that empower communities and drive economic growth.
					</p>

					<nuxt-link :to="{name: 'contact'}">
						<ui-button class="bg-const hover:bg-const/90 text-foreground">
							Get Started
						</ui-button>
					</nuxt-link>
				</div>

				<div class="w-full aspect-video bg-transparent -mt-5 md:-mt-30 lg:-mt-40">
					<img src="/static/puz_cons_hero.png" class="w-full h-full object-contain md:object-cover" alt="">
				</div>

			</section>


			<section class="container grid gap-6 md:gap-12 ">

				<div class="grid gap-2 md:grid-cols-3">
					<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
						<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br  from-const/60 to-const p-2">
							<ui-avatar-image src="/illustrations/com_build.svg"></ui-avatar-image>
						</ui-avatar>
						<div class="expand flex flex-col gap-y-1">
							<p class="font-medium text-sm text-foreground/80">
								Residential, Commercial, Industrial, and Infrastructure Construction.
							</p>
						</div>
					</div>


					<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
						<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br from-const/60 to-const p-2">
							<ui-avatar-image src="/illustrations/bricks.svg"></ui-avatar-image>
						</ui-avatar>
						<div class="expand flex flex-col gap-y-1">
							<p class="font-medium text-sm text-foreground/80">
								Production & Sale of High-Quality Building Blocks.
							</p>
						</div>
					</div>


					<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
						<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br from-const/60 to-const p-2">
							<ui-avatar-image src="/illustrations/sus_build.svg"></ui-avatar-image>
						</ui-avatar>
						<div class="expand flex flex-col gap-y-1">
							<p class="font-medium text-sm text-foreground/80">
								Green Building Technologies & Energy-Efficient Designs.
							</p>
						</div>
					</div>

					<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
						<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br from-const/60 to-const p-2">
							<ui-avatar-image src="/illustrations/village.svg"></ui-avatar-image>
						</ui-avatar>
						<div class="expand flex flex-col gap-y-1">
							<p class="font-medium text-sm text-foreground/80">
								Puzuri Village Project – Developing Sustainable Communities.
							</p>
						</div>
					</div>

					<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
						<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br from-const/60 to-const p-2">
							<ui-avatar-image src="/illustrations/bridge.svg"></ui-avatar-image>
						</ui-avatar>
						<div class="expand flex flex-col gap-y-1">
							<p class="font-medium text-sm text-foreground/80">
								Bridges, Boreholes, and Rural Infrastructure Projects.
							</p>
						</div>
					</div>

					<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
						<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br from-const/60 to-const p-2">
							<ui-avatar-image src="/illustrations/training.svg"></ui-avatar-image>
						</ui-avatar>
						<div class="expand flex flex-col gap-y-1">
							<p class="font-medium text-sm text-foreground/80">
								Training Programs in Construction.
							</p>
						</div>
					</div>
				</div>
				


			</section>

			<section>
				<div class="container">

					<div class="h-80  rounded-2xl relative w-full">
						<img src="/static/p_const.jpg" alt="" class="w-full h-full object-cover rounded-2xl">

						<div class="w-full h-full top-0 absolute rounded-2xl bg-linear-to-r from-black to-black/50 flex flex justify-center items-center text-white">
							<div class="grid md:grid-cols-2 p-10 md:px-20 gap-8">
								<div class="flex flex-col">
									<h1 class="text-2xl md:text-5xl font-black text-white mb-2 md:mb-4">
										Ready to simplify your construction project?
									</h1>
									<p class="text-sm md:text-base">
										Get in touch with us to put your project in the best hands
									</p>

								</div>

								<div class="flex md:justify-end my-auto">
									<nuxt-link :to="{name: 'contact'}">
										<ui-button size="lg" class="w-full md:w-fit bg-const hover:bg-const/90 text-foreground">
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
				<div class="container grid lg:grid-cols-3 gap-6 md:gap-12 md:border md:rounded-lg md:p-8">
					<div>

						<span class="text-xs uppercase mb-2">FAQs</span>
						<h2 class="text-2xl md:text-4xl font-bold">Have Questions?</h2>
						<p class="mt-2 mb-4 text-foreground/80 text-sm">Get Answers about {{$const}} from frequently asked questions.</p>


						<nuxt-link :to="{name: 'contact'}">
							<ui-button size="lg" class="bg-const hover:bg-const/90 text-foreground">
								<span>
									Get In Touch
								</span>

								<MoveRight/>

							</ui-button>
						</nuxt-link>
					</div>

					<div class="lg:col-span-2">
						<faqs-const></faqs-const>
					</div>
				</div>
			</section>
			





		</div>

	</div>
</template>
<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'
</script>
