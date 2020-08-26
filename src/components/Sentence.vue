<template>
  <div>
    <p>It's time to start working you have x tasks to do !!</p>
    <p>Continue that way and you will finish soon, still have x/y tasks</p>
    <p>Good !! you made half or more x/y tasks</p>
    <p>Congratulation !! You finished all the x tasks</p>
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
};
</script>