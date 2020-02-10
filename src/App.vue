<template>
  <div id="app" class="container">
    <Timer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Timer from './components/Timer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Timer
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
