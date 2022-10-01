import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import AdminLogin from './views/AdminLogin.vue'
import Item from './views/Item.vue'
import CreateListing from './views/CreateListing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/adm-login',
      name: 'admin login',
      component: AdminLogin
    },

    {
      path: '/list-item',
      name: 'create item listing',
      component: CreateListing
    },

    {
      path: '/view-item',
      name: 'view item',
      component: Item
    }
  ]
})
