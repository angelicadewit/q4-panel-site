"use strict";

var project = Vue.component('project', {
    props: ["projects"],
    data: function data() {
        return {};
    },
    template: "\n    <div>\n    <ul>\n            <p>{{project.name}}</p>\n            <p>{{project.description}}</p>\n            <p>{{project.img}}</p>\n\n    </ul>\n\t</div>\n    "
});
//# sourceMappingURL=projectComponent.js.map
