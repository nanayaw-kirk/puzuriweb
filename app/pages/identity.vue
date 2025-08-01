<template>
	<div class="page">

		<Head>
			<Title>🚀 We’ve Evolved and We’re Excited to Share It With You! | {{$appName}} Group of Companies</Title>
		</Head>
		
		<div class="sections grid gap-10 md:gap-20 pt-2 md:pt-10">
			<section class="container grid gap-4">
				<div class="flex flex-col gap-4">
					<h1 class="text-3xl sm:text-5xl lg:text-7xl font-black">
						We've Evolved & We’re <br> Excited to Share It With You!
					</h1>
					<span class="text-xs uppercase text-froeground/80 order-first md:order-none">1st August, 2025</span>

					<p class="text-foreground/70 text-sm sm:text-base md:max-w-4xl">
						Today marks a bold new chapter in our journey. We’re proud to unveil our refreshed brand identity, including a new logo, font system, and website, all designed to reflect who we are today and where we’re headed.

					</p>
				</div>
			</section>

			<section>
				<div class="container md:border md:rounded-lg md:p-8">


					<div class="grid  gap-4 md:gap-6 items-start">

						<div class="grid mb-10 md:mb-0">
							
							<h2 class="text-2xl md:text-4xl font-bold">What's new?</h2>
							<p class="text-sm sm:text-base text-foreground/80">
								This evolution isn’t just about aesthetics. It’s about clarity, purpose, and aligning our brand with the innovation, growth, and vision that drives us forward. This transition is not about losing our roots, it’s about building on them. 
								Our foundation of trust, community, and hard work remains unchanged. What’s evolving is how we deliver value.
							</p>
						</div>

						
						<div>
							<partials-identity-views></partials-identity-views>
						</div>
					</div>

				</div>
			</section>

			<section>
				<div class="container">

					<div class="p-5 md:p-8 bg-linear-to-b from-found to-pink-500/10 grid md:grid-cols-2 gap-4 md:gap-12  items-center rounded-2xl w-full">
						<div>
							<div class="w-full aspect-[1/1.15] rounded-xl relative">
								<img :src="'/team/rahman.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="">

								<div class="top-0 left-0 absolute flex flex-col items-center justify-end w-full h-full p-6">
									<div class="size-20 rounded-full flex flex-col items-center justify-center bg-linear-65 from-red-500 to-pink-500">
										<Play class="size-10 stroke-white"/>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-col w-full">
							<h1 class="text-xl md:text-4xl font-black mb-6 leading-5 md:leading-none">
								A Message from Mr. Abdul-Rahaman Yahaya, the Chief Executive Officer of {{$appNama}} Group of Companies 
							</h1>

							<p class="text-sm md:text-base mb-4">
								“For years, our company has grown from deep local roots, built on hard work, relationships, and a commitment to serve. From agriculture to logistics, and construction, our businesses have touched lives and communities in meaningful ways.”
							</p>


							<ui-button size="lg" class="md:px-6 w-full md:w-fit" variant="outline">
								<span>
									Watch the Message
								</span>

								<Play/>
							</ui-button>
						</div>
					</div>
				</div>
			</section>



			<section class="container grid gap-6 md:gap-12">
				<p class="text-foreground/70 text-sm sm:text-base md:max-w-4xl">
					We’re incredibly grateful to our team, partners, and community who’ve been part of this journey.
					This is just the beginning of our next chapter and we’re excited to shape the future, together.
				</p>
			</section>




		</div>

	</div>
</template>
<script setup lang="ts">
import { Play } from 'lucide-vue-next'
</script>
