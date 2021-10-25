<template>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
    created () {
        return {
            cube: null,
            geometry: null,
            material: null,
            renderer: null,
            scene: null,
            camera: null,
            ambientLight: null,
            pointLight: null,
            pointLightHelper: null,
            controls: null,
        }
    },
    methods: {
        init: function() {
            //init three.js scene, camera, renderer
			//---------------------------------------------------
			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			this.camera.position.z = 8;

			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
            this.renderer.setPixelRatio( window.devicePixelRatio )
			document.body.appendChild( this.renderer.domElement );
            //controls
            //---------------------------------------------------
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);

			//---------------------------------------------------
            //make light
            //---------------------------------------------------
            this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            this.scene.add(this.ambientLight);
            this.pointLight = new THREE.PointLight(0xffffff, 0.5);
            this.pointLight.position.set(3, 0, 0);
            this.pointLightHelper = new THREE.PointLightHelper( this.pointLight, 0.1 );
            this.scene.add( this.pointLightHelper );
            this.scene.add(this.pointLight)
			//make cube
			//---------------------------------------------------
			this.geometry = new THREE.BoxGeometry(2, 2, 2);
			this.material = new THREE.MeshPhongMaterial( { color: 0xF3FFE2 } );
			this.cube = new THREE.Mesh( this.geometry, this.material );
			//---------------------------------------------------
			//add cube to scene
			this.scene.add( this.cube );
            
            //this.renderer.render( this.scene, this.camera );
        },

        animate: function() {
            requestAnimationFrame( this.animate );

			
            this.cube.rotation.x += 0.01;
			this.cube.rotation.y += 0.01;
            this.cube.rotation.z += 0.01;
            
            this.controls.update()

		    this.renderer.render( this.scene, this.camera );
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
