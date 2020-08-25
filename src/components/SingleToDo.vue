<template>
  <div @click="emitToggleEvent">
    <p>
      <b-icon icon="check2-circle"></b-icon>
      <b-icon icon="check-circle-fill"></b-icon>
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
.doneIcon {
  display: none;
}
</style>