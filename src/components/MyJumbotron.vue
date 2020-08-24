<template>
  <div class="jumbotron jumbotron-fluid" id="center">
    <h1 class="display-4">ToDo List</h1>
    <p class="lead">New Features we will have to done for this project</p>
    <hr class="my-4" />
    <p>Easy to use, we created this web app just for you !</p>
    <hr class="my-4" />
    <ListToDo v-bind:list="list"></ListToDo>
  </div>
</template>

<script>
import ListToDo from "./ListToDo";
export default {
  name: "MyJumbotron",
  props: {
    list: {
      type: Array,
    },
  },
  components: {
    ListToDo,
  },
};
</script>

<style>
#center {
  text-align: center;
}
</style>
