var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],

    displayTodos: function() {
        console.log('My Todos:')
        for (var i = 0; i < this.todos.length; i++){
            console.log(this.todos[i])
        }
    },

    addTodo: function(todo) {
        this.todos.push(todo)
        this.displayTodos()
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1)
        this.displayTodos()
    },

    changeTodo: function(position, newTodo) {
        this.todos[position] = newTodo
        this.displayTodos()
    },
}



