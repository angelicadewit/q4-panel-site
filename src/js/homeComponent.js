let home = Vue.component('home', {
    props: ["teams", "vuejs", "node"],
    data: function () {
        return {
        }
	},
	template:
	
	`
	<div class="content">
    
        <p>You can also call me Gelli.</p>
        <p>Currently an Interactive Development student at The Creative Circus</p>
        <p>Pottermore placed me in Ravenclaw and Horned Serpent</p>
        <p>Buzzfeed described me as a combo of McGonagall and Daenerys</p>
        <p>Here is a collection of what I worked on for the past few months:</p>
        
        <ul class="page links">
        <li>
            Project: {{teams.name}}
            <router-link to="/teams">
                <div class="img-size"><img :src="teams.thumbnail"></div>
            </router-link>
        </li>

        <li>
            Project: {{node.name}}
            <router-link to="/node">
                <div class="img-size"><img :src="node.thumbnail"></div>
            </router-link>
        </li>

        <li>
            Project: {{vuejs.name}}
            <router-link to="/vuejs">
                <div class="img-size"><img :src="vuejs.thumbnail"></div>
            </router-link>
        </li>
        </ul>
	</div>
    `
})
