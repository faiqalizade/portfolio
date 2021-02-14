import VueRouter from 'vue-router';
import Vue from "vue";

Vue.use(VueRouter);

import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
// import Home from "./components/Home";
const routes = [
    {
        path: "/",
        component: Home,
        meta: { title: 'Faig Alizade | HOME' }
    },
    {
        path: "/contacts/",
        component: Contacts,
        meta: { title: 'Faig Alizade | CONTACTS' }
    },
    {
        path: "/about/",
        component: About,
        meta: { title: 'Faig Alizade | ABOUT' }
    },
]
export default  new VueRouter({
    mode:"history",
    routes
});