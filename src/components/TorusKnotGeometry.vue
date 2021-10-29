<template>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
    created () {
        window.addEventListener("resize", this.onWindowResize);
        return {
            mesh: null,
            geometry: null,
            material: null,
            renderer: null,
            scene: null,
            camera: null,
            ambientLight: null,
            pointLightRED: null,
            pointLightGREEN: null,
            pointLightBLUE: null,
            pointLightYELLOW: null,
            pointLightHelper: null,
            controls: null,
            sphere: null,
        }
    },
    methods: {
        init: function() {
            //init three.js scene, camera, renderer
			//---------------------------------------------------
			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			this.camera.position.z = 8;
            
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio)
			document.body.appendChild(this.renderer.domElement);

            //controls
            //---------------------------------------------------
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);

			//---------------------------------------------------
            //make light
            //---------------------------------------------------

            this.ambientLight = new THREE.AmbientLight(0x404040, 0.3);
            this.scene.add(this.ambientLight)

            this.sphere = new THREE.SphereGeometry(0.1, 32, 16);

            this.pointLightRED = new THREE.PointLight(0xff0040, 2, 50);
			this.pointLightRED.add(new THREE.Mesh(this.sphere, new THREE.MeshBasicMaterial({ color: 0xff0000 })));
			this.scene.add(this.pointLightRED);

			this.pointLightGREEN = new THREE.PointLight(0x0040ff, 2, 50);
			this.pointLightGREEN.add(new THREE.Mesh(this.sphere, new THREE.MeshBasicMaterial({ color: 0x00ff00 })));
			this.scene.add(this.pointLightGREEN);

			this.pointLightBLUE = new THREE.PointLight(0x80ff80, 2, 50);
			this.pointLightBLUE.add(new THREE.Mesh(this.sphere, new THREE.MeshBasicMaterial({ color: 0x0000ff })));
			this.scene.add(this.pointLightBLUE);

			this.pointLightYELLOW = new THREE.PointLight(0xffaa00, 2, 50);
			this.pointLightYELLOW.add(new THREE.Mesh(this.sphere, new THREE.MeshBasicMaterial({ color: 0xffff00 })));
			this.scene.add(this.pointLightYELLOW);

			//make mesh
			//---------------------------------------------------
			this.geometry = new THREE.TorusKnotGeometry( 10, 3, 170, 20 );
			this.material = new THREE.MeshPhysicalMaterial({ color: 0xFFFFFF, wireframe: true });
			this.mesh = new THREE.Mesh(this.geometry, this.material);
			//---------------------------------------------------
			//add mesh to scene
			this.scene.add(this.mesh);
            //this.renderer.render(this.scene, this.camera);
        },

        animate: function() {
            requestAnimationFrame(this.animate);
            this.render();
        },

        render: function() {
            this.mesh.rotation.y += 0.002;

            const time = Date.now() * 0.0009;

			this.pointLightRED.position.x = Math.sin(time * 0.5) * 30;
			this.pointLightRED.position.y = Math.cos(time * 0.3) * 30;
			this.pointLightRED.position.z = Math.cos(time * 0.7) * 30;

			this.pointLightGREEN.position.x = Math.cos(time * 0.3) * 30;
			this.pointLightGREEN.position.y = Math.sin(time * 0.7) * 30;
			this.pointLightGREEN.position.z = Math.sin(time * 0.5) * 30;

			this.pointLightBLUE.position.x = Math.sin(time * 0.5) * 30;
			this.pointLightBLUE.position.y = Math.cos(time * 0.5) * 30;
			this.pointLightBLUE.position.z = Math.sin(time * 0.5) * 30;

			this.pointLightYELLOW.position.x = Math.cos(time * 0.3) * 30;
			this.pointLightYELLOW.position.y = Math.sin(time * 0.5) * 30;
			this.pointLightYELLOW.position.z = Math.cos(time * 0.3) * 30;
            
            this.controls.update()

		    this.renderer.render(this.scene, this.camera);
        },

        onWindowResize: function() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();

			this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio)
		},
        
        destroyed () {
            console.log('skull destroyed');
        },
    },

    mounted() {
        this.init()
        this.animate()
    }
}
</script>

<style scoped>

</style>
