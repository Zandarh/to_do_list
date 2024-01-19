import './style/style.css';
import {createTodo, editTodo, deleteTodo, render}from "./todos.js";
import {checkForProject, todosToday, todosForAWeek, todosForMonth} from "./sort.js";
import {getProject, deleteProject, editProject, addProject, renderProjects} from './project.js';
import {writeAllTask, showEachTask} from './main.js';
import { removeAllChildNodes } from './create.js';

//Dome Cache
const menuBtn = document.querySelector('.menuBtn');
const close = document.querySelector('#close');
const dialog = document.querySelector('.sibarDailog');
const filterTodos = document.querySelectorAll('.todos');
const theTags = document.querySelectorAll('.the-projects');
const editDialog = document.querySelector('.dailog-Edit');
const textInputEdit = document.querySelector('.edit-project');
const editButton = document.querySelector('.editBtn');
const editForm = document.querySelector('.editForm');
let addProjectBtn = document.querySelectorAll('.addprojectbtn');
const addProjectDialog = document.querySelector('.addprojectdialog');
const newProjectInput = document.querySelector('.addprojecttext');
const addNewProjectBtn = document.querySelector('.dialogAddProjectBtn')
const addForm = document.querySelector('.addForm');
const closeAdd = document.querySelector('#closeAdd');
const closeEdit = document.querySelector('#closeEdit')
const mainContent = document.querySelector('.main-container');
const content = document.querySelector('.content');
const addTask = document.querySelector('.addTask');
const addTaskForm = document.querySelector('.addTaskForm');
const addTaskDialog = document.querySelector('.add-task-dialog');
const title = document.querySelector('#tasktitle');
const note = document.querySelector('#tasknote');
const dueDate = document.querySelector('#duedate');
let taskProject = document.querySelector('#theProjects');
const addATaskBtn = document.querySelector('.addATask');
let check = document.querySelectorAll('.check');
const backBtn = document.querySelector('.backBtn');
let delTask = document.querySelectorAll('.del-task');
let availableProjects = getProject();
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
let eachTask = document.querySelectorAll('.thetasktitle');
const taskViewer = document.querySelector('.main-task-viewer')
let tags;

//Differentiating between the mobile and large screen sidebar
(function(){  
    if(window.innerWidth >= 1024){
        sidebar.style.display = "flex";
        theTags.forEach(tag => {
            if (tag.parentElement.parentElement.parentElement.className == "sidebar"){
                tags = tag;
            }
        }); 
        addProjectBtn.forEach(btn => {
            if(btn.parentElement.parentElement.parentElement.parentElement.parentElement.className == "sidebar"){
                addProjectBtn = btn;
            }
        });
    }
    else{
        theTags.forEach(tag => {
            if (tag.parentElement.parentElement.parentElement.className == "sibarDailog"){
                tags = tag;
            }
        });
        addProjectBtn.forEach(btn => {
            if(btn.parentElement.parentElement.parentElement.parentElement.parentElement.className == "sibarDailog"){
                addProjectBtn = btn;
            }
        });        
    }
})();




/* IIFE that creates the page on each load, getting the data stored in the localstorage
    accing each new element and adding necessary eveent on every load
*/
(function(){
    const thisprojects = render();
    removeAllChildNodes(content);
    writeAllTask(thisprojects, content);

    eachTask = document.querySelectorAll('.thetasktitle');
    addListerner(eachTask, 'click', showTask);
    renderProjects(tags)
    check = document.querySelectorAll('.check');
    addListerner(check, "change", thechecker)
    delTask = document.querySelectorAll('.del-task')
    addListerner(delTask, "click", deleteTheTask)
})();


// Event listeners
menuBtn.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);


// open the side bar on the mobile and tab viw
function openMenu(){
    dialog.show();
    overlay.style.display = 'block'
    menuBtn.style.display = "none";
    mainContent.style.display = 'none';
    close.style.display = "flex";
}

//closes the side
function closeMenu(){
    dialog.close();
    overlay.style.display = 'none'
    menuBtn.style.display = "flex";
    mainContent.style.display = 'grid';
    close.style.display = "none";
}

// Filters the main view based on the filter options
filterTodos.forEach(todoFilter => {
    
        todoFilter.addEventListener('click', () => {
            if(todoFilter.lastElementChild.textContent == 'All'){
                const thisprojects = render();
                sortToMain(thisprojects);
            }
            else if(todoFilter.lastElementChild.textContent == 'Today'){
                const todayProjects = todosToday();
                sortToMain(todayProjects);
            }
            else if(todoFilter.lastElementChild.textContent == 'Week'){
                const weekProjects = todosForAWeek();
                sortToMain(weekProjects);
            }
            else{
                const monthProjects = todosForMonth();
                sortToMain(monthProjects);
            }
        });
});

function sortToMain(project){
    removeAllChildNodes(content);
    writeAllTask(project, content);
    eachTask = document.querySelectorAll('.thetasktitle');
    addListerner(eachTask, 'click', showTask);
    mainContent.style.display = 'grid';
    menuBtn.style.display = "flex";
    close.style.display = "none";
    dialog.close();
    if(window.innerWidth < 1024)
        overlay.style.display = 'none';
    check = document.querySelectorAll('.check');
    addListerner(check, "change", thechecker)
    delTask = document.querySelectorAll('.del-task')
    addListerner(delTask, "click", deleteTheTask)
}

//Adds EventListerners to reduce repeat code
function addListerner(nodes, theEvent, theFunction){
    nodes.forEach(node => {
        node.addEventListener(theEvent, theFunction);
    });
}

// Checks when a user dims a project as completed
function thechecker(e){
    if(e.target.checked){
        e.target.nextElementSibling.style.textDecoration = "line-through";
        e.target.parentElement.nextElementSibling.style.display = 'flex';
    }
    else{
        e.target.nextElementSibling.style.textDecoration = "none";
        e.target.parentElement.nextElementSibling.style.display = 'none';   
    }
}

//deletes a task
function deleteTheTask(e){
    const title = e.target.parentElement.firstElementChild.lastElementChild.textContent;
    deleteTodo(title);
    // console.log(e.target.parentElement);
    // content.removeChild(e.target.parentElement);
    const thisprojects = render();
    sortToMain(thisprojects);
}

//Event Listeners
tags.addEventListener('touchmove', tagsEvent);
addProjectBtn.addEventListener('click', showProjectAddModal);
addNewProjectBtn.addEventListener('click', addNewProject);
backBtn.addEventListener('click', closeAddTask);


function tagsEvent(){
    const editAndDelete = document.querySelector('.edit-delete');

    if(editAndDelete.style.display == 'none')
        editAndDelete.style.display = 'flex';
    else
        editAndDelete.style.display = 'none';
}

// Opens the addProject Modal
function showProjectAddModal(){
    addProjectDialog.showModal();
    overlay.style.display = 'block';
    newProjectInput.focus();
    // dialog.style.display = "none";
}
//Adds new Project
function addNewProject(e){
    e.preventDefault();
    const newProject = newProjectInput.value
    addProject(newProject);
    availableProjects = getProject();
    renderProjects(tags)
    deleteBtn = document.querySelectorAll('.delete');
    addListerner(deleteBtn, 'click', del)
    
    let editBtn = document.querySelectorAll('.edit');
    addListerner(editBtn, "click", editModal);
    
    allTags = document.querySelectorAll('.project-filter');
    addListerner(allTags, "click", showProjectTask);

    addForm.reset();
    addProjectDialog.close();
    overlay.style.display = 'none';
}

//close the add task panel
function closeAddTask(){
    addTaskDialog.close();
    overlay.style.display = 'none';
    mainContent.style.display = 'grid';
}

let editBtn = document.querySelectorAll('.edit');
let deleteBtn = document.querySelectorAll('.delete');
let allTags = document.querySelectorAll('.project-tags');
let currentProject;


addListerner(editBtn, "click", editModal);
allTags = document.querySelectorAll('.project-filter');
addListerner(allTags, "click", showProjectTask);

// Sorts tasks by projects
function showProjectTask(e){
    const projectName = e.target.parentElement.lastElementChild.textContent;
    const byProject = checkForProject(projectName);
    sortToMain(byProject);

}
function editModal(e){
    currentProject = e.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
    editDialog.showModal()
    overlay.style.display = 'block';
    textInputEdit.focus();
    textInputEdit.setAttribute('value', currentProject);   
}

editButton.addEventListener('click', editTheProject);

//Edits the project
function editTheProject(e){
    e.preventDefault();
    allTags = document.querySelectorAll('.project-tags');
    const newName = editProject(currentProject, textInputEdit.value);
    allTags.forEach(tag => {
        if(tag.textContent == currentProject){
            tag.textContent = newName;
        }
    });
        editForm.reset();
        editDialog.close();
        overlay.style.display = 'none';
        // mainContent.style.display = 'grid';
}


deleteBtn.forEach(btn => {
    btn.addEventListener('click', del);
});

// Deletes a project
function del(e){

    const projectName = e.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
    deleteProject(projectName);
    renderProjects(tags);

    const thisprojects = render();
    removeAllChildNodes(content);
    writeAllTask(thisprojects, content);
    
    allTags = document.querySelectorAll('.project-tags');
    addListerner(allTags, "click", showProjectTask)

    deleteBtn = document.querySelectorAll('.delete');
    addListerner(deleteBtn, "click", del)

    allTags = document.querySelectorAll('.project-tags');
    let editBtn = document.querySelectorAll('.edit');
    addListerner(editBtn, "click", editModal)
}

//Closing the add project dialog
closeAdd.addEventListener('click', (e) => {
    addProjectDialog.close();
    dialog.close();
    overlay.style.display = 'none';
    close.style.display = "none";
    menuBtn.style.display = "flex";
    mainContent.style.display = 'grid';
});

//Closing the edit project dialog
closeEdit.addEventListener('click', (e) => {
    editDialog.close();
    dialog.close();
    close.style.display = "none";
    menuBtn.style.display = "flex";
    mainContent.style.display = 'grid';
    overlay.style.display = 'none';
});


addTask.addEventListener('click', addTheTask);

// Opens the add task dialog
function addTheTask(){
    addTaskDialog.showModal();
    overlay.style.display = 'block';
    addTaskProject();
    mainContent.style.display = 'none';
}

// Event listener for collect task details
addATaskBtn.addEventListener('click', collectTask);

// Creates tood object 
function collectTask(e){
    e.preventDefault();
    taskProject = document.querySelector('#theProjects');
    const theTitle = title.value;
    const theNote  = note.value;
    const theDueDate = dueDate.value;
    const theProject = taskProject.value;
    if(theTitle && theDueDate){
        createTodo(theTitle, theNote, theDueDate, theProject);
        const thisprojects = render();
        removeAllChildNodes(content);
        writeAllTask(thisprojects, content);
        eachTask = document.querySelectorAll('.thetasktitle');
        addListerner(eachTask, 'click', showTask);
        addTaskForm.reset();
        mainContent.style.display = 'grid';
        addTaskDialog.close();
        check = document.querySelectorAll('.check');
        addListerner(check, "change", thechecker)
        delTask = document.querySelectorAll('.del-task')
        addListerner(delTask, "click", deleteTheTask)
        overlay.style.display = 'none';     
    }
}

// Adds the available projects to the form select element as options for the user
function addTaskProject(){
    removeAllChildNodes(taskProject);
    availableProjects.forEach(project => {
        const option = document.createElement('option');
        option.value = project;
        option.innerText = project;
        taskProject.appendChild(option);
    });
}

// Displays more details on each task
function showTask(e){
    menuBtn.style.display = "none";
    const title = e.target.textContent;
    mainContent.style.display = "none";
    taskViewer.style.display = "grid";
    const todos = render();
    todos.forEach(todo => {
        if(todo.title == title){
            showEachTask(todo, taskViewer);
            const backToAll = document.querySelector('.backToAll');
            backToAll.addEventListener('click', goBack);
        }
    });
}

// Closes the more screen on each task
function goBack(e){
    taskViewer.style.display = "none";
    menuBtn.style.display = "flex";
    mainContent.style.display = "grid";
    removeAllChildNodes(taskViewer);
}