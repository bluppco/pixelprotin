/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif']
			},
			backgroundImage: {
				'pixel_protin_masthead': "url('https://blupp.b-cdn.net/pixelprotin/pixel_protin_masthead.jpg?quality=90')",
			}
		},
	},
	plugins: [],
}
