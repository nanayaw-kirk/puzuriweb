<template>
	<div class="page">

		<Head>
			<Title>{{$appName}} Group of Companies - About Us</Title>
			<Meta name="description" :content="`Group of Companies - Empowering Growth, Building Futures.`" />
			<Meta name="keywords" :content="`Agriculture, Agric, Agro Company, Farm, Farmland, Farming, Mechanized Agriculture, Logistics, Last Mile Logistics, Construction, Construction Company, Real Estate`"></Meta>
			<Meta name="robots" content="index, follow"></Meta>
		</Head>
		
		<div class="sections grid gap-10 md:gap-20 pt-2 md:pt-10">
			<section class="container grid gap-6 md:gap-12">
				<div class="grid md:grid-cols-2 gap-4 md:gap-8">
					<h1 class="text-3xl  md:text-4xl lg:text-6xl font-semibold sm:font-black">
						Empowering Growth, <br> Building Futures.
					</h1>

					<p class="text-foreground/70 text-sm md:text-base">
						We are a diversified conglomerate with interests in Agriculture, Logistics, Construction, and Social Impact. Guided by excellence, innovation, and integrity, we create value, empower communities, and drive meaningful progress for a sustainable future.
					</p>
				</div>

				<div class="w-full aspect-square md:aspect-video bg-transparent">
					<img src="/static/about.png" class="w-full h-full object-cover hidden md:block" alt="">
					<img src="/static/about_mobi.png" class="w-full h-full object-cover md:hidden" alt="">
				</div>

			</section>


			<section class="container grid gap-6 md:gap-12">
				<div class="grid">
					<span class="text-xs uppercase mb-2">Our Vision</span>
					<h2 class="text-xl md:text-4xl font-bold md:max-w-4xl leading-6 sm:leading-none">
						To be a premier household name for innovation, excellence and positive impact globally.
					</h2>
				</div>

				<div class="md:rounded-lg md:p-8 md:dark:bg-border/50 md:border dark:border-none">
					<home-subsidiaries></home-subsidiaries>
				</div>


				<partials-client-wall class="bg-muted p-2 md:p-4 rounded-xl dark:bg-[#eff4fa]"></partials-client-wall>

				<div class="grid">
					<span class="text-xs uppercase mb-2">Our Mission</span>
					<h2 class="text-xl md:text-4xl font-bold md:max-w-4xl leading-6 sm:leading-none">
						To create innovative solutions and build meaningful partnerships that enhance lives, strengthen businesses, and shape a brighter future.
					</h2>
				</div>


				<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
					
					<div class="flex flex-col items-center dark:bg-border bg-primary/10  p-4 md:py-8 rounded-xl">
						<h6 class="text-2xl md:text-4xl font-black">7,000+</h6>
						<span class="text-xs">Capacities Built</span>
					</div>

					<div class="flex flex-col items-center dark:bg-border bg-primary/10  p-4 md:py-8 rounded-xl">
						<h6 class="text-2xl md:text-4xl font-black">5,000+</h6>
						<span class="text-xs">Satisfied Clients</span>
					</div>


					<div class="flex flex-col items-center dark:bg-border bg-primary/10  p-4 md:py-8 rounded-xl">
						<h6 class="text-2xl md:text-4xl font-black">5,000+</h6>
						<span class="text-xs">Workforce</span>
					</div>

					<div class="flex flex-col items-center dark:bg-border bg-primary/10  p-4 md:py-8 rounded-xl">
						<h6 class="text-2xl md:text-4xl font-black">6+</h6>
						<span class="text-xs">Sectors Impacted</span>
					</div>

					<div class="flex flex-col items-center dark:bg-border bg-primary/10  p-4 md:py-8 rounded-xl">
						<h6 class="text-2xl md:text-4xl font-black">3</h6>
						<span class="text-xs">Subsidiaries</span>
					</div>


					<div class="flex flex-col items-center dark:bg-border bg-primary/10  p-4 md:py-8 rounded-xl">
						<h6 class="text-2xl md:text-3xl font-black">10,000+</h6>
						<span class="text-xs">Lives Impacted</span>
					</div>
				</div>

				

				<div class="grid gap-4 md:gap-8">



					<div class="grid">
						<span class="text-xs uppercase mb-2">Our Core Values</span>
						<h2 class="text-2xl md:text-4xl font-bold uppercase">Inspire Care</h2>
					</div>
					
					<div class="grid gap-4 md:gap-8 md:grid-cols-3 mx-auto">
						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/innovation.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(I) - Innovation</h5>
								<p class="text-xs md:text-sm text-foreground/70">We embrace innovation as the driving force behind our success, consistently seeking new and creative solutions in Agro, Logistics, and Construction.</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/integrity.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(N) - Intergrity</h5>
								<p class="text-xs md:text-sm text-foreground/70">Integrity is non-negotiable for us; it forms the foundation of trust with our stakeholders.</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/sustainability.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(S) - Sustainability </h5>
								<p class="text-xs md:text-sm text-foreground/70">We prioritize sustainability in every facet of our operations, aiming to contribute positively to environmental preservation.
								</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/performance.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(P) - Performance Excellence</h5>
								<p class="text-xs md:text-sm text-foreground/70">We are dedicated to achieving and maintaining the highest levels of performance in all we do.

								</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/community.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(I) - Impactful Community Engagement</h5>
								<p class="text-xs md:text-sm text-foreground/70">We actively engage with and contribute to the communities where we operate, striving to make a positive and lasting impact on society.</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/diversity.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(R) - Respect for Diversity and Global Perspective </h5>
								<p class="text-xs md:text-sm text-foreground/70">Embracing diversity and fostering a global perspective, we value different cultures, backgrounds, and perspectives.
								</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/empowerment.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(E) - Employee Empowerment</h5>
								<p class="text-xs md:text-sm text-foreground/70">We empower our employees through training, professional development, and a supportive work environment.</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/support.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(C) - Customer-Centric Approach</h5>
								<p class="text-xs md:text-sm text-foreground/70">Customers are at the heart of our business, and we prioritize customer satisfaction.</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/adaptive.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(A) - Adaptability  </h5>
								<p class="text-xs md:text-sm text-foreground/70">We embrace change and proactively seek opportunities to stay ahead of industry trends and market dynamics.
								</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/networking.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(R) - Responsible Citizenship and Social Impact  </h5>
								<p class="text-xs md:text-sm text-foreground/70">We acknowledge our role as a responsible corporate citizen and actively engage in initiatives that uplift communities and promote education.

								</p>
							</div>
						</div>


						<div class="flex items-start gap-x-4 border p-4 rounded-xl">
							<ui-avatar class="size-12 md:size-20 rounded-none">
								<ui-avatar-image src="/illustrations/success.svg"></ui-avatar-image>
							</ui-avatar>
							<div class="expand flex flex-col">
								<h5 class="md:text-xl font-semibold mb-2">(E) - Excellence in All We Do  </h5>
								<p class="text-xs md:text-sm text-foreground/70">The pursuit of excellence permeates every aspect of our operations, reinforcing our dedication to continuous improvement and the highest standards of quality.

								</p>
							</div>
						</div>

					</div>
				</div>


				<div class="p-5 md:p-8 bg-linear-to-b from-log/30 to-background grid md:grid-cols-2 gap-4 md:gap-12  items-center rounded-2xl w-full">
					<div>
						<div class="w-full aspect-square rounded-xl">
							<img :src="'/team/rahman.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="">
						</div>
					</div>
					<div class="flex flex-col w-full">
						<h1 class="text-xl md:text-4xl font-black mb-2 leading-5 md:leading-none">
							Leadership Shaped by Vision, Purpose, and Responsibility | {{$appName}} Leadership
						</h1>

						<p class="text-sm md:text-base">
							Our leaders are guided by Puzuri’s mission to drive progress, create value, and deliver solutions that improve lives and strengthen communities — across agriculture, logistics, construction, and social impact.
						</p>


						<nuxt-link :to="{name: 'leadership'}" class="mt-6">
							<ui-button size="lg" class="md:px-6 w-full md:w-fit" variant="outline">
								{{$appName}} Leadership
							</ui-button>
						</nuxt-link>
					</div>
				</div>

				<div class="md:border md:rounded-lg md:p-8">
					<partials-sustainability-block></partials-sustainability-block>
				</div>

			</section>



		</div>

	</div>
</template>
<script setup lang="ts">

</script>
