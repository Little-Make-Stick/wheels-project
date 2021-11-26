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
        path: '/card-demo',
        component: () => import( '../views/dataShow/card-demo.vue')
      },
      // feedback
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
