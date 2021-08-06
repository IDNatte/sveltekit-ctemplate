/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-node';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// amp setting, uncomment on build only if no will produce 'amp validation error'
		// amp: true,

		// node adapter
		adapter: adapter({
			out: 'build',
			precompress: false,
			// env: {
	
			// }
		})
	}
};

export default config;
