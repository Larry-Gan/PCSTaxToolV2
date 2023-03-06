import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base:'/PCSTaxToolV2/',
	plugins: [sveltekit()]
};

export default config;
