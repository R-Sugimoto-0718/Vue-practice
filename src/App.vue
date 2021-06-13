<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-for="(todo, index) in todos" :key="index.id">
      <h1>{{ todo.id }}</h1>
      <h1>user_id is :{{ todo.id }}</h1>
      <h2>title is: {{ todo.title }}</h2>
    </div>
    <button @click="clickButton()">ボタン</button>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data: function() {
    return {
      todos: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          userId: "1",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.$store.dispatch("fetchTodoData", res.data);
        res.todos = res.data;
      })
      .catch((err) => {
        console.error("error is ", err);
      });
  },
  methods: {
    clickButton() {
      console.log(this.fetchData, "00000");
      this.todos = this.fetchData;
      console.log("clicled!!");
    },
  },
  computed: {
    ...mapGetters(["fetchData"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
