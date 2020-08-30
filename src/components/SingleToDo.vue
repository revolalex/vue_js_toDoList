<template>
  <div>

    <p @click="emitToggleEvent" v-bind:class="{done : !to_do.todo}">
      <b-icon icon="check2-circle" v-if="to_do.todo"></b-icon>
      <b-icon icon="check-circle-fill" v-else></b-icon>
      {{ to_do.name }}
      <b-icon @click="emitDelete" id="trash" icon="trash"></b-icon>
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
      this.$emit("idOfToDoClick", this.to_do.id);
    },
    emitDelete: function () {
      this.$emit("idOfDeleted", this.to_do.id);
    },
  },
};
</script>
<style>
.done {
  text-decoration: line-through;
}
#trash {
  margin-right: 9vh;
}
.fade-enter-active {
  transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1),
    color 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-leave-active {
  transition: transform 0.5s cubic-bezier(1, 0.5, 0.8, 1),
    color 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter {
  color: rgb(170, 170, 170);
  transform: translateX(100px);
}
.fade-leave-to {
  transform: translateX(100px);
  color: rgb(170, 170, 170);
}
</style>