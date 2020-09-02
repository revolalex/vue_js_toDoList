<template>
  <div id="app">
    <MyJumbotron v-bind:list="list"></MyJumbotron>
  </div>
</template>

<script>
import MyJumbotron from "./components/MyJumbotron";
import axios from "axios";

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
  beforeMount() {
    axios.get("http://localhost:8081/todo/").then((response) => {
      console.log(response.data);
      this.$store.dispatch("GET_LIST", response.data);
    });
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>