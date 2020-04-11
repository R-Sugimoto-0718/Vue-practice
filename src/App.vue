<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Button></Button>
  </div>
</template>

<script>
import Button from './components/button.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Button
  },
  created() {
    let res = this
    axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: {
        userId: '1'
      }
    }).then(res => {
      res.todos = res.data
    }).catch(err => {
      console.error('error');
      res.error = err
    })
  }
}
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
