<template>
    <canvas id="canvas"></canvas>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
//import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader';

export default {
    created () {
        window.addEventListener("resize", this.onWindowResize);
        return {
            renderer: null,
            scene: null,
            camera: null,
            controls: null,
            model: null,
            model2: null,
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
            const ambientLight = new THREE.AmbientLight(0xffffff, 1);
            this.scene.add(ambientLight);

            //axes
            //---------------------------------------------------
            const axesHelper = new THREE.AxesHelper( 50 );
            this.scene.add( axesHelper );
            
            //make loader
            //---------------------------------------------------
            const mtlLoader = new MTLLoader();
            mtlLoader.load('/models/Cat/Cat.mtl', 
                ( materials ) => {
                    materials.preload();
                    const objLoader = new OBJLoader();
                    objLoader.setMaterials(materials);
                    objLoader.load('/models/Cat/Cat.obj', ( object ) => {
                        this.model = object;
                        this.scene.add( this.model );
                    });
            })
            mtlLoader.load('/models/Skull/Skull.mtl', 
                ( materials ) => {
                    materials.preload();
                    const objLoader = new OBJLoader();
                    objLoader.setMaterials(materials);
                    objLoader.load('/models/Skull/Skull.obj', ( object ) => {
                        this.model2 = object;
                        this.model2.position.x = 50;
                        this.scene.add( this.model2 );
                    });
            })
        },

        animate: function() {
            requestAnimationFrame(this.animate);
            this.render();
        },

        render: function() {
            /*
            this.model.rotation.x += 0.01;
            this.model.rotation.y += 0.01;
            this.model.rotation.z += 0.01;

            this.model2.rotation.x += 0.01;
            this.model2.rotation.y += 0.01;
            this.model2.rotation.z += 0.01;
            */
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
