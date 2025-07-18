<template>
	<div class="sections grid gap-6 md:gap-20">

		<Head>
			<Title>Leadership Shaped by Vision, Purpose, and Responsibility | {{$appName}} Leadership</Title>
			<Meta name="description" :content="`Puzuri Agro is a leader in Ghana’s agricultural sector, blending innovation with excellence.`" />
			<Meta name="keywords" :content="`Agriculture, Agric, Agro Company, Farm, Farmland, Farming`"></Meta>
			<Meta name="robots" content="index, follow"></Meta>
		</Head>


		<section class="container grid gap-6 md:gap-12 pt-6 md:pt-10">
			<div class="flex flex-col mx-auto sm:max-w-2xl gap-4">
				<h1 class="text-2xl sm:text-5xl font-semibold sm:font-black text-center">
					Leadership Shaped by Vision, Purpose, and Responsibility.
				</h1>

				<p class="text-foreground/70 text-sm sm:text-lg text-center">
					Our leaders are guided by Puzuri’s mission to drive progress, create value, and deliver solutions that improve lives and strengthen communities — across agriculture, logistics, construction, and social impact.
				</p>
			</div>
		</section>

		


		<section>
			<div class="container grid gap-8 md:gap-20">
				<div class="grid md:grid-cols-2 gap-6 md:gap-8">
					<div class="grid">
						<div class="w-full rounded-md aspect-square bg-found">
							<img :src="'/team/rahman.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
						</div>

						<div class="p-2 pt-5">
							<h5 class="font-black text-2xl">Abdul Rahman Yahaya</h5>
							<span class="text-foreground/70">Executive Director</span>
						</div>
					</div>
					<div class="grid">
						<div class="w-full rounded-md aspect-square bg-found">
							<img :src="'/team/iddrisu.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
						</div>

						<div class="p-2 pt-5">
							<h5 class="font-black text-2xl">Dr. Iddrisu Yahaya</h5>
							<span class="text-foreground/70">Board Chairman</span>
						</div>
					</div>
				</div>

				<div class="grid gap-4 md:gap-8 border rounded-lg p-4 md:p-8">
					
					<h2 class="text-xl md:text-4xl font-bold">Management Team</h2>


					<div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
						<div class="grid">
							<div class="w-full rounded-md aspect-square bg-found">
								<img :src="'/team/sec.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
							</div>

							<div class="p-2 md:pt-5 px-0 md:px-2 flex flex-col">
								<h5 class="font-black text-sm sm:text-xl leading-5 sm:leading-none line-clamp-1">Harriet Asibuaba Tetteh</h5>
								<span class="text-xs sm:text-sm text-foreground/70">Executive Secretary</span>
							</div>
						</div>
						<div class="grid">
							<div class="w-full rounded-md aspect-square bg-found">
								<img :src="'/team/finance_dir.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
							</div>

							<div class="p-2 md:pt-5 px-0 md:px-2 flex flex-col">
								<h5 class="font-black text-sm sm:text-xl leading-5 sm:leading-none line-clamp-1">Fuseini Yakubu</h5>
								<span class="text-xs sm:text-sm text-foreground/70">Director, Finance</span>
							</div>
						</div>

						<div class="grid">
							<div class="w-full rounded-md aspect-square bg-found">
								<img :src="'/team/log_dir.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
							</div>

							<div class="p-2 md:pt-5 px-0 md:px-2 flex flex-col">
								<h5 class="font-black text-sm sm:text-xl leading-5 sm:leading-none line-clamp-1">Adam Eliasu</h5>
								<span class="text-xs sm:text-sm text-foreground/70">Director, Logistics</span>
							</div>
						</div>


						<div class="grid">
							<div class="w-full rounded-md aspect-square bg-found">
								<img :src="'/team/agro_dir.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
							</div>

							<div class="p-2 md:pt-5 px-0 md:px-2 flex flex-col">
								<h5 class="font-black text-sm sm:text-xl leading-5 sm:leading-none line-clamp-1">Bernu Zindam Bawa</h5>
								<span class="text-xs sm:text-sm text-foreground/70">Director, Agro</span>
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





	</div>	
</template>
<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'


</script>
