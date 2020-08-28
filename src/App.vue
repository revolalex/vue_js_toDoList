<template>
  <div id="app">
    <MyJumbotron v-bind:list="list"></MyJumbotron>
  </div>
</template>

<script>
import axios from "axios";
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
  mounted() {
    axios.get("http://localhost:8081/todo/").then((response) => {
      if (this.whatToDisplay == "done") {
        response.data = response.data.filter((element) => !element.todo);
      } else if (this.whatToDisplay == "all") {
        response.data = response.data.filter((element) => element.name);
      } else if (this.whatToDisplay == "todo") {
        response.data = response.data.filter((element) => element.todo);
      }
      this.list = response.data;
    });
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>