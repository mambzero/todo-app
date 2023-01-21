<template>
  <div class="container my-3">
    <h1 class="text-center my-3">Todo App</h1>
    <div class="my-3">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="input-group">
            <input v-model="todoText" placeholder="Todo Text" class="form-control">
            <div class="input-group-append">
              <button @click="saveTodo" class="btn btn-primary">
                {{ editTodoId ? 'Save' : 'Add' }}
              </button>
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
            <button @click="editTodo(todo)" class="btn btn-secondary ml-auto mr-2">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="removeTodo(todo.id)" class="btn btn-danger">
              <i class="fas fa-trash"></i>
            </button>
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
      todoText: null,
      todos: [
        { id: 1, text: 'Learn Vue' },
        { id: 2, text: 'Build a Todo app' },
      ],
      nextTodoId: 3,
      editTodoId: null
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.nextTodoId,
        text: this.todoText,
      });
      this.todoText = null;
      this.nextTodoId++;
    },
    editTodo(todo) {
      this.editTodoId = todo.id;
      this.todoText = todo.text;
    },
    updateTodo() {
      let todo = this.todos.find((todo) => todo.id === this.editTodoId);
      todo.text = this.todoText;
      this.todoText = null;
      this.editTodoId = null;
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    saveTodo() {
      if (!this.todoText) return // check if todoText is empty
      return this.editTodoId 
        ? this.updateTodo()
        : this.addTodo();
    }
  },
}
</script>

<style>
  body {
    background-color: #f5f5f5;
  }
</style>
