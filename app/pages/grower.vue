<template>
	<div class="page">
		

		<Head>
			<Title>Grow More. Earn More. Build a Better Future. | {{$appName}} Grower Scheme</Title>
			<Meta name="description" :content="`The Puzuri Grower Scheme empowers smallholder farmers with the tools, training, and access they need to thrive in modern agriculture.`" />
			<Meta name="keywords" :content="`Agriculture, Agric, Agro Company, Farm, Farmland, Farming`"></Meta>
			<Meta name="robots" content="index, follow"></Meta>
		</Head>

		<div class="sections grid gap-10 md:gap-20 pt-4 md:pt-10">
			<section class="container grid gap-6 md:gap-12">
				<div class="flex flex-col mx-auto sm:max-w-2xl items-center">
					<h1 class="text-3xl sm:text-5xl font-semibold sm:font-black text-center">
						Grow More. Earn More. <br> Build a Better Future.
					</h1>

					<p class="text-foreground/70 text-sm sm:text-base text-center mb-4">
						The Puzuri Grower Scheme empowers smallholder farmers with the tools, training, and access they need to thrive in modern agriculture.
					</p>

					<ui-button>
						Get Started
					</ui-button>
				</div>

				<div class="w-full aspect-video bg-transparent -mt-15 md:-mt-30 lg:-mt-40">
					<img src="/static/grower_sch.png" class="w-full h-full object-contain md:object-cover" alt="">
				</div>

			</section>


			<section>
				<div class="container md:border md:rounded-lg md:p-8">


					<div class="grid lg:grid-cols-2 gap-4 md:gap-6 items-start">

						<div class="grid lg:col-span-2">

							<h2 class="text-2xl md:text-4xl font-bold">What is the <br>{{$appName}} Grower Scheme?</h2>
							<p class="text-xs sm:text-base text-foreground/80">Get the latest news and updates from {{$appName}}</p>
						</div>
						<div>
							<p>
								The Puzuri Grower Scheme is an inclusive ingrower and outgrower model that supports smallholder farmers through training, inputs, market access, and innovative agricultural solutions. We help farmers boost yields, improve income, and build long-term resilience—while contributing to food security and sustainable development.
							</p>
						</div>

						<div class="w-full aspect-video bg-primary rounded-2xl md:-mt-20">
							<img src="/static/farmers.jpg" class="w-full h-full object-cover rounded-[inherit]" alt="">
						</div>
					</div>

				</div>
			</section>


			<section>
				<div class="container md:border md:rounded-lg md:p-8">


					<div class="grid lg:grid-cols-2 gap-4 md:gap-6 items-start">

						<div class="grid">
							
							<h2 class="text-2xl md:text-4xl font-bold">How it Works</h2>
							<p class="text-xs sm:text-base text-foreground/80">Learn the ins and outs of the {{$appName}} Grower Scheme</p>
						</div>
						<div class="lg:col-span-2">
							<home-grower-views></home-grower-views>
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

	</div>
</template>
<script setup lang="ts">

</script>
