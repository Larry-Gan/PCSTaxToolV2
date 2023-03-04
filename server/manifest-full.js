export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f2bbb486.js","imports":["_app/immutable/entry/start.f2bbb486.js","_app/immutable/chunks/index.0cafa8c3.js","_app/immutable/chunks/singletons.24a3d99d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.17633bdb.js","imports":["_app/immutable/entry/app.17633bdb.js","_app/immutable/chunks/index.0cafa8c3.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
