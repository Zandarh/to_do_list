/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --color-fg: #eee;
    --color-bg: #121212;
    --heading: #0464a4;
}
.menuB,
.filter-white{
    filter: invert(100%) sepia(0%) saturate(7435%) hue-rotate(65deg) brightness(105%) contrast(95%);
}
.filter > p{
    color: var(--color-fg);
}
div.taskheading > h2{
    color: var(--color-fg);
}
dialog{
    background-color: #272727;
}
div.overlay{
    background-color: rgba(29, 25, 25, 0.71);
}
div.task-div{
    background-color: #3d3c3c;
}
textarea,
.formdetails > input,
select, 
div.todo-options > input[type=date]{
    background-color: #474848;
    color: var(--color-bg);
}
.addprojectbtn{
    color: var(--color-fg);
}
form.addForm > input,
form.editForm > input{
    background-color: #3d3c3c;
}
p.thetasktitle{
    cursor: pointer;
}
div.main-task-viewer *p{
    color: var(--color-fg);
}
@media (prefers-color-scheme: light){
    :root{
        --color-bg: #cfcdcd;
        --color-fg: #1A1C20;
    }
    .backImg,
    .del-task,
    .menuB{
        filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%);
    }
    .addprojectbtn,
    .filter > p{
        color: var(--color-bg);
    }
    dialog{
        background-color: #343232;
    }
    div.overlay{
        background-color: rgba(184, 179, 179, 0.9);
    }
    div.task-div{
        background-color: #d1cdcd;
    }
    textarea#tasknote,
    input#tasktitle,
    select#theProjects, 
    input#duedate{
        background-color: #d1cdcd;
    }
    form.addForm > input,
    form.editForm > input{
        background-color: #d1cdcd; 
    }
    div.taskheading > h2,
    p.thenote,
    p.date,
    .projectname{
        color: var(--color-bg);
    }
}
html, body{
    height: 100%;
}
html{
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}
body{
    min-height: 100vh;
    background-color: var(--color-bg);
    color: var(--color-fg);
    display: flex;
    flex-direction: column;
    position: relative;
}
div.container{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 0.2fr 3fr 0.3fr;
}
header{
    grid-area: 1/1/1/2;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    width: 100%;
}
header > h1{
    color: var(--heading);
    font-size: 1.5rem;
}
div.menu{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
button.backBtn,
button.delbtn,
button.closeAdd,
button.closeEdit,
button.closeBtn,
button.menuBtn,
button.addprojectbtn{
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
}

div.menu > .closeBtn > img,
div.menu > .menuBtn > img{
    color: var(--color-fg);
    width: 12%;
}
button#close.closeBtn{
    display: none;
    z-index: 11;
}
div.main{
    padding-top: 50px;
}
div.main-container{
    grid-area: 3/1/3/2;
    width: 90%;
    height: 100%;
    background-color: #272727;
    border-radius: 20px;
    margin: auto;
    display: grid;
    grid-template-rows: 0.2fr 3fr 0.4fr;
    padding: 5px;
    gap: 20px;
}
div.main-task-viewer{
    grid-area: 3/1/3/2;
    width: 90%;
    height: 100%;
    background-color: #272727;
    border-radius: 20px;
    margin: auto;
    display: none;
    grid-template-rows: 0.2fr 3fr 0.4fr;
    padding: 5px;
    gap: 15px;
    padding: 20px;
}

div.main-heading{
    grid-area: 1/1/1/2;
    padding: 10px;
}
div.main-heading > h3{
    color: var(--heading);
    font-size: 1.7rem;

}
div.main-content{
    grid-area: 2/1/3/2;
    display: flex;
    justify-content: center;
}
div.add-taskdiv{
    grid-area: 3/1/4/2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
}

div.add-taskdiv > button.addTask{
    text-transform: uppercase;
    font-size: 1rem;
    padding: 15px;
    border-radius: 20px;
    background-color: var(--heading);
    color: var(--color-bg);
    cursor: pointer;
    border: none;
}
button.backBtn > img{
    width: 30px;
}
dialog{
    top: 100px;
    left: 20px;
    width: 90%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    z-index: 12;

}
.dailog-Edit,
.addprojectdialog{
    height: 80%;
}
div.overlay{
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
}
div.addbtn{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
div.taskproject{
    display: flex;
    gap: 30px;
    flex-direction: column;
}
div.todoinfo{
    display: flex;
    gap: 10px;
    align-items: center;
}
div.todoinfo > img{
    width: 20px;
    opacity: 0.4;
}
div.todoinfo > h4{
    opacity: 0.4;
    font-size: 0.9rem;
}
div.taskheading {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
}
div.taskheading > h2{
    text-align: center;
}
hr{
    border: 1px solid var(--heading);
    width: 80%;
}
p.thenote{
    font-size: 1.2rem;
}
div.taskControl{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
img.backToAll{
    width: 30px;
    cursor: pointer;
}
p.date{
    border: 1px solid var(--heading);
    padding: 5px;
    border-radius: 10px;
}
div.dailog-container{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    width: 100%;
}
.filter > p{
    font-size: 1rem;
}

div.filter-div, 
div.project-div{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
}
.filter{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.the-projects{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.filter > img{
    width: 2.8rem;
    padding: 10px;
}
div.add-project{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;

}

div.dialog-heading > h3{
    color: var(--heading);
    font-size: 1.3rem;
}
.addprojectbtn{
    border: none;
}
.addprojectbtn > h3{
    font-size: 2rem;
}
div.projects{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

div.edit-delete {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2px;
}
div.edit-delete *{
    width: 20px;
    cursor: pointer;
}
form.addForm,
form.editForm{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
form.addForm > input,
form.editForm > input{
    height: 2.4rem;
    padding: 10px;
    border-radius: 10px;
    color: var(--color-fg);
    border: 1px solid var(--color-bg);
}
form.addForm > button,
form.editForm > button{
    text-transform: uppercase;
    font-size: 1rem;
    padding: 5px;
    border-radius: 10px;
    background-color: #4bb2f9;
    color: var(--color-bg);
    border: none;
}

button.closeAdd,
button.closeEdit{
    position: absolute;
    top: 0;
    left: 230px;
}
button#closeAdd.closeAdd > img,
button#closeEdit.closeEdit > img{
    color: var(--color-fg);
    width: 30%;
}
div.content{
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;
}
div.no-task-div{
    width: 100%;
    padding: 30px;
}
div.content{
    width: 90%;
}
div.no-task-div > h4{
    font-size: 1rem;
}
h4.no-task{
    color: #4bb2f9;
    text-align: center;
    font-weight: 200;
}
div.task-div{
    display: flex;
    width: 100%;
    height: 2.4rem;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    padding: 10px;
}
div.task-div img{
    width: 8%;
}
p.thetasktitle{
    font-size: 1.2rem;
}
div.right{
    display: flex;
    align-items: center;
    gap: 10px;
}
div.dialog-container4{
    width: 100%;
    height: 100%;
}
form.addTaskForm{
    width: 100%;
    height: 100%;
}
div.formdetails{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 40px;
}
label{
    display: block;
    font-size: 1.4rem;
    color: var(--heading);
    font-weight: 700;
}
div.moreDetails{
    display: flex;
    justify-content: space-between;
}
textarea{
    overflow: auto;
    height: 200px;
}
textarea,
.formdetails > input,
select, 
div.todo-options > input[type=date]{
    border-radius: 10px;
    padding: 10px;
    background-color: #474848;
    color: var(--color-fg);
    border: none;
}
.formdetails > input::placeholder,
textarea::placeholder{
    color: var(--color-fg);
    font-size: 1rem;
}
textarea,
    input[type=text]{
        font-size: 1.2rem;
    }
.formdetails > input{
    height: 2.8rem;
}
select, 
div.todo-options > input[type=date]{
    height: 2.8rem;
    width: 150px;
    padding: 5px;
    font-size: 1rem;
}
.todo-options{
    display: flex;
    flex-direction: column;
    gap: 10px
}

div.control{
    grid-area: 2/1/2/2;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    
}
div.control > button.addATask{
    text-transform: uppercase;
    font-size: 1rem;
    padding: 15px;
    border-radius: 20px;
    background-color: var(--heading);
    color: var(--color-bg);
    cursor: pointer;
    border: none;
}
.del-task{
    cursor: pointer;
    display: none;
}
/*Tablets*/
@media only screen and (min-width: 541px){
    dialog{
        top: 140px;
        left: 40px;
        width: 90%;
    
    }
    header > h1{
        font-size: 2.5rem;
    }
    .filter > p{
        font-size: 1.6rem;
    }
    div.menu > .closeBtn > img,
    div.menu > .menuBtn > img{
        width: 24%;
    }
    button.closeAdd,
    button.closeEdit{
        position: absolute;
        top: 0;
        left: 500px;
    }
    button.backBtn > img{
        width: 80px;
    }
    .filter > img{
        width: 3.8rem;
    }
    div.task-div img{
        width: 6%;
    }
    div.edit-delete *{
        width: 40px;
    }
    div.main-heading > h3{
        font-size: 2.7rem;
    }
    div.add-taskdiv > button.addTask{
        font-size: 2rem;
    }
    div.dialog-heading > h3{
        font-size: 2.3rem;
    }
    button.addprojectbtn > h3{
        font-size: 4rem;
    }
    form.addTaskForm{
        grid-template-rows: 1fr 0.4fr;
    }
    form.addForm > input,
    form.editForm > input{
        height: 4.4rem;
        padding: 20px;
    }
    .formdetails > input{
        height: 4.8rem;
    }
    textarea{
        height: 40%;
    }
    select, 
    div.todo-options > input[type=date]{
        height: 3rem;
        width: 300px;
        padding: 5px;
        font-size: 2rem;
    }
    label{
        font-size: 1.5rem;
    }
    div.formdetails{
        gap: 15px;
    }
    form.addForm > button,
    form.editForm > button{
        font-size: 2rem;
        padding: 15px;
    }
    div.control > button.addATask{
        font-size: 2rem;
    }
    .formdetails > input::placeholder,
    textarea::placeholder{
        font-size: 2rem;
    }
    div.no-task-div > h4{
        font-size: 2rem;
    }
    div.task-div{
        height: 4.4rem;
    }
    p.thetasktitle{
        font-size: 2.2rem;
    }
    textarea,
    input[type=text]{
        font-size: 2.2rem;
    }
    div.filter-div, 
    div.project-div{
        gap: 10px;
    }
    div.taskheading > h2{
        font-size: 2.5rem;
    }
    p.thenote{
        font-size: 1.7rem;
    }
    div.todoinfo > img{
        width: 40px;
    }
    div.todoinfo > h4{
        font-size: 1.2rem;
    }
    img.backToAll{
        width: 50px;
    }
    p.date{
        padding: 10px;
        border-radius: 10px;
        font-size: 1.4rem;
    }
}

/* Laptops */
@media only screen and (min-width: 1024px){
    div.container{
        display: grid;
        grid-template-columns: 0.6fr 3fr;
        grid-template-rows: 0.3fr 3fr;
        gap: 20px;
    }
    div.sidebar{
        padding-top: 100px;
        grid-area: 1/1/3/1;
        background-color: #3d3c3c;
    }
    header{
        grid-area: 2/1/1/3;
        background-color: #3d3c3c;
        justify-content: center;
    }
    div.main{
        grid-area: 2/2/3/3;
        display: flex;
    }
    div.main-container{
        grid-area: 3/1/3/2;
        width: 60%;
        height: 90%;
        display: grid;
        grid-template-rows: 0.2fr 3fr 0.4fr;
        padding: 15px;
        gap: 20px;
    }
    .filter > p{
        font-size: 1rem;
    }
    div.menu {
        display: none;
    }
    button.closeAdd,
    button.closeEdit{
        position: absolute;
        top: 0;
        left: 280px;
        width: 120px;
    }
    button.backBtn > img{
        width: 30px;
    }
    .filter > img{
        width: 2.5rem;
    }
    div.task-div img{
        width: 3%;
    }
    div.edit-delete *{
        width: 18px;
    }
    div.main-heading > h3{
        font-size: 1.5rem;
    }
    div.add-taskdiv > button.addTask{
        font-size: 1.1rem;
    }
    dialog{
        top: 100px;
        left: 300px;
        width: 40%;
        border: none;
        border-radius: 10px;
        padding: 10px;
        z-index: 12;
    }
    div.dialog-heading > h3{
        font-size: 1rem;
    }
    button.addprojectbtn > h3{
        font-size: 1.6rem;
    }
    form.addTaskForm{
        grid-template-rows: 1fr 0.4fr;
    }
    form.addForm > input,
    form.editForm > input{
        height: 2rem;
        padding: 15px;
    }
    .add-task-dialog{
        top: 100px;
        left: 350px;
        width: 60%;
    }
    .formdetails > input{
        height: 2rem;
    }
    textarea{
        height: 20%;
    }
    select, 
    div.todo-options > input[type=date]{
        height: 2rem;
        width: 300px;
        padding: 5px;
        font-size: 1rem;
    }
    label{
        font-size: 1rem;
    }
    div.formdetails{
        gap: 10px;
    }
    form.addForm > button,
    form.editForm > button{
        font-size: 1.3rem;
    }
    div.control{
        align-items: center;
    }
    div.control > button.addATask{
        font-size: 1rem;
    }
    .formdetails > input::placeholder,
    textarea::placeholder{
        font-size: 1rem;
    }
    div.no-task-div > h4{
        font-size: 1rem;
    }
    div.task-div{
        height: 2rem;
    }
    p.thetasktitle{
        font-size: 1rem;
    }
    textarea,
    input[type=text]{
        font-size: 1rem;
    }
    div.filter-div, 
    div.project-div{
        gap: 10px;
    }
    form.addForm > input,
    form.editForm > input{
        width: 100%;
    }
    form.addForm > button,
    form.editForm > button{
        font-size: 1rem;
    }
    div.main-task-viewer{
        width: 50%;
        height: 80%;
    }
    p.thenote{
        font-size: 1rem;
    }
    div.taskheading > h2{
        font-size: 1.5rem;
    }
    p.date{
        font-size: 0.8rem;
    }
    div.todoinfo > h4{
        font-size: 0.8rem;
    }
    div.todoinfo > img{
        width: 15px;
    }
    img.backToAll{
        width: 2rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;IAEI,+FAA+F;AACnG;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,yBAAyB;AAC7B;AACA;;;;IAII,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;AACA;;IAEI,yBAAyB;AAC7B;AACA;IACI,eAAe;AACnB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI;QACI,mBAAmB;QACnB,mBAAmB;IACvB;IACA;;;QAGI,wHAAwH;IAC5H;IACA;;QAEI,sBAAsB;IAC1B;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,0CAA0C;IAC9C;IACA;QACI,yBAAyB;IAC7B;IACA;;;;QAII,yBAAyB;IAC7B;IACA;;QAEI,yBAAyB;IAC7B;IACA;;;;QAII,sBAAsB;IAC1B;AACJ;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,yCAAyC;AAC7C;AACA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;;;;;;;IAOI,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,iBAAiB;;AAErB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,UAAU;IACV,UAAU;IACV,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,WAAW;;AAEf;AACA;;IAEI,WAAW;AACf;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;AACf;AACA;IACI,WAAW;IACX,aAAa;IACb,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gCAAgC;IAChC,UAAU;AACd;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;IACI,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,QAAQ;AACZ;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,WAAW;;AAEf;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,QAAQ;AACZ;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;;IAEI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iCAAiC;AACrC;AACA;;IAEI,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;AACA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,eAAe;AACnB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,oBAAoB;AACxB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,aAAa;AACjB;AACA;;;;IAII,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;AACA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;AACA;;QAEQ,iBAAiB;IACrB;AACJ;IACI,cAAc;AAClB;AACA;;IAEI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,aAAa;;AAEjB;AACA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA,UAAU;AACV;IACI;QACI,UAAU;QACV,UAAU;QACV,UAAU;;IAEd;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,UAAU;IACd;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;IACf;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,cAAc;QACd,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,SAAS;IACb;IACA;;QAEI,eAAe;QACf,aAAa;IACjB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,cAAc;IAClB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,iBAAiB;IACrB;IACA;;QAEI,SAAS;IACb;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;QACb,mBAAmB;QACnB,iBAAiB;IACrB;AACJ;;AAEA,YAAY;AACZ;IACI;QACI,aAAa;QACb,gCAAgC;QAChC,6BAA6B;QAC7B,SAAS;IACb;IACA;QACI,kBAAkB;QAClB,kBAAkB;QAClB,yBAAyB;IAC7B;IACA;QACI,kBAAkB;QAClB,yBAAyB;QACzB,uBAAuB;IAC3B;IACA;QACI,kBAAkB;QAClB,aAAa;IACjB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,aAAa;QACb,mCAAmC;QACnC,aAAa;QACb,SAAS;IACb;IACA;QACI,eAAe;IACnB;IACA;QACI,aAAa;IACjB;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;QACX,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;QACV,YAAY;QACZ,mBAAmB;QACnB,aAAa;QACb,WAAW;IACf;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,SAAS;IACb;IACA;;QAEI,iBAAiB;IACrB;IACA;QACI,mBAAmB;IACvB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;;QAEI,SAAS;IACb;IACA;;QAEI,WAAW;IACf;IACA;;QAEI,eAAe;IACnB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    --color-fg: #eee;\r\n    --color-bg: #121212;\r\n    --heading: #0464a4;\r\n}\r\n.menuB,\r\n.filter-white{\r\n    filter: invert(100%) sepia(0%) saturate(7435%) hue-rotate(65deg) brightness(105%) contrast(95%);\r\n}\r\n.filter > p{\r\n    color: var(--color-fg);\r\n}\r\ndiv.taskheading > h2{\r\n    color: var(--color-fg);\r\n}\r\ndialog{\r\n    background-color: #272727;\r\n}\r\ndiv.overlay{\r\n    background-color: rgba(29, 25, 25, 0.71);\r\n}\r\ndiv.task-div{\r\n    background-color: #3d3c3c;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    background-color: #474848;\r\n    color: var(--color-bg);\r\n}\r\n.addprojectbtn{\r\n    color: var(--color-fg);\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    background-color: #3d3c3c;\r\n}\r\np.thetasktitle{\r\n    cursor: pointer;\r\n}\r\ndiv.main-task-viewer *p{\r\n    color: var(--color-fg);\r\n}\r\n@media (prefers-color-scheme: light){\r\n    :root{\r\n        --color-bg: #cfcdcd;\r\n        --color-fg: #1A1C20;\r\n    }\r\n    .backImg,\r\n    .del-task,\r\n    .menuB{\r\n        filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%);\r\n    }\r\n    .addprojectbtn,\r\n    .filter > p{\r\n        color: var(--color-bg);\r\n    }\r\n    dialog{\r\n        background-color: #343232;\r\n    }\r\n    div.overlay{\r\n        background-color: rgba(184, 179, 179, 0.9);\r\n    }\r\n    div.task-div{\r\n        background-color: #d1cdcd;\r\n    }\r\n    textarea#tasknote,\r\n    input#tasktitle,\r\n    select#theProjects, \r\n    input#duedate{\r\n        background-color: #d1cdcd;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        background-color: #d1cdcd; \r\n    }\r\n    div.taskheading > h2,\r\n    p.thenote,\r\n    p.date,\r\n    .projectname{\r\n        color: var(--color-bg);\r\n    }\r\n}\r\nhtml, body{\r\n    height: 100%;\r\n}\r\nhtml{\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nbody{\r\n    min-height: 100vh;\r\n    background-color: var(--color-bg);\r\n    color: var(--color-fg);\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\ndiv.container{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-rows: 0.2fr 3fr 0.3fr;\r\n}\r\nheader{\r\n    grid-area: 1/1/1/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\nheader > h1{\r\n    color: var(--heading);\r\n    font-size: 1.5rem;\r\n}\r\ndiv.menu{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\nbutton.backBtn,\r\nbutton.delbtn,\r\nbutton.closeAdd,\r\nbutton.closeEdit,\r\nbutton.closeBtn,\r\nbutton.menuBtn,\r\nbutton.addprojectbtn{\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.menu > .closeBtn > img,\r\ndiv.menu > .menuBtn > img{\r\n    color: var(--color-fg);\r\n    width: 12%;\r\n}\r\nbutton#close.closeBtn{\r\n    display: none;\r\n    z-index: 11;\r\n}\r\ndiv.main{\r\n    padding-top: 50px;\r\n}\r\ndiv.main-container{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 5px;\r\n    gap: 20px;\r\n}\r\ndiv.main-task-viewer{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: none;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 5px;\r\n    gap: 15px;\r\n    padding: 20px;\r\n}\r\n\r\ndiv.main-heading{\r\n    grid-area: 1/1/1/2;\r\n    padding: 10px;\r\n}\r\ndiv.main-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.7rem;\r\n\r\n}\r\ndiv.main-content{\r\n    grid-area: 2/1/3/2;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.add-taskdiv{\r\n    grid-area: 3/1/4/2;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding: 5px;\r\n}\r\n\r\ndiv.add-taskdiv > button.addTask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\nbutton.backBtn > img{\r\n    width: 30px;\r\n}\r\ndialog{\r\n    top: 100px;\r\n    left: 20px;\r\n    width: 90%;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    z-index: 12;\r\n\r\n}\r\n.dailog-Edit,\r\n.addprojectdialog{\r\n    height: 80%;\r\n}\r\ndiv.overlay{\r\n    display: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10;\r\n}\r\ndiv.addbtn{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\ndiv.taskproject{\r\n    display: flex;\r\n    gap: 30px;\r\n    flex-direction: column;\r\n}\r\ndiv.todoinfo{\r\n    display: flex;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\ndiv.todoinfo > img{\r\n    width: 20px;\r\n    opacity: 0.4;\r\n}\r\ndiv.todoinfo > h4{\r\n    opacity: 0.4;\r\n    font-size: 0.9rem;\r\n}\r\ndiv.taskheading {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    align-items: center;\r\n}\r\ndiv.taskheading > h2{\r\n    text-align: center;\r\n}\r\nhr{\r\n    border: 1px solid var(--heading);\r\n    width: 80%;\r\n}\r\np.thenote{\r\n    font-size: 1.2rem;\r\n}\r\ndiv.taskControl{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\nimg.backToAll{\r\n    width: 30px;\r\n    cursor: pointer;\r\n}\r\np.date{\r\n    border: 1px solid var(--heading);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n}\r\ndiv.dailog-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n.filter > p{\r\n    font-size: 1rem;\r\n}\r\n\r\ndiv.filter-div, \r\ndiv.project-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    gap: 5px;\r\n}\r\n.filter{\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.the-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.filter > img{\r\n    width: 2.8rem;\r\n    padding: 10px;\r\n}\r\ndiv.add-project{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    width: 100%;\r\n\r\n}\r\n\r\ndiv.dialog-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.3rem;\r\n}\r\n.addprojectbtn{\r\n    border: none;\r\n}\r\n.addprojectbtn > h3{\r\n    font-size: 2rem;\r\n}\r\ndiv.projects{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\ndiv.edit-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 2px;\r\n}\r\ndiv.edit-delete *{\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\nform.addForm,\r\nform.editForm{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    height: 2.4rem;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    color: var(--color-fg);\r\n    border: 1px solid var(--color-bg);\r\n}\r\nform.addForm > button,\r\nform.editForm > button{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    background-color: #4bb2f9;\r\n    color: var(--color-bg);\r\n    border: none;\r\n}\r\n\r\nbutton.closeAdd,\r\nbutton.closeEdit{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 230px;\r\n}\r\nbutton#closeAdd.closeAdd > img,\r\nbutton#closeEdit.closeEdit > img{\r\n    color: var(--color-fg);\r\n    width: 30%;\r\n}\r\ndiv.content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    gap: 10px;\r\n}\r\ndiv.no-task-div{\r\n    width: 100%;\r\n    padding: 30px;\r\n}\r\ndiv.content{\r\n    width: 90%;\r\n}\r\ndiv.no-task-div > h4{\r\n    font-size: 1rem;\r\n}\r\nh4.no-task{\r\n    color: #4bb2f9;\r\n    text-align: center;\r\n    font-weight: 200;\r\n}\r\ndiv.task-div{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 2.4rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\ndiv.task-div img{\r\n    width: 8%;\r\n}\r\np.thetasktitle{\r\n    font-size: 1.2rem;\r\n}\r\ndiv.right{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\ndiv.dialog-container4{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nform.addTaskForm{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\ndiv.formdetails{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding-bottom: 40px;\r\n}\r\nlabel{\r\n    display: block;\r\n    font-size: 1.4rem;\r\n    color: var(--heading);\r\n    font-weight: 700;\r\n}\r\ndiv.moreDetails{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\ntextarea{\r\n    overflow: auto;\r\n    height: 200px;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: #474848;\r\n    color: var(--color-fg);\r\n    border: none;\r\n}\r\n.formdetails > input::placeholder,\r\ntextarea::placeholder{\r\n    color: var(--color-fg);\r\n    font-size: 1rem;\r\n}\r\ntextarea,\r\n    input[type=text]{\r\n        font-size: 1.2rem;\r\n    }\r\n.formdetails > input{\r\n    height: 2.8rem;\r\n}\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    height: 2.8rem;\r\n    width: 150px;\r\n    padding: 5px;\r\n    font-size: 1rem;\r\n}\r\n.todo-options{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px\r\n}\r\n\r\ndiv.control{\r\n    grid-area: 2/1/2/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 10px;\r\n    \r\n}\r\ndiv.control > button.addATask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.del-task{\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n/*Tablets*/\r\n@media only screen and (min-width: 541px){\r\n    dialog{\r\n        top: 140px;\r\n        left: 40px;\r\n        width: 90%;\r\n    \r\n    }\r\n    header > h1{\r\n        font-size: 2.5rem;\r\n    }\r\n    .filter > p{\r\n        font-size: 1.6rem;\r\n    }\r\n    div.menu > .closeBtn > img,\r\n    div.menu > .menuBtn > img{\r\n        width: 24%;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 500px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 80px;\r\n    }\r\n    .filter > img{\r\n        width: 3.8rem;\r\n    }\r\n    div.task-div img{\r\n        width: 6%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 40px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 2.7rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 2rem;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 2.3rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 4rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 4.4rem;\r\n        padding: 20px;\r\n    }\r\n    .formdetails > input{\r\n        height: 4.8rem;\r\n    }\r\n    textarea{\r\n        height: 40%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 3rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 2rem;\r\n    }\r\n    label{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 15px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 2rem;\r\n        padding: 15px;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 2rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 2rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 2rem;\r\n    }\r\n    div.task-div{\r\n        height: 4.4rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 2.2rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 2.2rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n    div.taskheading > h2{\r\n        font-size: 2.5rem;\r\n    }\r\n    p.thenote{\r\n        font-size: 1.7rem;\r\n    }\r\n    div.todoinfo > img{\r\n        width: 40px;\r\n    }\r\n    div.todoinfo > h4{\r\n        font-size: 1.2rem;\r\n    }\r\n    img.backToAll{\r\n        width: 50px;\r\n    }\r\n    p.date{\r\n        padding: 10px;\r\n        border-radius: 10px;\r\n        font-size: 1.4rem;\r\n    }\r\n}\r\n\r\n/* Laptops */\r\n@media only screen and (min-width: 1024px){\r\n    div.container{\r\n        display: grid;\r\n        grid-template-columns: 0.6fr 3fr;\r\n        grid-template-rows: 0.3fr 3fr;\r\n        gap: 20px;\r\n    }\r\n    div.sidebar{\r\n        padding-top: 100px;\r\n        grid-area: 1/1/3/1;\r\n        background-color: #3d3c3c;\r\n    }\r\n    header{\r\n        grid-area: 2/1/1/3;\r\n        background-color: #3d3c3c;\r\n        justify-content: center;\r\n    }\r\n    div.main{\r\n        grid-area: 2/2/3/3;\r\n        display: flex;\r\n    }\r\n    div.main-container{\r\n        grid-area: 3/1/3/2;\r\n        width: 60%;\r\n        height: 90%;\r\n        display: grid;\r\n        grid-template-rows: 0.2fr 3fr 0.4fr;\r\n        padding: 15px;\r\n        gap: 20px;\r\n    }\r\n    .filter > p{\r\n        font-size: 1rem;\r\n    }\r\n    div.menu {\r\n        display: none;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 280px;\r\n        width: 120px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 30px;\r\n    }\r\n    .filter > img{\r\n        width: 2.5rem;\r\n    }\r\n    div.task-div img{\r\n        width: 3%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 18px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 1.1rem;\r\n    }\r\n    dialog{\r\n        top: 100px;\r\n        left: 300px;\r\n        width: 40%;\r\n        border: none;\r\n        border-radius: 10px;\r\n        padding: 10px;\r\n        z-index: 12;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 1rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 1.6rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 2rem;\r\n        padding: 15px;\r\n    }\r\n    .add-task-dialog{\r\n        top: 100px;\r\n        left: 350px;\r\n        width: 60%;\r\n    }\r\n    .formdetails > input{\r\n        height: 2rem;\r\n    }\r\n    textarea{\r\n        height: 20%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 2rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 1rem;\r\n    }\r\n    label{\r\n        font-size: 1rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 1.3rem;\r\n    }\r\n    div.control{\r\n        align-items: center;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 1rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 1rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 1rem;\r\n    }\r\n    div.task-div{\r\n        height: 2rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 1rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 1rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        width: 100%;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 1rem;\r\n    }\r\n    div.main-task-viewer{\r\n        width: 50%;\r\n        height: 80%;\r\n    }\r\n    p.thenote{\r\n        font-size: 1rem;\r\n    }\r\n    div.taskheading > h2{\r\n        font-size: 1.5rem;\r\n    }\r\n    p.date{\r\n        font-size: 0.8rem;\r\n    }\r\n    div.todoinfo > h4{\r\n        font-size: 0.8rem;\r\n    }\r\n    div.todoinfo > img{\r\n        width: 15px;\r\n    }\r\n    img.backToAll{\r\n        width: 2rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todos)
/* harmony export */ });
class Todos {
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

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   removeAllChildNodes: () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
/* harmony import */ var _img_folder_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/folder.svg */ "./src/img/folder.svg");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg");




function createProject(projects, tags){

    if(tags.firstElementChild){
        removeAllChildNodes(tags);
    }
    projects.forEach(project => {
        
        const theprojectFirstLayer = document.createElement('div');
        theprojectFirstLayer.className = 'the-projects';

        const theprojectSecondLayer = document.createElement('div');
        theprojectSecondLayer.className = 'projects';

        const theprojectThirdLayer = document.createElement('div');
        theprojectThirdLayer.classList.add('filter', 'project-filter')

        const imageFolder = document.createElement('img');
        imageFolder.classList.add('filter-icon', 'filter-white')
        imageFolder.src = _img_folder_svg__WEBPACK_IMPORTED_MODULE_0__;

        const projectName = document.createElement('p');
        projectName.className = 'project-tags';
        projectName.textContent = project;

        theprojectThirdLayer.appendChild(imageFolder);
        theprojectThirdLayer.appendChild(projectName);

        theprojectSecondLayer.appendChild(theprojectThirdLayer);

        const controlDiv = document.createElement('div');
        controlDiv.className = 'edit-delete';

        const editImage = document.createElement('img');
        editImage.classList.add('edit', 'filter-white')
        editImage.src = _img_edit_svg__WEBPACK_IMPORTED_MODULE_1__;

        const deleteImage = document.createElement('img');
        deleteImage.classList.add('delete', 'filter-white')
        deleteImage.src = _img_delete_svg__WEBPACK_IMPORTED_MODULE_2__;

        controlDiv.appendChild(editImage);
        controlDiv.appendChild(deleteImage);

        theprojectSecondLayer.appendChild(controlDiv);

        theprojectFirstLayer.appendChild(theprojectSecondLayer)
        tags.appendChild(theprojectFirstLayer)

    });
    }

// removes  all child elements on the screen
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}



/***/ }),

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromDb: () => (/* binding */ getFromDb),
/* harmony export */   saveToDb: () => (/* binding */ saveToDb)
/* harmony export */ });
function localDb(){
    let dbReturn;

    function saveToDb(dbName, dbValue){

        window.localStorage.setItem(dbName, JSON.stringify(dbValue));
    }
    function getFromDb(dbName){
        const obj = window.localStorage.getItem(dbName)
        dbReturn = JSON.parse(obj);
        return dbReturn
    }

    return{saveToDb, getFromDb}
}

const saveToDb = localDb().saveToDb;
const getFromDb = localDb().getFromDb;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showEachTask: () => (/* binding */ showEachTask),
/* harmony export */   writeAllTask: () => (/* binding */ writeAllTask)
/* harmony export */ });
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg");
/* harmony import */ var _img_back_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/back.svg */ "./src/img/back.svg");
/* harmony import */ var _img_folder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/folder.svg */ "./src/img/folder.svg");




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
                delButton.src = _img_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
    
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
        folderImg.src = _img_folder_svg__WEBPACK_IMPORTED_MODULE_2__;
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
        backButton.src = _img_back_svg__WEBPACK_IMPORTED_MODULE_1__;

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



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ "./src/create.js");
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db.js */ "./src/db.js");





let projects = ["default"];
const dbName = "projects";
(function(){
    const testprojects = (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.getFromDb)(dbName);
    if(!testprojects){
        (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.saveToDb)(dbName, projects);
    }
    else if (testprojects.length == 0){
        (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.saveToDb)(dbName, projects);
    }
})();

// Sort by Projects
function projectSort(){

    function addProject(projectName){
        if(!projectName)
            return;
        projects.unshift(projectName);
        (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.saveToDb)(dbName, projects);
    }
    
    function editProject(oldProjectName, newProjectName){
        projects = (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.getFromDb)(dbName)

        if(!newProjectName)
            return;
        for(let i = 0; i < projects.length; i++){
            if(projects[i] == oldProjectName){
                projects[i] = newProjectName
            }
        }
        (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.saveToDb)(dbName, projects);
        return newProjectName;
    }
    function deleteProject(projectName){
        projects = (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.getFromDb)(dbName)

        for(let i = 0; i < projects.length; i++){
            if(projects[i] == projectName){
                projects.splice(i, 1);
            }
        }
        (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.saveToDb)(dbName, projects);
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.deleteByProject)(projectName);
    }
    function renderProjects(tags){
        projects = (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.getFromDb)(dbName)
        ;(0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(projects, tags);
    }
    function getProject(){
        projects = (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.getFromDb)(dbName);
        return projects;
    }
    return {getProject, deleteProject, editProject, addProject, renderProjects}
}

const addProject = projectSort().addProject;
const renderProjects = projectSort().renderProjects;
const editProject = projectSort().editProject;
const deleteProject = projectSort().deleteProject;
const getProject = projectSort().getProject;



/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkForProject: () => (/* binding */ checkForProject),
/* harmony export */   todosForAWeek: () => (/* binding */ todosForAWeek),
/* harmony export */   todosForMonth: () => (/* binding */ todosForMonth),
/* harmony export */   todosToday: () => (/* binding */ todosToday)
/* harmony export */ });
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisMonth.mjs");




// sort by Date

function mySort(){

    //today
    function todosToday(){
        const todaySort = [];
        const allTodos = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.render)();
        allTodos.forEach(todo => {
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isToday)(todo.dueDate))
                todaySort.push(todo);
        });
        return todaySort;
    }

    // sort by week
    function todosForAWeek(){
        const thisWeek = [];
        const allTodos = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.render)();
        allTodos.forEach(todo => {
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isThisWeek)(todo.dueDate)){
                thisWeek.push(todo);
            }
        });
        
        return thisWeek;
    
    }

    // sort by month
    function todosForMonth(){
        const thisMonth = [];
        const allTodos = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.render)();
        allTodos.forEach(todo => {
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isThisMonth)(todo.dueDate)){
                thisMonth.push(todo);
            }
        });
        
        return thisMonth;   
    }
    // Checks for specific project in the todos array
    function checkForProject(theProjectName){
        const todosByProject = [];
        const allTodos = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.render)();
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


/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   deleteByProject: () => (/* binding */ deleteByProject),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   editTodo: () => (/* binding */ editTodo),
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ "./src/class.js");
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db.js */ "./src/db.js");




let allTodos = [];
const dbName = "allTodos";

(function(){
    const testtodo = (0,_db_js__WEBPACK_IMPORTED_MODULE_1__.getFromDb)(dbName);
    if(!testtodo){
        (0,_db_js__WEBPACK_IMPORTED_MODULE_1__.saveToDb)(dbName, allTodos);
    }
    else if (testtodo.length == 0){
        (0,_db_js__WEBPACK_IMPORTED_MODULE_1__.saveToDb)(dbName, allTodos)
    }
})();

function todosCreator() {

    function createTodo(title, note, dueDate, project, checked){
        const todos = new _class_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, note, dueDate, project, checked);
        addTodos(todos) 
        ;(0,_db_js__WEBPACK_IMPORTED_MODULE_1__.saveToDb)(dbName, allTodos)
    }
    
    function addTodos(todos){
        allTodos.unshift(todos);
    }
    function deleteByProject(projectName){
        allTodos= (0,_db_js__WEBPACK_IMPORTED_MODULE_1__.getFromDb)(dbName);
        if(!allTodos)
            return;
        allTodos.forEach(todo => {
            const index = allTodos.findIndex(theTodo => theTodo.project === projectName);
            allTodos.splice(index, 1);
        });
        (0,_db_js__WEBPACK_IMPORTED_MODULE_1__.saveToDb)(dbName, allTodos)
    }
    function deleteTodo(title){
        allTodos= (0,_db_js__WEBPACK_IMPORTED_MODULE_1__.getFromDb)(dbName);
        const index = allTodos.findIndex(theTodo => theTodo.title === title);
        allTodos.splice(index, 1);
        (0,_db_js__WEBPACK_IMPORTED_MODULE_1__.saveToDb)(dbName, allTodos)
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
        allTodos= (0,_db_js__WEBPACK_IMPORTED_MODULE_1__.getFromDb)(dbName);
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




/***/ }),

/***/ "./src/img/back.svg":
/*!**************************!*\
  !*** ./src/img/back.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "451fc6c9ee4e954e2f0c.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),

/***/ "./src/img/folder.svg":
/*!****************************!*\
  !*** ./src/img/folder.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "637824bc8f2833004ccc.svg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isSameMonth.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/isSameMonth.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameMonth: () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);
  return (
    _dateLeft.getFullYear() === _dateRight.getFullYear() &&
    _dateLeft.getMonth() === _dateRight.getMonth()
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameMonth);


/***/ }),

/***/ "./node_modules/date-fns/isSameWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateLeft, options);
  const dateRightStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateRight, options);

  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);


/***/ }),

/***/ "./node_modules/date-fns/isThisMonth.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/isThisMonth.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisMonth: () => (/* binding */ isThisMonth)
/* harmony export */ });
/* harmony import */ var _isSameMonth_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameMonth.mjs */ "./node_modules/date-fns/isSameMonth.mjs");


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(date) {
  return (0,_isSameMonth_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameMonth)(Date.now(), date);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisMonth);


/***/ }),

/***/ "./node_modules/date-fns/isThisWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isThisWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisWeek: () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameWeek.mjs */ "./node_modules/date-fns/isSameWeek.mjs");


/**
 * The {@link isThisWeek} function options.
 */

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(date, options) {
  return (0,_isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(date, Date.now(), options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisWeek);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort.js */ "./src/sort.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create.js */ "./src/create.js");







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
let availableProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.getProject)();
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
    const thisprojects = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
    (0,_create_js__WEBPACK_IMPORTED_MODULE_5__.removeAllChildNodes)(content);
    (0,_main_js__WEBPACK_IMPORTED_MODULE_4__.writeAllTask)(thisprojects, content);

    eachTask = document.querySelectorAll('.thetasktitle');
    addListerner(eachTask, 'click', showTask);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(tags)
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
    taskViewer.style.display = "none";
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
                const thisprojects = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
                sortToMain(thisprojects);
            }
            else if(todoFilter.lastElementChild.textContent == 'Today'){
                const todayProjects = (0,_sort_js__WEBPACK_IMPORTED_MODULE_2__.todosToday)();
                sortToMain(todayProjects);
            }
            else if(todoFilter.lastElementChild.textContent == 'Week'){
                const weekProjects = (0,_sort_js__WEBPACK_IMPORTED_MODULE_2__.todosForAWeek)();
                sortToMain(weekProjects);
            }
            else{
                const monthProjects = (0,_sort_js__WEBPACK_IMPORTED_MODULE_2__.todosForMonth)();
                sortToMain(monthProjects);
            }
        });
});

function sortToMain(project){
    (0,_create_js__WEBPACK_IMPORTED_MODULE_5__.removeAllChildNodes)(content);
    (0,_main_js__WEBPACK_IMPORTED_MODULE_4__.writeAllTask)(project, content);
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
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(title);
    // console.log(e.target.parentElement);
    // content.removeChild(e.target.parentElement);
    const thisprojects = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
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
    ;(0,_project_js__WEBPACK_IMPORTED_MODULE_3__.addProject)(newProject);
    availableProjects = (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.getProject)();
    (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(tags)
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
    const byProject = (0,_sort_js__WEBPACK_IMPORTED_MODULE_2__.checkForProject)(projectName);
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
    const newName = (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.editProject)(currentProject, textInputEdit.value);
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
    (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject)(projectName);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(tags);

    const thisprojects = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
    (0,_create_js__WEBPACK_IMPORTED_MODULE_5__.removeAllChildNodes)(content);
    (0,_main_js__WEBPACK_IMPORTED_MODULE_4__.writeAllTask)(thisprojects, content);
    
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
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(theTitle, theNote, theDueDate, theProject);
        const thisprojects = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
        (0,_create_js__WEBPACK_IMPORTED_MODULE_5__.removeAllChildNodes)(content);
        (0,_main_js__WEBPACK_IMPORTED_MODULE_4__.writeAllTask)(thisprojects, content);
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
    (0,_create_js__WEBPACK_IMPORTED_MODULE_5__.removeAllChildNodes)(taskProject);
    availableProjects.forEach(project => {
        const option = document.createElement('option');
        option.value = project;
        option.innerText = project;
        taskProject.appendChild(option);
    });
}

// Displays more details on each task
function showTask(e){
    const title = e.target.textContent;
    mainContent.style.display = "none";
    taskViewer.style.display = "grid";
    const todos = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
    todos.forEach(todo => {
        if(todo.title == title){
            (0,_main_js__WEBPACK_IMPORTED_MODULE_4__.showEachTask)(todo, taskViewer);
            const backToAll = document.querySelector('.backToAll');
            backToAll.addEventListener('click', goBack);
        }
    });
}

// Closes the more screen on each task
function goBack(e){
    taskViewer.style.display = "none";
    mainContent.style.display = "grid";
    (0,_create_js__WEBPACK_IMPORTED_MODULE_5__.removeAllChildNodes)(taskViewer);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sUUFBUSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sUUFBUSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sUUFBUSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMENBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQm1DO0FBQ0Q7QUFDSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUFHO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7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LElBQUksc0RBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVTtBQUNsQiw2QkFBNkIsaURBQU07QUFDbkMsUUFBUSwrREFBbUI7QUFDM0IsUUFBUSxzREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFNO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLHNEQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2NsYXNzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZU1vbnRoLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZVdlZWsubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUaGlzTW9udGgubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUaGlzV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuOnJvb3R7XHJcbiAgICAtLWNvbG9yLWZnOiAjZWVlO1xyXG4gICAgLS1jb2xvci1iZzogIzEyMTIxMjtcclxuICAgIC0taGVhZGluZzogIzA0NjRhNDtcclxufVxyXG4ubWVudUIsXHJcbi5maWx0ZXItd2hpdGV7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzNSUpIGh1ZS1yb3RhdGUoNjVkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoOTUlKTtcclxufVxyXG4uZmlsdGVyID4gcHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbn1cclxuZGl2LnRhc2toZWFkaW5nID4gaDJ7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG59XHJcbmRpYWxvZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbn1cclxuZGl2Lm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAyNSwgMjUsIDAuNzEpO1xyXG59XHJcbmRpdi50YXNrLWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbn1cclxudGV4dGFyZWEsXHJcbi5mb3JtZGV0YWlscyA+IGlucHV0LFxyXG5zZWxlY3QsIFxyXG5kaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG59XHJcbi5hZGRwcm9qZWN0YnRue1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxufVxyXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcclxuZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcclxufVxyXG5wLnRoZXRhc2t0aXRsZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5kaXYubWFpbi10YXNrLXZpZXdlciAqcHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbn1cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpe1xyXG4gICAgOnJvb3R7XHJcbiAgICAgICAgLS1jb2xvci1iZzogI2NmY2RjZDtcclxuICAgICAgICAtLWNvbG9yLWZnOiAjMUExQzIwO1xyXG4gICAgfVxyXG4gICAgLmJhY2tJbWcsXHJcbiAgICAuZGVsLXRhc2ssXHJcbiAgICAubWVudUJ7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgwJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgzMWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMSUpO1xyXG4gICAgfVxyXG4gICAgLmFkZHByb2plY3RidG4sXHJcbiAgICAuZmlsdGVyID4gcHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgfVxyXG4gICAgZGlhbG9ne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDMyMzI7XHJcbiAgICB9XHJcbiAgICBkaXYub3ZlcmxheXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgMTc5LCAxNzksIDAuOSk7XHJcbiAgICB9XHJcbiAgICBkaXYudGFzay1kaXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2RjZDtcclxuICAgIH1cclxuICAgIHRleHRhcmVhI3Rhc2tub3RlLFxyXG4gICAgaW5wdXQjdGFza3RpdGxlLFxyXG4gICAgc2VsZWN0I3RoZVByb2plY3RzLCBcclxuICAgIGlucHV0I2R1ZWRhdGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2RjZDtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNkY2Q7IFxyXG4gICAgfVxyXG4gICAgZGl2LnRhc2toZWFkaW5nID4gaDIsXHJcbiAgICBwLnRoZW5vdGUsXHJcbiAgICBwLmRhdGUsXHJcbiAgICAucHJvamVjdG5hbWV7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIH1cclxufVxyXG5odG1sLCBib2R5e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmh0bWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5ib2R5e1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuZGl2LmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuM2ZyO1xyXG59XHJcbmhlYWRlcntcclxuICAgIGdyaWQtYXJlYTogMS8xLzEvMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaGVhZGVyID4gaDF7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5kaXYubWVudXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5idXR0b24uYmFja0J0bixcclxuYnV0dG9uLmRlbGJ0bixcclxuYnV0dG9uLmNsb3NlQWRkLFxyXG5idXR0b24uY2xvc2VFZGl0LFxyXG5idXR0b24uY2xvc2VCdG4sXHJcbmJ1dHRvbi5tZW51QnRuLFxyXG5idXR0b24uYWRkcHJvamVjdGJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5kaXYubWVudSA+IC5jbG9zZUJ0biA+IGltZyxcclxuZGl2Lm1lbnUgPiAubWVudUJ0biA+IGltZ3tcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbiAgICB3aWR0aDogMTIlO1xyXG59XHJcbmJ1dHRvbiNjbG9zZS5jbG9zZUJ0bntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxMTtcclxufVxyXG5kaXYubWFpbntcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbmRpdi5tYWluLWNvbnRhaW5lcntcclxuICAgIGdyaWQtYXJlYTogMy8xLzMvMjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5kaXYubWFpbi10YXNrLXZpZXdlcntcclxuICAgIGdyaWQtYXJlYTogMy8xLzMvMjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGdhcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmRpdi5tYWluLWhlYWRpbmd7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8xLzI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5tYWluLWhlYWRpbmcgPiBoM3tcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG5cclxufVxyXG5kaXYubWFpbi1jb250ZW50e1xyXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmRpdi5hZGQtdGFza2RpdntcclxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYnV0dG9uLmJhY2tCdG4gPiBpbWd7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG5kaWFsb2d7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHotaW5kZXg6IDEyO1xyXG5cclxufVxyXG4uZGFpbG9nLUVkaXQsXHJcbi5hZGRwcm9qZWN0ZGlhbG9ne1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuZGl2Lm92ZXJsYXl7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5kaXYuYWRkYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5kaXYudGFza3Byb2plY3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5kaXYudG9kb2luZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5kaXYudG9kb2luZm8gPiBpbWd7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG5kaXYudG9kb2luZm8gPiBoNHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbmRpdi50YXNraGVhZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5kaXYudGFza2hlYWRpbmcgPiBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5ocntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRpbmcpO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5wLnRoZW5vdGV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5kaXYudGFza0NvbnRyb2x7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pbWcuYmFja1RvQWxse1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxucC5kYXRle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGluZyk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbmRpdi5kYWlsb2ctY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpbHRlciA+IHB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmRpdi5maWx0ZXItZGl2LCBcclxuZGl2LnByb2plY3QtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcbi5maWx0ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGhlLXByb2plY3Rze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpbHRlciA+IGltZ3tcclxuICAgIHdpZHRoOiAyLjhyZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5hZGQtcHJvamVjdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbmRpdi5kaWFsb2ctaGVhZGluZyA+IGgze1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuLmFkZHByb2plY3RidG57XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmFkZHByb2plY3RidG4gPiBoM3tcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5kaXYucHJvamVjdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5lZGl0LWRlbGV0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBnYXA6IDJweDtcclxufVxyXG5kaXYuZWRpdC1kZWxldGUgKntcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmZvcm0uYWRkRm9ybSxcclxuZm9ybS5lZGl0Rm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcbmZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG5mb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJnKTtcclxufVxyXG5mb3JtLmFkZEZvcm0gPiBidXR0b24sXHJcbmZvcm0uZWRpdEZvcm0gPiBidXR0b257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIyZjk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5idXR0b24uY2xvc2VBZGQsXHJcbmJ1dHRvbi5jbG9zZUVkaXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAyMzBweDtcclxufVxyXG5idXR0b24jY2xvc2VBZGQuY2xvc2VBZGQgPiBpbWcsXHJcbmJ1dHRvbiNjbG9zZUVkaXQuY2xvc2VFZGl0ID4gaW1ne1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuZGl2LmNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuZGl2Lm5vLXRhc2stZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbmRpdi5jb250ZW50e1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5kaXYubm8tdGFzay1kaXYgPiBoNHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5oNC5uby10YXNre1xyXG4gICAgY29sb3I6ICM0YmIyZjk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcbmRpdi50YXNrLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi50YXNrLWRpdiBpbWd7XHJcbiAgICB3aWR0aDogOCU7XHJcbn1cclxucC50aGV0YXNrdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5kaXYucmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5kaXYuZGlhbG9nLWNvbnRhaW5lcjR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5mb3JtLmFkZFRhc2tGb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuZGl2LmZvcm1kZXRhaWxze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcbmxhYmVse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuZGl2Lm1vcmVEZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG50ZXh0YXJlYXtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG50ZXh0YXJlYSxcclxuLmZvcm1kZXRhaWxzID4gaW5wdXQsXHJcbnNlbGVjdCwgXHJcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ODQ4O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbnRleHRhcmVhOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxudGV4dGFyZWEsXHJcbiAgICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4uZm9ybWRldGFpbHMgPiBpbnB1dHtcclxuICAgIGhlaWdodDogMi44cmVtO1xyXG59XHJcbnNlbGVjdCwgXHJcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnRvZG8tb3B0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4XHJcbn1cclxuXHJcbmRpdi5jb250cm9se1xyXG4gICAgZ3JpZC1hcmVhOiAyLzEvMi8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG5kaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZGVsLXRhc2t7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qVGFibGV0cyovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQxcHgpe1xyXG4gICAgZGlhbG9ne1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoZWFkZXIgPiBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIC5maWx0ZXIgPiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXHJcbiAgICBkaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyNCU7XHJcbiAgICB9XHJcbiAgICBidXR0b24uY2xvc2VBZGQsXHJcbiAgICBidXR0b24uY2xvc2VFZGl0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24uYmFja0J0biA+IGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgIH1cclxuICAgIC5maWx0ZXIgPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMuOHJlbTtcclxuICAgIH1cclxuICAgIGRpdi50YXNrLWRpdiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDYlO1xyXG4gICAgfVxyXG4gICAgZGl2LmVkaXQtZGVsZXRlICp7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYubWFpbi1oZWFkaW5nID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5hZGRwcm9qZWN0YnRuID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dHtcclxuICAgICAgICBoZWlnaHQ6IDQuOHJlbTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhe1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0LCBcclxuICAgIGRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmZvcm1kZXRhaWxze1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcclxuICAgIGZvcm0uZWRpdEZvcm0gPiBidXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2stZGl2e1xyXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xyXG4gICAgfVxyXG4gICAgcC50aGV0YXNrdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYSxcclxuICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZmlsdGVyLWRpdiwgXHJcbiAgICBkaXYucHJvamVjdC1kaXZ7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2toZWFkaW5nID4gaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICBwLnRoZW5vdGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudG9kb2luZm8gPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYudG9kb2luZm8gPiBoNHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgIGltZy5iYWNrVG9BbGx7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBwLmRhdGV7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBMYXB0b3BzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAgIGRpdi5jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNmZyIDNmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDNmcjtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYuc2lkZWJhcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMy8xO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbiAgICB9XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMS8zO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXYubWFpbntcclxuICAgICAgICBncmlkLWFyZWE6IDIvMi8zLzM7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIGRpdi5tYWluLWNvbnRhaW5lcntcclxuICAgICAgICBncmlkLWFyZWE6IDMvMS8zLzI7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpbHRlciA+IHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBidXR0b24uY2xvc2VBZGQsXHJcbiAgICBidXR0b24uY2xvc2VFZGl0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMjgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmJhY2tCdG4gPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudGFzay1kaXYgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzJTtcclxuICAgIH1cclxuICAgIGRpdi5lZGl0LWRlbGV0ZSAqe1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgZGl2Lm1haW4taGVhZGluZyA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICBkaWFsb2d7XHJcbiAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICBsZWZ0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTI7XHJcbiAgICB9XHJcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmFkZC10YXNrLWRpYWxvZ3tcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDM1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dHtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYXtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgIH1cclxuICAgIHNlbGVjdCwgXHJcbiAgICBkaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZm9ybWRldGFpbHN7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIH1cclxuICAgIGRpdi5jb250cm9se1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2stZGl2e1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxuICAgIHAudGhldGFza3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhLFxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZmlsdGVyLWRpdiwgXHJcbiAgICBkaXYucHJvamVjdC1kaXZ7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIGRpdi5tYWluLXRhc2stdmlld2Vye1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB9XHJcbiAgICBwLnRoZW5vdGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2toZWFkaW5nID4gaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBwLmRhdGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudG9kb2luZm8gPiBoNHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIGRpdi50b2RvaW5mbyA+IGltZ3tcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgIH1cclxuICAgIGltZy5iYWNrVG9BbGx7XHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSwrRkFBK0Y7QUFDbkc7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7Ozs7SUFJSSx5QkFBeUI7SUFDekIsc0JB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QUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTs7UUFFSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBOztRQUVJLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBOztRQUVJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxTQUFTO0lBQ2I7SUFDQTs7UUFFSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tY29sb3ItZmc6ICNlZWU7XFxyXFxuICAgIC0tY29sb3ItYmc6ICMxMjEyMTI7XFxyXFxuICAgIC0taGVhZGluZzogIzA0NjRhNDtcXHJcXG59XFxyXFxuLm1lbnVCLFxcclxcbi5maWx0ZXItd2hpdGV7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDM1JSkgaHVlLXJvdGF0ZSg2NWRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCg5NSUpO1xcclxcbn1cXHJcXG4uZmlsdGVyID4gcHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG59XFxyXFxuZGl2LnRhc2toZWFkaW5nID4gaDJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxufVxcclxcbmRpYWxvZ3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXHJcXG59XFxyXFxuZGl2Lm92ZXJsYXl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDI1LCAyNSwgMC43MSk7XFxyXFxufVxcclxcbmRpdi50YXNrLWRpdntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcXHJcXG59XFxyXFxudGV4dGFyZWEsXFxyXFxuLmZvcm1kZXRhaWxzID4gaW5wdXQsXFxyXFxuc2VsZWN0LCBcXHJcXG5kaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDg0ODtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG59XFxyXFxuLmFkZHByb2plY3RidG57XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbmZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcXHJcXG59XFxyXFxucC50aGV0YXNrdGl0bGV7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuZGl2Lm1haW4tdGFzay12aWV3ZXIgKnB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxufVxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KXtcXHJcXG4gICAgOnJvb3R7XFxyXFxuICAgICAgICAtLWNvbG9yLWJnOiAjY2ZjZGNkO1xcclxcbiAgICAgICAgLS1jb2xvci1mZzogIzFBMUMyMDtcXHJcXG4gICAgfVxcclxcbiAgICAuYmFja0ltZyxcXHJcXG4gICAgLmRlbC10YXNrLFxcclxcbiAgICAubWVudUJ7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDMxZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFkZHByb2plY3RidG4sXFxyXFxuICAgIC5maWx0ZXIgPiBwe1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgfVxcclxcbiAgICBkaWFsb2d7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzMjMyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5vdmVybGF5e1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODQsIDE3OSwgMTc5LCAwLjkpO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNkY2Q7XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWEjdGFza25vdGUsXFxyXFxuICAgIGlucHV0I3Rhc2t0aXRsZSxcXHJcXG4gICAgc2VsZWN0I3RoZVByb2plY3RzLCBcXHJcXG4gICAgaW5wdXQjZHVlZGF0ZXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNkY2Q7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNkY2Q7IFxcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNraGVhZGluZyA+IGgyLFxcclxcbiAgICBwLnRoZW5vdGUsXFxyXFxuICAgIHAuZGF0ZSxcXHJcXG4gICAgLnByb2plY3RuYW1le1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5odG1sLCBib2R5e1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbmh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuZGl2LmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC4zZnI7XFxyXFxufVxcclxcbmhlYWRlcntcXHJcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5oZWFkZXIgPiBoMXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuZGl2Lm1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcbmJ1dHRvbi5iYWNrQnRuLFxcclxcbmJ1dHRvbi5kZWxidG4sXFxyXFxuYnV0dG9uLmNsb3NlQWRkLFxcclxcbmJ1dHRvbi5jbG9zZUVkaXQsXFxyXFxuYnV0dG9uLmNsb3NlQnRuLFxcclxcbmJ1dHRvbi5tZW51QnRuLFxcclxcbmJ1dHRvbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxcclxcbmRpdi5tZW51ID4gLm1lbnVCdG4gPiBpbWd7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIHdpZHRoOiAxMiU7XFxyXFxufVxcclxcbmJ1dHRvbiNjbG9zZS5jbG9zZUJ0bntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgei1pbmRleDogMTE7XFxyXFxufVxcclxcbmRpdi5tYWlue1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG59XFxyXFxuZGl2Lm1haW4tY29udGFpbmVye1xcclxcbiAgICBncmlkLWFyZWE6IDMvMS8zLzI7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbmRpdi5tYWluLXRhc2stdmlld2Vye1xcclxcbiAgICBncmlkLWFyZWE6IDMvMS8zLzI7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5tYWluLWhlYWRpbmd7XFxyXFxuICAgIGdyaWQtYXJlYTogMS8xLzEvMjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuZGl2Lm1haW4taGVhZGluZyA+IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcblxcclxcbn1cXHJcXG5kaXYubWFpbi1jb250ZW50e1xcclxcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5kaXYuYWRkLXRhc2tkaXZ7XFxyXFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbmJ1dHRvbi5iYWNrQnRuID4gaW1ne1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuZGlhbG9ne1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEyO1xcclxcblxcclxcbn1cXHJcXG4uZGFpbG9nLUVkaXQsXFxyXFxuLmFkZHByb2plY3RkaWFsb2d7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5kaXYub3ZlcmxheXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuZGl2LmFkZGJ0bntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcbmRpdi50YXNrcHJvamVjdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5kaXYudG9kb2luZm97XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuZGl2LnRvZG9pbmZvID4gaW1ne1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5kaXYudG9kb2luZm8gPiBoNHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuZGl2LnRhc2toZWFkaW5nIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmRpdi50YXNraGVhZGluZyA+IGgye1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbmhye1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxucC50aGVub3Rle1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuZGl2LnRhc2tDb250cm9se1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmltZy5iYWNrVG9BbGx7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbnAuZGF0ZXtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuZGl2LmRhaWxvZy1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5maWx0ZXIgPiBwe1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmRpdi5maWx0ZXItZGl2LCBcXHJcXG5kaXYucHJvamVjdC1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLmZpbHRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4udGhlLXByb2plY3Rze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZpbHRlciA+IGltZ3tcXHJcXG4gICAgd2lkdGg6IDIuOHJlbTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuZGl2LmFkZC1wcm9qZWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmRpdi5kaWFsb2ctaGVhZGluZyA+IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG4uYWRkcHJvamVjdGJ0bntcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uYWRkcHJvamVjdGJ0biA+IGgze1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbmRpdi5wcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmVkaXQtZGVsZXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiAycHg7XFxyXFxufVxcclxcbmRpdi5lZGl0LWRlbGV0ZSAqe1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5mb3JtLmFkZEZvcm0sXFxyXFxuZm9ybS5lZGl0Rm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1iZyk7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG5mb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjJmOTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uY2xvc2VBZGQsXFxyXFxuYnV0dG9uLmNsb3NlRWRpdHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDIzMHB4O1xcclxcbn1cXHJcXG5idXR0b24jY2xvc2VBZGQuY2xvc2VBZGQgPiBpbWcsXFxyXFxuYnV0dG9uI2Nsb3NlRWRpdC5jbG9zZUVkaXQgPiBpbWd7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcbmRpdi5jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmRpdi5uby10YXNrLWRpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcbmRpdi5jb250ZW50e1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5kaXYubm8tdGFzay1kaXYgPiBoNHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5oNC5uby10YXNre1xcclxcbiAgICBjb2xvcjogIzRiYjJmOTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5kaXYudGFzay1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIuNHJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYudGFzay1kaXYgaW1ne1xcclxcbiAgICB3aWR0aDogOCU7XFxyXFxufVxcclxcbnAudGhldGFza3RpdGxle1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuZGl2LnJpZ2h0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmRpdi5kaWFsb2ctY29udGFpbmVyNHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuZm9ybS5hZGRUYXNrRm9ybXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuZGl2LmZvcm1kZXRhaWxze1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxubGFiZWx7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5kaXYubW9yZURldGFpbHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxudGV4dGFyZWF7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG50ZXh0YXJlYSxcXHJcXG4uZm9ybWRldGFpbHMgPiBpbnB1dCxcXHJcXG5zZWxlY3QsIFxcclxcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ODQ4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxudGV4dGFyZWEsXFxyXFxuICAgIGlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgfVxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0e1xcclxcbiAgICBoZWlnaHQ6IDIuOHJlbTtcXHJcXG59XFxyXFxuc2VsZWN0LCBcXHJcXG5kaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgaGVpZ2h0OiAyLjhyZW07XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi50b2RvLW9wdGlvbnN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweFxcclxcbn1cXHJcXG5cXHJcXG5kaXYuY29udHJvbHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMi8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcbmRpdi5jb250cm9sID4gYnV0dG9uLmFkZEFUYXNre1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmRlbC10YXNre1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi8qVGFibGV0cyovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDFweCl7XFxyXFxuICAgIGRpYWxvZ3tcXHJcXG4gICAgICAgIHRvcDogMTQwcHg7XFxyXFxuICAgICAgICBsZWZ0OiA0MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG4gICAgaGVhZGVyID4gaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyID4gcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxcclxcbiAgICBkaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDI0JTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uY2xvc2VBZGQsXFxyXFxuICAgIGJ1dHRvbi5jbG9zZUVkaXR7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiA1MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uYmFja0J0biA+IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXIgPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMy44cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogNiU7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmVkaXQtZGVsZXRlICp7XFxyXFxuICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWFpbi1oZWFkaW5nID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuN3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbi5hZGRwcm9qZWN0YnRuID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNGZyO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQuNHJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXR7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICB0ZXh0YXJlYXtcXHJcXG4gICAgICAgIGhlaWdodDogNDAlO1xcclxcbiAgICB9XFxyXFxuICAgIHNlbGVjdCwgXFxyXFxuICAgIGRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xcclxcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGxhYmVse1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmZvcm1kZXRhaWxze1xcclxcbiAgICAgICAgZ2FwOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmNvbnRyb2wgPiBidXR0b24uYWRkQVRhc2t7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRhc2stZGl2e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0LjRyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgcC50aGV0YXNrdGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICB0ZXh0YXJlYSxcXHJcXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5maWx0ZXItZGl2LCBcXHJcXG4gICAgZGl2LnByb2plY3QtZGl2e1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNraGVhZGluZyA+IGgye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgcC50aGVub3Rle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRvZG9pbmZvID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRvZG9pbmZvID4gaDR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBpbWcuYmFja1RvQWxse1xcclxcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgcC5kYXRle1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXB0b3BzICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgICBkaXYuY29udGFpbmVye1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC42ZnIgM2ZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAzZnI7XFxyXFxuICAgICAgICBnYXA6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnNpZGViYXJ7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEvMS8zLzE7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xcclxcbiAgICB9XFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMi8xLzEvMztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWFpbntcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMi8yLzMvMztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1haW4tY29udGFpbmVye1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyID4gcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWVudSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbi5jbG9zZUFkZCxcXHJcXG4gICAgYnV0dG9uLmNsb3NlRWRpdHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDI4MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbi5iYWNrQnRuID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZpbHRlciA+IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRhc2stZGl2IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAzJTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZWRpdC1kZWxldGUgKntcXHJcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tYWluLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5hZGQtdGFza2RpdiA+IGJ1dHRvbi5hZGRUYXNre1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGlhbG9ne1xcclxcbiAgICAgICAgdG9wOiAxMDBweDtcXHJcXG4gICAgICAgIGxlZnQ6IDMwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTI7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uLmFkZHByb2plY3RidG4gPiBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkVGFza0Zvcm17XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xcclxcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYWRkLXRhc2stZGlhbG9ne1xcclxcbiAgICAgICAgdG9wOiAxMDBweDtcXHJcXG4gICAgICAgIGxlZnQ6IDM1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dHtcXHJcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICB0ZXh0YXJlYXtcXHJcXG4gICAgICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB9XFxyXFxuICAgIHNlbGVjdCwgXFxyXFxuICAgIGRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xcclxcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGxhYmVse1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5mb3JtZGV0YWlsc3tcXHJcXG4gICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBidXR0b257XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuY29udHJvbHtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmNvbnRyb2wgPiBidXR0b24uYWRkQVRhc2t7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRhc2stZGl2e1xcclxcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHAudGhldGFza3RpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHRleHRhcmVhLFxcclxcbiAgICBpbnB1dFt0eXBlPXRleHRde1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5maWx0ZXItZGl2LCBcXHJcXG4gICAgZGl2LnByb2plY3QtZGl2e1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBidXR0b257XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1haW4tdGFzay12aWV3ZXJ7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgcC50aGVub3Rle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNraGVhZGluZyA+IGgye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgcC5kYXRle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRvZG9pbmZvID4gaDR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudG9kb2luZm8gPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBpbWcuYmFja1RvQWxse1xcclxcbiAgICAgICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9zIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBub3RlLCBkdWVEYXRlLCAgcHJvamVjdCwgY2hlY2tlZCl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICBpZihwcm9qZWN0ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIGlmKGNoZWNrZWQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICBcclxuICAgIH07XHJcbn07IiwiaW1wb3J0IEZvbGRlciBmcm9tICcuL2ltZy9mb2xkZXIuc3ZnJztcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi9pbWcvZWRpdC5zdmcnO1xyXG5pbXBvcnQgRGVsZXRlIGZyb20gJy4vaW1nL2RlbGV0ZS5zdmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0cywgdGFncyl7XHJcblxyXG4gICAgaWYodGFncy5maXJzdEVsZW1lbnRDaGlsZCl7XHJcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyh0YWdzKTtcclxuICAgIH1cclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdEZpcnN0TGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGVwcm9qZWN0Rmlyc3RMYXllci5jbGFzc05hbWUgPSAndGhlLXByb2plY3RzJztcclxuXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdFNlY29uZExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhlcHJvamVjdFNlY29uZExheWVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0cyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHRoZXByb2plY3RUaGlyZExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhlcHJvamVjdFRoaXJkTGF5ZXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVyJywgJ3Byb2plY3QtZmlsdGVyJylcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWFnZUZvbGRlci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItaWNvbicsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGltYWdlRm9sZGVyLnNyYyA9IEZvbGRlcjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGFncyc7XHJcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0VGhpcmRMYXllci5hcHBlbmRDaGlsZChpbWFnZUZvbGRlcik7XHJcbiAgICAgICAgdGhlcHJvamVjdFRoaXJkTGF5ZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuYXBwZW5kQ2hpbGQodGhlcHJvamVjdFRoaXJkTGF5ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udHJvbERpdi5jbGFzc05hbWUgPSAnZWRpdC1kZWxldGUnO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBlZGl0SW1hZ2UuY2xhc3NMaXN0LmFkZCgnZWRpdCcsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGVkaXRJbWFnZS5zcmMgPSBFZGl0O1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGRlbGV0ZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGRlbGV0ZUltYWdlLnNyYyA9IERlbGV0ZTtcclxuXHJcbiAgICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChlZGl0SW1hZ2UpO1xyXG4gICAgICAgIGNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpO1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuYXBwZW5kQ2hpbGQoY29udHJvbERpdik7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RGaXJzdExheWVyLmFwcGVuZENoaWxkKHRoZXByb2plY3RTZWNvbmRMYXllcilcclxuICAgICAgICB0YWdzLmFwcGVuZENoaWxkKHRoZXByb2plY3RGaXJzdExheWVyKVxyXG5cclxuICAgIH0pO1xyXG4gICAgfVxyXG5cclxuLy8gcmVtb3ZlcyAgYWxsIGNoaWxkIGVsZW1lbnRzIG9uIHRoZSBzY3JlZW5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpe1xyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVtb3ZlQWxsQ2hpbGROb2RlcywgY3JlYXRlUHJvamVjdH0iLCJmdW5jdGlvbiBsb2NhbERiKCl7XHJcbiAgICBsZXQgZGJSZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZVRvRGIoZGJOYW1lLCBkYlZhbHVlKXtcclxuXHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGRiTmFtZSwgSlNPTi5zdHJpbmdpZnkoZGJWYWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0RnJvbURiKGRiTmFtZSl7XHJcbiAgICAgICAgY29uc3Qgb2JqID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGRiTmFtZSlcclxuICAgICAgICBkYlJldHVybiA9IEpTT04ucGFyc2Uob2JqKTtcclxuICAgICAgICByZXR1cm4gZGJSZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57c2F2ZVRvRGIsIGdldEZyb21EYn1cclxufVxyXG5cclxuY29uc3Qgc2F2ZVRvRGIgPSBsb2NhbERiKCkuc2F2ZVRvRGI7XHJcbmNvbnN0IGdldEZyb21EYiA9IGxvY2FsRGIoKS5nZXRGcm9tRGI7XHJcbmV4cG9ydCB7c2F2ZVRvRGIsIGdldEZyb21EYn0iLCJpbXBvcnQgRGVsIGZyb20gJy4vaW1nL2RlbGV0ZS5zdmcnO1xyXG5pbXBvcnQgQmFjayBmcm9tICcuL2ltZy9iYWNrLnN2Zyc7XHJcbmltcG9ydCBmb2xkZXIgZnJvbSAnLi9pbWcvZm9sZGVyLnN2Zyc7XHJcblxyXG5mdW5jdGlvbiB3cml0ZVRvTWFpbigpe1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlQWxsVGFzayh0b2Rvcywgbm9kZSl7XHJcblxyXG4gICAgICAgIGlmKCF0b2Rvcyl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodG9kb3MubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ25vLXRhc2stZGl2JztcclxuICAgICAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ05vIHRhc2sgZm91bmQnO1xyXG4gICAgICAgICAgICBoZWFkaW5nLmNsYXNzTmFtZSA9ICduby10YXNrJztcclxuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIFxyXG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5jbGFzc05hbWUgPSAndGFzay1kaXYnO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrSG9sZGVyLmNsYXNzTmFtZSA9IFwicmlnaHRcIlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrZXIudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VyLmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgIHRhc2suY2xhc3NOYW1lID0gXCJ0aGV0YXNrdGl0bGVcIjtcclxuICAgICAgICAgICAgICAgIHRhc2suaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICAgICAgICAgICAgICAgIHRhc2tIb2xkZXIuYXBwZW5kQ2hpbGQoY2hlY2tlcik7XHJcbiAgICAgICAgICAgICAgICB0YXNrSG9sZGVyLmFwcGVuZENoaWxkKHRhc2spO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGRlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWwtdGFzaycsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgICAgICAgICAgZGVsQnV0dG9uLnNyYyA9IERlbDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrSG9sZGVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd0VhY2hUYXNrKHRvZG8sIG5vZGUpe1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tQcm9qZWN0LmNsYXNzTmFtZSA9ICd0YXNrcHJvamVjdCc7XHJcbiAgICBcclxuICAgICAgICBjb25zdCB0YXNrRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza0RldGFpbC5jbGFzc05hbWUgPSAndG9kb2luZm8nO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZm9sZGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgZm9sZGVySW1nLmNsYXNzTmFtZSA9IFwiZmlsdGVyLXdoaXRlXCI7XHJcbiAgICAgICAgZm9sZGVySW1nLnNyYyA9IGZvbGRlcjtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gdG9kby5wcm9qZWN0O1xyXG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdG5hbWVcIjtcclxuXHJcbiAgICAgICAgdGFza0RldGFpbC5hcHBlbmRDaGlsZChmb2xkZXJJbWcpO1xyXG4gICAgICAgIHRhc2tEZXRhaWwuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza0hlYWRpbmcuY2xhc3NOYW1lID0gXCJ0YXNraGVhZGluZ1wiO1xyXG5cclxuICAgICAgICB0YXNrUHJvamVjdC5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsKTtcclxuICAgICAgICB0YXNrUHJvamVjdC5hcHBlbmRDaGlsZCh0YXNrSGVhZGluZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGVcclxuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuXHJcbiAgICAgICAgdGFza0hlYWRpbmcuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICB0YXNrSGVhZGluZy5hcHBlbmRDaGlsZChsaW5lKTtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbm90ZURpdi5jbGFzc05hbWUgPSAnbm90ZURpdic7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbm90ZS5pbm5lclRleHQgPSB0b2RvLm5vdGU7XHJcbiAgICAgICAgbm90ZS5jbGFzc05hbWUgPSBcInRoZW5vdGVcIlxyXG5cclxuICAgICAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGUpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tDb250cm9sLmNsYXNzTmFtZSA9IFwidGFza0NvbnRyb2xcIjtcclxuICAgICAgICBjb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgYmFja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdiYWNrVG9BbGwnLCAnZmlsdGVyLXdoaXRlJylcclxuICAgICAgICBiYWNrQnV0dG9uLnNyYyA9IEJhY2s7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGF0ZS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XHJcbiAgICAgICAgZGF0ZS5jbGFzc05hbWUgPSBcImRhdGVcIjtcclxuXHJcbiAgICAgICAgdGFza0NvbnRyb2wuYXBwZW5kQ2hpbGQoYmFja0J1dHRvbik7XHJcbiAgICAgICAgdGFza0NvbnRyb2wuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcblxyXG5cclxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0KTtcclxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKG5vdGVEaXYpO1xyXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGFza0NvbnRyb2wpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt3cml0ZUFsbFRhc2ssIHNob3dFYWNoVGFza31cclxufVxyXG5cclxuY29uc3Qgd3JpdGVBbGxUYXNrID0gd3JpdGVUb01haW4oKS53cml0ZUFsbFRhc2s7XHJcbmNvbnN0IHNob3dFYWNoVGFzayA9d3JpdGVUb01haW4oKS5zaG93RWFjaFRhc2s7XHJcblxyXG5leHBvcnQge3dyaXRlQWxsVGFzaywgc2hvd0VhY2hUYXNrfSIsImltcG9ydCB7ZGVsZXRlQnlQcm9qZWN0IH0gZnJvbSBcIi4vdG9kb3MuanNcIjtcclxuaW1wb3J0IHtjcmVhdGVQcm9qZWN0fSBmcm9tICcuL2NyZWF0ZS5qcyc7XHJcbmltcG9ydCB7c2F2ZVRvRGIsIGdldEZyb21EYn0gZnJvbSAnLi9kYi5qcyc7XHJcblxyXG5cclxubGV0IHByb2plY3RzID0gW1wiZGVmYXVsdFwiXTtcclxuY29uc3QgZGJOYW1lID0gXCJwcm9qZWN0c1wiO1xyXG4oZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IHRlc3Rwcm9qZWN0cyA9IGdldEZyb21EYihkYk5hbWUpO1xyXG4gICAgaWYoIXRlc3Rwcm9qZWN0cyl7XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBwcm9qZWN0cyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0ZXN0cHJvamVjdHMubGVuZ3RoID09IDApe1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgcHJvamVjdHMpO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuLy8gU29ydCBieSBQcm9qZWN0c1xyXG5mdW5jdGlvbiBwcm9qZWN0U29ydCgpe1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGlmKCFwcm9qZWN0TmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHByb2plY3RzLnVuc2hpZnQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgcHJvamVjdHMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdChvbGRQcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpe1xyXG4gICAgICAgIHByb2plY3RzID0gZ2V0RnJvbURiKGRiTmFtZSlcclxuXHJcbiAgICAgICAgaWYoIW5ld1Byb2plY3ROYW1lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYocHJvamVjdHNbaV0gPT0gb2xkUHJvamVjdE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0gPSBuZXdQcm9qZWN0TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgcHJvamVjdHMpO1xyXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0TmFtZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpe1xyXG4gICAgICAgIHByb2plY3RzID0gZ2V0RnJvbURiKGRiTmFtZSlcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYocHJvamVjdHNbaV0gPT0gcHJvamVjdE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgcHJvamVjdHMpO1xyXG4gICAgICAgIGRlbGV0ZUJ5UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyh0YWdzKXtcclxuICAgICAgICBwcm9qZWN0cyA9IGdldEZyb21EYihkYk5hbWUpXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0cywgdGFncyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KCl7XHJcbiAgICAgICAgcHJvamVjdHMgPSBnZXRGcm9tRGIoZGJOYW1lKTtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2dldFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0c31cclxufVxyXG5cclxuY29uc3QgYWRkUHJvamVjdCA9IHByb2plY3RTb3J0KCkuYWRkUHJvamVjdDtcclxuY29uc3QgcmVuZGVyUHJvamVjdHMgPSBwcm9qZWN0U29ydCgpLnJlbmRlclByb2plY3RzO1xyXG5jb25zdCBlZGl0UHJvamVjdCA9IHByb2plY3RTb3J0KCkuZWRpdFByb2plY3Q7XHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBwcm9qZWN0U29ydCgpLmRlbGV0ZVByb2plY3Q7XHJcbmNvbnN0IGdldFByb2plY3QgPSBwcm9qZWN0U29ydCgpLmdldFByb2plY3Q7XHJcblxyXG5leHBvcnQge2dldFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0c30iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge2lzVG9kYXksIGlzVGhpc1dlZWssIGlzVGhpc01vbnRofSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcblxyXG4vLyBzb3J0IGJ5IERhdGVcclxuXHJcbmZ1bmN0aW9uIG15U29ydCgpe1xyXG5cclxuICAgIC8vdG9kYXlcclxuICAgIGZ1bmN0aW9uIHRvZG9zVG9kYXkoKXtcclxuICAgICAgICBjb25zdCB0b2RheVNvcnQgPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVG9kYXkodG9kby5kdWVEYXRlKSlcclxuICAgICAgICAgICAgICAgIHRvZGF5U29ydC5wdXNoKHRvZG8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b2RheVNvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc29ydCBieSB3ZWVrXHJcbiAgICBmdW5jdGlvbiB0b2Rvc0ZvckFXZWVrKCl7XHJcbiAgICAgICAgY29uc3QgdGhpc1dlZWsgPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVGhpc1dlZWsodG9kby5kdWVEYXRlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzV2Vlay5wdXNoKHRvZG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXNXZWVrO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc29ydCBieSBtb250aFxyXG4gICAgZnVuY3Rpb24gdG9kb3NGb3JNb250aCgpe1xyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUaGlzTW9udGgodG9kby5kdWVEYXRlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzTW9udGgucHVzaCh0b2RvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzTW9udGg7ICAgXHJcbiAgICB9XHJcbiAgICAvLyBDaGVja3MgZm9yIHNwZWNpZmljIHByb2plY3QgaW4gdGhlIHRvZG9zIGFycmF5XHJcbiAgICBmdW5jdGlvbiBjaGVja0ZvclByb2plY3QodGhlUHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IHRvZG9zQnlQcm9qZWN0ID0gW107XHJcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSByZW5kZXIoKTtcclxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZih0b2RvLnByb2plY3QgPT0gdGhlUHJvamVjdE5hbWUpXHJcbiAgICAgICAgICAgICAgICB0b2Rvc0J5UHJvamVjdC51bnNoaWZ0KHRvZG8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b2Rvc0J5UHJvamVjdFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y2hlY2tGb3JQcm9qZWN0LCB0b2Rvc1RvZGF5LCB0b2Rvc0ZvckFXZWVrLCB0b2Rvc0Zvck1vbnRofVxyXG59XHJcblxyXG5jb25zdCB0b2Rvc0ZvckFXZWVrID0gbXlTb3J0KCkudG9kb3NGb3JBV2VlaztcclxuY29uc3QgdG9kb3NGb3JNb250aCA9IG15U29ydCgpLnRvZG9zRm9yTW9udGg7XHJcbmNvbnN0IHRvZG9zVG9kYXkgPSBteVNvcnQoKS50b2Rvc1RvZGF5O1xyXG5jb25zdCBjaGVja0ZvclByb2plY3QgPSBteVNvcnQoKS5jaGVja0ZvclByb2plY3Q7XHJcbmV4cG9ydCB7Y2hlY2tGb3JQcm9qZWN0LCB0b2Rvc1RvZGF5LCB0b2Rvc0ZvckFXZWVrLCB0b2Rvc0Zvck1vbnRofSIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi9jbGFzcy5qc1wiXHJcbmltcG9ydCB7c2F2ZVRvRGIsIGdldEZyb21EYn0gZnJvbSAnLi9kYi5qcyc7XHJcblxyXG5cclxubGV0IGFsbFRvZG9zID0gW107XHJcbmNvbnN0IGRiTmFtZSA9IFwiYWxsVG9kb3NcIjtcclxuXHJcbihmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdGVzdHRvZG8gPSBnZXRGcm9tRGIoZGJOYW1lKTtcclxuICAgIGlmKCF0ZXN0dG9kbyl7XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBhbGxUb2Rvcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0ZXN0dG9kby5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBhbGxUb2RvcylcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIHRvZG9zQ3JlYXRvcigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBub3RlLCBkdWVEYXRlLCBwcm9qZWN0LCBjaGVja2VkKXtcclxuICAgICAgICBjb25zdCB0b2RvcyA9IG5ldyBUb2Rvcyh0aXRsZSwgbm90ZSwgZHVlRGF0ZSwgcHJvamVjdCwgY2hlY2tlZCk7XHJcbiAgICAgICAgYWRkVG9kb3ModG9kb3MpIFxyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgYWxsVG9kb3MpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGFkZFRvZG9zKHRvZG9zKXtcclxuICAgICAgICBhbGxUb2Rvcy51bnNoaWZ0KHRvZG9zKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUJ5UHJvamVjdChwcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgYWxsVG9kb3M9IGdldEZyb21EYihkYk5hbWUpO1xyXG4gICAgICAgIGlmKCFhbGxUb2RvcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYWxsVG9kb3MuZmluZEluZGV4KHRoZVRvZG8gPT4gdGhlVG9kby5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIGFsbFRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBhbGxUb2RvcylcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8odGl0bGUpe1xyXG4gICAgICAgIGFsbFRvZG9zPSBnZXRGcm9tRGIoZGJOYW1lKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFsbFRvZG9zLmZpbmRJbmRleCh0aGVUb2RvID0+IHRoZVRvZG8udGl0bGUgPT09IHRpdGxlKTtcclxuICAgICAgICBhbGxUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgYWxsVG9kb3MpXHJcbiAgICB9IFxyXG4gICAgZnVuY3Rpb24gZWRpdFRvZG8odG9kb3MsIG5ld1RpdGxlLCBuZXdOb3RlLCBuZXdEdWVEYXRlLCBuZXdQcm9qZWN0KXtcclxuICAgICAgICBpZihuZXdUaXRsZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRvZG9zLnRpdGxlID0gbmV3VGl0bGVcclxuICAgICAgICBpZihuZXdOb3RlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3Mubm90ZSA9IG5ld05vdGVcclxuICAgICAgICBpZihuZXdEdWVEYXRlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3MuZHVlRGF0ZSA9IG5ld0R1ZURhdGVcclxuICAgICAgICBpZihuZXdQcm9qZWN0ICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3MucHJvamVjdCA9IG5ld1Byb2plY3Q7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgICAgICBhbGxUb2Rvcz0gZ2V0RnJvbURiKGRiTmFtZSk7XHJcbiAgICAgICAgaWYoIWFsbFRvZG9zKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsVG9kb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtkZWxldGVCeVByb2plY3QsIGRlbGV0ZVRvZG8sIGNyZWF0ZVRvZG8sIGVkaXRUb2RvLCByZW5kZXJ9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRvZG8gPSB0b2Rvc0NyZWF0b3IoKS5jcmVhdGVUb2RvO1xyXG5jb25zdCBkZWxldGVUb2RvID0gdG9kb3NDcmVhdG9yKCkuZGVsZXRlVG9kbztcclxuY29uc3QgZWRpdFRvZG8gPSB0b2Rvc0NyZWF0b3IoKS5lZGl0VG9kbztcclxuY29uc3QgcmVuZGVyID0gdG9kb3NDcmVhdG9yKCkucmVuZGVyO1xyXG5jb25zdCBkZWxldGVCeVByb2plY3QgPSB0b2Rvc0NyZWF0b3IoKS5kZWxldGVCeVByb2plY3Q7XHJcblxyXG5cclxuZXhwb3J0IHsgZGVsZXRlQnlQcm9qZWN0LCBjcmVhdGVUb2RvLCBkZWxldGVUb2RvLCByZW5kZXIsIGVkaXRUb2RvfSIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcblxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZkRheSA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZEYXk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lRGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZU1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE0LCA4LCAyNSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE1IGluIHRoZSBzYW1lIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiksIG5ldyBEYXRlKDIwMTUsIDgsIDI1KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU1vbnRoKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuICByZXR1cm4gKFxuICAgIF9kYXRlTGVmdC5nZXRGdWxsWWVhcigpID09PSBfZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICBfZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gX2RhdGVSaWdodC5nZXRNb250aCgpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lTW9udGg7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNTYW1lV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGF0ZUxlZnQsIG9wdGlvbnMpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVSaWdodCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZXZWVrID09PSArZGF0ZVJpZ2h0U3RhcnRPZldlZWs7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lV2VlaztcbiIsImltcG9ydCB7IGlzU2FtZU1vbnRoIH0gZnJvbSBcIi4vaXNTYW1lTW9udGgubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIG1vbnRoIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoaXMgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDE1IFNlcHRlbWJlciAyMDE0IGluIHRoaXMgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAxNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUaGlzTW9udGgoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lTW9udGgoRGF0ZS5ub3coKSwgZGF0ZSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUaGlzTW9udGg7XG4iLCJpbXBvcnQgeyBpc1NhbWVXZWVrIH0gZnJvbSBcIi4vaXNTYW1lV2Vlay5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzVGhpc1dlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUaGlzV2VlaztcbiIsImltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7Y3JlYXRlVG9kbywgZWRpdFRvZG8sIGRlbGV0ZVRvZG8sIHJlbmRlcn1mcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge2NoZWNrRm9yUHJvamVjdCwgdG9kb3NUb2RheSwgdG9kb3NGb3JBV2VlaywgdG9kb3NGb3JNb250aH0gZnJvbSBcIi4vc29ydC5qc1wiO1xyXG5pbXBvcnQge2dldFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0LmpzJztcclxuaW1wb3J0IHt3cml0ZUFsbFRhc2ssIHNob3dFYWNoVGFza30gZnJvbSAnLi9tYWluLmpzJztcclxuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gJy4vY3JlYXRlLmpzJztcclxuXHJcbi8vRG9tZSBDYWNoZVxyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKTtcclxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcclxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpYmFyRGFpbG9nJyk7XHJcbmNvbnN0IGZpbHRlclRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9zJyk7XHJcbmNvbnN0IHRoZVRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGhlLXByb2plY3RzJyk7XHJcbmNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbG9nLUVkaXQnKTtcclxuY29uc3QgdGV4dElucHV0RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QnKTtcclxuY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0QnRuJyk7XHJcbmNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRGb3JtJyk7XHJcbmxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZHByb2plY3RidG4nKTtcclxuY29uc3QgYWRkUHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRwcm9qZWN0ZGlhbG9nJyk7XHJcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRwcm9qZWN0dGV4dCcpO1xyXG5jb25zdCBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ0FkZFByb2plY3RCdG4nKVxyXG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEZvcm0nKTtcclxuY29uc3QgY2xvc2VBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VBZGQnKTtcclxuY29uc3QgY2xvc2VFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlRWRpdCcpXHJcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTtcclxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0Zvcm0nKTtcclxuY29uc3QgYWRkVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1kaWFsb2cnKTtcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3RpdGxlJyk7XHJcbmNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza25vdGUnKTtcclxuY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJyk7XHJcbmxldCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVQcm9qZWN0cycpO1xyXG5jb25zdCBhZGRBVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRBVGFzaycpO1xyXG5sZXQgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcclxuY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrQnRuJyk7XHJcbmxldCBkZWxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbC10YXNrJyk7XHJcbmxldCBhdmFpbGFibGVQcm9qZWN0cyA9IGdldFByb2plY3QoKTtcclxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5sZXQgZWFjaFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGhldGFza3RpdGxlJyk7XHJcbmNvbnN0IHRhc2tWaWV3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10YXNrLXZpZXdlcicpXHJcbmxldCB0YWdzO1xyXG5cclxuLy9EaWZmZXJlbnRpYXRpbmcgYmV0d2VlbiB0aGUgbW9iaWxlIGFuZCBsYXJnZSBzY3JlZW4gc2lkZWJhclxyXG4oZnVuY3Rpb24oKXsgIFxyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCl7XHJcbiAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdGhlVGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09IFwic2lkZWJhclwiKXtcclxuICAgICAgICAgICAgICAgIHRhZ3MgPSB0YWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGlmKGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09IFwic2lkZWJhclwiKXtcclxuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdG4gPSBidG47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgdGhlVGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09IFwic2liYXJEYWlsb2dcIil7XHJcbiAgICAgICAgICAgICAgICB0YWdzID0gdGFnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGlmKGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09IFwic2liYXJEYWlsb2dcIil7XHJcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuID0gYnRuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbi8qIElJRkUgdGhhdCBjcmVhdGVzIHRoZSBwYWdlIG9uIGVhY2ggbG9hZCwgZ2V0dGluZyB0aGUgZGF0YSBzdG9yZWQgaW4gdGhlIGxvY2Fsc3RvcmFnZVxyXG4gICAgYWNjaW5nIGVhY2ggbmV3IGVsZW1lbnQgYW5kIGFkZGluZyBuZWNlc3NhcnkgZXZlZW50IG9uIGV2ZXJ5IGxvYWRcclxuKi9cclxuKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICB3cml0ZUFsbFRhc2sodGhpc3Byb2plY3RzLCBjb250ZW50KTtcclxuXHJcbiAgICBlYWNoVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGV0YXNrdGl0bGUnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlYWNoVGFzaywgJ2NsaWNrJywgc2hvd1Rhc2spO1xyXG4gICAgcmVuZGVyUHJvamVjdHModGFncylcclxuICAgIGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoY2hlY2ssIFwiY2hhbmdlXCIsIHRoZWNoZWNrZXIpXHJcbiAgICBkZWxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbC10YXNrJylcclxuICAgIGFkZExpc3Rlcm5lcihkZWxUYXNrLCBcImNsaWNrXCIsIGRlbGV0ZVRoZVRhc2spXHJcbn0pKCk7XHJcblxyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXJzXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XHJcbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51KTtcclxuXHJcblxyXG4vLyBvcGVuIHRoZSBzaWRlIGJhciBvbiB0aGUgbW9iaWxlIGFuZCB0YWIgdml3XHJcbmZ1bmN0aW9uIG9wZW5NZW51KCl7XHJcbiAgICBkaWFsb2cuc2hvdygpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGFza1ZpZXdlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn1cclxuXHJcbi8vY2xvc2VzIHRoZSBzaWRlXHJcbmZ1bmN0aW9uIGNsb3NlTWVudSgpe1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgIGNsb3NlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuLy8gRmlsdGVycyB0aGUgbWFpbiB2aWV3IGJhc2VkIG9uIHRoZSBmaWx0ZXIgb3B0aW9uc1xyXG5maWx0ZXJUb2Rvcy5mb3JFYWNoKHRvZG9GaWx0ZXIgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgdG9kb0ZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodG9kb0ZpbHRlci5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09ICdBbGwnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNwcm9qZWN0cyA9IHJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgc29ydFRvTWFpbih0aGlzcHJvamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodG9kb0ZpbHRlci5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09ICdUb2RheScpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXlQcm9qZWN0cyA9IHRvZG9zVG9kYXkoKTtcclxuICAgICAgICAgICAgICAgIHNvcnRUb01haW4odG9kYXlQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0b2RvRmlsdGVyLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPT0gJ1dlZWsnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlZWtQcm9qZWN0cyA9IHRvZG9zRm9yQVdlZWsoKTtcclxuICAgICAgICAgICAgICAgIHNvcnRUb01haW4od2Vla1Byb2plY3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGhQcm9qZWN0cyA9IHRvZG9zRm9yTW9udGgoKTtcclxuICAgICAgICAgICAgICAgIHNvcnRUb01haW4obW9udGhQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzb3J0VG9NYWluKHByb2plY3Qpe1xyXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcclxuICAgIHdyaXRlQWxsVGFzayhwcm9qZWN0LCBjb250ZW50KTtcclxuICAgIGVhY2hUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZXRhc2t0aXRsZScpO1xyXG4gICAgYWRkTGlzdGVybmVyKGVhY2hUYXNrLCAnY2xpY2snLCBzaG93VGFzayk7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNClcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xyXG4gICAgYWRkTGlzdGVybmVyKGNoZWNrLCBcImNoYW5nZVwiLCB0aGVjaGVja2VyKVxyXG4gICAgZGVsVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtdGFzaycpXHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsVGFzaywgXCJjbGlja1wiLCBkZWxldGVUaGVUYXNrKVxyXG59XHJcblxyXG4vL0FkZHMgRXZlbnRMaXN0ZXJuZXJzIHRvIHJlZHVjZSByZXBlYXQgY29kZVxyXG5mdW5jdGlvbiBhZGRMaXN0ZXJuZXIobm9kZXMsIHRoZUV2ZW50LCB0aGVGdW5jdGlvbil7XHJcbiAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0aGVFdmVudCwgdGhlRnVuY3Rpb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIENoZWNrcyB3aGVuIGEgdXNlciBkaW1zIGEgcHJvamVjdCBhcyBjb21wbGV0ZWRcclxuZnVuY3Rpb24gdGhlY2hlY2tlcihlKXtcclxuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpe1xyXG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICBcclxuICAgIH1cclxufVxyXG5cclxuLy9kZWxldGVzIGEgdGFza1xyXG5mdW5jdGlvbiBkZWxldGVUaGVUYXNrKGUpe1xyXG4gICAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBkZWxldGVUb2RvKHRpdGxlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgLy8gY29udGVudC5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcclxuICAgIGNvbnN0IHRoaXNwcm9qZWN0cyA9IHJlbmRlcigpO1xyXG4gICAgc29ydFRvTWFpbih0aGlzcHJvamVjdHMpO1xyXG59XHJcblxyXG4vL0V2ZW50IExpc3RlbmVyc1xyXG50YWdzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRhZ3NFdmVudCk7XHJcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UHJvamVjdEFkZE1vZGFsKTtcclxuYWRkTmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Byb2plY3QpO1xyXG5iYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VBZGRUYXNrKTtcclxuXHJcblxyXG5mdW5jdGlvbiB0YWdzRXZlbnQoKXtcclxuICAgIGNvbnN0IGVkaXRBbmREZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kZWxldGUnKTtcclxuXHJcbiAgICBpZihlZGl0QW5kRGVsZXRlLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKVxyXG4gICAgICAgIGVkaXRBbmREZWxldGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGVsc2VcclxuICAgICAgICBlZGl0QW5kRGVsZXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbi8vIE9wZW5zIHRoZSBhZGRQcm9qZWN0IE1vZGFsXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0QWRkTW9kYWwoKXtcclxuICAgIGFkZFByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgbmV3UHJvamVjdElucHV0LmZvY3VzKCk7XHJcbiAgICAvLyBkaWFsb2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcbi8vQWRkcyBuZXcgUHJvamVjdFxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZVxyXG4gICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgIGF2YWlsYWJsZVByb2plY3RzID0gZ2V0UHJvamVjdCgpO1xyXG4gICAgcmVuZGVyUHJvamVjdHModGFncylcclxuICAgIGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcclxuICAgIGFkZExpc3Rlcm5lcihkZWxldGVCdG4sICdjbGljaycsIGRlbClcclxuICAgIFxyXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdCcpO1xyXG4gICAgYWRkTGlzdGVybmVyKGVkaXRCdG4sIFwiY2xpY2tcIiwgZWRpdE1vZGFsKTtcclxuICAgIFxyXG4gICAgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWZpbHRlcicpO1xyXG4gICAgYWRkTGlzdGVybmVyKGFsbFRhZ3MsIFwiY2xpY2tcIiwgc2hvd1Byb2plY3RUYXNrKTtcclxuXHJcbiAgICBhZGRGb3JtLnJlc2V0KCk7XHJcbiAgICBhZGRQcm9qZWN0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbi8vY2xvc2UgdGhlIGFkZCB0YXNrIHBhbmVsXHJcbmZ1bmN0aW9uIGNsb3NlQWRkVGFzaygpe1xyXG4gICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxufVxyXG5cclxubGV0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdCcpO1xyXG5sZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xyXG5sZXQgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhZ3MnKTtcclxubGV0IGN1cnJlbnRQcm9qZWN0O1xyXG5cclxuXHJcbmFkZExpc3Rlcm5lcihlZGl0QnRuLCBcImNsaWNrXCIsIGVkaXRNb2RhbCk7XHJcbmFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1maWx0ZXInKTtcclxuYWRkTGlzdGVybmVyKGFsbFRhZ3MsIFwiY2xpY2tcIiwgc2hvd1Byb2plY3RUYXNrKTtcclxuXHJcbi8vIFNvcnRzIHRhc2tzIGJ5IHByb2plY3RzXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0VGFzayhlKXtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgYnlQcm9qZWN0ID0gY2hlY2tGb3JQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHNvcnRUb01haW4oYnlQcm9qZWN0KTtcclxuXHJcbn1cclxuZnVuY3Rpb24gZWRpdE1vZGFsKGUpe1xyXG4gICAgY3VycmVudFByb2plY3QgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIGVkaXREaWFsb2cuc2hvd01vZGFsKClcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB0ZXh0SW5wdXRFZGl0LmZvY3VzKCk7XHJcbiAgICB0ZXh0SW5wdXRFZGl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50UHJvamVjdCk7ICAgXHJcbn1cclxuXHJcbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGhlUHJvamVjdCk7XHJcblxyXG4vL0VkaXRzIHRoZSBwcm9qZWN0XHJcbmZ1bmN0aW9uIGVkaXRUaGVQcm9qZWN0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhZ3MnKTtcclxuICAgIGNvbnN0IG5ld05hbWUgPSBlZGl0UHJvamVjdChjdXJyZW50UHJvamVjdCwgdGV4dElucHV0RWRpdC52YWx1ZSk7XHJcbiAgICBhbGxUYWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICBpZih0YWcudGV4dENvbnRlbnQgPT0gY3VycmVudFByb2plY3Qpe1xyXG4gICAgICAgICAgICB0YWcudGV4dENvbnRlbnQgPSBuZXdOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgICAgIGVkaXRGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgZWRpdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAvLyBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG59XHJcblxyXG5cclxuZGVsZXRlQnRuLmZvckVhY2goYnRuID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbCk7XHJcbn0pO1xyXG5cclxuLy8gRGVsZXRlcyBhIHByb2plY3RcclxuZnVuY3Rpb24gZGVsKGUpe1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHJlbmRlclByb2plY3RzKHRhZ3MpO1xyXG5cclxuICAgIGNvbnN0IHRoaXNwcm9qZWN0cyA9IHJlbmRlcigpO1xyXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcclxuICAgIHdyaXRlQWxsVGFzayh0aGlzcHJvamVjdHMsIGNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG4gICAgYWRkTGlzdGVybmVyKGFsbFRhZ3MsIFwiY2xpY2tcIiwgc2hvd1Byb2plY3RUYXNrKVxyXG5cclxuICAgIGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcclxuICAgIGFkZExpc3Rlcm5lcihkZWxldGVCdG4sIFwiY2xpY2tcIiwgZGVsKVxyXG5cclxuICAgIGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWdzJyk7XHJcbiAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0Jyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZWRpdEJ0biwgXCJjbGlja1wiLCBlZGl0TW9kYWwpXHJcbn1cclxuXHJcbi8vQ2xvc2luZyB0aGUgYWRkIHByb2plY3QgZGlhbG9nXHJcbmNsb3NlQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGFkZFByb2plY3REaWFsb2cuY2xvc2UoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG59KTtcclxuXHJcbi8vQ2xvc2luZyB0aGUgZWRpdCBwcm9qZWN0IGRpYWxvZ1xyXG5jbG9zZUVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZWRpdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0pO1xyXG5cclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUaGVUYXNrKTtcclxuXHJcbi8vIE9wZW5zIHRoZSBhZGQgdGFzayBkaWFsb2dcclxuZnVuY3Rpb24gYWRkVGhlVGFzaygpe1xyXG4gICAgYWRkVGFza0RpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBhZGRUYXNrUHJvamVjdCgpO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGNvbGxlY3QgdGFzayBkZXRhaWxzXHJcbmFkZEFUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sbGVjdFRhc2spO1xyXG5cclxuLy8gQ3JlYXRlcyB0b29kIG9iamVjdCBcclxuZnVuY3Rpb24gY29sbGVjdFRhc2soZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVQcm9qZWN0cycpO1xyXG4gICAgY29uc3QgdGhlVGl0bGUgPSB0aXRsZS52YWx1ZTtcclxuICAgIGNvbnN0IHRoZU5vdGUgID0gbm90ZS52YWx1ZTtcclxuICAgIGNvbnN0IHRoZUR1ZURhdGUgPSBkdWVEYXRlLnZhbHVlO1xyXG4gICAgY29uc3QgdGhlUHJvamVjdCA9IHRhc2tQcm9qZWN0LnZhbHVlO1xyXG4gICAgaWYodGhlVGl0bGUgJiYgdGhlRHVlRGF0ZSl7XHJcbiAgICAgICAgY3JlYXRlVG9kbyh0aGVUaXRsZSwgdGhlTm90ZSwgdGhlRHVlRGF0ZSwgdGhlUHJvamVjdCk7XHJcbiAgICAgICAgY29uc3QgdGhpc3Byb2plY3RzID0gcmVuZGVyKCk7XHJcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcclxuICAgICAgICB3cml0ZUFsbFRhc2sodGhpc3Byb2plY3RzLCBjb250ZW50KTtcclxuICAgICAgICBlYWNoVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGV0YXNrdGl0bGUnKTtcclxuICAgICAgICBhZGRMaXN0ZXJuZXIoZWFjaFRhc2ssICdjbGljaycsIHNob3dUYXNrKTtcclxuICAgICAgICBhZGRUYXNrRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbiAgICAgICAgYWRkTGlzdGVybmVyKGNoZWNrLCBcImNoYW5nZVwiLCB0aGVjaGVja2VyKVxyXG4gICAgICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgICAgIGFkZExpc3Rlcm5lcihkZWxUYXNrLCBcImNsaWNrXCIsIGRlbGV0ZVRoZVRhc2spXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFkZHMgdGhlIGF2YWlsYWJsZSBwcm9qZWN0cyB0byB0aGUgZm9ybSBzZWxlY3QgZWxlbWVudCBhcyBvcHRpb25zIGZvciB0aGUgdXNlclxyXG5mdW5jdGlvbiBhZGRUYXNrUHJvamVjdCgpe1xyXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyh0YXNrUHJvamVjdCk7XHJcbiAgICBhdmFpbGFibGVQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHByb2plY3Q7XHJcbiAgICAgICAgdGFza1Byb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBEaXNwbGF5cyBtb3JlIGRldGFpbHMgb24gZWFjaCB0YXNrXHJcbmZ1bmN0aW9uIHNob3dUYXNrKGUpe1xyXG4gICAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHRhc2tWaWV3ZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAgY29uc3QgdG9kb3MgPSByZW5kZXIoKTtcclxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgaWYodG9kby50aXRsZSA9PSB0aXRsZSl7XHJcbiAgICAgICAgICAgIHNob3dFYWNoVGFzayh0b2RvLCB0YXNrVmlld2VyKTtcclxuICAgICAgICAgICAgY29uc3QgYmFja1RvQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tUb0FsbCcpO1xyXG4gICAgICAgICAgICBiYWNrVG9BbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb0JhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDbG9zZXMgdGhlIG1vcmUgc2NyZWVuIG9uIGVhY2ggdGFza1xyXG5mdW5jdGlvbiBnb0JhY2soZSl7XHJcbiAgICB0YXNrVmlld2VyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXModGFza1ZpZXdlcik7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=