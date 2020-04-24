var todoList = {

    todos: [],

    displayTodos: function() {
        console.log('My Todos:')
        if (this.todos.length === 0) {
            console.log('Empty')
        } else {
            for (var i = 0; i < this.todos.length; i++){
                var todo = this.todos[i]
                if (todo.completion === true) {
                    console.log('(x)', todo.todoText)
                } else {
                    console.log('( )', todo.todoText)
                }
            }
        }
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completion: false,
        })
        this.displayTodos()
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1)
        this.displayTodos()
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText
        this.displayTodos()
    },
}



