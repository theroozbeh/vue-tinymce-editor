<template>
  <div id="app">
    <img src="./assets/logo.png">
    <tinymce id="d1" v-model="data"></tinymce>
    <div>{{ data }}</div>
  </div>
</template>

<script>
import tinymce from './components/TinymceVue'

export default {
  name: 'app',
  components: {
    tinymce
  },
  data(){
      return {
          data : 'Hello from tinymce'
      };
      
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
