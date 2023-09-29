<template>
	<div :class="['bg-'+element.data.bgColor]" 
		class="rounded-md flex group items-center relative"
	>
		<div class="flex-grow flex-shrink-0 text-center p-4 font-medium" :class="['text-'+element.data.textColor]">{{element.data.text}}</div>
        <nuxt-link :to="element.data.link" v-if="element.data.link" class="w-14 flex justify-center">
            <div class="i-ph-arrow-circle-right text-2xl group-hover:text-3xl transition-all" />
        </nuxt-link>
	</div>
</template>

<script setup>

	const props = defineProps({
		element: {
			type: Object
		}
	})


</script>
