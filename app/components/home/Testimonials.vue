<template>
	<div>
		<div class="container grid gap-6 md:gap-10">

			<div class="grid gap-4 md:max-w-xl">
				<span class="text-xs uppercase text-primary font-bold">Testimonials</span>
				<h1 class="text-2xl md:text-4xl font-black">Our clients have full frust and confindence in our capacity.</h1> 
			</div>




			<div class="flex md:grid grid-cols-3 gap-2 md:gap-4  overflow-x-auto">
				


				<div class="dark:bg-border/50 bg-background text-foreground border rounded-xl p-6 flex flex-col md:flex-row  items-start gap-6 min-w-[280px] md:min-w-full" v-for="test in others" :key="test?.name">
					<ui-avatar class="size-14 bg-primary rounded-xl">
						<ui-avatar-image src="test?.image"></ui-avatar-image>
						<ui-avatar-fallback class="bg-primary text-3xl font-black text-primary-foreground">{{test?.name?.substring(0,1)}}</ui-avatar-fallback>
					</ui-avatar>

					<div class="flex flex-col gap-y-2 expand">
						<h5 class="sm:font-bold text-xl leading-5 sm:leading-none">{{test?.haymaker}}</h5>
						<p class="text-foreground/80 text-xs md:text-sm">{{test?.text}}</p>


						<h6 class="mt-3 font-bold line-clamp-1">
							{{test?.name}} | Company
						</h6>
					</div>
				</div>
			</div>
		</div>


	</div>	
</template>
<script setup lang="ts">
import data from "../app/data/testimonials.json"
const others = computed(()=> data)
</script>
