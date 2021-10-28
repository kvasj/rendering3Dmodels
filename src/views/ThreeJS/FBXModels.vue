<template>
    <canvas id="canvas"></canvas>
    <!-- Godette by swift502 [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/DpQcXGdzXp) -->
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export default {
    created () {
        window.addEventListener("resize", this.onWindowResize);
        return {
            renderer: null,
            scene: null,
            camera: null,
            controls: null,
            model: null,
            mixer: null,
            clock: null,
        }
    },
    methods: {
        init: function() {
            //init three.js scene, camera, renderer
			//---------------------------------------------------
			this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color( 0x404040)
			this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
			this.camera.position.z = 130;
            
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
            const fbxLoader = new FBXLoader();
            fbxLoader.load('/models/Godette/godette.fbx',
                ( object ) => {
                    this.model = object;
                    this.mixer = new THREE.AnimationMixer( this.model );
                    let action = this.mixer.clipAction( this.model.animations[0] );
                    action.play();
                
                    this.scene.add(this.model)
                }
            )
        },

        animate: function() {
            requestAnimationFrame(this.animate);
            this.render();
        },

        render: function() {
            this.controls.update();
            if(this.mixer)
                this.mixer.update(0.01)

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
