<template>
  <div id="app">
    <MyJumbotron v-on:idOfToDoClick="taskWasClick" v-bind:list="list" v-on:newToDoFromJumbo="newToDo"></MyJumbotron>
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
      taskClick: Number,
    };
  },

  methods: {
    taskWasClick(id) {
      this.taskClick = id;
      this.list[id].todo = !this.list[id].todo;
    },
    newToDo: function (value) {
      this.task = value;
      if (this.task.length > 0) {
        this.list.push({ id: this.list.length, name: this.task, todo: true });
      } else {
        window.alert("Merci de saisir une New Task");
      }
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>