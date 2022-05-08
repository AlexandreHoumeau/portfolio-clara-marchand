import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	plugins: [
	],
	preprocess: preprocess({
		postcss: {
			plugins: [tailwind, autoprefixer]
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
