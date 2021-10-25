<template>
</template>

<script>
import * as THREE from 'three'

export default {
    created () {
        return {
            cube: null,
            geometry: null,
            material: null,
            renderer: null,
            scene: null,
            camera: null
        }
    },
    methods: {
        init: function() {
            //init three.js scene, camera, renderer
			//---------------------------------------------------
			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			this.camera.position.z = 3;

			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( this.renderer.domElement );
			//---------------------------------------------------

			//make cube
			//---------------------------------------------------
			this.geometry = new THREE.BoxGeometry(1,1,1);
			this.material = new THREE.MeshBasicMaterial( { color: 0x156091 } );
			this.cube = new THREE.Mesh( this.geometry, this.material );
			//---------------------------------------------------
			//add cube to scene
			this.scene.add( this.cube );
            
        },

        animate: function() {
            requestAnimationFrame( this.animate );

			this.cube.rotation.x += 0.01;
			this.cube.rotation.y += 0.01;

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
