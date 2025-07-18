<template>
	<div>
		<div class="w-full">
			<div class="w-full relative" uk-slider="finite:true" ref="slider" @itemshow.stop="currentSlide = $uikit.slider(slider).index;">
				<div class="uk-slider-items flex gap-x-2 md:gap-x-4 max-w-xs md:max-w-full w-full">
					<div class="bg-gradient-to-b from-border rounded-md md:w-3/5 py-6 px-4 md:px-6 grid gap-4" v-for="(quote, index) in data" :key="`quote-${index}`">
						<div class="flex flex-wrap items-start md:gap-3">
							<icons-quote class="text-3xl"></icons-quote>
							<div class="w-full md:expand">
								<p>
									{{quote?.content}}
								</p>
							</div>
						</div>

						<div class="md:p-0 flex items-center gap-4  gap-y-4">
							<div class="w-10 h-10 md:w-12 md:h-12 rounded-full">
								<ui-avatar class="w-full h-full bg-gradient-to-b from-primary to-background">
									<ui-avatar-image :src="quote?.image ? quote?.image : '/avatar.png'"></ui-avatar-image>
									<ui-avatar-fallback>{{quote?.by?.substring(0,2)}}</ui-avatar-fallback>
								</ui-avatar>
							</div>
							<div class="flex flex-col expand">
								<span class="font-medium">{{quote?.by}}</span>
								<span class="text-xs text-foreground/70">{{quote?.designation}}</span>
							</div>
						</div>
					</div>
				</div>

				<div class="p-4 flex justify-end  pt-2">
					<div class="space-x-2">
						<ui-button class="rounded-full" variant="outline" size="icon" uk-slider-item="previous" :disabled="currentSlide === 0">
							<span class="icon-left text-2xl"></span>
						</ui-button>
						<ui-button class="rounded-full" variant="outline" size="icon" uk-slider-item="next" :disabled="news?.length -1 === currentSlide">
							<span class="icon-right text-2xl"></span>
						</ui-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const props = defineProps({
	data : {
		type : Object,
		required : true
	}
})



const slider = ref(null)
const currentSlide = ref(0)
</script>
