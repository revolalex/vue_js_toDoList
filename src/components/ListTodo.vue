<template>
  <div>
    <ul>
      <li v-for="to_do in list" :key="to_do.id">
        <SingleToDo v-on:idOfToDoClick="taskWasClick" v-bind:to_do="to_do"></SingleToDo>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from "axios";
import SingleToDo from "./SingleToDo";
export default {
  name: "ListToDo",

  props: {
    whatToDisplay: String,
  },

  components: {
    SingleToDo,
  },
  data: function () {
    return {
      list: [],
    };
  },
  methods: {
    taskWasClick(id) {
      let targetTask = this.list.filter((element) => element.id == id);
      targetTask.todo = !targetTask.todo;
      axios.put(`http://localhost:8081/todo/${id}`);
    },
  },

  updated() {
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
li {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  align-content: center;
}
</style>
