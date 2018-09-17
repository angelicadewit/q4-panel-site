let vuejs = Vue.component('vuejs', {
    props: ["vuejs"],
    data: function () {
        return {
        }
	},
	template:
	
    `
    <div>
        <h2>{{vuejs.name}}</h2>
        <div class="page">
            <div class="full-page"><img :src="vuejs.img"></div>
            <div class="content">
                <p><span>Class:</span></span> {{vuejs.class}}</p>
                <p><span>Description:</span> {{vuejs.description}}</p>
                <p><span>Link:</span> <a :href="vuejs.link" class="source-links">Click Here</a></p>
                <p><span>Github Repo:</span> <a :href="vuejs.github" class="source-links">Click Here</a></p>
                <router-link to="/" class="back">
                    <p>Back to home</p>
                </router-link>
            </div>
            
        </ul>
        </div>
    </div>
    `
})