<template>
  <div>
    <MyHeader />
    <div class="jumbotron jumbotron-fluid" id="center">
      <h1 class="display-4">ToDo List</h1>
      <p class="lead">New Features we will have to done for this project</p>
      <hr class="my-4" />
      <p>Easy to use, we created this web app just for you !</p>
      <Sentence />
      <hr class="my-4" />
      
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
      <br>
      <Detail></Detail>
    </div>
  </div>
</template>

<script>
import Sentence from "./Sentence";
import MyHeader from "./MyHeader";
import Detail from "./Detail";
// import axios from 'axios'
export default {
  name: "MyJumbotron",

  components: {
    Sentence,
    MyHeader,
    Detail,
  },
};
</script>

<style>
#center {
  text-align: center;
}
</style>
