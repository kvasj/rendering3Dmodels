import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import TorusKnotGeometry from '../views/ThreeJS/TorusKnotGeometry.vue'
import OBJModels from '../views/ThreeJS/OBJModels.vue'
import FBXModels from '../views/ThreeJS/FBXModels.vue'
import BabylonJS from '../views/BabylonJS.vue'
import ModelViewer from '../views/ModelViewer.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/threejs/TorusKnotGeometry',
    name: 'TorusKnotGeometry',
    component: TorusKnotGeometry
  },
  {
    path: '/threejs/obj-models',
    name: 'OBJModels',
    component: OBJModels
  },
  {
    path: '/threejs/fbx-models',
    name: 'FBXModels',
    component: FBXModels
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
  history: createWebHistory(),
  routes
})

export default router
