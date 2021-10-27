<template>
    <canvas id="canvas"></canvas>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
//import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader';

export default {
    created () {
        window.addEventListener("resize", this.onWindowResize);
        return {
            renderer: null,
            scene: null,
            camera: null,
            controls: null,
        }
    },
    methods: {
        init: function() {
            //init three.js scene, camera, renderer
			//---------------------------------------------------
			this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color( 0x404040)
			this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
			this.camera.position.z = 100;
            
            const canvas = document.querySelector('#canvas');
			this.renderer = new THREE.WebGLRenderer({canvas});
			this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio)
			document.body.appendChild(this.renderer.domElement);

            //controls
            //---------------------------------------------------
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);

            //make light
            //---------------------------------------------------
            const ambientLight = new THREE.AmbientLight(0x404040, 1);
            this.scene.add(ambientLight);

            const sphere = new THREE.SphereGeometry(0.2, 32, 16);

            const far = 50;
            const pointLight = new THREE.PointLight(0xffffff, 2, 100);
			pointLight.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffffff })));
            pointLight.position.set(far,far,far)
			this.scene.add(pointLight);
            
            const pointLight2 = new THREE.PointLight(0xffffff, 2, 100);
			pointLight2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffffff })));
            pointLight2.position.set(-far,far,far)
			this.scene.add(pointLight2);

            //axes
            //---------------------------------------------------
            const axesHelper = new THREE.AxesHelper( 50 );
            this.scene.add( axesHelper );
            
            //make loader
            //---------------------------------------------------
            const mtlLoader = new MTLLoader();
            mtlLoader.load('/models/Trees/trees9.mtl', ( materials ) => {
                materials.preload();
                const objLoader = new OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load('/models/Trees/trees9.obj', ( object ) => {
                    this.scene.add( object );
                });
            })
            
            
            //this.renderer.render(this.scene, this.camera);
        },

        animate: function() {
            requestAnimationFrame(this.animate);
            this.render();
        },

        render: function() {
            
            this.controls.update()

		    this.renderer.render(this.scene, this.camera);
        },

        onWindowResize: function() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();

			this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio)
		}
    },

    mounted() {
        this.init()
        this.animate()
    }
}
</script>

<style scoped>

</style>
