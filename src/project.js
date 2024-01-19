import {deleteByProject } from "./todos.js";
import {createProject} from './create.js';
import {saveToDb, getFromDb} from './db.js';


let projects = ["default"];
const dbName = "projects";
(function(){
    const testprojects = getFromDb(dbName);
    if(!testprojects){
        saveToDb(dbName, projects);
    }
    else if (testprojects.length == 0){
        saveToDb(dbName, projects);
    }
})();

// Sort by Projects
function projectSort(){

    function addProject(projectName){
        if(!projectName)
            return;
        projects.unshift(projectName);
        saveToDb(dbName, projects);
    }
    
    function editProject(oldProjectName, newProjectName){
        projects = getFromDb(dbName)

        if(!newProjectName)
            return;
        for(let i = 0; i < projects.length; i++){
            if(projects[i] == oldProjectName){
                projects[i] = newProjectName
            }
        }
        saveToDb(dbName, projects);
        return newProjectName;
    }
    function deleteProject(projectName){
        projects = getFromDb(dbName)

        for(let i = 0; i < projects.length; i++){
            if(projects[i] == projectName){
                projects.splice(i, 1);
            }
        }
        saveToDb(dbName, projects);
        deleteByProject(projectName);
    }
    function renderProjects(tags){
        projects = getFromDb(dbName)
        createProject(projects, tags);
    }
    function getProject(){
        projects = getFromDb(dbName);
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