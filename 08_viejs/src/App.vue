<template>
  <div id="app">
<!--    <h1>Nova Poshta</h1>-->
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <EntityList></EntityList>-->
<!--    <div class="row">
      <div class="col-3">
        <NovaPoshta></NovaPoshta>
      </div>
      <div class="col-4">
        <NovaPoshtaCity></NovaPoshtaCity>
      </div>
    </div>-->
    <HelloWorld></HelloWorld>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import NovaPoshta from "./components/NovaPoshta";
//import NovaPoshtaCity from "./components/NovaPoshtaCity";
import EntityList from "@/components/entity/EntityList";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    EntityList,
    //NovaPoshta,
    // eslint-disable-next-line vue/no-unused-components
    //NovaPoshtaCity,
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
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
