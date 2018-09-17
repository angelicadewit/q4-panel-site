let home = Vue.component('home', {
    props: ["projects"],
    data: function () {
        return {
        }
	},
	template:
	
	`
	<div>
    
        <p>You can also call me Gelli.</p>
        <p>Currently an Interactive Development student at The Creative Circus</p>
        <p>Pottermore placed me in Ravenclaw and Horned Serpent</p>
        <p>Buzzfeed described me as a combo of McGonagall and Daenerys</p>
        <p>Here is a collection of what I worked on for the past few months</p>
        
        <ul>
        <li v-for="project in projects">
            {{project.name}}<br>
            <router-link :to="{ name: 'project'}">
                <div class="img-size"><img :src="project.thumbnail"></div>
            </router-link>

        </li>
    </ul>
	</div>
    `
})
