<template>
	<div>
		<template v-if="data?.attrs?.display_as === 'button'">
			<a :href="data?.content">
				<ui-button>	
					{{data?.attrs?.text}}
				</ui-button>
			</a>
		</template>
		<template v-else>
			<a :href="data?.content">
				{{data?.attrs?.text}}
			</a>
		</template>
	</div>
</template>
<script setup lang="ts">
const props = defineProps({
	data : {
		type : Object,
		required : true
	}
})
</script>
