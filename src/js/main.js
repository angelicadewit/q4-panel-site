const router = new VueRouter({
	routes: [
    { path: '/', component: home },
    { path: '/teams', component: teams},
    // { path: '/projects/:id', name: 'projects', component: projects, props: true } 
	],
	linkActiveClass: "active",	
	linkExactActiveClass: "exact-active",
})

var app = new Vue({
	el: '#app',
	router: router,
	data: {
        message: 'Hello Vue!',
        // projects: projects,
        teams: {
            id: 1,
            param: "KR",
            name: "KR Steakhouse",
            class: `teams`,
            description: `Collaborated with Carol Ehreth and Ashley Pollard, this featured a complete redesign of KR Steakhouse restaurant`,
            thumbnail: `dist/img/krsteakbarthumb.png`,
            github: `https://github.com/ashpollard11/teams-2/`,
            link: `krsteakbar.html`,
            img: `dist/img/krsteakbar.png`,
        },
        node: {
            param: "sami",
            name: "Talk To Sami",
            class: `Node`,
            description: `A user-submitted letter writing site to talk to Sami - a magical cat who will listen to you`,
            thumbnail: `dist/img/samithumb.png`,
            github: `https://github.com/angelicadewit/Node-Final-Project/`,
            link: `node.html`,
            img: `dist/img/talktosami.png`,
        },
        vuejs: {
            id: 3,
            param: "sheetfaced",
            name: "Let's Get Sheetfaced",
            class: `Vue`,
            description: `An information site geared towards users who are interested in started an Asian Beauty routine`,
            thumbnail: `dist/img/sheetfacedlogo.png`,
            github: `https://github.com/angelicadewit/Vue-Final`,
            link: `sheetfaced.html`,
            img: `dist/img/sheetfaced.png`,
        },
    },
	methods: {
	},
})
