<template>
  <div>
    <!-- List ToDo -->
    <ul>
      <transition-group name="fade" tag="ul">
        <li v-for="to_do in list" :key="to_do.id">
          <SingleToDo
            v-on:idOfDeleted="deleteTask"
            v-on:idOfToDoClick="taskWasClick"
            v-bind:to_do="to_do"
          ></SingleToDo>
        </li>
      </transition-group>
    </ul>

    <!-- Detail of Todo -->
    <!-- Using value -->
    <b-button
      id="button"
      v-b-toggle="'collapse-2'"
      class="m-1"
      v-b-popover.hover.right="'press to see your database'"
      title="Show database"
    >See détail of ToDo</b-button>
    <!-- Element to collapse -->
    <b-collapse id="collapse-2">
      <b-pagination
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <b-table id="my-table" :items="list" :per-page="perPage" :current-page="currentPage" large></b-table>
    </b-collapse>
  </div>
</template>

<script>
import axios from "axios";
import SingleToDo from "./SingleToDo";
export default {
  name: "ListToDo",

  props: {
    whatToDisplay: String,
  },

  components: {
    SingleToDo,
  },
  data: function () {
    return {
      list: [],
      perPage: 3,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.list.length;
    },
  },

  methods: {
    taskWasClick(id) {
      let targetTask = this.list.filter((element) => element.id == id);
      targetTask.todo = !targetTask.todo;
      axios.put(`http://localhost:8081/todo/${id}`);
    },
    deleteTask(id) {
      axios.delete(`http://localhost:8081/todo/${id}`);
      axios.put(`http://localhost:8081/todo/delete/${id}`);

      //en cours
    },
  },

  beforeUpdated() {
    axios.get("http://localhost:8081/todo/").then((response) => {
      if (this.whatToDisplay == "done") {
        this.list = response.data.filter((element) => !element.todo);
      } else if (this.whatToDisplay == "all") {
        this.list  = response.data.filter((element) => element.name);
      } else if (this.whatToDisplay == "todo") {
        this.list  = response.data.filter((element) => element.todo);
      }

    });
  },

  mounted() {
    axios.get("http://localhost:8081/todo/").then((response) => {
      if (this.whatToDisplay == "done") {
        response.data = response.data.filter((element) => !element.todo);
      } else if (this.whatToDisplay == "all") {
        response.data = response.data.filter((element) => element.name);
      } else if (this.whatToDisplay == "todo") {
        response.data = response.data.filter((element) => element.todo);
      }
      this.list = response.data;
    });
  },
};
</script>
<style>
body {
  background-color: rgb(235, 235, 235);
}
li {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  align-content: center;
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
