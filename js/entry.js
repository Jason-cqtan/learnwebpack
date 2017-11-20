require('./module-one.js');
require('./module-two.js');


import  Vue from 'vue';

// Vue.component('Heading',require('./components/heading.vue'));
// new Vue({
//     el:"#app"
// });
//
import Heading from "./components/heading.vue";
new Vue({
    el:"#app",
    components:{Heading}
});


// require('!style-loader!css-loader!../css/style.css');
require('../css/style.css');