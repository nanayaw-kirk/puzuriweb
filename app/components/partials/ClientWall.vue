<template>
	<div>
		<div class="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3">
			<div class="w-[30.5%] md:w-25 h-18 md:h-20 last-of-type:hidden md:last-of-type:block rounded-lg" v-for="i in clients" :key="i">
				<img :src="i" alt="Partner Logo" class="w-full h-full object-contain rounded-lg">
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">


const clients = [

	'/clients/guinness.png',
	'/clients/usaid.png',
	'/clients/bioaqua.png',
	'/clients/csir.png',
	'/clients/mofa.png',
	'/clients/svn.png',
	'/clients/nss.png',
	'/clients/wacci.png',
	'/clients/wacwisa.png',
	'/clients/icour.png',

]

</script>
