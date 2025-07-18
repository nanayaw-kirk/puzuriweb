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


						<div class="w-full top-0 absolute rounded-t-none rounded-4xl md:rounded-t-4xl bg-linear-to-b from-black/30 to-found h-full flex flex-col">



							<div class="p-6 md:p-20  rounded-xl mt-auto md:w-2/3">
								<h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white">
									Empowering Communities, <br> Enriching Lives
								</h1>

								<p class="text-sm md:text-lg text-white/80">
									Committed to creating lasting impact through education, health, economic empowerment, and environmental sustainability.
								</p>
							</div>

						</div>
					</div>



				</div>	
			</div>
		</div>
<!-- MoMo name: Puzuri Agro
Number:0595825447
Alc name: Puzuri Foundation
Alc No: 0235001320015
Bank: Prudential Bank -->

<section>
	<div class="container">

		<div class="grid md:grid-cols-2 gap-4 md:gap-8">
			<h1 class="text-xl md:text-4xl font-semibold md:font-black mb-2 md:col-span-2">
				Empowering Communities. <br> Driving Sustainable Change.
			</h1>

			<p class="text-foreground/80 text-sm sm:text-base">
				Puzuri Foundation is the CSR arm of Puzuri Group of Companies, focused on creating lasting impact through education, health, economic empowerment, and environmental sustainability. We empower individuals and communities with the tools and opportunities to thrive, aligning our efforts with the UN Sustainable Development Goals (SDGs).
			</p>

			<p class="text-foreground/80 text-sm sm:text-base">
				Through partnerships with local stakeholders, we deliver projects that address real needs—from education and healthcare to clean water, infrastructure, and renewable energy. <br> Together, we are building a future where progress benefits everyone.
			</p>
		</div>
	</div>
</section>



<section>
	<div class="container">

		<div class="grid md:grid-cols-2 gap-4 md:gap-8">
			<div class="border p-4 rounded-md hover:shadow grid gap-4" v-for="project in csr" :key="project?.title">
				<div class="w-full rounded-md aspect-video bg-found">
					<img :src="project?.cover_image" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
				</div>
				<div class="">

					<h1 class="text-xl md:text-2xl font-semibold md:font-black mb-2 md:col-span-2 px-2">
						{{project?.title}}
					</h1>
					

					<div class="grid gap-4 grid-cols-3">
						<div class="w-full aspect-square bg-found rounded-md" v-for="img in project?.gallery" :key="img">
							<img :src="img" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
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

import data from "../app/data/csr.json"

const csr = computed(() => data)

</script>
