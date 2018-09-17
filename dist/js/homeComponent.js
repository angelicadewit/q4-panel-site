"use strict";

var home = Vue.component('home', {
    props: ["teams", "vuejs", "node"],
    data: function data() {
        return {};
    },
    template: "\n\t<div class=\"content\">\n    \n        <p>You can also call me Gelli.</p>\n        <p>Currently an Interactive Development student at The Creative Circus</p>\n        <p>Pottermore placed me in Ravenclaw and Horned Serpent</p>\n        <p>Buzzfeed described me as a combo of McGonagall and Daenerys</p>\n        <p>Here is a collection of what I worked on for the past few months:</p>\n        \n        <ul class=\"page links\">\n        <li>\n            <router-link to=\"/teams\" class=\"project-links\">\n                <h3>Project: {{teams.name}}</h3>\n                <div class=\"img-size\"><img :src=\"teams.thumbnail\"></div>\n            </router-link>\n        </li>\n\n        <li>\n            \n            <router-link to=\"/node\" class=\"project-links\">\n                <h3 >Project: {{node.name}}</h3>\n                <div class=\"img-size\"><img :src=\"node.thumbnail\"></div>\n            </router-link>\n        </li>\n\n        <li>\n            <router-link to=\"/vuejs\" class=\"project-links\">\n                <h3>Project: {{vuejs.name}}</h3>\n                <div class=\"img-size\"><img :src=\"vuejs.thumbnail\"></div>\n            </router-link>\n        </li>\n        </ul>\n\t</div>\n    "
});
//# sourceMappingURL=homeComponent.js.map
