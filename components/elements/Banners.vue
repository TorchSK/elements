<template>

    <ul class="grid grid-cols-2 lg:grid-cols-4 gap-3 px-3 lg:px-0">   
        <li v-for="item in element.data.banners" class="relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-100">
            <Image :image="item.image" class="max-w-full max-h-full" />
            <div class="absolute text-left left-4 lg:left-8" :class="[item.position == 'top' ? 'top-15' : 'bottom-25']">
                <div class="mr-4 lg:mr-8 text-gray-800 px-3.5 py-1.5 text-base lg:text-2xl font-bold rounded-md mb-2">{{ item.heading }}</div>
                <div class="mr-4 lg:mr-8 text-gray-800 px-3.5 py-1.5 text-sm lg:text-lg rounded-md">{{ item.text }}</div>
            </div>
            <nuxt-link :to="item.link" class="absolute left-10 bottom-10 bg-gray-900/90 text-gray-100 px-4 py-2 text-sm rounded-md font-semibold">View</nuxt-link>
        </li>
    </ul>

</template>

<script setup>

	const props = defineProps({
		element: {
			type: Object
		}
	})


</script>
