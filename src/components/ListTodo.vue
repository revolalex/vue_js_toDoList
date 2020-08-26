<template>
  <div>
    <ul>
      <li v-for="to_do in list" :key="to_do.id">
        <SingleToDo v-on:clickFromSingle="onChildClick" @clickFromSingle="toEmit2" v-bind:to_do="to_do"></SingleToDo>
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
    to_do: Object,
  },
  components: {
    SingleToDo,
  },
  methods: {
    onChildClick: function(value){
      this.to_do = value
    },
    toEmit2: function () {
      this.$emit("clickFromList", this.to_do)
    },
    
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
