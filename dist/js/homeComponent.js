"use strict";

var home = Vue.component('home', {
    props: ["projects"],
    data: function data() {
        return {};
    },
    template: "\n\t<div>\n    \n        <p>You can also call me Gelli.</p>\n        <p>Currently an Interactive Development student at The Creative Circus</p>\n        <p>Pottermore placed me in Ravenclaw and Horned Serpent</p>\n        <p>Buzzfeed described me as a combo of McGonagall and Daenerys</p>\n        <p>Here is a collection of what I worked on for the past few months</p>\n        \n        <ul>\n        <li v-for=\"project in projects\">\n            {{project.name}}<br>\n            <router-link to=\"/project\">\n                <div class=\"img-size\"><img :src=\"project.thumbnail\"></div>\n            </router-link>\n\n        </li>\n    </ul>\n\t</div>\n    "
});
//# sourceMappingURL=homeComponent.js.map
