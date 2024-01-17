import './style/style.css';
import {createTodo, render}from "./todos.js";
import {checkForProject, todosToday, todosForAWeek, todosForMonth} from "./sort.js";
import {getProject, deleteProject, editProject, addProject, renderProjects} from './project.js';
import writeToMain from './main.js';
import { removeAllChildNodes } from './create.js';
import {closeMenu, openMenu} from './func.js';


const title1 = "Call Mum";
const note1 = "Very Important";
const dueDate1 = "2024-01-13";
const project1 = "work";
const checked = true;


const todos1 = createTodo(title1, note1, dueDate1, project1, checked);

const title2 = "Read on Dom";
const note2 = "Pheww!";
const dueDate2 = "2024-03-21";

const todos2 = createTodo(title2, note2, dueDate2);

const title3 = "Alex";
const note3 = "My life";
const dueDate3 = "2024-01-19";
const project3 = "personal"

const todos3 = createTodo(title3, note3, dueDate3, project3);


addProject("work");
addProject("personal");
addProject("fun");

//Dome Cache
const menuBtn = document.querySelector('.menuBtn');
const close = document.querySelector('#close');
const dialog = document.querySelector('.sibarDailog');
const filterTodos = document.querySelectorAll('.todos');
const tags = document.querySelector('.the-projects');
const editDialog = document.querySelector('.dailog-Edit');
const textInputEdit = document.querySelector('.edit-project');
const editButton = document.querySelector('.editBtn');
const editForm = document.querySelector('.editForm');
const addProjectBtn = document.querySelector('.addprojectbtn');
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

const availableProjects = getProject();
availableProjects.forEach(project => {
    const option = document.createElement('option');
    option.value = project;
    option.innerText = project;
    taskProject.appendChild(option);
});

(function(){
    const thisprojects = render();
    localStorage.clear();
    console.log(localStorage.length);
    removeAllChildNodes(content);
    writeToMain(thisprojects, content);
    renderProjects(tags)
    check = document.querySelectorAll('.check');
    addListerner(check, "change", thechecker)
})();


// Event listeners
menuBtn.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

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
    writeToMain(project, content)
    mainContent.style.display = 'grid';
    menuBtn.style.display = "flex";
    close.style.display = "none";
    dialog.close();
    check = document.querySelectorAll('.check');
    addListerner(check, "change", thechecker)
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
        e.target.parentElement.parentElement.setAttribute('style', "background-color: transparent");
    }
    else{
        e.target.nextElementSibling.style.textDecoration = "none";
        e.target.parentElement.nextElementSibling.style.display = 'none';
        e.target.parentElement.parentElement.setAttribute('style', "background-color: #3d3c3c");
        
    }
}
//Event Listeners

tags.addEventListener('touchmove', tagsEvent);
addProjectBtn.addEventListener('click', showProjectAddModal);
addNewProjectBtn.addEventListener('click', addNewProject);


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
}
//Adds new Project
function addNewProject(){
    const newProject = newProjectInput.value
    addProject(newProject);
    renderProjects(tags)
    deleteBtn = document.querySelectorAll('.delete');
    addListerner(deleteBtn, 'click', del)
    
    let editBtn = document.querySelectorAll('.edit');
    addListerner(editBtn, "click", editModal)
    addForm.reset();
    addProjectDialog.close();
}

let editBtn = document.querySelectorAll('.edit');
let deleteBtn = document.querySelectorAll('.delete');
let allTags = document.querySelectorAll('.project-tags');
let currentProject;
addListerner(editBtn, "click", editModal)

allTags = document.querySelectorAll('.project-filter');
addListerner(allTags, "click", showProjectTask)

// Sorts tasks by projects
function showProjectTask(e){
    const projectName = e.target.parentElement.lastElementChild.textContent;
    const byProject = checkForProject(projectName);
    sortToMain(byProject);

}
function editModal(e){
    currentProject = e.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
    editDialog.showModal()
    textInputEdit.setAttribute('value', currentProject);   
}

editButton.addEventListener('click', editTheProject);

//Edits the project
function editTheProject(){
    const newName = editProject(currentProject, textInputEdit.value);
    allTags.forEach(tag => {
        if(tag.textContent == currentProject){
            tag.textContent = newName;
        }
    });
        editForm.reset();
        editDialog.close();
}


deleteBtn.forEach(btn => {
    btn.addEventListener('click', del);
});

// Deletes a project
function del(e){

    const projectName = e.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
    deleteProject(projectName);
    renderProjects(tags);
    allTags = document.querySelectorAll('.project-tags');
    addListerner(allTags, "click", showProjectTask)

    deleteBtn = document.querySelectorAll('.delete');
    addListerner(deleteBtn, "click", del)

    let editBtn = document.querySelectorAll('.edit');
    addListerner(editBtn, "click", editModal)
}

closeAdd.addEventListener('click', (e) => {
    addProjectDialog.close();
    dialog.close();
    close.style.display = "none";
    menuBtn.style.display = "flex";
    mainContent.style.display = 'grid';
});

closeEdit.addEventListener('click', (e) => {
    editDialog.close();
    dialog.close();
    close.style.display = "none";
    menuBtn.style.display = "flex";
    mainContent.style.display = 'none';
});

addTask.addEventListener('click', (e) => {
    addTaskDialog.showModal();
    mainContent.style.display = 'none';
});

addATaskBtn.addEventListener('click', (e) => {
    taskProject = document.querySelector('#theProjects');
    const theTitle = title.value;
    const theNote  = note.value;
    const theDueDate = dueDate.value;
    const theProject = taskProject.value;
    if(theTitle && theDueDate){
        const todos = createTodo(theTitle, theNote, theDueDate, theProject);
        localStorage.setItem("Todos", JSON.stringify({title: theTitle, note: theNote, dueDate: theDueDate, theProject, }));
        const thisprojects = render();
        removeAllChildNodes(content);
        writeToMain(thisprojects, content);
        addTaskForm.reset();
        mainContent.style.display = 'grid';
        addTaskDialog.close();
    }
    check = document.querySelectorAll('.check');
    addListerner(check, "change", thechecker)
});


export {sortToMain}