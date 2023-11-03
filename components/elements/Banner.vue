<template>
    <div class="relative overflow-hidden" :class="'rounded'+element.data.radius">
        <Image :image="element.data.image" class="h-full w-full object-cover object-center" />
        <div class="absolute inset-0 flex flex-col items-center justify-center z-3">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl">{{ element.data.caption }}</h2>
            <p class="mt-3 text-2xl text-white">{{ element.data.text }}</p>
        </div>
        <div aria-hidden="true" class="absolute inset-0 bg-black z-2" :style="{'opacity': element.data.opacity/100 }"/>
        <nuxt-link v-if="useRoute().meta.layout != 'project'" :to="element.data.link" class="absolute inset-0 z-3"></nuxt-link>
    </div>

</template>


<script setup>

	const props = defineProps({
		element: {
			type: Object
		}
	})

</script>
