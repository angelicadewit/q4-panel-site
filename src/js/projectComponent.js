let project = Vue.component('project', {
    props: ["projects"],
    data: function () {
        return {
        }
	},
	template:
	
	`
    <div>
    hello, this is a project site
	</div>
    `
})

// <!--
// <ul>
//     <li>
//         <p>{{project.name}}</p>
//         <p>{{project.description}}</p>
//         <p>{{project.img}}</p>
//         </li>
// </ul>
// -->