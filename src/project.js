import { render } from "./todos.js";
import {createProject} from './create.js';


const projects = ["default"];

// Sort by Projects
function projectSort(){
    
    const allTodos = render();

    function addProject(projectName){
        if(!projectName)
            return;
        projects.unshift(projectName);
    }
    
    function editProject(oldProjectName, newProjectName){
        if(!newProjectName)
            return;
        for(let i = 0; i < projects.length; i++){
            if(projects[i] == oldProjectName){
                projects[i] = newProjectName
            }
        }
        return newProjectName;
    }
    function deleteProject(projectName){
        for(let i = 0; i < projects.length; i++){
            if(projects[i] == projectName){
                projects.splice(i, 1);
            }
        }
    }
    function renderProjects(tags){
            createProject(projects, tags);
    }
    function getProject(){
        return projects;
    }
    return {getProject, deleteProject, editProject, addProject, renderProjects}
}

const addProject = projectSort().addProject;
const renderProjects = projectSort().renderProjects;
const editProject = projectSort().editProject;
const deleteProject = projectSort().deleteProject;
const getProject = projectSort().getProject;

export {getProject, deleteProject, editProject, addProject, renderProjects}