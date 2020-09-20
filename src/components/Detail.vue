<template>
  <div>
    <!-- Detail of Todo -->
    <!-- Using value -->
    <b-button
      id="button"
      v-b-toggle="'collapse-2'"
      class="m-1"
      v-b-popover.hover.bottom="'press to see your database'"
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
export default {
  name: "Detail",
  data: function () {
    return {
      perPage: 3,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.list.length;
    },
    list() {
      return this.$store.state.list;
    },
  },
};
</script>