<template>
	<div class="grid gap-6 md:gap-12" >
		<div class="bg-found flex bg-cover bg-no-repeat object-bottom h-120 md:h-160  flex flex-col rounded-b-4xl relative">

			<img :src="'/static/puzuri.jpg'" alt="" class="hidden md:block w-full h-full object-cover rounded-b-4xl">
			<img :src="'/static/puzuri_mobi.jpg'" alt="" class="md:hidden w-full h-full object-cover rounded-b-4xl object-top">


			<div class="w-full top-0 absolute rounded-b-4xl bg-linear-to-b from-black/30 to-black h-full flex flex-col">



				<div class="p-6 md:p-20 mt-auto flex flex-wrap gap-6 md:gap-12">


					<div class="md:w-2/3">
						<h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
							Empowering Growth, <br> Building Futures.
						</h1>

						<p class="text-sm md:text-lg text-white/80 md:w-3/4">
							Committed to delivering sustainable solutions that drive progress, create value, and uplift communitie.
						</p>
					</div>

					<div class="flex flex-col mt-auto md:ml-auto gap-y-4 md:gap-y-8">
						<img src="/logos/puz.svg" class="w-20 md:w-40 order-last md:order-none" alt="">
						<div class="grid grid-cols-2 md:flex md:flex-row gap-4">
							<nuxt-link :to="{name: 'about'}">
								<ui-button size="lg" class="w-full">
									Learn More
								</ui-button>
							</nuxt-link>


							<nuxt-link :to="{name: 'contact'}">
								<ui-button class="text-white bg-transparent !border-white w-full" size="lg" variant="outline">
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
	<!-- 	<div class="hidden md:flex bg-cover bg-no-repeat object-bottom h-120 md:h-140 flex flex-col rounded-t-none rounded-4xl md:rounded-t-4xl relative" style="background-image : url(/static/puzuri.jpg)">


			<div class="w-full top-0 absolute rounded-t-none rounded-4xl md:rounded-t-4xl bg-linear-to-b from-transparent to-black h-full flex flex-col">
				


				<div class="p-6 md:p-20  rounded-xl mt-auto">


					<div class="w-full grid md:grid-cols-3 gap-2 md:gap-10">
						<div class="lg:col-span-2">
							<h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
								Empowering Growth, <br> Building Futures.
							</h1>
						</div>

						<div class="flex flex-col gap-y-4">
							<p class="text-sm md:text-lg text-white/80">
								Improve efficiency, provide a better customer experience with modern technology services.

							</p>


							<div class="grid grid-cols-2 md:flex md:flex-row gap-4">
								<nuxt-link :to="{name: 'about'}">
									<ui-button size="lg">
										Learn More
									</ui-button>
								</nuxt-link>


								<nuxt-link :to="{name: 'contact'}">
									<ui-button class="text-white bg-transparent !border-white" size="lg" variant="outline">
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
		</div>


		<div class="md:hidden bg-cover bg-no-repeat object-bottom h-120 md:h-150 flex flex-col rounded-t-none rounded-4xl md:rounded-t-4xl relative" style="background-image : url(/static/puzuri_mobi.jpg)">


			<div class="w-full top-0 absolute rounded-t-none rounded-4xl md:rounded-t-4xl bg-linear-to-b from-transparent to-black h-full flex flex-col">
				


				<div class="p-6 md:p-20  rounded-xl mt-auto">


					<div class="w-full grid md:grid-cols-3 gap-2 md:gap-10">
						<div class="lg:col-span-2">
							<h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
								Empowering Growth, <br> Building Futures.
							</h1>
						</div>

						<div class="flex flex-col gap-y-4">
							<p class="text-sm md:text-lg text-white/80">
								Improve efficiency, provide a better customer experience with modern technology services.

							</p>


							<div class="grid grid-cols-2 md:flex md:flex-row gap-4">
								<nuxt-link :to="{name: 'about'}">
									<ui-button size="lg" class="w-full">
										Learn More
									</ui-button>
								</nuxt-link>


								<nuxt-link :to="{name: 'contact'}">
									<ui-button class="text-white bg-transparent !border-white w-full" size="lg" variant="outline">
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
		</div> -->
	</div>	
</template>
<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'
</script>
