import Del from './img/delete.svg';

export default function writeToMain(todos, node){
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