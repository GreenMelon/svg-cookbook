import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import routes from './config/routes.util';
import config from './config';

Vue.use(VueRouter);
Vue.config.debug = true;
Vue.prototype.GLOBAL = config;

console.log(1, process.env);
console.log(2, config);

const router = new VueRouter({
    routes,
});

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
});
