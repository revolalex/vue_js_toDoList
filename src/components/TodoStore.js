import "es6-promise/auto";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// STATE
let state = {
  list: [],
};

// MUTATIONS
const mutations = {
  GET_ALL_TODO: (state, allToDO) => {
    state.list = allToDO;
  },
  ADD_NEW_TODO: (state, newTask) => {
    state.list.push(newTask);
  },
  UPDATE_BOOLEAN: (state, id) => {
    state.list[id].todo = !state.list[id].todo;
  },
  DELETE_TASK: (state, id) => {
    state.list[id];
  },
};

// GETTERS
const getters = {
  TASK_TO_DISPLAY: (state) => (toDisplay) => {
    if (toDisplay === "all") {
      return state.list;
    } else if (toDisplay === "done") {
      return state.list.filter((element) => element.todo === false);
    } else {
      return state.list.filter((element) => element.todo === true);
    }
  },
};

// ACTIONS
const actions = {
  GET_LIST: (context, allToDO) => {
    console.log(allToDO);
    context.commit("GET_ALL_TODO", allToDO);
  },
  ADD_TODO: (context, newTask) => {
    context.commit("ADD_NEW_TODO", newTask);
  },
  CHANGE_STATUT: (context, id) => {
    context.commit("UPDATE_BOOLEAN", id);
  },
  DELETE_TODO: (context, id) => {
    context.commit("DELETE_TASK", id);
  },
};

// STORE
let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
});

global.store = store;
export default store;
