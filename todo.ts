interface Todo{
    id : number,
    title : string,
    status : string,
    todoType : string
}

const ACTIVE  = 'ACTIVE';
const COMPLETE = 'COMPLETE';
const DELETE = 'DELETE';

class TodoList{

    public nextTodoCount;
    private todos : Todo[];

    constructor(){
        this.nextTodoCount = 1;
        this.todos = [];
    }

    add(todo : Todo){
       this.todos.push(todo);
       return true;
    }


    display(){
        this.todos.forEach(function(entry) {
            console.log(entry);
        });
        return this.todos;
    }

    update(todo : Todo) {
        var flag : boolean;
        flag = false;
            console.log(todo.id);
            if(this.todos[todo.id-1]){
                this.todos[todo.id-1].title = todo.title;
                flag = true;
            }

        if(flag)
            return true;
        else
            return false;
    }

    delete(id : number){
        var flag : boolean;
        flag = false;
        if(this.todos[id-1]){
            this.todos[id-1].status = DELETE;
            flag = true;
        }

        if(flag)
            return true;
        else
            return false;
    }

    complete(id : number){
        var flag : boolean;
        flag = false;
        if(this.todos[id-1]){
            this.todos[id-1].status = COMPLETE;
            flag = true;
        }

        if(flag)
            return true;
        else
            return false;
    }


    active(id : number){
        var flag : boolean;
        flag = false;
        if(this.todos[id-1]){
            this.todos[id-1].status = ACTIVE;
            flag = true;
        }

        if(flag)
            return true;
        else
            return false;
    }
}

var todoList = new TodoList();

function addTodo(title : string,todoType : string){
var status = ACTIVE;
    if(todoList.add(
            {
                id : todoList.nextTodoCount,
                title : title,
                status : status,
                todoType : todoType
            }
        )){
        todoList.nextTodoCount++;
        return  todoList.nextTodoCount-1;
    }
    else
        return null;
}

function updateTodo(id : number,title : string){
    console.log(title);
    if(todoList.update(
            {
                id : id,
                title : title,
                status : '',
                todoType : ''
            }
        )){
        return true;
    }
    else
        return false;
}

function displayTodo(){
    return todoList.display();
}

function deleteTodo(id : number){
    return todoList.delete(id);
}

function completeTodo(id : number){
    return todoList.complete(id);
}

function activeTodo(id : number){
    return todoList.active(id);
}