<template>
	<div>
		<div class="grid gap-8">
			<div class="w-full max-w-full  overflow-x-auto flex  items-center gap-x-1 md:gap-x-4 w-full">
				<div class="rounded-md min-w-fit flex  cursor-pointer px-4 py-2 text-sm" @click="show = 'one'" :class="show === 'one' ? 'bg-primary text-primary-foreground' : 'bg-border'">
					Onboarding 
				</div>
				<div class="rounded-md min-w-fit flex  cursor-pointer px-4 py-2 text-sm" @click="show = 'two'" :class="show === 'two' ? 'bg-primary text-primary-foreground' : 'bg-border'">
					Capacity Building
				</div>
				<div class="rounded-md min-w-fit flex  cursor-pointer px-4 py-2 text-sm" @click="show = 'three'" :class="show === 'three' ? 'bg-primary text-primary-foreground' : 'bg-border'">
					Input Access
				</div>
				<div class="rounded-md min-w-fit flex  cursor-pointer px-4 py-2 text-sm" @click="show = 'four'" :class="show === 'four' ? 'bg-primary text-primary-foreground' : 'bg-border'">
					Growing & Monitoring
				</div>

				<div class="rounded-md min-w-fit flex  cursor-pointer px-4 py-2 text-sm" @click="show = 'five'" :class="show === 'five' ? 'bg-primary text-primary-foreground' : 'bg-border'">
					Harvest & Sale
				</div>
			</div>
			<div class="w-full grid gap-4 md:gap-10 md:grid-cols-5" v-if="show === 'one'">
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-xl md:text-2xl font-black">Easy Onboarding</h2>
					<p class="text-sm text-foreground/80">
						Farmers register through our local field officers or partner organizations. We assess their needs, crop preferences, and land conditions to tailor support. Once enrolled, each grower becomes part of a connected, purpose-driven farming community.
					</p>
					
				</div>
				<div class="md:col-span-3 w-full px-2 md:px-0">
					<div class="w-full aspect-video">
						<img src="/static/onboard.jpg" class="w-full h-full object-contain mt-auto rounded-xl" alt="">
					</div>
				</div>
			</div>

			<div class="w-full grid gap-4 md:gap-10 md:grid-cols-5" v-else-if="show === 'two'">
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-xl md:text-2xl font-black">
						Capacity Building
					</h2>
					<p class="text-sm text-foreground/80">
						We provide hands-on training in modern farming techniques, soil health, pest control, and post-harvest handling. Sessions are practical, community-based, and aligned with climate-smart practices. Farmers also receive financial literacy and basic agribusiness education to improve decision-making.
					</p>
				</div>
				<div class="md:col-span-3 w-full px-2 md:px-0">
					<div class="w-full aspect-video">
						<img src="/static/capacity.jpg" class="w-full h-full object-contain mt-auto rounded-xl" alt="">
					</div>
				</div>
			</div>


			<div class="w-full grid gap-4 md:gap-10 md:grid-cols-5" v-else-if="show === 'three'">
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-xl md:text-2xl font-black">Input Access</h2>
					<p class="text-sm text-foreground/80">
						Puzuri supplies high-quality seeds, fertilizers, and tools—often on flexible, pay-after-harvest terms. This ensures farmers can plant without upfront costs or exploitative lending. Equipment-sharing models also help smallholders access machinery affordably.
					</p>
					
				</div>
				<div class="md:col-span-3 w-full px-2 md:px-0">
					<div class="w-full aspect-video">
						<img src="/static/input.jpg" class="w-full h-full object-contain mt-auto rounded-xl" alt="">
					</div>
				</div>
			</div>

			<div class="w-full grid gap-4 md:gap-10 md:grid-cols-5" v-else-if="show === 'four'">
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-xl md:text-2xl font-black">Growing & Monitoring</h2>
					<p class="text-sm text-foreground/80">
						Throughout the season, our agronomists and field officers offer regular on-site support and technical advice. We use simple digital tools and local knowledge to monitor crop performance and solve challenges early. This helps maximize yields and reduce risk.
					</p>
					
				</div>
				<div class="md:col-span-3 w-full px-2 md:px-0">
					<div class="w-full aspect-video">
						<img src="/static/gnm.jpg" class="w-full h-full object-contain mt-auto rounded-xl" alt="">
					</div>
				</div>
			</div>

			<div class="w-full grid gap-4 md:gap-10 md:grid-cols-5" v-else>
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-xl md:text-2xl font-black">
						Harvest & Sale
					</h2>
					<p class="text-sm text-foreground/80">
						When it's time to harvest, Puzuri guarantees a ready market at fair, transparent prices. We handle aggregation, logistics, and sales, so farmers can focus on farming. Profits go directly to the farmers—quickly and securely.
					</p>
				</div>
				<div class="md:col-span-3 w-full px-2 md:px-0">
					<div class="w-full aspect-video">
						<img src="/static/harvest_.jpg" class="w-full h-full object-contain mt-auto rounded-xl" alt="">
					</div>
				</div>
			</div>


		</div>
	</div>	
</template>
<script setup lang="ts">

const show = ref('one')

</script>
