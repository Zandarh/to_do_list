import Todos from "./class.js"

let allTodos = [];
function todosCreator() {
    

    function createTodo(title, note, dueDate, project, checked){
        const todos = new Todos(title, note, dueDate, project, checked);
        addTodos(todos)
        return todos;
    }
    
    function addTodos(todos){
        allTodos.unshift(todos);
    }

    function deleteTodo(todos){
        console.log(todos.title);
        const index = allTodos.findIndex(theTodo => theTodo.title === todos.title);
        console.log(index);
       allTodos.shift(index);
    } 
    function editTodo(todos, newTitle, newNote, newDueDate, newProject){
        if(newTitle != undefined)
            todos.title = newTitle
        if(newNote != undefined)
            todos.note = newNote
        if(newDueDate != undefined)
            todos.dueDate = newDueDate
        if(newProject != undefined)
            todos.project = newProject;
    }
    function render(){
        return allTodos;
    }

    return {deleteTodo, createTodo, editTodo, render}
}

const createTodo = todosCreator().createTodo;
const deleteTodo = todosCreator().deleteTodo;
const editTodo = todosCreator().editTodo;
const render = todosCreator().render;

export {createTodo, deleteTodo, render, editTodo}