<template>
  <div id="app">
    <MyJumbotron v-bind:list="list">
      <ListToDo>
        
      </ListToDo>
    </MyJumbotron>
  </div>
</template>

<script>
import MyJumbotron from "./components/MyJumbotron";
import ListToDo from "./components/ListToDo";
export default {
  name: "App",
  components: {
    MyJumbotron,
    ListToDo,
  },
  data: function () {
    return {
      list: [
        { id: 0, name: "Ecrire le sujet", todo: true },
        { id: 1, name: "Faire le sujet", todo: true },
        { id: 2, name: "Vendre le sujet", todo: true },
        { id: 3, name: "Partir en vacance", todo: true },
      ],
    };
  },
};
</script>

<style>
</style>