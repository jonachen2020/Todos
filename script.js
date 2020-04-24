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

    toggleCompletion: function(position) {
        var todo = this.todo[position]
        todo.completion = !todo.completion
        this.displayTodos()
    },

    toggleAll: function(){
        var totalCompleted = 0
        var totalTodos = this.todos.length

        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completion === true) {
                totalComplete++
            }
        }

        if (totalComplete === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completion = false
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completion = true
            }
        }
    },
}

var displayTodosButton = document.getElementById('displayTodosButton')
var toggleAllButton = document.getElementById('toggleAllButton')

displayTodosButton.addEventListener('click', function() { 
    todoList.displayTodos()
})

toggleAllbutton.addEventListener('click', function() {
    todoList.toggleAll()
})