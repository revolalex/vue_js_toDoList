<template>
  <div class="jumbotron jumbotron-fluid" id="center">
    <h1 class="display-4">ToDo List</h1>
    <p class="lead">New Features we will have to done for this project</p>
    <hr class="my-4" />
    <p>Easy to use, we created this web app just for you !</p>
    <Sentence v-bind:list="list"></Sentence>
    <hr class="my-4" />
    <ListToDo v-on:clickFromList="onChildClick" @clickFromList="toEmit3" v-bind:list="list"></ListToDo>
    <AddForm v-on:newToDoFromAddForm="addWasClick" @newToDoFromAddForm="newToDoJumbo"></AddForm>
  </div>
</template>

<script>
import ListToDo from "./ListToDo";
import AddForm from "./AddForm";
import Sentence from "./Sentence";
export default {
  name: "MyJumbotron",
  props: {
    list: {
      type: Array,
    },
    to_do: Object,
    task: String
  },
  components: {
    ListToDo,
    AddForm,
    Sentence,
  },
  methods: {
    onChildClick: function (value) {
      this.to_do = value;
    },
    toEmit3: function () {
      this.$emit("clickFromJumbo", this.to_do);
    },
    addWasClick: function(value){
      this.task = value;
    },
    newToDoJumbo: function(){
      this.$emit("newToDoFromJumbo", this.task);
    }
  },
};
</script>

<style>
#center {
  text-align: center;
}
</style>
