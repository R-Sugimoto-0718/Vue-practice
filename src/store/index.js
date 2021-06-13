import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    fetchTodoData(state, payload) {
      console.log(payload, "mutations");
      state.todos = payload;
    },
  },
  actions: {
    async fetchTodoData(context, payload) {
      console.log(payload, "actions");
      await context.commit("fetchTodoData", payload);
    },
  },
  getters: {
    fetchData(state) {
      console.log("getters");
      return state.todos;
    },
  },
});

export default store;
