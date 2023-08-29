export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
		"vue": require.resolve("vue"),
    "vue/server-renderer": require.resolve("vue/server-renderer"),
	},
})
