import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Catagory from './views/Catagory.vue'
import Listings from './views/Listings.vue'
import PendingListings from './views/pendingListings.vue'

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
      path: '/catagory',
      name: 'catagory',
      component: Catagory
    },
    {
      path: '/listings',
      name: 'listings',
      component: Listings
    },
    {
      path: '/pendingListings',
      name: 'pendingListings',
      component: PendingListings
    }
  ]
})
