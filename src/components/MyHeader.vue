<template>
  <div>
    <b-navbar id="color" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">To Do List</b-navbar-brand>
      <b-nav-item>
        <router-link to="/new">New</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link  to="/todo">Todo</router-link>
      </b-nav-item>
      <b-nav-item >
        <router-link  to="/done">Done</router-link>
      </b-nav-item>
      <b-nav-item >
        <router-link to="/list">List</router-link>
      </b-nav-item>
    </b-navbar>
    
  </div>
</template>
<script>
// const axios = require("axios").default;

export default {
  name: "MyHeader",
};

</script>
<style>
#color {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>