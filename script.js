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
        var todo = this.todos[position]
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

var handlers = {
    displayTodos: function() {
        todoList.displayTodos()
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput')
        todoList.addTodo(addTodoTextInput.value)
        addTodoTextInput.value = ''
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput') 
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber)
        deleteTodoPositionInput.value = ''
    },
    changeTodo: function() {
        var changeTodoTextInput = document.getElementById('changeTodoTextInput')
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
        changeTodoTextInput.value = ''
        changeTodoPositionInput.value = ''
    },
    toggleCompletion: function() {
        var toggleCompletionPositionInput = document.getElementById('toggleCompletionPositionInput')
        todoList.toggleCompletion(toggleCompletionPositionInput.valueAsNumber)
        toggleCompletionPositionInput.value = ''
    },
    toggleAll: function() {
        todoList.toggleAll()
    },
}