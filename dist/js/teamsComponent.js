"use strict";

var teams = Vue.component('teams', {
    props: ["teams"],
    data: function data() {
        return {};
    },
    template: "\n    <div>\n        <h2>{{teams.name}}</h2>\n        <div class=\"page-ul\">\n            <div class=\"full-page\"><img :src=\"teams.img\"></div>\n            <div class=\"content\">\n                <p>Class: {{teams.class}}</p>\n                <p>Description: {{teams.description}}</p>\n                <p>Link: <a :href=\"teams.link\">Click Here</a></p>\n                <p>Github Repo: <a :href=\"teams.github\">Click Here</a></p>\n                <router-link to=\"/\">\n                    Go Back\n                </router-link>\n            </div>\n            \n        </ul>\n        </div>\n    </div>\n    "
});
//# sourceMappingURL=teamsComponent.js.map
