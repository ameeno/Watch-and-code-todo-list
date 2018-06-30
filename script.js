// Code goes here

// as a object:

var myTodoList = {
  todos: [],

  // it should have a function to shows todos
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your Todo list is Empty.")
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  // it should have a function to add todos
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  // it should have a function to change todos
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  // it should have a function to delete todos
  deleteTodo: function(num) {
    this.todos.splice(num, 1);
    this.displayTodos();
  },
  toggleAll: function() {
    var all = this.todos.length;
    var completed = 0;
    for (var i = 0; i < this.todos.length; i++) {
      // if everything is true make all false;
      if (this.todos[i].completed) {
        completed++;
      }
      if (completed === all) {
        for (var j = 0; j < this.todos.length; j++) {
          this.todos[j].completed = false;
        }
      } else {
        for (var j = 0; j < this.todos.length; j++) {
          if (this.todos[j].completed == false) {
            this.todos[j].completed = true;
          }
        }
      }

      this.displayTodos();
    }
  }
};

var displayTodosButton = document.getElementbyID('displayTodosButton');

var toggleAllButton = document.getElementbyID('toggleAllButton');
