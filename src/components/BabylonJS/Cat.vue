<template>
    <canvas id="canvas"></canvas>
</template>

<script>
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export default {
    created () {
        window.addEventListener("resize", this.onWindowResize);
        return {
            engine: null,
            scene: null,
            camera: null,
            light: null,
            sphere: null,
            ground: null,
        }
    },

    methods: {
        init: function() {
            //init babylonjs scene, camera, renderer
			//---------------------------------------------------

            var canvas = document.getElementById('canvas');
            // Load the 3D engine
            var engine = new BABYLON.Engine(canvas, true);
            // CreateScene function that creates and return the scene

            // Create a basic BJS Scene object
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera('camera', 0, 1.2 , 10, new BABYLON.Vector3(0, 0, 200), scene);
            // Target the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());
            // Attach the camera to the canvas
            camera.attachControl(canvas, false);

            scene.ambientColor = BABYLON.Color3.White();
                                                //skull
            BABYLON.SceneLoader.Append("/models/Cat/", "Cat.obj", scene, function (scene){});
            BABYLON.SceneLoader.ShowLoadingScreen = false;

            // run the render loop
            engine.runRenderLoop(function(){
                scene.render();
            });
        },

        animate: function() {
            requestAnimationFrame(this.animate);
            this.render();
        },

        render: function() {
            // run the render loop
            /*if(this.scene){
                this.engine.runRenderLoop(function(){              
                    this.scene.render();
                });
            }*/
        },

        onWindowResize: function() {
			//this.engine.resize();
		},
        
    },

    mounted() {
        this.init()
        //this.animate()
    }
}
</script>

<style scoped>

</style>
