<template>
  <div id="app">
    <MyJumbotron></MyJumbotron>
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
  async beforeMount() {
    console.log("coucou");
    await axios.get("http://localhost:8081/todo/").then((response) => {
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