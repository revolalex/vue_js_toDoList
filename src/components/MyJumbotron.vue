<template>
  <div class="jumbotron jumbotron-fluid" id="center">
    <h1 class="display-4">ToDo List</h1>
    <p class="lead">New Features we will have to done for this project</p>
    <hr class="my-4" />
    <p>Easy to use, we created this web app just for you !</p>
    <hr class="my-4" />
  </div>
</template>

<script>

export default {
  name: 'MyJumbotron',
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style>
#center {
  text-align: center;
}
</style>
