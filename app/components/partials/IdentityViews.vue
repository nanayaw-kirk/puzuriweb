<template>
	<div>
		<div class="hidden md:grid gap-8">
			<div class="w-full max-w-full  overflow-x-auto flex  items-center gap-x-1 md:gap-x-4 w-full">
				<div class="rounded-md min-w-fit flex  cursor-pointer px-4 py-2 text-sm" @click="show = 'one'" :class="show === 'one' ? 'bg-primary text-primary-foreground' : 'bg-border'">
					New Logos 
				</div>
				<div class="rounded-md min-w-fit flex  cursor-pointer px-4 py-2 text-sm" @click="show = 'two'" :class="show === 'two' ? 'bg-primary text-primary-foreground' : 'bg-border'">
					Modern Typography
				</div>
				<div class="rounded-md min-w-fit flex  cursor-pointer px-4 py-2 text-sm" @click="show = 'three'" :class="show === 'three' ? 'bg-primary text-primary-foreground' : 'bg-border'">
					Website Redesign
				</div>
				<div class="rounded-md min-w-fit flex  cursor-pointer px-4 py-2 text-sm" @click="show = 'four'" :class="show === 'four' ? 'bg-primary text-primary-foreground' : 'bg-border'">
					Technology Driven
				</div>
			</div>
			<div class="w-full grid gap-4 md:gap-10 md:grid-cols-5" v-if="show === 'one'">
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-xl md:text-2xl font-black">A Unified Identity for a Growing Future</h2>
					<p class="text-sm text-foreground/80">
						Our refreshed brand identity introduces not just a new logo for Puzuri Group but a cohesive and unified logo system across all our divisions — Puzuri Agro, Puzuri Logistics, Puzuri Construction, and Puzuri Foundation. This unified system reflects our commitment to clarity, consistency, and connection across every facet of our business.
					</p>

					<p class="text-sm text-foreground/80">
						Each logo has been carefully crafted to maintain a shared visual DNA while representing the unique focus of each division. Together, they tell one story: empowering progress through solutions that matter.
					</p>
					
				</div>
				<div class="md:col-span-3 w-full px-2 md:px-0">
					<div class="w-full aspect-video">
						<img src="/id/logotype.jpg" class="w-full h-full object-contain mt-auto rounded-xl" alt="">
					</div>
				</div>
			</div>

			<div class="w-full grid gap-4 md:gap-10 md:grid-cols-5" v-else-if="show === 'two'">
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-xl md:text-2xl font-black">
						Clarity Through Typography
					</h2>
					<p class="text-sm text-foreground/80">
						As part of our evolution, we have adopted a modern and purposeful typography system designed to enhance readability, consistency, and the overall user experience across all our platforms. Surgena now serves as our primary typeface for headlines — confident, clear, and modern.
					</p>

					<p class="text-sm text-foreground/80">
						Poppins complements it as our body font — approachable, structured, and highly legible. This combination ensures that every message we share is both visually distinct and easy to understand.
					</p>
				</div>
				<div class="md:col-span-3 w-full px-2 md:px-0">
					<div class="w-full aspect-video">
						<img src="/id/type.jpg" class="w-full h-full object-contain mt-auto rounded-xl" alt="">
					</div>
				</div>
			</div>


			<div class="w-full grid gap-4 md:gap-10 md:grid-cols-5" v-else-if="show === 'three'">
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-xl md:text-2xl font-black">More Than a Website — A Gateway to Our World</h2>
					<p class="text-sm text-foreground/80">
						Our new website reflects more than just a refreshed look — it reflects a refreshed purpose. Built to be faster, clearer, and more intuitive, this redesign improves how we communicate with our clients, partners, and the wider public. 
					</p>

					<p class="text-sm text-foreground/80">
						Beyond aesthetics, we are incrementally shaping puzuri.com to go beyond being an information portal; it will evolve into a practical resource for engaging with our services, opportunities, and impact.
					</p>
					
				</div>
				<div class="md:col-span-3 w-full px-2 md:px-0">
					<div class="w-full aspect-video">
						<img src="/id/web.jpg" class="w-full h-full object-contain mt-auto rounded-xl" alt="">
					</div>
				</div>
			</div>

			<div class="w-full grid gap-4 md:gap-10 md:grid-cols-5" v-else>
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-xl md:text-2xl font-black">
						Embracing Technology to Deliver Value
					</h2>
					<p class="text-sm text-foreground/80">
						At the heart of this rebrand is a deeper commitment to technology as a tool for empowerment. From the systems we use internally to how we engage externally, our refreshed identity signals a shift toward technology-driven, scalable solutions that bring greater value to our clients, partners, and the communities we serve.
					</p>

					<p class="text-sm text-foreground/80">
						This is not just about looking modern — it is about building a future where technology enhances how we solve problems, create opportunities, and drive growth.
					</p>
				</div>
				<div class="md:col-span-3 w-full px-2 md:px-0">
					<div class="w-full aspect-video">
						<img src="/id/tech.jpg" class="w-full h-full object-contain mt-auto rounded-xl" alt="">
					</div>
				</div>
			</div>
		</div>


		<div class="md:hidden grid gap-8">
			<div class="w-full grid gap-2">
				<span class="text-xs uppercase">New Logos</span>
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-2xl font-black">A Unified Identity for <br> A Growing Future</h2>
					<p class="text-sm text-foreground/80">
						Our refreshed brand identity introduces not just a new logo for Puzuri Group but a cohesive and unified logo system across all our divisions — Puzuri Agro, Puzuri Logistics, Puzuri Construction, and Puzuri Foundation. This unified system reflects our commitment to clarity, consistency, and connection across every facet of our business.
					</p>

					<div class="w-full aspect-video">
						<img src="/id/logotype.jpg" class="w-full h-full object-contain mt-auto" alt="">
					</div>

					<p class="text-sm text-foreground/80">
						Each logo has been carefully crafted to maintain a shared visual DNA while representing the unique focus of each division. Together, they tell one story: empowering progress through solutions that matter.
					</p>
					
				</div>

			</div>

			<div class="w-full grid gap-2">
				<span class="text-xs uppercase">Modern Typography</span>
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-2xl font-black">
						Clarity Through Typography
					</h2>
					<p class="text-sm text-foreground/80">
						As part of our evolution, we have adopted a modern and purposeful typography system designed to enhance readability, consistency, and the overall user experience across all our platforms. Surgena now serves as our primary typeface for headlines — confident, clear, and modern.
					</p>

					<div class="w-full aspect-video">
						<img src="/id/type.jpg" class="w-full h-full object-contain mt-auto" alt="">
					</div>

					<p class="text-sm text-foreground/80">
						Poppins complements it as our body font — approachable, structured, and highly legible. This combination ensures that every message we share is both visually distinct and easy to understand.
					</p>
				</div>
				
			</div>


			<div class="w-full grid gap-2">
				<span class="text-xs uppercase">Website Redesign</span>
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-2xl font-black">More Than a Website — A Gateway to Our World</h2>
					<p class="text-sm text-foreground/80">
						Our new website reflects more than just a refreshed look — it reflects a refreshed purpose. Built to be faster, clearer, and more intuitive, this redesign improves how we communicate with our clients, partners, and the wider public. 
					</p>

					<div class="w-full aspect-video">
						<img src="/id/web.jpg" class="w-full h-full object-contain mt-auto" alt="">
					</div>

					<p class="text-sm text-foreground/80">
						Beyond aesthetics, we are incrementally shaping puzuri.com to go beyond being an information portal; it will evolve into a practical resource for engaging with our services, opportunities, and impact.
					</p>
					
				</div>
				
			</div>

			<div class="w-full grid gap-2">
				<span class="text-xs uppercase">Technology Driven</span>
				<div class="flex flex-col gap-y-4 md:col-span-2">
					<h2 class="text-2xl font-black">
						Embracing Technology to Deliver Value
					</h2>
					<p class="text-sm text-foreground/80">
						At the heart of this rebrand is a deeper commitment to technology as a tool for empowerment. From the systems we use internally to how we engage externally, our refreshed identity signals a shift toward technology-driven, scalable solutions that bring greater value to our clients, partners, and the communities we serve.
					</p>

					<div class="w-full aspect-video">
						<img src="/id/tech.jpg" class="w-full h-full object-contain mt-auto" alt="">
					</div>

					<p class="text-sm text-foreground/80">
						This is not just about looking modern — it is about building a future where technology enhances how we solve problems, create opportunities, and drive growth.
					</p>
				</div>
				
			</div>
		</div>
	</div>	
</template>
<script setup lang="ts">

const show = ref('one')

</script>
