let projects = Vue.component('projects', {
    props: ["projects"],
    data: function () {
        return {
        }
	},
	template:
	
	`
    <div>
    {{ $route.params.id }}
	</div>
    `
})