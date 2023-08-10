<template>
	<div :class="[element.data.bgColor.value, element.data.textColor.value]" class="rounded-sm flex group items-center relative">
		<div class="flex-grow flex-shrink-0 text-center p-4">{{element.data.text.value}}</div>
        <nuxt-link :to="element.data.link.value" v-if="element.data.link.value" class="w-14 flex justify-center">
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
