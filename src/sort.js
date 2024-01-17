import { render } from "./todos.js";
import {isToday, isThisWeek, isThisMonth} from "date-fns";


// sort by Date

function mySort(){

    //today
    function todosToday(){
        const todaySort = [];
        const allTodos = render();
        allTodos.forEach(todo => {
            if(isToday(todo.dueDate))
                todaySort.push(todo);
        });
        return todaySort;
    }

    // sort by week
    function todosForAWeek(){
        const thisWeek = [];
        const allTodos = render();
        allTodos.forEach(todo => {
            if(isThisWeek(todo.dueDate)){
                thisWeek.push(todo);
            }
        });
        
        return thisWeek;
    
    }

    // sort by month
    function todosForMonth(){
        const thisMonth = [];
        const allTodos = render();
        allTodos.forEach(todo => {
            if(isThisMonth(todo.dueDate)){
                thisMonth.push(todo);
            }
        });
        
        return thisMonth;   
    }
    // Checks for specific project in the todos array
    function checkForProject(theProjectName){
        const todosByProject = [];
        const allTodos = render();
        allTodos.forEach(todo => {
            if(todo.project == theProjectName)
                todosByProject.unshift(todo);
        });
        return todosByProject
    }

    return {checkForProject, todosToday, todosForAWeek, todosForMonth}
}

const todosForAWeek = mySort().todosForAWeek;
const todosForMonth = mySort().todosForMonth;
const todosToday = mySort().todosToday;
const checkForProject = mySort().checkForProject;
export {checkForProject, todosToday, todosForAWeek, todosForMonth}