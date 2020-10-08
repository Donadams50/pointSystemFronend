import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import DailyContribution from '../views/DailyContribution.vue'
//import RollOver from '../views/RollOver.vue'
import OtherTransaction from '../views/OtherTransaction.vue'
import Rewards from '../views/Rewards.vue'
import Users from '../views/Users.vue'
import ViewUser from '../views/ViewUser.vue'
import AddUser from '../views/AddUser.vue'
import ViewConfiguration from '../views/ViewConfiguration.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
   
  }, 
  {
    path: '/dailycontribution',
    name: 'DailyContribution',
    component: DailyContribution
   
  },
  // {
  //   path: '/rollover',
  //   name: 'RollOver',
  //   component: RollOver
   
  // },
  {
    path: '/othertransaction',
    name: 'OtherTransaction',
    component: OtherTransaction
   
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: Rewards
   
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
   
  },
  {
    path: '/viewusers/:Id',
    name: 'ViewUser',
    component: ViewUser
  },
  {
    path: '/adduser',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/viewconfiguration/:name',
    name: 'ViewConfiguration',
    component: ViewConfiguration
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
