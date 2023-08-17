<template>

    <ul class="grid grid-cols-4">   
        <li v-for="item in element.data.banners" class="border relative aspect-[2/3]">
            <img :src="item.image" />
            <div class="absolute text-left left-8 bottom-25">
                <div class="mr-8 bg-gray-200/80 text-gray-800 px-3.5 py-1.5 text-2xl font-bold rounded-md mb-2">{{ item.heading }}</div>
                <div class="mr-8 bg-gray-200/80 text-gray-800 px-3.5 py-1.5 text-lg rounded-md">{{ item.text }}</div>
            </div>
            <div class="absolute left-10 bottom-10 bg-gray-900/80 text-gray-100 px-3.5 py-1.5 text-sm rounded-md">View</div>
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
