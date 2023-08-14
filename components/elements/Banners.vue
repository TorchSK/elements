<template>

    <ul class="grid grid-cols-4">   
        <li v-for="item in element.data.images.value" class="border relative aspect-[2/3]">
            <img :src="item" />
            <div class="absolute left-10 bottom-10 bg-black text-gray-100 px-4 py-2 rounded-md">View</div>
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
