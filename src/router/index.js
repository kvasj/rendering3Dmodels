import { createRouter, createWebHashHistory } from 'vue-router'
import TorusKnotGeometry from '../views/ThreeJS/TorusKnotGeometry.vue'
import Model3D from '../views/ThreeJS/3DModel.vue'
import BabylonJS from '../views/BabylonJS.vue'
import ModelViewer from '../views/ModelViewer.vue'

const routes = [
  {
    path: '/threejs/TorusKnotGeometry',
    name: 'TorusKnotGeometry',
    component: TorusKnotGeometry
  },
  {
    path: '/threejs/3d-model',
    name: '3DModel',
    component: Model3D
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
