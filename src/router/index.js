import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from "../../data.json";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component : () => import("../views/NotFound.vue"),
      name: 'NotFound'
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/destination/:id/:slug",
      component : () => import('../views/DestinationView.vue'),
      name : "destination.show",
      props : true,

      // navigation gaurd
      beforeEnter(to, from){
        const exists = sourceData.destinations.find((dest) => dest.id == to.params.id);
        if(!exists) return {
          name: 'NotFound',
          params:
            {pathMatch : to.path.split("/").slice(1)},
            query : to.query,
            hash: to.hash

        }
      },

      children : [
        {
          path: ":experienceSlug",
          component : () => import('../views/ExperienceShowView.vue'),
          name : "experience.show",
          props : true
      }
      ]
    },

  ],

  // scroll behaviour
  scrollBehavior(to,from, savedPosition){
    return savedPosition || { top:  0};
  }
})

export default router
