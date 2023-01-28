<template>
  <div class="container my-4">
    <h1 class="text-center my-3">Todo App</h1>
    <div class="my-3">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="input-group">
            <input v-model="todo.text" @keyup.enter="saveTodo(todo)" @keyup.esc="clearInput" ref="todoInput" placeholder="Todo Text" class="form-control">
            <div class="input-group-append">
              <button v-if="showClearButton" @click="clearInput" class="btn btn-secondary">
                <i class="fas fa-times"></i>
              </button>
              <button @click="saveTodo(todo)" class="btn btn-primary">{{ inputButtonText }}</button>
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
            <button @click="editTodo(todo)" class="btn btn-primary ml-auto mr-2">
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
      todo: { id: null, text: null },
      nextTodoId: 1,
      edit: false,
      todos: []
    }
  },
  methods: {
    addTodo(todo) {
      todo.id = ++this.nextTodoId;
      this.todos.push(todo);
      this.clearInput();
    },
    editTodo(todo) {
      this.todo = {...todo};
      this.edit = true;
      this.$nextTick(() => this.$refs.todoInput.focus());
    },
    updateTodo(todo) {
      this.todos = this.todos.map((obj) => todo.id === obj.id ? todo : obj);
      this.clearInput();
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      if (this.edit === true && this.todo.id === id) {
        this.clearInput();
      }
    },
    saveTodo(todo) {
      if (!todo.text) return // check if todo.text is empty
      return this.edit 
        ? this.updateTodo(todo)
        : this.addTodo(todo);
    },
    clearInput() {
      this.todo = { id: null, text: null };
      this.edit = false;
    }
  },
  computed: {
    inputButtonText: function() {
      return this.edit === true ? 'Save' : 'Add';
    },
    showClearButton: function() {
      return !!this.todo.text === true;
    }
  }
}
</script>

<style>
  body {
    background-color: #f5f5f5;
  }
</style>
