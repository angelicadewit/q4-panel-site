"use strict";

var teams = Vue.component('teams', {
    props: ["teams"],
    data: function data() {
        return {};
    },
    template: "\n    <div>\n        <h2>{{teams.name}}</h2>\n        <div class=\"page-ul\">\n            <div class=\"full-page\"><img :src=\"teams.img\"></div>\n            <div class=\"content\">\n                <p><span>Class:</span></span> {{teams.class}}</p>\n                <p><span>Description:</span> {{teams.description}}</p>\n                <p><span>Link:</span> <a :href=\"teams.link\" class=\"source-links\">Click Here</a></p>\n                <p><span>Github Repo:</span> <a :href=\"teams.github\" class=\"source-links\">Click Here</a></p>\n                <router-link to=\"/\" class=\"back\">\n                    <p>Back to home</p>\n                </router-link>\n            </div>\n            \n        </ul>\n        </div>\n    </div>\n    "
});
//# sourceMappingURL=teamsComponent.js.map
