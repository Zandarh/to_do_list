import Del from './img/delete.svg';
import Back from './img/back.svg';

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

        const contentDiv = document.createElement('div');
        contentDiv.className = 'task-div';
    
        const task = document.createElement('div');
        task.className = 'task-title-div';
    
        const taskTitle = document.createElement('h3');
        taskTitle.className = "task-title"
        taskTitle.innerText = todo.title

        task.appendChild(taskTitle);

        const noteDiv = document.createElement('div');
        noteDiv.className = 'note-div';

        const note = document.createElement('p');
        note.innerText = todo.note;

        noteDiv.appendChild(note);

        const backDiv = document.createElement('div');
        const backButton = document.createElement('img');
        backButton.classList.add('backImg', 'filter-white')
        backButton.className = "backDiv";
        backButton.src = Back;

        backDiv.appendChild(backButton);

        contentDiv.appendChild(task);
        contentDiv.appendChild(noteDiv);
        node.appendChild(contentDiv);
    }
    return {writeAllTask, showEachTask}
}

const writeAllTask = writeToMain().writeAllTask;
const showEachTask =writeToMain().showEachTask;

export {writeAllTask, showEachTask}