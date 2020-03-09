<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "./components/Nav.vue";

export default Vue.extend({
  name: "App",
  components: {
    Nav
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
