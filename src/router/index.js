import { createRouter, createWebHashHistory } from 'vue-router'
import ThreeJS from '../views/ThreeJS.vue'
import BabylonJS from '../views/BabylonJS.vue'
import ModelViewer from '../views/ModelViewer.vue'

const routes = [
  {
    path: '/threejs',
    name: 'Threejs',
    component: ThreeJS
  },
  {
    path: '/babylonjs',
    name: 'Babylonjs',
    component: BabylonJS
  },
  {
    path: '/model-viewer',
    name: 'modelViewer',
    component: ModelViewer
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
