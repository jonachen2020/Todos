var todoList = {

    todos: [{completion: true, todoText: 'item 1'}, {completion: false, todoText: 'item 2'}],

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
                totalCompleted++
            }
        }

        if (totalCompleted === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completion = false
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completion = true
            }
        }
        this.displayTodos()
    },
}

var displayTodosButton = document.getElementById("displayTodosButton")
var toggleAllButton = document.getElementById("toggleAllButton")

displayTodosButton.addEventListener('click', function() { 
    todoList.displayTodos()
})

toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll()
})