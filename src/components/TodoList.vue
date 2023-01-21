<template>
  <div class="container my-3">
    <h1 class="text-center my-3">Todo App</h1>
    <div class="my-3">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="input-group">
            <input v-model="newTodo" placeholder="Add Todo" class="form-control">
            <div class="input-group-append">
              <button @click="addTodo" class="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="todo in todos" :key="todo.id">
        <div class="card my-3">
          <div class="card-body d-flex justify-content-between">
            <p>{{ todo.text }}</p>
            <button @click="removeTodo(todo.id)" class="btn btn-danger">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: 1, text: 'Learn Vue' },
        { id: 2, text: 'Build a to-do app' },
      ],
      nextTodoId: 3,
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return // check if newTodo is empty
      this.todos.push({
        id: this.nextTodoId,
        text: this.newTodo,
      });
      this.newTodo = '';
      this.nextTodoId++;
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },
}
</script>

<style>
  body {
    background-color: #f5f5f5;
  }
</style>
