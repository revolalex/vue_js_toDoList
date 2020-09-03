<template>
  <div>
    <br>
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
        <b-button
          id="button"
          @click="newToDo"
          v-b-popover.hover.right="'type a toDo'"
          title="Add a toDo"
        >Add</b-button>
      </b-row>
    </b-container>
    
    <br />
    <br />

    <div>
      <b-button
        v-b-toggle.sidebar-right
        v-b-popover.hover.bottom="'Click Here to read the documentaion'"
        title="Information"
      >About</b-button>
      <b-sidebar id="sidebar-right" title="About" right shadow>
        <div class="px-3 py-2">
          <p class="aboutText">This ToDoList is a full stack project with vue.js</p>
          <p>Use the navBar for:</p>
          <ul class="listAbout">
            <li>Todo => All toDo</li>
            <li>Done => All done toDos</li>
            <li>List => All toDos</li>
          </ul>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          <p class="aboutText">What you can do:</p>
          <ul class="listAbout">
            <li>Add a new toDo</li>
            <li>Change the status of the toDos (done or not)</li>
            <li>Delete a toDo</li>
            <li>See you toDos like in database</li>
          </ul>
        </div>
      </b-sidebar>
    </div>
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
        // add the todo in store 
        this.$store.dispatch("ADD_TODO", todoToAdd);
        // clear the input
        this.newTask = "";
      } else {
        window.alert("Merci de saisir une New Task");
      }
    },
  },
  // mounted() {
  //   axios.get("http://localhost:8081/todo/").then((response) => {
  //     this.list = response.data;
  //   });
  // },
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
  width: 60%;
  border: 3px solid rgb(157, 160, 157);
  padding: 10px;
}
#button {
  padding-left: 10px;
}
.aboutText {
  text-decoration: underline;
}

@media screen and (max-width: 640px) {
  #centered {
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    margin: auto;
    width: 450px;
    border: 3px solid rgb(157, 160, 157);
    padding: 10px;
  }
}
</style>