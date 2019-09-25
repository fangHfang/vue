import Vue from 'vue'
import Router from 'vue-router'
import VueResource from "vue-resource"
import VueScroller from 'vue-scroller'
import Index from '@/components/index'
import Category from '@/components/category'
import Shop from '@/components/shop'
import Checkout from '@/components/checkout'
import Mine from '@/components/mine'
import Sign from '@/components/sign'
import Login from '@/components/login'
Vue.use(Router);
Vue.use(VueResource);
Vue.use(VueScroller);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path:"/category",
            name:"category",
            component:Category
        },
        {
            path:"/shop",
            name:"shop",
            component:Shop
        },
        {
            path:"/checkout",
            name:"checkout",
            component:Checkout
        },
        {
            path:"/mine",
            name:"mine",
            component:Mine
        },
        {
            path:"/sign",
            name:"sign",
            component:Sign
        },
        {
            path:"/login",
            name:"login",
            component:Login
        }
    ]
})
