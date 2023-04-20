import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { // copy for underside links
      path: '/GrafiskDesign',
      name: 'GrafiskDesign',
      component: () => import('../views/GrafiskDesignView.vue')
    },
    {
      path: '/WebDesign',
      name: 'WebDesign',
      component: () => import('../views/WebDesignView.vue')
    },
    {
      path: '/FotoVideo',
      name: 'FotoVideo',
      component: () => import('../views/FotoVideoView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  
})

export default router
