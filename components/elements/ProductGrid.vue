<template>

<div>

    <div v-if="element.data.caption" class="mb-3 font-light text-3xl text-center mb-6 md:text-left">{{element.data.caption.value}}</div>

    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
        <ProductsBox v-for="product in element.data.products.value" :product="product"/>
        
    </div>
</div>

</template>

<script setup>

	const props = defineProps({
		element: {
			type: Object
		}
	})

    const emit = defineEmits(['changed'])


</script>
