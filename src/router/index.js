import { createRouter, createWebHashHistory } from 'vue-router'
import ThreeJS from '../views/ThreeJS.vue'

const routes = [
  {
    path: '/',
    name: 'Threejs',
    component: ThreeJS
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
