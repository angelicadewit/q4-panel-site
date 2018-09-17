"use strict";

var vuejs = Vue.component('vuejs', {
    props: ["vuejs"],
    data: function data() {
        return {};
    },
    template: "\n    <div>\n        <h2>{{vuejs.name}}</h2>\n        <div class=\"page\">\n            <div class=\"full-page\"><img :src=\"vuejs.img\"></div>\n            <div class=\"content\">\n                <p><span>Class:</span></span> {{vuejs.class}}</p>\n                <p><span>Description:</span> {{vuejs.description}}</p>\n                <p><span>Link:</span> <a :href=\"vuejs.link\" class=\"source-links\">Click Here</a></p>\n                <p><span>Github Repo:</span> <a :href=\"vuejs.github\" class=\"source-links\">Click Here</a></p>\n                <router-link to=\"/\" class=\"back\">\n                    <p>Back to home</p>\n                </router-link>\n            </div>\n            \n        </ul>\n        </div>\n    </div>\n    "
});
//# sourceMappingURL=vuejsComponent.js.map
