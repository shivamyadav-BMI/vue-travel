import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/destination/:id/:slug",
      component : () => import('../views/DestinationView.vue'),
      name : "destination.show"
    }
  ],
})

export default router
