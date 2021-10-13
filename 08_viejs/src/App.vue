<template>
  <div id="app">
    <h1>Nova Poshta</h1>
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <div class="row">
      <div class="col-3">
        <NovaPoshta></NovaPoshta>
      </div>
      <div class="col-4">
        <NovaPoshtaCity></NovaPoshtaCity>
      </div>
    </div>

<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NovaPoshta from "./components/NovaPoshta";
import NovaPoshtaCity from "./components/NovaPoshtaCity";

export default {
  name: 'App',
  components: {
    NovaPoshta,
    // eslint-disable-next-line vue/no-unused-components
    NovaPoshtaCity
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
