<template>
  <div id="app">
    <MyJumbotron
      v-on:clickFromJumbo="onChildClick"
      @:clickFromJumbo="listClicked"
      v-bind:list="list"
      v-on:newToDoFromJumbo="newToDo"
    ></MyJumbotron>
  </div>
</template>

<script>
import MyJumbotron from "./components/MyJumbotron";

export default {
  name: "App",
  components: {
    MyJumbotron,
  },
  data: function () {
    return {
      list: [
        { id: 0, name: "Ecrire le sujet", todo: true },
        { id: 1, name: "Faire le sujet", todo: true },
        { id: 2, name: "Vendre le sujet", todo: true },
        { id: 3, name: "Partir en vacance", todo: true },
      ],
      to_do: Object,
      task: String,
    };
  },

  methods: {
    onChildClick: function (value) {
      this.to_do = value;
      this.to_do.to_do.todo = !this.to_do.to_do.todo;
    },
    newToDo: function (value) {
      this.task = value;
      this.list.push({id: this.list.length, name: this.task, todo: true})
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>