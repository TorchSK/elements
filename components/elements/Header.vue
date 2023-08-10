<template>
	<h1 class="mb-5 text-xl font-semibold outline-none">
		<span>{{element.data.text.value}}</span>
	</h1>
</template>

<script setup>

	const props = defineProps({
		element: {
			type: Object
		}
	})


</script>
