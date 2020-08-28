<template>
  <div>
    <h3>{{ newTask }}</h3>
    <b-container inline id="centered">
      <b-row class="my-1">
        <label for="input-large">New Task</label>
        <b-form-input
          v-model="newTask"
          type="text"
          class="w-50"
          id="input-large"
          size="lg"
          placeholder="ToDo name"
          @keyup.enter="newToDo()"
        ></b-form-input>
        <b-button id="button" @click="newToDo">Add</b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newTask: "",
      task: String,
      list: [],
    };
  },

  methods: {
    newToDo() {
      // date en string FR
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      var today = new Date();
      this.task = this.newTask;
      let todoToAdd = {
        id: this.list.length,
        name: this.task,
        createdAt: today.toLocaleDateString("fr-FR", options),
        todo: true,
      };
      if (this.task.length > 0) {
        this.list.push(todoToAdd);
        console.log(todoToAdd);
        // add the todo to the collection
        axios.post("http://localhost:8081/todo/", todoToAdd);
        this.newTask = "";
      } else {
        window.alert("Merci de saisir une New Task");
      }
    },
  },
  mounted() {
    axios.get("http://localhost:8081/todo/").then((response) => {
      this.list = response.data;
    });
  },
};
</script>
<style>
label {
  font-size: 1.8em;
  padding-right: 10px;
}
#centered {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin: auto;
  width: 80%;
  border: 3px solid rgb(157, 160, 157);
  padding: 10px;
}
#button {
  margin-left: 10px;
}
</style>