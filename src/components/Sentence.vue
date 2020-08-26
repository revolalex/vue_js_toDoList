<template>
  <div>
    <p v-if="numberOfToDo() == numberOfToDoTrue()" id="timeToWork">
      <b-icon-emoji-angry class="iconRight"></b-icon-emoji-angry>
      It's time to start working you have {{numberOfToDoTrue()}} tasks to do !!
      <b-icon-emoji-angry class="iconLeft"></b-icon-emoji-angry>
    </p>

    <p v-else-if="numberOfToDoFalse() < halfNumberOfToDo()" id="continue">
      <b-icon-emoji-smile class="iconRight"></b-icon-emoji-smile>
      Continue that way and you will finish soon, still have {{numberOfToDoTrue()}}/{{numberOfToDo()}} tasks
      <b-icon-emoji-smile class="iconLeft"></b-icon-emoji-smile>
    </p>

    <p
      v-else-if="numberOfToDoFalse() >= halfNumberOfToDo() && numberOfToDoFalse() < numberOfToDo()"
      id="good"
    >
      <b-icon-emoji-laughing class="iconRight"></b-icon-emoji-laughing>
      Good !! you made half or more {{numberOfToDoTrue()}}/{{numberOfToDo()}} tasks
      <b-icon-emoji-laughing class="iconLeft"></b-icon-emoji-laughing>
    </p>

    <p v-if="numberOfToDo() === numberOfToDoFalse()" id="congratulation">
      <b-icon-emoji-sunglasses class="iconRight"></b-icon-emoji-sunglasses>
      Congratulation !! You finished all the {{numberOfToDo()}} tasks
      <b-icon-emoji-sunglasses class="iconLeft"></b-icon-emoji-sunglasses>
    </p>

  </div>
</template>
<script>
export default {
  name: "Sentence",
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    numberOfToDo: function () {
      return this.list.length;
    },
    numberOfToDoTrue: function () {
      let toDoTrue = 0;
      this.list.forEach((element) => {
        if (element.todo) {
          toDoTrue++;
        }
      });
      return toDoTrue;
    },
    halfNumberOfToDo: function () {
      return this.list.length / 2;
    },
    numberOfToDoFalse: function () {
      let toDoFalse = 0;
      this.list.forEach((element) => {
        if (element.todo == false) {
          toDoFalse++;
        }
      });
      return toDoFalse;
    },
  },
};
</script>
<style>
#timeToWork {
  color: red;
}
#continue {
  color: orange;
}
#good {
  color: rgb(111, 214, 111);
}
#congratulation {
  color: rgb(5, 160, 26);
}
.iconRight {
  padding-right: 2em;
}
.iconLeft {
  padding-left: 1em;
}
</style>