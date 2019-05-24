<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->

    <div id="myMap"></div>
  </div>
</template>
<script>
import esri from "./toprs/esri";
export default {
  mounted() {
    esri.init().then(() => {
      let map = new esri.Map("myMap");
      let layer = new esri.ArcGISDynamicMapServiceLayer(
        "http://218.241.213.230:6080/arcgis/rest/services/nhIMG/IMG99/MapServer"
      );
      map.addLayer(layer);
    });
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#myMap {
  height: 100vh;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
