<template>
	<div class="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">

		<div class="w-full min-h-45">
			<img src="/static/sdgs.jpg" class="w-full h-full object-cover rounded-md md:rounded-xl" alt="SDGs Illustration">
		</div>
		<div class="grid gap-2 md:gap-4">
			<span class="text-xs uppercase">Sustainability</span>
			<h2 class="text-2xl md:text-4xl font-bold">Sustainability at Our Core</h2>
			<p class="text-xs sm:text-base text-foreground/80">We are committed to minimizing our environmental impact, advancing social responsibility, and creating shared value through ethical practices and meaningful community initiatives.
			</p>


			<div class="mt-6">
				<nuxt-link :to="{name: 'sustainability'}" >
					<ui-button size="lg" class="md:px-6" variant="outline">
						Read Our Sustainability Statement Here
					</ui-button>
				</nuxt-link>
			</div>
		</div>
	</div>	
</template>
<script setup lang="ts">

</script>
