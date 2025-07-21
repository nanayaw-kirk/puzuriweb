<template>
	<div class="sections grid gap-6 md:gap-12">
		
		<Head>
			<Title>{{$log}} - Driving Efficiency and Reliability in Supply Chain Management</Title>
			<Meta name="description" :content="`Puzuri Agro is a leader in Ghana’s agricultural sector, blending innovation with excellence.`" />
			<Meta name="keywords" :content="`Agriculture, Agric, Agro Company, Farm, Farmland, Farming`"></Meta>
			<Meta name="robots" content="index, follow"></Meta>
		</Head>



		<div class="grid gap-6 md:gap-8">
			<div class="container p-0 md:pt-6">


				<div class="bg-found flex bg-cover bg-no-repeat object-bottom h-120 md:h-160  flex flex-col rounded-t-none rounded-4xl md:rounded-t-4xl relative">

					<img src="/static/p_log.jpg" alt="" class="hidden md:block w-full h-full object-cover rounded-t-none rounded-4xl md:rounded-t-4xl">
					<img src="/static/p_log_mobi.jpg" alt="" class="md:hidden w-full h-full object-cover rounded-t-none rounded-4xl md:rounded-t-4xl">


					<div class="w-full top-0 absolute rounded-t-none rounded-4xl md:rounded-t-4xl bg-linear-to-b from-black/30 to-black h-full flex flex-col">

						<div class="p-6 md:p-20  mt-auto flex flex-wrap gap-6">


							<div class="md:w-2/3">
								<h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
									Driving Efficiency & Reliability in Supply Chain Management
								</h1>

								<p class="text-sm md:text-lg text-white/80">
									Connecting businesses with smarter, faster, and more reliable logistics services across Ghana and beyond.
								</p>
							</div>

							<img src="/logos/puz_log.svg" class="w-20 md:w-40 mt-auto md:ml-auto order-first md:order-none" alt="">

						</div>



					</div>
				</div>	
			</div>
		</div>


		<section class="container grid gap-6 md:gap-12 ">
			<div class="md:max-w-3xl mx-auto">
				<p class="md:text-center sm:text-lg">
					Puzuri Logistics ensures seamless movement of goods and services across Ghana and internationally through advanced logistics and supply chain solutions.
				</p>
			</div>

			<div class="grid gap-2 md:grid-cols-3">
				<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
					<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br  from-pink-100 to-log p-2">
						<ui-avatar-image src="/illustrations/freight.svg"></ui-avatar-image>
					</ui-avatar>
					<div class="expand flex flex-col gap-y-1">
						<p class="font-medium text-sm text-foreground/80">
							Land, Sea & Air Freight Transportation
						</p>
					</div>
				</div>
				<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
					<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br  from-pink-100 to-log p-2">
						<ui-avatar-image src="/illustrations/supply_chain.svg"></ui-avatar-image>
					</ui-avatar>
					<div class="expand flex flex-col gap-y-1">
						<p class="font-medium text-sm text-foreground/80">
							Customs Clearance & Supply Chain Optimization
						</p>
					</div>
				</div>
				<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
					<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br  from-pink-100 to-log p-2">
						<ui-avatar-image src="/illustrations/training.svg"></ui-avatar-image>
					</ui-avatar>
					<div class="expand flex flex-col gap-y-1">
						<p class="font-medium text-sm text-foreground/80">
							Training Programs in Logistics & Supply Chain Management
						</p>
					</div>
				</div>


				<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
					<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br  from-pink-100 to-log p-2">
						<ui-avatar-image src="/illustrations/warehouse.svg"></ui-avatar-image>
					</ui-avatar>
					<div class="expand flex flex-col gap-y-1">
						<p class="font-medium text-sm text-foreground/80">
							Warehousing & Distribution
						</p>
					</div>
				</div>
				<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
					<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br  from-pink-100 to-log p-2">
						<ui-avatar-image src="/illustrations/tractor.svg"></ui-avatar-image>
					</ui-avatar>
					<div class="expand flex flex-col gap-y-1">
						<p class="font-medium text-sm text-foreground/80">
							Farm Mechanization Services - Land preparation, Weed control
						</p>
					</div>
				</div>
				<div class="flex items-center gap-4 border p-2 shadow rounded-lg">
					<ui-avatar class="size-12 md:size-14 rounded bg-linear-to-br  from-pink-100 to-log p-2">
						<ui-avatar-image src="/illustrations/bulldoze.svg"></ui-avatar-image>
					</ui-avatar>
					<div class="expand flex flex-col gap-y-1">
						<p class="font-medium text-sm text-foreground/80">
							Rental of Heavy-Duty Machines, Farm Equipment & Vehicles
						</p>
					</div>
				</div>
			</div>



		</section>

		<section>
			<div class="container">

				<div class="h-80  rounded-2xl relative w-full">
					<img src="/static/p_log.jpg" alt="" class="w-full h-full object-cover rounded-2xl">

					<div class="w-full h-full top-0 absolute rounded-2xl bg-linear-to-r from-black to-black/50 flex flex justify-center items-center text-white">
						<div class="grid md:grid-cols-2 p-10 md:px-20 gap-8">
							<div class="flex flex-col">
								<h1 class="text-2xl md:text-5xl font-black text-white mb-2 md:mb-4">
									Ready to simplify your logistics operations?
								</h1>
								<p class="text-sm md:text-base">
									Get in touch with us to put your project in the best hands
								</p>

							</div>

							<div class="flex md:justify-end my-auto">
								<nuxt-link :to="{name: 'contact'}">
									<ui-button size="lg" class="w-full md:w-fit bg-log hover:bg-log/90">
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
					<p class="mt-2 mb-4 text-foreground/80 text-sm">Get Answers about {{$log}} from frequently asked questions.</p>


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
					<faqs-log></faqs-log>
				</div>
			</div>
		</section>
		


	</div>	
</template>
<script setup lang="ts">

import { MoveRight } from 'lucide-vue-next'


</script>
