"use strict";

var node = Vue.component('node', {
    props: ["node"],
    data: function data() {
        return {};
    },
    template: "\n    <div>\n        <h2>{{node.name}}</h2>\n        <div class=\"page\">\n            <div class=\"full-page\"><img :src=\"node.img\"></div>\n            <div class=\"content\">\n                <p><span>Class:</span></span> {{node.class}}</p>\n                <p><span>Description:</span> {{node.description}}</p>\n                <p><span>Link:</span> <a :href=\"node.link\" class=\"source-links\">Click Here</a></p>\n                <p><span>Github Repo:</span> <a :href=\"node.github\" class=\"source-links\">Click Here</a></p>\n                <router-link to=\"/\" class=\"back\">\n                    <p>Back to home</p>\n                </router-link>\n            </div>\n            \n        </ul>\n        </div>\n    </div>\n    "
});
//# sourceMappingURL=nodeComponent.js.map
