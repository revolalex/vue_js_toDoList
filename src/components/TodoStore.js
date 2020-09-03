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
    let index = state.list.findIndex(element => element.id === id)
    state.list[index].todo = !state.list[index].todo;
  },
  DELETE_TASK: (state, id) => {
    let index = state.list.findIndex(element => element.id === id)
    state.list.splice(index, 1)
  },
};

// GETTERS
const getters = {
  TASK_TO_DISPLAY: (state) => (whatToDisplay) => {
    if (whatToDisplay === "all") {
      return state.list;
    } else if (whatToDisplay === "done") {
      return state.list.filter((element) => element.todo === false);
    } else if (whatToDisplay === "todo"){
      return state.list.filter((element) => element.todo === true);
    }
  },
};

// ACTIONS
const actions = {
  GET_LIST: (context, allToDO) => {
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
