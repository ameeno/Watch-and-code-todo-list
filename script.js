// Basic settings, 
/* need function for show, add, delete and edit) 8?
 */
var todos = [];

function showTodoList() {
    console.log("my Todos: ", todos);
}

function addTodo(todo) {
    todos.push(todo);
}

function changeTodo(num, todo) {
    todos[num] = todo;
}

function deleteTodo(num) {
    todos.splice(num, 1);
}