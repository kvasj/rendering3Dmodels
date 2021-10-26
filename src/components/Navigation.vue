<template>
    <div id="nav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Three.js
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link :to="{ name: 'TorusKnotGeometry'}" class="dropdown-item"><span>Torus Knot Geometry</span></router-link></li>
            <li><router-link :to="{ name: '3DModel'}" class="dropdown-item"><span>3D model</span></router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Babylon.js
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/babylonjs" class="dropdown-item"><span>in progress</span></router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            &ltmodel-viewer&gt
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/model-viewer" class="dropdown-item"><span>in progress</span></router-link></li>
          </ul>
        </li>

      </ul>
    </div>
</template>

<style scoped>
#nav {
  margin: 20px;
  position: absolute;
  top: 0;
}

.navbar-nav{
  flex-direction: unset;
}

.nav-item{
  padding-right: 2rem;
}

.nav-link, .dropdown-item{
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

.nav-link:hover, .dropdown-item:hover{
  color: #42b983;
  background-color: transparent;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dropdown-menu{
  background-color: transparent;
  padding: 0px;
  border: none;
}

.dropdown-item{
}
</style>