import VueRouter from 'vue-router';
import Vue from "vue";

Vue.use(VueRouter);

import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Resume from "./components/Resume";
import BlogList from "./components/BlogList";
import Portfolio from "./components/Portfolio";
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
    {
        path: "/resume/",
        component: Resume,
        meta: { title: 'Faig Alizade | RESUME' }
    },
    {
        path: "/blog/",
        component: BlogList,
        meta: { title: 'Faig Alizade | BLOG' }
    },
    {
        path: "/portfolio/",
        component: Portfolio,
        meta: { title: 'Faig Alizade | PORTFOLIO' }
    },
]
export default  new VueRouter({
    mode:"history",
    routes
});