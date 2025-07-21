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

					<div class="bg-found flex bg-cover bg-no-repeat object-bottom h-120 md:h-160  flex flex-col rounded-t-none rounded-4xl md:rounded-t-4xl relative">

						<img src="/static/found_wide.jpg" alt="" class="hidden md:block w-full h-full object-cover rounded-t-none rounded-4xl md:rounded-t-4xl">
						<img src="/static/found_port.jpg" alt="" class="md:hidden w-full h-full object-cover rounded-t-none rounded-4xl md:rounded-t-4xl">


						<div class="w-full top-0 absolute rounded-t-none rounded-4xl md:rounded-t-4xl bg-linear-to-b from-black/30 to-black h-full flex flex-col">



							<div class="p-6 md:p-20  mt-auto flex flex-wrap gap-6">


								<div class="md:w-2/3">
									<h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
										Empowering Communities, <br> Enriching Lives
									</h1>

									<p class="text-sm md:text-lg text-white/80 md:w-2/3">
										The Puzuri Foundation—a catalyst for sustainable development across Ghana.
									</p>
								</div>

								<img src="/logos/puz_foundation.svg" class="w-20 md:w-40 mt-auto md:ml-auto order-first md:order-none" alt="">

							</div>
						</div>
					</div>

				</div>	
			</div>
		</div>


		<section>
			<div class="container">

				<p class="text-foreground/80 text-sm sm:text-base">
					Puzuri Foundation is the social impact arm of the Puzuri Group, driving lasting change through education, health, economic empowerment, and sustainability. Aligned with the UN SDGs, we partner with local stakeholders to deliver impactful projects—from clean water and healthcare to renewable energy and inclusive infrastructure.
				</p>
			</div>
		</section>


		<section>
			<div class="container">

				<div class="grid  gap-4 md:gap-8">
					<h1 class="text-xl md:text-4xl font-semibold md:font-black mb-2 md:col-span-2">
						Focus Areas
					</h1>

					

					<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
						


						<div class="grid gap-2">
							<div>
								<h1 class="text-base md:text-2xl font-bold">
									Education & Skills
								</h1>
								<p class="text-foreground/80 text-xs sm:text-sm md:mb-2 line-clamp-2">
									Programs for literacy, vocational training, digital skills.
								</p>
							</div>
							<div class="w-full max-w-full overflow-hidden aspect-square md:h-50 bg-primary/10 rounded-xl">
								<img src="/static/edu.jpg" class="rounded-[inherit] w-full h-full object-cover object-top" alt="Foundation Image">
							</div>
						</div>

						<div class="grid gap-2">
							<div>
								<h1 class="text-base md:text-2xl font-bold">
									Health & Well‑Being
								</h1>
								<p class="text-foreground/80 text-xs sm:text-sm md:mb-2 line-clamp-2">
									Clinics, screenings, insurance registration drives.
								</p>
							</div>
							<div class="w-full max-w-full overflow-hidden aspect-square md:h-50 bg-primary/10 rounded-xl">
								<img src="/static/health.jpg" class="rounded-[inherit] w-full h-full object-cover object-top" alt="Foundation Image">
							</div>
						</div>

						<div class="grid gap-2">
							<div>
								<h1 class="text-base md:text-2xl font-bold">
									Youth Empowerment
								</h1>
								<p class="text-foreground/80 text-xs sm:text-sm md:mb-2 line-clamp-2">
									Entrepreneurial training, community leadership, agri‑tech.
								</p>
							</div>
							<div class="w-full max-w-full overflow-hidden aspect-square md:h-50 bg-primary/10 rounded-xl">
								<img src="/static/empower.jpg" class="rounded-[inherit] w-full h-full object-cover object-top" alt="Foundation Image">
							</div>
						</div>

						<div class="grid gap-2">
							<div>
								<h1 class="text-base md:text-2xl font-bold">
									Clean Water & Sanitation
								</h1>
								<p class="text-foreground/80 text-xs sm:text-sm md:mb-2 line-clamp-2">
									Boreholes, hygiene education, irrigation.
								</p>
							</div>
							<div class="w-full max-w-full overflow-hidden aspect-square md:h-50 bg-primary/10 rounded-xl">
								<img src="/static/water.jpg" class="rounded-[inherit] w-full h-full object-cover object-top" alt="Foundation Image">
							</div>
						</div>

						
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="container p-0">
				<div class="p-8 bg-linear-to-b from-found/30 grid md:grid-cols-2 gap-4 md:gap-12 md:py-20 items-center rounded-2xl">
					<div>
						<div class="w-full aspect-square md:aspect-[1/0.8] rounded-xl">
							<img src="https://images.unsplash.com/photo-1710093072215-65070f9cf93e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGRvbmF0ZXxlbnwwfDB8MHx8fDI%3D" class="w-full h-full object-cover object-top rounded-[inherit]" alt="">
						</div>
					</div>
					<div class="flex flex-col">
						<h1 class="text-2xl md:text-4xl font-black mb-2">
							Support the <br> {{$appName}} Foundation
						</h1>

						<p class="text-sm md:text-base">
							Help us empower communities and drive lasting change through education, health, and sustainability. Together, we can build a brighter future.
						</p>

						<nuxt-link :to="{name: 'contact'}" class="mt-6">
							<ui-button size="lg" class="w-full md:w-fit bg-found hover:bg-found/90">
								<span>
									Get Involved
								</span>

								<MoveRight/>

							</ui-button>
						</nuxt-link>
					</div>
				</div>
			</div>
		</section>



		<section>
			<div class="container">

				<div class="grid md:grid-cols-2 gap-4 md:gap-8">

					<h1 class="text-xl md:text-4xl font-semibold md:font-black mb-2 md:col-span-2">
						{{$appName}} Foundation Projects
					</h1>



					<div class="md:col-span-2 grid md:grid-cols-3 gap-4 md:gap-8">
						<div class="border p-2 rounded-md hover:shadow grid gap-4" v-for="project in csr" :key="project?.title">
							<div class="w-full rounded-md aspect-video bg-found">
								<img :src="project?.cover_image" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
							</div>
							<div class="">

								<h1 class="text-base md:text-xl font-bold md:col-span-2 line-clamp-2">{{project?.title}}</h1>
								<p class="text-xs sm:text-sm text-foreground/80 line-clamp-2 mb-2">{{project?.subtext}}</p>

								<div class="grid gap-4 grid-cols-3">
									<div class="w-full aspect-square bg-found rounded-md" v-for="img in project?.gallery" :key="img">
										<img :src="img" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>



		<section>
			<div class="container md:border md:rounded-lg md:p-8">
				<partials-sustainability-block></partials-sustainability-block>
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





	</div>	
</template>
<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'
import data from "../app/data/csr.json"

const csr = computed(() => data)

</script>
