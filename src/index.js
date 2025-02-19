import population from './population.js';

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		if (url.pathname === '/api/population') {
			return Response.json(population);
		}
		return new Response('Hello Worker!');
	},
};
