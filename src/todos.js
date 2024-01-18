import Todos from "./class.js"
import {saveToDb, getFromDb} from './db.js';


let allTodos = [];
const dbName = "allTodos";
(function(){
    const testtodo = getFromDb(dbName);
    if(!testtodo){
        saveToDb(dbName, allTodos);
    }
})();

function todosCreator() {

    function createTodo(title, note, dueDate, project, checked){
        const todos = new Todos(title, note, dueDate, project, checked);
        addTodos(todos) 
        saveToDb(dbName, allTodos)
    }
    
    function addTodos(todos){
        allTodos.unshift(todos);
    }
    function deleteByProject(projectName){
        allTodos= getFromDb(dbName);
        if(!allTodos)
            return;
        allTodos.forEach(todo => {
            const index = allTodos.findIndex(theTodo => theTodo.project === projectName);
            allTodos.splice(index, 1);
        });
        saveToDb(dbName, allTodos)
    }
    function deleteTodo(title){
        allTodos= getFromDb(dbName);
        const index = allTodos.findIndex(theTodo => theTodo.title === title);
        allTodos.splice(index, 1);
        saveToDb(dbName, allTodos)
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
        allTodos= getFromDb(dbName);
        if(!allTodos){
            return;
        }
        return allTodos;
    }

    return {deleteByProject, deleteTodo, createTodo, editTodo, render}
}

const createTodo = todosCreator().createTodo;
const deleteTodo = todosCreator().deleteTodo;
const editTodo = todosCreator().editTodo;
const render = todosCreator().render;
const deleteByProject = todosCreator().deleteByProject;

export { deleteByProject, createTodo, deleteTodo, render, editTodo}