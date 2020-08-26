<template>
  <b-container inline id="centered">
    <b-row class="my-1">
      <label for="input-large">New Task</label>

      <b-form-input
        v-model="text"
        type="text"
        class="w-50"
        id="input-large"
        size="lg"
        placeholder="ToDo name"
        ></b-form-input>
      <b-button id="button" @click="emitToggleEvent">Add</b-button>
 
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  props: {
    task: String,
  },
  methods: {
    emitToggleEvent: function () {
      this.$emit("newToDoFromAddForm", (this.task = this.text));
      this.task = this.text;
      this.text = "";
    },
  },
};
</script>
<style>
label {
  font-size: 1.8em;
  padding-right: 10px;
}
#centered {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin: auto;
  width: 80%;
  border: 3px solid rgb(157, 160, 157);
  padding: 10px;
}
#button {
  margin-left: 10px;
}
</style>