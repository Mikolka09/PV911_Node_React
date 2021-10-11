<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <NovaPoshta></NovaPoshta>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NovaPoshta from "@/components/NovaPoshta";

export default {
  name: 'App',
  components: {
    NovaPoshta
   // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
