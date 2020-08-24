<template>
  <div id="app">
    <MyJumbotron></MyJumbotron>
  </div>
  
</template>

<script>
import MyJumbotron from './components/MyJumbotron'
export default {
  name: 'App',
  data: function() {
    return {
      list: [
      {id: 0, name: "Ecrire le sujet", todo: true},
      {id: 1, name: "Faire le sujet", todo: true},
      {id: 2, name: "Vendre le sujet", todo: true},
      {id: 3, name: "Partir en vacance", todo: true},
      ]
    }
  },
  components: {
    MyJumbotron
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>