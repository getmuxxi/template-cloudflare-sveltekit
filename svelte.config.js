// Svelte config
// See below for optional markdown support

import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

//
// Use the below config to enable markdown support with mdsvex
//
// import adapter from '@sveltejs/adapter-cloudflare';
// import { vitePreprocess } from '@sveltejs/kit/vite';
// import { mdsvex } from 'mdsvex';
// import mdsvexConfig from './mdsvex.config.js';
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte', ...mdsvexConfig.extensions],
// 	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
// 	// for more information about preprocessors
// 	preprocess: [
// 		vitePreprocess(),
// 		mdsvex(mdsvexConfig)
// 	],
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };
// export default config;


