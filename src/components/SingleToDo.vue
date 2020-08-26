<template>
  <div>
    <p @click="emitToggleEvent" v-bind:class="{done : !to_do.todo}">
      
      <b-icon icon="check2-circle" v-if="to_do.todo"></b-icon>
      <b-icon icon="check-circle-fill" v-else></b-icon>
      {{ to_do.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SingleToDo",
  props: {
    to_do: Object,
  },
  methods: {
    emitToggleEvent: function () {
      this.$emit("clickFromSingle", {to_do: this.to_do})
    },
  },
  
};
</script>
<style>
.done {
  text-decoration: line-through;
}

</style>