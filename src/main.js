import Del from './img/delete.svg';
import Back from './img/back.svg';
import folder from './img/folder.svg';

function writeToMain(){

    function writeAllTask(todos, node){

        if(!todos){
            return;
        }
        if(todos.length == 0){
            const contentDiv = document.createElement('div');
            contentDiv.className = 'no-task-div';
            const heading = document.createElement('h4');
            heading.innerText = 'No task found';
            heading.className = 'no-task';
            contentDiv.appendChild(heading);
    
            node.appendChild(contentDiv);
        }
        else{
            todos.forEach(todo => {
                const contentDiv = document.createElement('div');
                contentDiv.className = 'task-div';
    
                const taskHolder = document.createElement('div');
                taskHolder.className = "right"
    
                const checker = document.createElement('input');
                checker.type = 'checkbox';
                checker.className = "check";
    
                const task = document.createElement('p');
                task.className = "thetasktitle";
                task.innerText = todo.title;
                taskHolder.appendChild(checker);
                taskHolder.appendChild(task);
    
                const delButton = document.createElement('img');
                delButton.classList.add('del-task', 'filter-white')
                delButton.src = Del;
    
                contentDiv.appendChild(taskHolder);
                contentDiv.appendChild(delButton);
    
                node.appendChild(contentDiv);
            });
        }
    }
    function showEachTask(todo, node){

        const taskProject = document.createElement('div');
        taskProject.className = 'taskproject';
    
        const taskDetail = document.createElement('div');
        taskDetail.className = 'todoinfo';
    
        const folderImg = document.createElement('img');
        folderImg.className = "filter-white";
        folderImg.src = folder;
        const projectName = document.createElement('h4');
        projectName.innerText = todo.project;
        projectName.className = "projectname";

        taskDetail.appendChild(folderImg);
        taskDetail.appendChild(projectName);
        
        const taskHeading = document.createElement('div');
        taskHeading.className = "taskheading";

        taskProject.appendChild(taskDetail);
        taskProject.appendChild(taskHeading);

        const taskTitle = document.createElement('h2');
        taskTitle.innerText = todo.title
        const line = document.createElement('hr');

        taskHeading.appendChild(taskTitle);
        taskHeading.appendChild(line);



        const noteDiv = document.createElement('div');
        noteDiv.className = 'noteDiv';

        const note = document.createElement('p');
        note.innerText = todo.note;
        note.className = "thenote"

        noteDiv.appendChild(note);

        const taskControl = document.createElement('div');
        taskControl.className = "taskControl";
        const backButton = document.createElement('img');
        backButton.classList.add('backToAll', 'filter-white')
        backButton.src = Back;

        const date = document.createElement('p');
        date.innerText = todo.dueDate;
        date.className = "date";

        taskControl.appendChild(backButton);
        taskControl.appendChild(date);


        node.appendChild(taskProject);
        node.appendChild(noteDiv);
        node.appendChild(taskControl);
    }
    return {writeAllTask, showEachTask}
}

const writeAllTask = writeToMain().writeAllTask;
const showEachTask =writeToMain().showEachTask;

export {writeAllTask, showEachTask}