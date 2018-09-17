let project = Vue.component('project', {
    props: ["projects"],
    data: function () {
        return {
        }
	},
	template:
	
	`
    <div>
    <ul>
            <p>{{project.name}}</p>
            <p>{{project.description}}</p>
            <p>{{project.img}}</p>

    </ul>
	</div>
    `
})
