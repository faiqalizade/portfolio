import VueRouter from 'vue-router';
import Vue from "vue";
Vue.use(VueRouter);

import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Resume from "./components/Resume";
import BlogList from "./components/BlogList";
import Portfolio from "./components/Portfolio";
import Login from "./components/Login";
import Dashboard from "./components/admin/Dashboard";
import Posts from "./components/admin/Posts";
import AdminPortfolio from "./components/admin/Portfolio";
import CreatePortfolio from './components/admin/CreatePortfolio';
import UpdatePortfolio from './components/admin/UpdatePortfolio';
import Site from './components/admin/Site';
import AdminResume from './components/admin/Resume';
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
    {
        name: "admin",
        path: "/admin/",
        component: Dashboard,
        children: [
            {
              // A will be rendered in the second <router-view>
              // when /your-sidebar-url/a is matched
              path: 'posts',
              component: Posts,
              meta: { title: 'Faig Alizade | PORTFOLIO', auth: true, admin: true}
            },
            {
                path: 'portfolio',
                component: AdminPortfolio,
                meta: { title: 'Faig Alizade | PORTFOLIO', auth: true, admin: true},
            },
            {
                path: "portfolio/create",
                component: CreatePortfolio,
                meta: { title: 'Faig Alizade | PORTFOLIO', auth: true, admin: true}
            },
            {
                path: "portfolio/update/:id",
                component: UpdatePortfolio,
                meta: { title: 'Faig Alizade | PORTFOLIO', auth: true, admin: true}
            },
            {
                path: "site",
                component: Site,
                meta: { title: 'Faig Alizade | PORTFOLIO', auth: true, admin: true}
            },
            {
                path: "resume",
                component: AdminResume,
                meta: { title: 'Faig Alizade | PORTFOLIO', auth: true, admin: true}
            }
        ],
        meta: { title: 'Faig Alizade | PORTFOLIO', auth: true, admin: true}
    },
    {
        path: "/login/",
        component: Login,
        meta: { title: 'Faig Alizade | PORTFOLIO', auth: false, admin: true}
    },
]
export default  new VueRouter({
    mode:"history",
    routes
});