// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: {
		enabled: false,
		timeline: {
			enabled: true,
		},
	},
	modules: [
		"nuxt-quasar-ui",
	],
	compatibilityDate: "2024-08-03",
})