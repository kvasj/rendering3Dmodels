<template>
    <canvas id="canvas"></canvas>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default {
    created () {
        window.addEventListener("resize", this.onWindowResize);
        return {
            sphere: null,
            renderer: null,
            scene: null,
            camera: null,
            ambientLight: null,
            pointLight: null,
            controls: null,
            objLoader: null,
            mtlLoader: null,
        }
    },
    methods: {
        init: function() {
            //init three.js scene, camera, renderer
			//---------------------------------------------------
			this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color( 0x404040)
			this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			this.camera.position.z = 250;
            
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
            this.ambientLight = new THREE.AmbientLight(0x404040, 1);
            this.scene.add(this.ambientLight);
            /*
            this.sphere = new THREE.SphereGeometry(1, 32, 16);
            this.pointLight = new THREE.PointLight(0xff0040, 2, 50);
			this.pointLight.add(new THREE.Mesh(this.sphere, new THREE.MeshBasicMaterial({ color: 0xff0000 })));
			this.scene.add(this.pointLight);
            */
            
            //make loader
            //---------------------------------------------------
            
            
            this.objLoader = new OBJLoader();
			this.objLoader.load('http://localhost:8080/public/models/FighterJet/10593_Fighter_Jet_SG_v1_iterations-2.obj', ( object ) => {
                this.scene.add( object );
                console.log(this.scene)
                console.log(object)
            });
            
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
