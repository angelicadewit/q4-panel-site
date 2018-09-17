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
                <p><span>Class:</span></span> {{teams.class}}</p>
                <p><span>Description:</span> {{teams.description}}</p>
                <p><span>Link:</span> <a :href="teams.link" class="source-links">Click Here</a></p>
                <p><span>Github Repo:</span> <a :href="teams.github" class="source-links">Click Here</a></p>
                <router-link to="/" class="back">
                    <p>Back to home</p>
                </router-link>
            </div>
            
        </ul>
        </div>
    </div>
    `
})