<template>
    <div id="nav">
        <router-link to="/threejs"><span>Three.js</span></router-link>
        <router-link to="/babylonjs"><span>Babylon.js</span></router-link>
        <router-link to="/model-viewer"><span>&ltmodel-viewer&gt</span></router-link>
    </div>
</template>

<style scoped>
#nav {
  padding: 30px;
  position: absolute;
  top: 0;
}

#nav a {
  font-weight: bold;
  margin: 20px;
  color: #2c3e50;
  text-decoration: none;
}

#nav a:hover {
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>