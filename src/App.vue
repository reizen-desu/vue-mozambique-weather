<template>
  <WeatherApp />
</template>

<script>
import WeatherApp from "./components/WeatherApp.vue";

export default {
  name: "App",
  components: {
    WeatherApp,
  },
};
</script>

<style>
html {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(175deg, #411510, #411530 60%, white 60%, white);
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
