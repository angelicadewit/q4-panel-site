'use strict';

var router = new VueRouter({
	routes: [{ path: '/', component: home }, { path: '/projects/:name', component: project, props: true }],
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active"
});

var app = new Vue({
	el: '#app',
	router: router,
	data: {
		message: 'Hello Vue!',
		projects: projects
	},
	methods: {}
});
//# sourceMappingURL=main.js.map
