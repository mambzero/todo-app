<template>
  <div id="app">
    <Logo />
    <TodoList />
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    Logo,
    TodoList
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
