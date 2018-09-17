let node = Vue.component('node', {
    props: ["node"],
    data: function () {
        return {
        }
	},
	template:
	
    `
    <div>
        <h2>{{node.name}}</h2>
        <div class="page">
            <div class="full-page"><img :src="node.img"></div>
            <div class="content">
                <p><span>Class:</span></span> {{node.class}}</p>
                <p><span>Description:</span> {{node.description}}</p>
                <p><span>Link:</span> <a :href="node.link" class="source-links">Click Here</a></p>
                <p><span>Github Repo:</span> <a :href="node.github" class="source-links">Click Here</a></p>
                <router-link to="/" class="back">
                    <p>Back to home</p>
                </router-link>
            </div>
            
        </ul>
        </div>
    </div>
    `
})