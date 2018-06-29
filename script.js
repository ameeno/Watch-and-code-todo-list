// Basic settings, 
/* need function for show, add, delete and edit) 8?
 */
var todos = [];

function displayTodos() {
    console.log("my Todos: ", todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(num, todo) {
    todos[num] = todo;
    displayTodos();
}

function deleteTodo(num) {
    todos.splice(num, 1);
    displayTodos();
}