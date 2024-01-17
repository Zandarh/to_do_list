export default class Todos {
    constructor(title, note, dueDate,  project, checked){
        this.title = title
        this.note = note
        this.dueDate = dueDate
        if(project == undefined)
            this.project = "default";
        else
            this.project = project;
        if(checked == true)
            this.checked = true
        else
            this.checked = false
        
    };
};