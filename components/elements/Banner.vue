<template>
    
    <div class="relative">
        <Image :image="element.data.image" class="h-full w-full object-cover object-center" />
        <div class="absolute inset-0 flex flex-col items-center justify-center z-100">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Long-term thinking</h2>
            <p class="mt-3 text-xl text-white">{{ element.data.text }}</p>
        </div>
        <div aria-hidden="true" class="absolute inset-0 bg-black bg-opacity-40 z-99" />
    </div>

</template>


<script setup>

	const props = defineProps({
		element: {
			type: Object
		}
	})

</script>
