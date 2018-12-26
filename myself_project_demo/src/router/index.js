import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Pages from "@/components/Pages";
import About from "@/components/About";
import Wedding from "@/components/Wedding";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
import NotFound from "@/components/notfound";



Vue.use(Router);


export default new Router({
  routes: [
    {path: '/', component:Home},
    {path:"/signIn",component:SignIn},
    {path:"/signUp",component:SignUp},
    {path:"/home",component:Home},
    {path:"/about",component:About},
    {path:"/pages",component:Pages},
    {path:"/contact",component:Contact},
    {path:"/wedding",component:Wedding},
    {path:"*",component:NotFound}
  ]
})
