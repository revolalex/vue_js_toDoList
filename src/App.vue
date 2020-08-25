<template>
  <div id="app">
    <MyJumbotron @:clickFromJumbo="listCliked" v-bind:list="list"></MyJumbotron>
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
    };
  },
  methods: {
    listCliked: function () {
      console.log("succes");
      event.target.classList.toggle("done");
      event.target.icon.toggle("check-circle-fill");
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
.doneIcon {
  display: none;
}
</style>