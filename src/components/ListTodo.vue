<template>
  <div>
    <ul>
      <li v-for="to_do in list" :key="to_do.id">
        <SingleToDo v-bind:to_do="to_do"></SingleToDo>
      </li>
    </ul>
  </div>
</template>


<script>
import SingleToDo from "./SingleToDo";
export default {
  name: "ListToDo",
  props: {
    list: {
      type: Array,
    },

  },
  components: {
    SingleToDo,
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
