<template>
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 items-start">

		<div class="grid gap-y-3 md:px-8">
			<h2 class="text-2xl md:text-4xl font-bold md:max-w-4xl leading-6 sm:leading-none">Our <br class="hidden md:block"> Subsidiaries</h2>
			<p class="text-foreground/80 text-sm md:text-base lg:text-lg md:font-light">
				With a commitment to excellence, innovation, and integrity, we strive to create value for our clients, empower our communities, and drive positive change accross industries.
			</p>
		</div>
		<div class="lg:col-span-2 flex md:grid grid-cols-3 gap-2 md:gap-4  overflow-x-auto">
			<nuxt-link :to="{name: 'agro'}" class="grid bg-background border rounded-lg group min-w-[280px] md:min-w-full">
				<div class="w-full h-40 rounded-t-lg">
					<div class="w-full h-full bg-border rounded-t-lg overflow-hidden">
						<img src="/static/p_agro.jpg" class="w-full h-full object-cover" alt="Puzuri Agro">
					</div>
				</div>
				<div class="p-4 md:px-6 grid gap-y-4">
					<span class="uppercase text-sm font-semibold text-foreground/70">{{$agro}}</span>
					<p class="text-sm md:text-base font-light line-clamp-4">Driving the future of agribusiness with innovation and trust.  Adipisci quaerat voluptate</p>


					<div class="flex justify-between items-center mt-4">
						<span>
							Learn More
						</span>

						<MoveRight class=""/>
					</div>
				</div>
			</nuxt-link>


			<nuxt-link :to="{name: 'logistics'}" class="grid bg-background border rounded-lg group min-w-[280px] md:min-w-full">
				<div class="w-full h-40 rounded-t-lg">
					<div class="w-full h-full bg-border rounded-t-lg overflow-hidden">
						<img src="/static/p_log.jpg" class="w-full h-full object-cover" alt="Puzuri Agro">
					</div>
				</div>
				<div class="p-4 md:px-6 grid gap-y-4">
					<span class="uppercase text-sm font-semibold text-foreground/70">{{$log}}</span>
					<p class="text-sm md:text-base font-light line-clamp-4">Driving the future of agribusiness with innovation and trust.  Adipisci quaerat voluptate</p>


					<div class="flex justify-between items-center mt-4">
						<span>
							Learn More
						</span>

						<MoveRight class=""/>
					</div>
				</div>
			</nuxt-link>



			<nuxt-link :to="{name: 'construction'}" class="grid bg-background border rounded-lg group min-w-[280px] md:min-w-full">
				<div class="w-full h-40 rounded-t-lg">
					<div class="w-full h-full bg-border rounded-t-lg overflow-hidden">
						<img src="/static/p_const.jpg" class="w-full h-full object-cover" alt="Puzuri Agro">
					</div>
				</div>
				<div class="p-4 md:px-6 grid gap-y-4">
					<span class="uppercase text-sm font-semibold text-foreground/70">{{$const}}</span>
					<p class="text-sm md:text-base font-light line-clamp-4">Driving the future of agribusiness with innovation and trust.  Adipisci quaerat voluptate</p>


					<div class="flex justify-between items-center mt-4">
						<span>
							Learn More
						</span>

						<MoveRight class=""/>
					</div>
				</div>
			</nuxt-link>

		</div>
	</div>	
</template>
<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'
</script>
