import { createRouter, createWebHashHistory } from "vue-router";
//import Bankvieuw from '../vieuws/Bankvieuw.vue'
const Bankvieuw = () => import('../vieuws/Bankvieuw.vue')
//import Homevieuw from '../vieuws/Homevieuw.vue'
const Homevieuw = () => import('../vieuws/Homevieuw.vue')
//import Usersvieuw from '../vieuws/Usersvieuw.vue'
const Usersvieuw = () => import('../vieuws/Usersvieuw.vue')

const routes = [
        {
            path:'/Home',
            name:"Home",
            component: Homevieuw
        },
        {
            path:'/',
            name:"Thuis",
            component: Homevieuw
        },
        {
            path:'/Banks',
            name:"Banks",
            component : Bankvieuw
        },
        {
            path:'/Users',
            name:"Users",
            component : Usersvieuw
        }

    ];
   const router = createRouter({
        history: createWebHashHistory(),
        routes })

export default router