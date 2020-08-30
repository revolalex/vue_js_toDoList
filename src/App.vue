<template>
  <div id="app">
    <MyJumbotron v-bind:list="list"></MyJumbotron>
  </div>
</template>

<script>
// import axios from "axios";
import MyJumbotron from "./components/MyJumbotron";

export default {
  name: "App",
  components: {
    MyJumbotron,
  },
  data: function () {
    return {
      list: [],
    };
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>