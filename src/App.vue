<template>
  <WeatherApp />
</template>

<script>
import WeatherApp from './components/WeatherApp.vue'

export default {
  name: 'App',
  components: {
    WeatherApp,
  }
}
</script>

<style>

body {
  height:100vh;
  width:100vw;
  background:linear-gradient(175deg, #411510, #411530 60%, white 60%, white);
  overflow-y: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  z-index: -10;
}

</style>
