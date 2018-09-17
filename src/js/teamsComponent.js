let teams = Vue.component('teams', {
    props: ["teams"],
    data: function () {
        return {
        }
	},
	template:
	
    `
    <div>
        <h2>{{teams.name}}</h2>
        <div class="page-ul">
            <div class="full-page"><img :src="teams.img"></div>
            <div class="content">
                <p>Class: {{teams.class}}</p>
                <p>Description: {{teams.description}}</p>
                <p>Link: <a :href="teams.link">Click Here</a></p>
                <p>Github Repo: <a :href="teams.github">Click Here</a></p>
                <router-link to="/">
                    Go Back
                </router-link>
            </div>
            
        </ul>
        </div>
    </div>
    `
})