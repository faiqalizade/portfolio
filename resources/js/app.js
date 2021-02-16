/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// import VueRouter from 'vue-router'
// require('./bootstrap');
import routes from './routes';
window.Vue = require('vue').default;
import axios from "axios";
import Cookies from "js-cookie";
// Vue.use(VueRouter);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Index', require('./components/Index.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// import adminStyle from "/css"
// const blueThemecss = () => require('sass/adminStyle');
routes.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    // var adminStyle = to.matched.some(record => record.meta.adminStyle);
    // if(adminStyle){
    // }
    // const currentUser = firebase.auth().currentUser
    // const requireAuth = to.matched.some(record => record.meta.auth);
    
    // if (requireAuth && !currentUser) {
    //     next('/login/');
    // } else {
    //     next();
    // }
    next();
});
const app = new Vue({
    router: routes,
    el: '#app',
});
