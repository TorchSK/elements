<template>

    <ul class="grid grid-cols-4">   
        <li v-for="item in element.data.images.value" class="border aspect-[2/3]">

            <img :src="item.blob" />
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
