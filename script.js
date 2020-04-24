var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log('My Todos:')
    for (var i = 0; i < todos.length; i++){
        console.log(todos[i])
    }
}

function addTodo(todo) {
    todos.push(todo)
    displayTodos()
}

function deleteTodo(position) {
    todos.splice(position, 1)
    displayTodos()
}