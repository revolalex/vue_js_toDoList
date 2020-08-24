<template>
  <div>
    <ul>
      <!-- <li v-for="element in list" v-bind:list= "list.value">{{ element.name }}</li> -->
      <li v-for="(to_do, x) in list" :key="x">
          <p>{{ to_do.name }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "ListToDo",
  props: {
    list: {
      type: Array,
    },
  },
};
</script>
