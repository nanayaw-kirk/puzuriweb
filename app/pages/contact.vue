<template>
	<div class="sections grid gap-6 md:gap-20">

		<Head>
			<Title>Get In Touch | {{$appName}} Contact</Title>
			<Meta name="description" :content="`Puzuri Agro is a leader in Ghana’s agricultural sector, blending innovation with excellence.`" />
			<Meta name="keywords" :content="`Agriculture, Agric, Agro Company, Farm, Farmland, Farming`"></Meta>
			<Meta name="robots" content="index, follow"></Meta>
		</Head>


		<section class="container grid gap-6 md:gap-12 pt-6 md:pt-10">
			<div class="flex flex-col mx-auto sm:max-w-2xl gap-4">
				<h1 class="text-3xl sm:text-5xl font-black text-center">
					Get in touch
				</h1>

				<p class="text-foreground/70 text-sm sm:text-lg text-center">
					Connect with {{$appName}} to accelerate your business. Get answers to your inquiries. Reach out to us using any of the options provided.
				</p>
			</div>
		</section>

		


		<section>
			<div class="container grid gap-8 md:gap-20">
				<div class="flex flex-row overflow-x-auto md:grid md:grid-cols-2 gap-6 md:gap-8">
					<div class="grid min-w-[280px] md:min-w-full">
						<div class="w-full rounded-md aspect-video bg-found">
							<img :src="'/static/tamale_team.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
						</div>

						<div class="p-2 pt-5">
							<h5 class="font-black text-xl md:text-2xl">Tamale Office (HQ)</h5>
							<span class="text-foreground/70 text-sm md:text-base">
								BB3082 Chlorine St <br>
								NS-414-7914 <br>
								P.O Box 2196, Tamale <br>
							</span>

						</div>
					</div>
					<div class="grid min-w-[280px] md:min-w-full">
						<div class="w-full rounded-md aspect-video bg-found">
							<img :src="'/static/accra.jpg'" class="w-full h-full object-cover object-top rounded-[inherit]" alt="Project Image">
						</div>

						<div class="p-2 pt-5">
							<h5 class="font-black text-xl md:text-2xl">Accra Office</h5>
							<span class="text-foreground/70 text-sm md:text-base">
								No. 3 Basswood <br>
								GA-483-3222 <br>
								East Legon, Accra
							</span>
							
						</div>
					</div>
				</div>


				<div class="grid md:grid-cols-2 items-center  gap-6 md:gap-8">

					<div class="hidden md:grid">

						<h2 class="text-2xl md:text-4xl font-bold">Want to reach us directly?</h2>
						<p class="text-xs sm:text-base text-foreground/80">
							Contact us using any of the options provided.
						</p>
					</div>
					<div class="grid grid-cols-2 gap-6 md:gap-8 border rounded-lg p-4 md:p-6">
						<div class="grid">

							<div class="p-2 md:pt-5 px-0 md:px-2 flex flex-col">
								<ui-avatar class="size-12 md:size-14 rounded-none  mb-3">
									<ui-avatar-image src="/illustrations/email.svg"></ui-avatar-image>
								</ui-avatar>
								<h5 class="font-black  sm:text-2xl leading-5 sm:leading-none line-clamp-1 mb-2">Write us an email</h5>
								<a href="mailto:info@puzuri.com" class="text-xs md:text-sm underline text-primary font-medium">info@puzuri.com</a>
								<a href="mailto:group@puzuri.com" class="text-xs md:text-sm underline text-primary font-medium">group@puzuri.com</a>
							</div>
						</div>
						<div class="grid">
							<div class="p-2 md:pt-5 px-0 md:px-2 flex flex-col">
								<ui-avatar class="size-12 md:size-14 rounded-none  mb-3">
									<ui-avatar-image src="/illustrations/call.svg"></ui-avatar-image>
								</ui-avatar>
								<h5 class="font-black  sm:text-2xl leading-5 sm:leading-none line-clamp-1 mb-2">Give us a call</h5>
								<a href="tel:+233 24 409 1108" class="text-xs md:text-sm underline text-primary font-medium">+233 24 409 1108</a>
								<a href="tel:+233 37 209 6740" class="text-xs md:text-sm underline text-primary font-medium">+233 37 209 6740</a>
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>




	</div>	
</template>
<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'


</script>
