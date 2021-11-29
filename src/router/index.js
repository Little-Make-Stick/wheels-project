import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      // component
      {
        path: '/button-demo',
        component: () => import( '../views/component/button-demo.vue')
      },
      {
        path: '/bubble-demo',
        component: () => import( '../views/component/bubble-demo.vue')
      },
      // navigator
      {
        path: '/anchor-demo',
        component: () => import( '../views/navigator/anchor-demo.vue')
      },
      // form
      // datashow
      {
        path: '/badge-demo',
        component: () => import( '../views/dataShow/badge-demo.vue')
      },
      {
        path: '/label-demo',
        component: () => import( '../views/dataShow/label-demo.vue')
      },
      {
        path: '/block-demo',
        component: () => import( '../views/dataShow/block-demo.vue')
      },
      {
        path: '/list-demo',
        component: () => import( '../views/dataShow/list-demo.vue')
      },
      {
        path: '/card-demo',
        component: () => import( '../views/dataShow/card-demo.vue')
      },
      {
        path: '/bubble-card-demo',
        component: () => import( '../views/dataShow/bubble-card-demo.vue')
      },
      // feedback
      {
        path: '/dialog-demo',
        component: () => import( '../views/feedback/dialog-demo.vue')
      },
      {
        path: '/toast-demo',
        component: () => import( '../views/feedback/toast-demo.vue')
      },
      {
        path: '/warntip-demo',
        component: () => import( '../views/feedback/warntip-demo.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
