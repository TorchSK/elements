<template>
    <div>
    <template v-if="element.data.link.value">
	    <nuxt-link :to="element.data.link.value">
            <nuxt-img :src="src" class="w-full" width="1280" height="465" placeholder sizes="sm:100vw md:50vw lg:400px" />
        </nuxt-link>
    </template>

    <template v-else>
	    <nuxt-img :src="src" class="w-full" width="1280" height="465" placeholder sizes="sm:100vw md:50vw lg:400px" />
    </template>
    </div>
</template>

<script setup>

	const props = defineProps({
		element: {
			type: Object
		}
	})

    const { src } = useCdnImage(props.element.data.banner.value, 'banner')

</script>
