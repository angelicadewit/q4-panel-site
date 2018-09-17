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
            <router-link to="/teams" class="project-links">
                <h3>Project: {{teams.name}}</h3>
                <div class="img-size"><img :src="teams.thumbnail"></div>
            </router-link>
        </li>

        <li>
            
            <router-link to="/node" class="project-links">
                <h3 >Project: {{node.name}}</h3>
                <div class="img-size"><img :src="node.thumbnail"></div>
            </router-link>
        </li>

        <li>
            <router-link to="/vuejs" class="project-links">
                <h3>Project: {{vuejs.name}}</h3>
                <div class="img-size"><img :src="vuejs.thumbnail"></div>
            </router-link>
        </li>
        </ul>
	</div>
    `
})
