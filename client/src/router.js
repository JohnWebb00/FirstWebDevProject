import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import AdminLogin from './views/AdminLogin.vue'
import Item from './views/Item.vue'
import CreateListing from './views/CreateListing.vue'
import Listings from './views/Listings.vue'
import PendingListings from './views/pendingListings.vue'
import AccountCreation from './views/accountCreation.vue'
import MyAccount from './views/MyAccount.vue'
import ReviewCard from './components/ReviewCard.vue'
import EditListing from './views/EditListing.vue'
import myListingsCard from './components/myListingsCard.vue'
import EditAccount from './views/EditAccount.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },

    {
      path: '/review-card',
      name: 'review card',
      component: ReviewCard
    },

    {
      path: '/my-listings-card',
      name: 'my listings card',
      component: myListingsCard
    },

    {
      path: '/register',
      name: 'register',
      component: AccountCreation
    },

    {
      path: '/my-account',
      name: 'my account',
      component: MyAccount
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/admin-login',
      name: 'admin login',
      component: AdminLogin
    },

    {
      path: '/list-item',
      name: 'create item listing',
      component: CreateListing
    },

    {
      path: '/view-item/:id',
      name: 'view item',
      component: Item
    },
    {
      path: '/edit-item/:id',
      name: 'edit item',
      component: EditListing
    },
    {
      path: '/edit-account',
      name: 'edit account',
      component: EditAccount
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
