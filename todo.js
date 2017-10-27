var ACTIVE = 'ACTIVE';
var COMPLETE = 'COMPLETE';
var DELETE = 'DELETE';
var TodoList = (function () {
    function TodoList() {
        this.nextTodoCount = 1;
        this.todos = [];
    }
    TodoList.prototype.add = function (todo) {
        this.todos.push(todo);
        return true;
    };
    TodoList.prototype.display = function () {
        this.todos.forEach(function (entry) {
            console.log(entry);
        });
        return this.todos;
    };
    TodoList.prototype.update = function (todo) {
        var flag;
        flag = false;
        console.log(todo.id);
        if (this.todos[todo.id - 1]) {
            this.todos[todo.id - 1].title = todo.title;
            flag = true;
        }
        if (flag)
            return true;
        else
            return false;
    };
    TodoList.prototype.delete = function (id) {
        var flag;
        flag = false;
        if (this.todos[id - 1]) {
            this.todos[id - 1].status = DELETE;
            flag = true;
        }
        if (flag)
            return true;
        else
            return false;
    };
    TodoList.prototype.complete = function (id) {
        var flag;
        flag = false;
        if (this.todos[id - 1]) {
            this.todos[id - 1].status = COMPLETE;
            flag = true;
        }
        if (flag)
            return true;
        else
            return false;
    };
    TodoList.prototype.active = function (id) {
        var flag;
        flag = false;
        if (this.todos[id - 1]) {
            this.todos[id - 1].status = ACTIVE;
            flag = true;
        }
        if (flag)
            return true;
        else
            return false;
    };
    return TodoList;
}());
var todoList = new TodoList();
function addTodo(title, todoType) {
    var status = ACTIVE;
    if (todoList.add({
        id: todoList.nextTodoCount,
        title: title,
        status: status,
        todoType: todoType
    })) {
        todoList.nextTodoCount++;
        return todoList.nextTodoCount - 1;
    }
    else
        return null;
}
function updateTodo(id, title) {
    console.log(title);
    if (todoList.update({
        id: id,
        title: title,
        status: '',
        todoType: ''
    })) {
        return true;
    }
    else
        return false;
}
function displayTodo() {
    return todoList.display();
}
function deleteTodo(id) {
    return todoList.delete(id);
}
function completeTodo(id) {
    return todoList.complete(id);
}
function activeTodo(id) {
    return todoList.active(id);
}
