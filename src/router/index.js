import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ContactView.vue')
  },
  {
    path: '/basic',
    name: 'basic',
    component: () => import(/* webpackChunkName: "basic", webpackPrefetch: true */ '../views/BasicView.vue')
  },
  {
    path: '/databinding',
    name: 'Databinding',
    component: () => import(/* webpackChunkName: "basic", webpackPrefetch: true */ '../views/DataBindingView.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DatabindingHtml',
    component: () => import(/* webpackChunkName: "basic", webpackPrefetch: true */ '../views/DataBindingHtml.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
