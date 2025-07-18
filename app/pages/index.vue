<template>
	<div class="sections grid gap-6 md:gap-12">
		

		<div class="grid gap-6 md:gap-8">
			<div class="container p-0">
				<home-hero></home-hero>
			</div>

			<div class="container">
				<partials-client-wall class="bg-muted p-2 md:p-4 rounded-xl dark:bg-[#eff4fa]"></partials-client-wall>
			</div>
		</div>

		<div class="sections grid gap-10 md:gap-20">
			<!-- <section class="container grid gap-6 md:gap-12">
				<partials-client-wall class="bg-muted p-2 md:p-4 rounded-xl dark:bg-[#eff4fa]"></partials-client-wall>
			</section> -->


			<section class="grid">
				<div class="container md:border md:rounded-lg md:p-8">
					<home-subsidiaries></home-subsidiaries>
				</div>
			</section>

			<section>
				<home-testimonials class="space-y-6 md:space-y-12"></home-testimonials>
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
				<div class="container md:border md:rounded-lg md:p-8">
					<partials-sustainability-block></partials-sustainability-block>
				</div>
			</section>

		</div>


	</div>	
</template>
<script setup lang="ts">



</script>
