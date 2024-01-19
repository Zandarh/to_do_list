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
    div.taskheading > h2{
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
    width: 98%;
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
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;IAEI,+FAA+F;AACnG;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,yBAAyB;AAC7B;AACA;;;;IAII,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;AACA;;IAEI,yBAAyB;AAC7B;AACA;IACI,eAAe;AACnB;AACA;IACI;QACI,mBAAmB;QACnB,mBAAmB;IACvB;IACA;;;QAGI,wHAAwH;IAC5H;IACA;;QAEI,sBAAsB;IAC1B;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,0CAA0C;IAC9C;IACA;QACI,yBAAyB;IAC7B;IACA;;;;QAII,yBAAyB;IAC7B;IACA;;QAEI,yBAAyB;IAC7B;IACA;QACI,sBAAsB;IAC1B;AACJ;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,yCAAyC;AAC7C;AACA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;;;;;;;IAOI,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,iBAAiB;;AAErB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,UAAU;IACV,UAAU;IACV,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,WAAW;;AAEf;AACA;;IAEI,WAAW;AACf;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;AACf;AACA;IACI,WAAW;IACX,aAAa;IACb,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gCAAgC;IAChC,UAAU;AACd;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;IACI,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,QAAQ;AACZ;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,WAAW;;AAEf;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,QAAQ;AACZ;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;;IAEI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iCAAiC;AACrC;AACA;;IAEI,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;AACA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,eAAe;AACnB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,oBAAoB;AACxB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,aAAa;AACjB;AACA;;;;IAII,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;AACA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;AACA;;QAEQ,iBAAiB;IACrB;AACJ;IACI,cAAc;AAClB;AACA;;IAEI,cAAc;IACd,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,aAAa;;AAEjB;AACA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA,UAAU;AACV;IACI;QACI,UAAU;QACV,UAAU;QACV,UAAU;;IAEd;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,UAAU;IACd;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;IACf;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,cAAc;QACd,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,SAAS;IACb;IACA;;QAEI,eAAe;QACf,aAAa;IACjB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,cAAc;IAClB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,iBAAiB;IACrB;IACA;;QAEI,SAAS;IACb;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;QACb,mBAAmB;QACnB,iBAAiB;IACrB;AACJ;;AAEA,YAAY;AACZ;IACI;QACI,aAAa;QACb,gCAAgC;QAChC,6BAA6B;QAC7B,SAAS;IACb;IACA;QACI,kBAAkB;QAClB,kBAAkB;QAClB,yBAAyB;IAC7B;IACA;QACI,kBAAkB;QAClB,yBAAyB;QACzB,uBAAuB;IAC3B;IACA;QACI,kBAAkB;QAClB,aAAa;IACjB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,aAAa;QACb,mCAAmC;QACnC,aAAa;QACb,SAAS;IACb;IACA;QACI,eAAe;IACnB;IACA;QACI,aAAa;IACjB;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;QACX,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;QACV,YAAY;QACZ,mBAAmB;QACnB,aAAa;QACb,WAAW;IACf;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,SAAS;IACb;IACA;;QAEI,iBAAiB;IACrB;IACA;QACI,mBAAmB;IACvB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;;QAEI,SAAS;IACb;IACA;;QAEI,WAAW;IACf;IACA;;QAEI,eAAe;IACnB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    --color-fg: #eee;\r\n    --color-bg: #121212;\r\n    --heading: #0464a4;\r\n}\r\n.menuB,\r\n.filter-white{\r\n    filter: invert(100%) sepia(0%) saturate(7435%) hue-rotate(65deg) brightness(105%) contrast(95%);\r\n}\r\n.filter > p{\r\n    color: var(--color-fg);\r\n}\r\ndiv.taskheading > h2{\r\n    color: var(--color-fg);\r\n}\r\ndialog{\r\n    background-color: #272727;\r\n}\r\ndiv.overlay{\r\n    background-color: rgba(29, 25, 25, 0.71);\r\n}\r\ndiv.task-div{\r\n    background-color: #3d3c3c;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    background-color: #474848;\r\n    color: var(--color-bg);\r\n}\r\n.addprojectbtn{\r\n    color: var(--color-fg);\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    background-color: #3d3c3c;\r\n}\r\np.thetasktitle{\r\n    cursor: pointer;\r\n}\r\n@media (prefers-color-scheme: light){\r\n    :root{\r\n        --color-bg: #cfcdcd;\r\n        --color-fg: #1A1C20;\r\n    }\r\n    .backImg,\r\n    .del-task,\r\n    .menuB{\r\n        filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%);\r\n    }\r\n    .addprojectbtn,\r\n    .filter > p{\r\n        color: var(--color-bg);\r\n    }\r\n    dialog{\r\n        background-color: #343232;\r\n    }\r\n    div.overlay{\r\n        background-color: rgba(184, 179, 179, 0.9);\r\n    }\r\n    div.task-div{\r\n        background-color: #d1cdcd;\r\n    }\r\n    textarea#tasknote,\r\n    input#tasktitle,\r\n    select#theProjects, \r\n    input#duedate{\r\n        background-color: #d1cdcd;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        background-color: #d1cdcd; \r\n    }\r\n    div.taskheading > h2{\r\n        color: var(--color-bg);\r\n    }\r\n}\r\nhtml, body{\r\n    height: 100%;\r\n}\r\nhtml{\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nbody{\r\n    min-height: 100vh;\r\n    background-color: var(--color-bg);\r\n    color: var(--color-fg);\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\ndiv.container{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-rows: 0.2fr 3fr 0.3fr;\r\n}\r\nheader{\r\n    grid-area: 1/1/1/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\nheader > h1{\r\n    color: var(--heading);\r\n    font-size: 1.5rem;\r\n}\r\ndiv.menu{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\nbutton.backBtn,\r\nbutton.delbtn,\r\nbutton.closeAdd,\r\nbutton.closeEdit,\r\nbutton.closeBtn,\r\nbutton.menuBtn,\r\nbutton.addprojectbtn{\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.menu > .closeBtn > img,\r\ndiv.menu > .menuBtn > img{\r\n    color: var(--color-fg);\r\n    width: 12%;\r\n}\r\nbutton#close.closeBtn{\r\n    display: none;\r\n    z-index: 11;\r\n}\r\ndiv.main{\r\n    padding-top: 50px;\r\n}\r\ndiv.main-container{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 5px;\r\n    gap: 20px;\r\n}\r\ndiv.main-task-viewer{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: none;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 5px;\r\n    gap: 15px;\r\n    padding: 20px;\r\n}\r\n\r\ndiv.main-heading{\r\n    grid-area: 1/1/1/2;\r\n    padding: 10px;\r\n}\r\ndiv.main-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.7rem;\r\n\r\n}\r\ndiv.main-content{\r\n    grid-area: 2/1/3/2;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.add-taskdiv{\r\n    grid-area: 3/1/4/2;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding: 5px;\r\n}\r\n\r\ndiv.add-taskdiv > button.addTask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\nbutton.backBtn > img{\r\n    width: 30px;\r\n}\r\ndialog{\r\n    top: 100px;\r\n    left: 20px;\r\n    width: 90%;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    z-index: 12;\r\n\r\n}\r\n.dailog-Edit,\r\n.addprojectdialog{\r\n    height: 80%;\r\n}\r\ndiv.overlay{\r\n    display: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10;\r\n}\r\ndiv.addbtn{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\ndiv.taskproject{\r\n    display: flex;\r\n    gap: 30px;\r\n    flex-direction: column;\r\n}\r\ndiv.todoinfo{\r\n    display: flex;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\ndiv.todoinfo > img{\r\n    width: 20px;\r\n    opacity: 0.4;\r\n}\r\ndiv.todoinfo > h4{\r\n    opacity: 0.4;\r\n    font-size: 0.9rem;\r\n}\r\ndiv.taskheading {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    align-items: center;\r\n}\r\ndiv.taskheading > h2{\r\n    text-align: center;\r\n}\r\nhr{\r\n    border: 1px solid var(--heading);\r\n    width: 80%;\r\n}\r\np.thenote{\r\n    font-size: 1.2rem;\r\n}\r\ndiv.taskControl{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\nimg.backToAll{\r\n    width: 30px;\r\n    cursor: pointer;\r\n}\r\np.date{\r\n    border: 1px solid var(--heading);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n}\r\ndiv.dailog-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n.filter > p{\r\n    font-size: 1rem;\r\n}\r\n\r\ndiv.filter-div, \r\ndiv.project-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    gap: 5px;\r\n}\r\n.filter{\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.the-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.filter > img{\r\n    width: 2.8rem;\r\n    padding: 10px;\r\n}\r\ndiv.add-project{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    width: 100%;\r\n\r\n}\r\n\r\ndiv.dialog-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.3rem;\r\n}\r\n.addprojectbtn{\r\n    border: none;\r\n}\r\n.addprojectbtn > h3{\r\n    font-size: 2rem;\r\n}\r\ndiv.projects{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\ndiv.edit-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 2px;\r\n}\r\ndiv.edit-delete *{\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\nform.addForm,\r\nform.editForm{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    height: 2.4rem;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    color: var(--color-fg);\r\n    border: 1px solid var(--color-bg);\r\n}\r\nform.addForm > button,\r\nform.editForm > button{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    background-color: #4bb2f9;\r\n    color: var(--color-bg);\r\n    border: none;\r\n}\r\n\r\nbutton.closeAdd,\r\nbutton.closeEdit{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 230px;\r\n}\r\nbutton#closeAdd.closeAdd > img,\r\nbutton#closeEdit.closeEdit > img{\r\n    color: var(--color-fg);\r\n    width: 30%;\r\n}\r\ndiv.content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    gap: 10px;\r\n}\r\ndiv.no-task-div{\r\n    width: 100%;\r\n    padding: 30px;\r\n}\r\ndiv.content{\r\n    width: 90%;\r\n}\r\ndiv.no-task-div > h4{\r\n    font-size: 1rem;\r\n}\r\nh4.no-task{\r\n    color: #4bb2f9;\r\n    text-align: center;\r\n    font-weight: 200;\r\n}\r\ndiv.task-div{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 2.4rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\ndiv.task-div img{\r\n    width: 8%;\r\n}\r\np.thetasktitle{\r\n    font-size: 1.2rem;\r\n}\r\ndiv.right{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\ndiv.dialog-container4{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nform.addTaskForm{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\ndiv.formdetails{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding-bottom: 40px;\r\n}\r\nlabel{\r\n    display: block;\r\n    font-size: 1.4rem;\r\n    color: var(--heading);\r\n    font-weight: 700;\r\n}\r\ndiv.moreDetails{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\ntextarea{\r\n    overflow: auto;\r\n    height: 200px;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: #474848;\r\n    color: var(--color-fg);\r\n    border: none;\r\n}\r\n.formdetails > input::placeholder,\r\ntextarea::placeholder{\r\n    color: var(--color-fg);\r\n    font-size: 1rem;\r\n}\r\ntextarea,\r\n    input[type=text]{\r\n        font-size: 1.2rem;\r\n    }\r\n.formdetails > input{\r\n    height: 2.8rem;\r\n}\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    height: 2.8rem;\r\n    width: 98%;\r\n    padding: 5px;\r\n    font-size: 1rem;\r\n}\r\n.todo-options{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px\r\n}\r\n\r\ndiv.control{\r\n    grid-area: 2/1/2/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 10px;\r\n    \r\n}\r\ndiv.control > button.addATask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.del-task{\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n/*Tablets*/\r\n@media only screen and (min-width: 541px){\r\n    dialog{\r\n        top: 140px;\r\n        left: 40px;\r\n        width: 90%;\r\n    \r\n    }\r\n    header > h1{\r\n        font-size: 2.5rem;\r\n    }\r\n    .filter > p{\r\n        font-size: 1.6rem;\r\n    }\r\n    div.menu > .closeBtn > img,\r\n    div.menu > .menuBtn > img{\r\n        width: 24%;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 500px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 80px;\r\n    }\r\n    .filter > img{\r\n        width: 3.8rem;\r\n    }\r\n    div.task-div img{\r\n        width: 6%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 40px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 2.7rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 2rem;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 2.3rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 4rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 4.4rem;\r\n        padding: 20px;\r\n    }\r\n    .formdetails > input{\r\n        height: 4.8rem;\r\n    }\r\n    textarea{\r\n        height: 40%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 3rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 2rem;\r\n    }\r\n    label{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 15px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 2rem;\r\n        padding: 15px;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 2rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 2rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 2rem;\r\n    }\r\n    div.task-div{\r\n        height: 4.4rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 2.2rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 2.2rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n    div.taskheading > h2{\r\n        font-size: 2.5rem;\r\n    }\r\n    p.thenote{\r\n        font-size: 1.7rem;\r\n    }\r\n    div.todoinfo > img{\r\n        width: 40px;\r\n    }\r\n    div.todoinfo > h4{\r\n        font-size: 1.2rem;\r\n    }\r\n    img.backToAll{\r\n        width: 50px;\r\n    }\r\n    p.date{\r\n        padding: 10px;\r\n        border-radius: 10px;\r\n        font-size: 1.4rem;\r\n    }\r\n}\r\n\r\n/* Laptops */\r\n@media only screen and (min-width: 1024px){\r\n    div.container{\r\n        display: grid;\r\n        grid-template-columns: 0.6fr 3fr;\r\n        grid-template-rows: 0.3fr 3fr;\r\n        gap: 20px;\r\n    }\r\n    div.sidebar{\r\n        padding-top: 100px;\r\n        grid-area: 1/1/3/1;\r\n        background-color: #3d3c3c;\r\n    }\r\n    header{\r\n        grid-area: 2/1/1/3;\r\n        background-color: #3d3c3c;\r\n        justify-content: center;\r\n    }\r\n    div.main{\r\n        grid-area: 2/2/3/3;\r\n        display: flex;\r\n    }\r\n    div.main-container{\r\n        grid-area: 3/1/3/2;\r\n        width: 60%;\r\n        height: 90%;\r\n        display: grid;\r\n        grid-template-rows: 0.2fr 3fr 0.4fr;\r\n        padding: 15px;\r\n        gap: 20px;\r\n    }\r\n    .filter > p{\r\n        font-size: 1rem;\r\n    }\r\n    div.menu {\r\n        display: none;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 280px;\r\n        width: 120px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 30px;\r\n    }\r\n    .filter > img{\r\n        width: 2.5rem;\r\n    }\r\n    div.task-div img{\r\n        width: 3%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 18px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 1.1rem;\r\n    }\r\n    dialog{\r\n        top: 100px;\r\n        left: 300px;\r\n        width: 40%;\r\n        border: none;\r\n        border-radius: 10px;\r\n        padding: 10px;\r\n        z-index: 12;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 1rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 1.6rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 2rem;\r\n        padding: 15px;\r\n    }\r\n    .add-task-dialog{\r\n        top: 100px;\r\n        left: 350px;\r\n        width: 60%;\r\n    }\r\n    .formdetails > input{\r\n        height: 2rem;\r\n    }\r\n    textarea{\r\n        height: 20%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 2rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 1rem;\r\n    }\r\n    label{\r\n        font-size: 1rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 1.3rem;\r\n    }\r\n    div.control{\r\n        align-items: center;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 1rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 1rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 1rem;\r\n    }\r\n    div.task-div{\r\n        height: 2rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 1rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 1rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        width: 100%;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 1rem;\r\n    }\r\n    div.main-task-viewer{\r\n        width: 50%;\r\n        height: 80%;\r\n    }\r\n    p.thenote{\r\n        font-size: 1rem;\r\n    }\r\n    div.taskheading > h2{\r\n        font-size: 1.5rem;\r\n    }\r\n    p.date{\r\n        font-size: 0.8rem;\r\n    }\r\n    div.todoinfo > h4{\r\n        font-size: 0.8rem;\r\n    }\r\n    div.todoinfo > img{\r\n        width: 15px;\r\n    }\r\n    img.backToAll{\r\n        width: 2rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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







(function(){
    window.localStorage.setItem("count", "1")
    const todosTitle = "Click To Learn More";
    const todoNote = `-You can add Task and segment them into projects.

    -Click each task title to see more details about the task

    -Click the plus button to add new projects.

    -Checkout tasks as completed and deleted them afterwards.

    -Thank you`;
    const date = "2024-1-19";
    if(localStorage.getItem("count") !== "1"){
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(todosTitle, todoNote, date, "default");
    }
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sUUFBUSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sUUFBUSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxN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QXlCLGlEQUFNO0FBQy9CLElBQUksK0RBQW1CO0FBQ3ZCLElBQUksc0RBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVTtBQUNsQiw2QkFBNkIsaURBQU07QUFDbkMsUUFBUSwrREFBbUI7QUFDM0IsUUFBUSxzREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFNO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLHNEQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2NsYXNzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZU1vbnRoLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZVdlZWsubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUaGlzTW9udGgubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUaGlzV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuOnJvb3R7XHJcbiAgICAtLWNvbG9yLWZnOiAjZWVlO1xyXG4gICAgLS1jb2xvci1iZzogIzEyMTIxMjtcclxuICAgIC0taGVhZGluZzogIzA0NjRhNDtcclxufVxyXG4ubWVudUIsXHJcbi5maWx0ZXItd2hpdGV7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzNSUpIGh1ZS1yb3RhdGUoNjVkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoOTUlKTtcclxufVxyXG4uZmlsdGVyID4gcHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbn1cclxuZGl2LnRhc2toZWFkaW5nID4gaDJ7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG59XHJcbmRpYWxvZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbn1cclxuZGl2Lm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAyNSwgMjUsIDAuNzEpO1xyXG59XHJcbmRpdi50YXNrLWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbn1cclxudGV4dGFyZWEsXHJcbi5mb3JtZGV0YWlscyA+IGlucHV0LFxyXG5zZWxlY3QsIFxyXG5kaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG59XHJcbi5hZGRwcm9qZWN0YnRue1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxufVxyXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcclxuZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcclxufVxyXG5wLnRoZXRhc2t0aXRsZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCl7XHJcbiAgICA6cm9vdHtcclxuICAgICAgICAtLWNvbG9yLWJnOiAjY2ZjZGNkO1xyXG4gICAgICAgIC0tY29sb3ItZmc6ICMxQTFDMjA7XHJcbiAgICB9XHJcbiAgICAuYmFja0ltZyxcclxuICAgIC5kZWwtdGFzayxcclxuICAgIC5tZW51QntcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDMxZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7XHJcbiAgICB9XHJcbiAgICAuYWRkcHJvamVjdGJ0bixcclxuICAgIC5maWx0ZXIgPiBwe1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICB9XHJcbiAgICBkaWFsb2d7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzIzMjtcclxuICAgIH1cclxuICAgIGRpdi5vdmVybGF5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg0LCAxNzksIDE3OSwgMC45KTtcclxuICAgIH1cclxuICAgIGRpdi50YXNrLWRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEjdGFza25vdGUsXHJcbiAgICBpbnB1dCN0YXNrdGl0bGUsXHJcbiAgICBzZWxlY3QjdGhlUHJvamVjdHMsIFxyXG4gICAgaW5wdXQjZHVlZGF0ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2RjZDsgXHJcbiAgICB9XHJcbiAgICBkaXYudGFza2hlYWRpbmcgPiBoMntcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgfVxyXG59XHJcbmh0bWwsIGJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuaHRtbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbmJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5kaXYuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC4zZnI7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5oZWFkZXIgPiBoMXtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbmRpdi5tZW51e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbmJ1dHRvbi5iYWNrQnRuLFxyXG5idXR0b24uZGVsYnRuLFxyXG5idXR0b24uY2xvc2VBZGQsXHJcbmJ1dHRvbi5jbG9zZUVkaXQsXHJcbmJ1dHRvbi5jbG9zZUJ0bixcclxuYnV0dG9uLm1lbnVCdG4sXHJcbmJ1dHRvbi5hZGRwcm9qZWN0YnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxyXG5kaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIHdpZHRoOiAxMiU7XHJcbn1cclxuYnV0dG9uI2Nsb3NlLmNsb3NlQnRue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcbmRpdi5tYWlue1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuZGl2Lm1haW4tY29udGFpbmVye1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcbmRpdi5tYWluLXRhc2stdmlld2Vye1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuZGl2Lm1haW4taGVhZGluZ3tcclxuICAgIGdyaWQtYXJlYTogMS8xLzEvMjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2Lm1haW4taGVhZGluZyA+IGgze1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcblxyXG59XHJcbmRpdi5tYWluLWNvbnRlbnR7XHJcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuZGl2LmFkZC10YXNrZGl2e1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5kaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5idXR0b24uYmFja0J0biA+IGltZ3tcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcbmRpYWxvZ3tcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTI7XHJcblxyXG59XHJcbi5kYWlsb2ctRWRpdCxcclxuLmFkZHByb2plY3RkaWFsb2d7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufVxyXG5kaXYub3ZlcmxheXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbmRpdi5hZGRidG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbmRpdi50YXNrcHJvamVjdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmRpdi50b2RvaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmRpdi50b2RvaW5mbyA+IGltZ3tcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcbmRpdi50b2RvaW5mbyA+IGg0e1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuZGl2LnRhc2toZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmRpdi50YXNraGVhZGluZyA+IGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGluZyk7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbnAudGhlbm90ZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbmRpdi50YXNrQ29udHJvbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmltZy5iYWNrVG9BbGx7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5wLmRhdGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkaW5nKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuZGl2LmRhaWxvZy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmlsdGVyID4gcHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuZGl2LmZpbHRlci1kaXYsIFxyXG5kaXYucHJvamVjdC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuLmZpbHRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50aGUtcHJvamVjdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmlsdGVyID4gaW1ne1xyXG4gICAgd2lkdGg6IDIuOHJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LmFkZC1wcm9qZWN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4uYWRkcHJvamVjdGJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYWRkcHJvamVjdGJ0biA+IGgze1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbmRpdi5wcm9qZWN0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZGl2LmVkaXQtZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGdhcDogMnB4O1xyXG59XHJcbmRpdi5lZGl0LWRlbGV0ZSAqe1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuZm9ybS5hZGRGb3JtLFxyXG5mb3JtLmVkaXRGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbmZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmcpO1xyXG59XHJcbmZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcclxuZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjJmOTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5jbG9zZUFkZCxcclxuYnV0dG9uLmNsb3NlRWRpdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDIzMHB4O1xyXG59XHJcbmJ1dHRvbiNjbG9zZUFkZC5jbG9zZUFkZCA+IGltZyxcclxuYnV0dG9uI2Nsb3NlRWRpdC5jbG9zZUVkaXQgPiBpbWd7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5kaXYuY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5kaXYubm8tdGFzay1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuZGl2LmNvbnRlbnR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbmRpdi5uby10YXNrLWRpdiA+IGg0e1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbmg0Lm5vLXRhc2t7XHJcbiAgICBjb2xvcjogIzRiYjJmOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuZGl2LnRhc2stZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LnRhc2stZGl2IGltZ3tcclxuICAgIHdpZHRoOiA4JTtcclxufVxyXG5wLnRoZXRhc2t0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbmRpdi5yaWdodHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcbmRpdi5kaWFsb2ctY29udGFpbmVyNHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmZvcm0uYWRkVGFza0Zvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5kaXYuZm9ybWRldGFpbHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5kaXYubW9yZURldGFpbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbnRleHRhcmVhLFxyXG4uZm9ybWRldGFpbHMgPiBpbnB1dCxcclxuc2VsZWN0LCBcclxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcclxudGV4dGFyZWE6OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG50ZXh0YXJlYSxcclxuICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbi5mb3JtZGV0YWlscyA+IGlucHV0e1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbn1cclxuc2VsZWN0LCBcclxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnRvZG8tb3B0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4XHJcbn1cclxuXHJcbmRpdi5jb250cm9se1xyXG4gICAgZ3JpZC1hcmVhOiAyLzEvMi8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG5kaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZGVsLXRhc2t7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qVGFibGV0cyovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQxcHgpe1xyXG4gICAgZGlhbG9ne1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoZWFkZXIgPiBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIC5maWx0ZXIgPiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXHJcbiAgICBkaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyNCU7XHJcbiAgICB9XHJcbiAgICBidXR0b24uY2xvc2VBZGQsXHJcbiAgICBidXR0b24uY2xvc2VFZGl0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24uYmFja0J0biA+IGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgIH1cclxuICAgIC5maWx0ZXIgPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMuOHJlbTtcclxuICAgIH1cclxuICAgIGRpdi50YXNrLWRpdiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDYlO1xyXG4gICAgfVxyXG4gICAgZGl2LmVkaXQtZGVsZXRlICp7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYubWFpbi1oZWFkaW5nID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5hZGRwcm9qZWN0YnRuID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dHtcclxuICAgICAgICBoZWlnaHQ6IDQuOHJlbTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhe1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0LCBcclxuICAgIGRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmZvcm1kZXRhaWxze1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcclxuICAgIGZvcm0uZWRpdEZvcm0gPiBidXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2stZGl2e1xyXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xyXG4gICAgfVxyXG4gICAgcC50aGV0YXNrdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYSxcclxuICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZmlsdGVyLWRpdiwgXHJcbiAgICBkaXYucHJvamVjdC1kaXZ7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2toZWFkaW5nID4gaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICBwLnRoZW5vdGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudG9kb2luZm8gPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYudG9kb2luZm8gPiBoNHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgIGltZy5iYWNrVG9BbGx7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBwLmRhdGV7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBMYXB0b3BzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAgIGRpdi5jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNmZyIDNmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDNmcjtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYuc2lkZWJhcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMy8xO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbiAgICB9XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMS8zO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXYubWFpbntcclxuICAgICAgICBncmlkLWFyZWE6IDIvMi8zLzM7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIGRpdi5tYWluLWNvbnRhaW5lcntcclxuICAgICAgICBncmlkLWFyZWE6IDMvMS8zLzI7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpbHRlciA+IHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBidXR0b24uY2xvc2VBZGQsXHJcbiAgICBidXR0b24uY2xvc2VFZGl0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMjgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmJhY2tCdG4gPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudGFzay1kaXYgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzJTtcclxuICAgIH1cclxuICAgIGRpdi5lZGl0LWRlbGV0ZSAqe1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgZGl2Lm1haW4taGVhZGluZyA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICBkaWFsb2d7XHJcbiAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICBsZWZ0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTI7XHJcbiAgICB9XHJcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmFkZC10YXNrLWRpYWxvZ3tcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDM1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dHtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYXtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgIH1cclxuICAgIHNlbGVjdCwgXHJcbiAgICBkaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZm9ybWRldGFpbHN7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIH1cclxuICAgIGRpdi5jb250cm9se1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2stZGl2e1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxuICAgIHAudGhldGFza3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhLFxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZmlsdGVyLWRpdiwgXHJcbiAgICBkaXYucHJvamVjdC1kaXZ7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIGRpdi5tYWluLXRhc2stdmlld2Vye1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB9XHJcbiAgICBwLnRoZW5vdGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2toZWFkaW5nID4gaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBwLmRhdGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudG9kb2luZm8gPiBoNHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIGRpdi50b2RvaW5mbyA+IGltZ3tcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgIH1cclxuICAgIGltZy5iYWNrVG9BbGx7XHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSwrRkFBK0Y7QUFDbkc7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7Ozs7SUFJSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJ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QUNkO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTs7UUFFSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksU0FBUztJQUNiO0lBQ0E7O1FBRUksV0FBVztJQUNmO0lBQ0E7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290e1xcclxcbiAgICAtLWNvbG9yLWZnOiAjZWVlO1xcclxcbiAgICAtLWNvbG9yLWJnOiAjMTIxMjEyO1xcclxcbiAgICAtLWhlYWRpbmc6ICMwNDY0YTQ7XFxyXFxufVxcclxcbi5tZW51QixcXHJcXG4uZmlsdGVyLXdoaXRle1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzNSUpIGh1ZS1yb3RhdGUoNjVkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoOTUlKTtcXHJcXG59XFxyXFxuLmZpbHRlciA+IHB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxufVxcclxcbmRpdi50YXNraGVhZGluZyA+IGgye1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbn1cXHJcXG5kaWFsb2d7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxyXFxufVxcclxcbmRpdi5vdmVybGF5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAyNSwgMjUsIDAuNzEpO1xcclxcbn1cXHJcXG5kaXYudGFzay1kaXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxufVxcclxcbnRleHRhcmVhLFxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0LFxcclxcbnNlbGVjdCwgXFxyXFxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxufVxcclxcbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbn1cXHJcXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxufVxcclxcbnAudGhldGFza3RpdGxle1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KXtcXHJcXG4gICAgOnJvb3R7XFxyXFxuICAgICAgICAtLWNvbG9yLWJnOiAjY2ZjZGNkO1xcclxcbiAgICAgICAgLS1jb2xvci1mZzogIzFBMUMyMDtcXHJcXG4gICAgfVxcclxcbiAgICAuYmFja0ltZyxcXHJcXG4gICAgLmRlbC10YXNrLFxcclxcbiAgICAubWVudUJ7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDMxZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFkZHByb2plY3RidG4sXFxyXFxuICAgIC5maWx0ZXIgPiBwe1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgfVxcclxcbiAgICBkaWFsb2d7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzMjMyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5vdmVybGF5e1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODQsIDE3OSwgMTc5LCAwLjkpO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNkY2Q7XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWEjdGFza25vdGUsXFxyXFxuICAgIGlucHV0I3Rhc2t0aXRsZSxcXHJcXG4gICAgc2VsZWN0I3RoZVByb2plY3RzLCBcXHJcXG4gICAgaW5wdXQjZHVlZGF0ZXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNkY2Q7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNkY2Q7IFxcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNraGVhZGluZyA+IGgye1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5odG1sLCBib2R5e1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbmh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuZGl2LmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC4zZnI7XFxyXFxufVxcclxcbmhlYWRlcntcXHJcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5oZWFkZXIgPiBoMXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuZGl2Lm1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcbmJ1dHRvbi5iYWNrQnRuLFxcclxcbmJ1dHRvbi5kZWxidG4sXFxyXFxuYnV0dG9uLmNsb3NlQWRkLFxcclxcbmJ1dHRvbi5jbG9zZUVkaXQsXFxyXFxuYnV0dG9uLmNsb3NlQnRuLFxcclxcbmJ1dHRvbi5tZW51QnRuLFxcclxcbmJ1dHRvbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxcclxcbmRpdi5tZW51ID4gLm1lbnVCdG4gPiBpbWd7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIHdpZHRoOiAxMiU7XFxyXFxufVxcclxcbmJ1dHRvbiNjbG9zZS5jbG9zZUJ0bntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgei1pbmRleDogMTE7XFxyXFxufVxcclxcbmRpdi5tYWlue1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG59XFxyXFxuZGl2Lm1haW4tY29udGFpbmVye1xcclxcbiAgICBncmlkLWFyZWE6IDMvMS8zLzI7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbmRpdi5tYWluLXRhc2stdmlld2Vye1xcclxcbiAgICBncmlkLWFyZWE6IDMvMS8zLzI7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5tYWluLWhlYWRpbmd7XFxyXFxuICAgIGdyaWQtYXJlYTogMS8xLzEvMjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuZGl2Lm1haW4taGVhZGluZyA+IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcblxcclxcbn1cXHJcXG5kaXYubWFpbi1jb250ZW50e1xcclxcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5kaXYuYWRkLXRhc2tkaXZ7XFxyXFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbmJ1dHRvbi5iYWNrQnRuID4gaW1ne1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuZGlhbG9ne1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEyO1xcclxcblxcclxcbn1cXHJcXG4uZGFpbG9nLUVkaXQsXFxyXFxuLmFkZHByb2plY3RkaWFsb2d7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5kaXYub3ZlcmxheXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuZGl2LmFkZGJ0bntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcbmRpdi50YXNrcHJvamVjdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5kaXYudG9kb2luZm97XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuZGl2LnRvZG9pbmZvID4gaW1ne1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5kaXYudG9kb2luZm8gPiBoNHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuZGl2LnRhc2toZWFkaW5nIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmRpdi50YXNraGVhZGluZyA+IGgye1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbmhye1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxucC50aGVub3Rle1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuZGl2LnRhc2tDb250cm9se1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmltZy5iYWNrVG9BbGx7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbnAuZGF0ZXtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuZGl2LmRhaWxvZy1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5maWx0ZXIgPiBwe1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmRpdi5maWx0ZXItZGl2LCBcXHJcXG5kaXYucHJvamVjdC1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLmZpbHRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4udGhlLXByb2plY3Rze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZpbHRlciA+IGltZ3tcXHJcXG4gICAgd2lkdGg6IDIuOHJlbTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuZGl2LmFkZC1wcm9qZWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmRpdi5kaWFsb2ctaGVhZGluZyA+IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG4uYWRkcHJvamVjdGJ0bntcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uYWRkcHJvamVjdGJ0biA+IGgze1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbmRpdi5wcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmVkaXQtZGVsZXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiAycHg7XFxyXFxufVxcclxcbmRpdi5lZGl0LWRlbGV0ZSAqe1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5mb3JtLmFkZEZvcm0sXFxyXFxuZm9ybS5lZGl0Rm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1iZyk7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG5mb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjJmOTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uY2xvc2VBZGQsXFxyXFxuYnV0dG9uLmNsb3NlRWRpdHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDIzMHB4O1xcclxcbn1cXHJcXG5idXR0b24jY2xvc2VBZGQuY2xvc2VBZGQgPiBpbWcsXFxyXFxuYnV0dG9uI2Nsb3NlRWRpdC5jbG9zZUVkaXQgPiBpbWd7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcbmRpdi5jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmRpdi5uby10YXNrLWRpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcbmRpdi5jb250ZW50e1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5kaXYubm8tdGFzay1kaXYgPiBoNHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5oNC5uby10YXNre1xcclxcbiAgICBjb2xvcjogIzRiYjJmOTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5kaXYudGFzay1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIuNHJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYudGFzay1kaXYgaW1ne1xcclxcbiAgICB3aWR0aDogOCU7XFxyXFxufVxcclxcbnAudGhldGFza3RpdGxle1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuZGl2LnJpZ2h0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmRpdi5kaWFsb2ctY29udGFpbmVyNHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuZm9ybS5hZGRUYXNrRm9ybXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuZGl2LmZvcm1kZXRhaWxze1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxubGFiZWx7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5kaXYubW9yZURldGFpbHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxudGV4dGFyZWF7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG50ZXh0YXJlYSxcXHJcXG4uZm9ybWRldGFpbHMgPiBpbnB1dCxcXHJcXG5zZWxlY3QsIFxcclxcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ODQ4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxudGV4dGFyZWEsXFxyXFxuICAgIGlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgfVxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0e1xcclxcbiAgICBoZWlnaHQ6IDIuOHJlbTtcXHJcXG59XFxyXFxuc2VsZWN0LCBcXHJcXG5kaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgaGVpZ2h0OiAyLjhyZW07XFxyXFxuICAgIHdpZHRoOiA5OCU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4udG9kby1vcHRpb25ze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHhcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNvbnRyb2x7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8xLzIvMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5kaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5kZWwtdGFza3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4vKlRhYmxldHMqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQxcHgpe1xcclxcbiAgICBkaWFsb2d7XFxyXFxuICAgICAgICB0b3A6IDE0MHB4O1xcclxcbiAgICAgICAgbGVmdDogNDBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuICAgIGhlYWRlciA+IGgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmZpbHRlciA+IHB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWVudSA+IC5jbG9zZUJ0biA+IGltZyxcXHJcXG4gICAgZGl2Lm1lbnUgPiAubWVudUJ0biA+IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAyNCU7XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uLmNsb3NlQWRkLFxcclxcbiAgICBidXR0b24uY2xvc2VFZGl0e1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogNTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uLmJhY2tCdG4gPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogODBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDMuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFzay1kaXYgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDYlO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5lZGl0LWRlbGV0ZSAqe1xcclxcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1haW4taGVhZGluZyA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkVGFza0Zvcm17XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0LjRyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0LjhyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWF7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwJTtcXHJcXG4gICAgfVxcclxcbiAgICBzZWxlY3QsIFxcclxcbiAgICBkaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBsYWJlbHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5mb3JtZGV0YWlsc3tcXHJcXG4gICAgICAgIGdhcDogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBidXR0b257XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5jb250cm9sID4gYnV0dG9uLmFkZEFUYXNre1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG4gICAgdGV4dGFyZWE6OnBsYWNlaG9sZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5uby10YXNrLWRpdiA+IGg0e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdntcXHJcXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHAudGhldGFza3RpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWEsXFxyXFxuICAgIGlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZmlsdGVyLWRpdiwgXFxyXFxuICAgIGRpdi5wcm9qZWN0LWRpdntcXHJcXG4gICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFza2hlYWRpbmcgPiBoMntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHAudGhlbm90ZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50b2RvaW5mbyA+IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50b2RvaW5mbyA+IGg0e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgaW1nLmJhY2tUb0FsbHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIHAuZGF0ZXtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTGFwdG9wcyAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcXHJcXG4gICAgZGl2LmNvbnRhaW5lcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNmZyIDNmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgM2ZyO1xcclxcbiAgICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5zaWRlYmFye1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMy8xO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcXHJcXG4gICAgfVxcclxcbiAgICBoZWFkZXJ7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDIvMS8xLzM7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1haW57XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tYWluLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMy8xLzMvMjtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgICAgICBnYXA6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZpbHRlciA+IHB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1lbnUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uY2xvc2VBZGQsXFxyXFxuICAgIGJ1dHRvbi5jbG9zZUVkaXR7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAyODBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uYmFja0J0biA+IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXIgPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMyU7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmVkaXQtZGVsZXRlICp7XFxyXFxuICAgICAgICB3aWR0aDogMThweDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWFpbi1oZWFkaW5nID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpYWxvZ3tcXHJcXG4gICAgICAgIHRvcDogMTAwcHg7XFxyXFxuICAgICAgICBsZWZ0OiAzMDBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5kaWFsb2ctaGVhZGluZyA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbi5hZGRwcm9qZWN0YnRuID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZFRhc2tGb3Jte1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC40ZnI7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFkZC10YXNrLWRpYWxvZ3tcXHJcXG4gICAgICAgIHRvcDogMTAwcHg7XFxyXFxuICAgICAgICBsZWZ0OiAzNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXR7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWF7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgfVxcclxcbiAgICBzZWxlY3QsIFxcclxcbiAgICBkaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBsYWJlbHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZm9ybWRldGFpbHN7XFxyXFxuICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmNvbnRyb2x7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5jb250cm9sID4gYnV0dG9uLmFkZEFUYXNre1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG4gICAgdGV4dGFyZWE6OnBsYWNlaG9sZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5uby10YXNrLWRpdiA+IGg0e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdntcXHJcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBwLnRoZXRhc2t0aXRsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICB0ZXh0YXJlYSxcXHJcXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZmlsdGVyLWRpdiwgXFxyXFxuICAgIGRpdi5wcm9qZWN0LWRpdntcXHJcXG4gICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tYWluLXRhc2stdmlld2Vye1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICB9XFxyXFxuICAgIHAudGhlbm90ZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFza2hlYWRpbmcgPiBoMntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHAuZGF0ZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50b2RvaW5mbyA+IGg0e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRvZG9pbmZvID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgaW1nLmJhY2tUb0FsbHtcXHJcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgbm90ZSwgZHVlRGF0ZSwgIHByb2plY3QsIGNoZWNrZWQpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGVcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgaWYocHJvamVjdCA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IFwiZGVmYXVsdFwiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICBpZihjaGVja2VkID09IHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWVcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG59OyIsImltcG9ydCBGb2xkZXIgZnJvbSAnLi9pbWcvZm9sZGVyLnN2Zyc7XHJcbmltcG9ydCBFZGl0IGZyb20gJy4vaW1nL2VkaXQuc3ZnJztcclxuaW1wb3J0IERlbGV0ZSBmcm9tICcuL2ltZy9kZWxldGUuc3ZnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdHMsIHRhZ3Mpe1xyXG5cclxuICAgIGlmKHRhZ3MuZmlyc3RFbGVtZW50Q2hpbGQpe1xyXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXModGFncyk7XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRoZXByb2plY3RGaXJzdExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhlcHJvamVjdEZpcnN0TGF5ZXIuY2xhc3NOYW1lID0gJ3RoZS1wcm9qZWN0cyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHRoZXByb2plY3RTZWNvbmRMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoZXByb2plY3RTZWNvbmRMYXllci5jbGFzc05hbWUgPSAncHJvamVjdHMnO1xyXG5cclxuICAgICAgICBjb25zdCB0aGVwcm9qZWN0VGhpcmRMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoZXByb2plY3RUaGlyZExheWVyLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcicsICdwcm9qZWN0LWZpbHRlcicpXHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlRm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1hZ2VGb2xkZXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWljb24nLCAnZmlsdGVyLXdoaXRlJylcclxuICAgICAgICBpbWFnZUZvbGRlci5zcmMgPSBGb2xkZXI7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXRhZ3MnO1xyXG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdDtcclxuXHJcbiAgICAgICAgdGhlcHJvamVjdFRoaXJkTGF5ZXIuYXBwZW5kQ2hpbGQoaW1hZ2VGb2xkZXIpO1xyXG4gICAgICAgIHRoZXByb2plY3RUaGlyZExheWVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgdGhlcHJvamVjdFNlY29uZExheWVyLmFwcGVuZENoaWxkKHRoZXByb2plY3RUaGlyZExheWVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udHJvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRyb2xEaXYuY2xhc3NOYW1lID0gJ2VkaXQtZGVsZXRlJztcclxuXHJcbiAgICAgICAgY29uc3QgZWRpdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgZWRpdEltYWdlLmNsYXNzTGlzdC5hZGQoJ2VkaXQnLCAnZmlsdGVyLXdoaXRlJylcclxuICAgICAgICBlZGl0SW1hZ2Uuc3JjID0gRWRpdDtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBkZWxldGVJbWFnZS5jbGFzc0xpc3QuYWRkKCdkZWxldGUnLCAnZmlsdGVyLXdoaXRlJylcclxuICAgICAgICBkZWxldGVJbWFnZS5zcmMgPSBEZWxldGU7XHJcblxyXG4gICAgICAgIGNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQoZWRpdEltYWdlKTtcclxuICAgICAgICBjb250cm9sRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUltYWdlKTtcclxuXHJcbiAgICAgICAgdGhlcHJvamVjdFNlY29uZExheWVyLmFwcGVuZENoaWxkKGNvbnRyb2xEaXYpO1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0Rmlyc3RMYXllci5hcHBlbmRDaGlsZCh0aGVwcm9qZWN0U2Vjb25kTGF5ZXIpXHJcbiAgICAgICAgdGFncy5hcHBlbmRDaGlsZCh0aGVwcm9qZWN0Rmlyc3RMYXllcilcclxuXHJcbiAgICB9KTtcclxuICAgIH1cclxuXHJcbi8vIHJlbW92ZXMgIGFsbCBjaGlsZCBlbGVtZW50cyBvbiB0aGUgc2NyZWVuXHJcbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KXtcclxuICAgIHdoaWxlKHBhcmVudC5maXJzdENoaWxkKXtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge3JlbW92ZUFsbENoaWxkTm9kZXMsIGNyZWF0ZVByb2plY3R9IiwiZnVuY3Rpb24gbG9jYWxEYigpe1xyXG4gICAgbGV0IGRiUmV0dXJuO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVUb0RiKGRiTmFtZSwgZGJWYWx1ZSl7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYk5hbWUsIEpTT04uc3RyaW5naWZ5KGRiVmFsdWUpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEZyb21EYihkYk5hbWUpe1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYk5hbWUpXHJcbiAgICAgICAgZGJSZXR1cm4gPSBKU09OLnBhcnNlKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIGRiUmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue3NhdmVUb0RiLCBnZXRGcm9tRGJ9XHJcbn1cclxuXHJcbmNvbnN0IHNhdmVUb0RiID0gbG9jYWxEYigpLnNhdmVUb0RiO1xyXG5jb25zdCBnZXRGcm9tRGIgPSBsb2NhbERiKCkuZ2V0RnJvbURiO1xyXG5leHBvcnQge3NhdmVUb0RiLCBnZXRGcm9tRGJ9IiwiaW1wb3J0IERlbCBmcm9tICcuL2ltZy9kZWxldGUuc3ZnJztcclxuaW1wb3J0IEJhY2sgZnJvbSAnLi9pbWcvYmFjay5zdmcnO1xyXG5pbXBvcnQgZm9sZGVyIGZyb20gJy4vaW1nL2ZvbGRlci5zdmcnO1xyXG5cclxuZnVuY3Rpb24gd3JpdGVUb01haW4oKXtcclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUFsbFRhc2sodG9kb3MsIG5vZGUpe1xyXG5cclxuICAgICAgICBpZighdG9kb3Mpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRvZG9zLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICduby10YXNrLWRpdic7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9ICdObyB0YXNrIGZvdW5kJztcclxuICAgICAgICAgICAgaGVhZGluZy5jbGFzc05hbWUgPSAnbm8tdGFzayc7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBcclxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ3Rhc2stZGl2JztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgdGFza0hvbGRlci5jbGFzc05hbWUgPSBcInJpZ2h0XCJcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VyLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlci5jbGFzc05hbWUgPSBcImNoZWNrXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrLmNsYXNzTmFtZSA9IFwidGhldGFza3RpdGxlXCI7XHJcbiAgICAgICAgICAgICAgICB0YXNrLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XHJcbiAgICAgICAgICAgICAgICB0YXNrSG9sZGVyLmFwcGVuZENoaWxkKGNoZWNrZXIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0hvbGRlci5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLXRhc2snLCAnZmlsdGVyLXdoaXRlJylcclxuICAgICAgICAgICAgICAgIGRlbEJ1dHRvbi5zcmMgPSBEZWw7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0hvbGRlcik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dFYWNoVGFzayh0b2RvLCBub2RlKXtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrUHJvamVjdC5jbGFzc05hbWUgPSAndGFza3Byb2plY3QnO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdGFza0RldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tEZXRhaWwuY2xhc3NOYW1lID0gJ3RvZG9pbmZvJztcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGZvbGRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGZvbGRlckltZy5jbGFzc05hbWUgPSBcImZpbHRlci13aGl0ZVwiO1xyXG4gICAgICAgIGZvbGRlckltZy5zcmMgPSBmb2xkZXI7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHRvZG8ucHJvamVjdDtcclxuXHJcbiAgICAgICAgdGFza0RldGFpbC5hcHBlbmRDaGlsZChmb2xkZXJJbWcpO1xyXG4gICAgICAgIHRhc2tEZXRhaWwuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza0hlYWRpbmcuY2xhc3NOYW1lID0gXCJ0YXNraGVhZGluZ1wiO1xyXG5cclxuICAgICAgICB0YXNrUHJvamVjdC5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsKTtcclxuICAgICAgICB0YXNrUHJvamVjdC5hcHBlbmRDaGlsZCh0YXNrSGVhZGluZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGVcclxuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuXHJcbiAgICAgICAgdGFza0hlYWRpbmcuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICB0YXNrSGVhZGluZy5hcHBlbmRDaGlsZChsaW5lKTtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbm90ZURpdi5jbGFzc05hbWUgPSAnbm90ZURpdic7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbm90ZS5pbm5lclRleHQgPSB0b2RvLm5vdGU7XHJcblxyXG4gICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza0NvbnRyb2wuY2xhc3NOYW1lID0gXCJ0YXNrQ29udHJvbFwiO1xyXG4gICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JhY2tUb0FsbCcsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGJhY2tCdXR0b24uc3JjID0gQmFjaztcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkYXRlLmlubmVyVGV4dCA9IHRvZG8uZHVlRGF0ZTtcclxuICAgICAgICBkYXRlLmNsYXNzTmFtZSA9IFwiZGF0ZVwiO1xyXG5cclxuICAgICAgICB0YXNrQ29udHJvbC5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKTtcclxuICAgICAgICB0YXNrQ29udHJvbC5hcHBlbmRDaGlsZChkYXRlKTtcclxuXHJcblxyXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpO1xyXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobm90ZURpdik7XHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0YXNrQ29udHJvbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3dyaXRlQWxsVGFzaywgc2hvd0VhY2hUYXNrfVxyXG59XHJcblxyXG5jb25zdCB3cml0ZUFsbFRhc2sgPSB3cml0ZVRvTWFpbigpLndyaXRlQWxsVGFzaztcclxuY29uc3Qgc2hvd0VhY2hUYXNrID13cml0ZVRvTWFpbigpLnNob3dFYWNoVGFzaztcclxuXHJcbmV4cG9ydCB7d3JpdGVBbGxUYXNrLCBzaG93RWFjaFRhc2t9IiwiaW1wb3J0IHtkZWxldGVCeVByb2plY3QgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVByb2plY3R9IGZyb20gJy4vY3JlYXRlLmpzJztcclxuaW1wb3J0IHtzYXZlVG9EYiwgZ2V0RnJvbURifSBmcm9tICcuL2RiLmpzJztcclxuXHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXCJkZWZhdWx0XCJdO1xyXG5jb25zdCBkYk5hbWUgPSBcInByb2plY3RzXCI7XHJcbihmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdGVzdHByb2plY3RzID0gZ2V0RnJvbURiKGRiTmFtZSk7XHJcbiAgICBpZighdGVzdHByb2plY3RzKXtcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIHByb2plY3RzKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRlc3Rwcm9qZWN0cy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBwcm9qZWN0cyk7XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4vLyBTb3J0IGJ5IFByb2plY3RzXHJcbmZ1bmN0aW9uIHByb2plY3RTb3J0KCl7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgaWYoIXByb2plY3ROYW1lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgcHJvamVjdHMudW5zaGlmdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBwcm9qZWN0cyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KG9sZFByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgcHJvamVjdHMgPSBnZXRGcm9tRGIoZGJOYW1lKVxyXG5cclxuICAgICAgICBpZighbmV3UHJvamVjdE5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0c1tpXSA9PSBvbGRQcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXSA9IG5ld1Byb2plY3ROYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBwcm9qZWN0cyk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3ROYW1lO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgcHJvamVjdHMgPSBnZXRGcm9tRGIoZGJOYW1lKVxyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0c1tpXSA9PSBwcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBwcm9qZWN0cyk7XHJcbiAgICAgICAgZGVsZXRlQnlQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHRhZ3Mpe1xyXG4gICAgICAgIHByb2plY3RzID0gZ2V0RnJvbURiKGRiTmFtZSlcclxuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RzLCB0YWdzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QoKXtcclxuICAgICAgICBwcm9qZWN0cyA9IGdldEZyb21EYihkYk5hbWUpO1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgIH1cclxuICAgIHJldHVybiB7Z2V0UHJvamVjdCwgZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3QsIGFkZFByb2plY3QsIHJlbmRlclByb2plY3RzfVxyXG59XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0ID0gcHJvamVjdFNvcnQoKS5hZGRQcm9qZWN0O1xyXG5jb25zdCByZW5kZXJQcm9qZWN0cyA9IHByb2plY3RTb3J0KCkucmVuZGVyUHJvamVjdHM7XHJcbmNvbnN0IGVkaXRQcm9qZWN0ID0gcHJvamVjdFNvcnQoKS5lZGl0UHJvamVjdDtcclxuY29uc3QgZGVsZXRlUHJvamVjdCA9IHByb2plY3RTb3J0KCkuZGVsZXRlUHJvamVjdDtcclxuY29uc3QgZ2V0UHJvamVjdCA9IHByb2plY3RTb3J0KCkuZ2V0UHJvamVjdDtcclxuXHJcbmV4cG9ydCB7Z2V0UHJvamVjdCwgZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3QsIGFkZFByb2plY3QsIHJlbmRlclByb2plY3RzfSIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL3RvZG9zLmpzXCI7XHJcbmltcG9ydCB7aXNUb2RheSwgaXNUaGlzV2VlaywgaXNUaGlzTW9udGh9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuXHJcbi8vIHNvcnQgYnkgRGF0ZVxyXG5cclxuZnVuY3Rpb24gbXlTb3J0KCl7XHJcblxyXG4gICAgLy90b2RheVxyXG4gICAgZnVuY3Rpb24gdG9kb3NUb2RheSgpe1xyXG4gICAgICAgIGNvbnN0IHRvZGF5U29ydCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUb2RheSh0b2RvLmR1ZURhdGUpKVxyXG4gICAgICAgICAgICAgICAgdG9kYXlTb3J0LnB1c2godG9kbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvZGF5U29ydDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzb3J0IGJ5IHdlZWtcclxuICAgIGZ1bmN0aW9uIHRvZG9zRm9yQVdlZWsoKXtcclxuICAgICAgICBjb25zdCB0aGlzV2VlayA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUaGlzV2Vlayh0b2RvLmR1ZURhdGUpKXtcclxuICAgICAgICAgICAgICAgIHRoaXNXZWVrLnB1c2godG9kbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpc1dlZWs7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBzb3J0IGJ5IG1vbnRoXHJcbiAgICBmdW5jdGlvbiB0b2Rvc0Zvck1vbnRoKCl7XHJcbiAgICAgICAgY29uc3QgdGhpc01vbnRoID0gW107XHJcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSByZW5kZXIoKTtcclxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZihpc1RoaXNNb250aCh0b2RvLmR1ZURhdGUpKXtcclxuICAgICAgICAgICAgICAgIHRoaXNNb250aC5wdXNoKHRvZG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXNNb250aDsgICBcclxuICAgIH1cclxuICAgIC8vIENoZWNrcyBmb3Igc3BlY2lmaWMgcHJvamVjdCBpbiB0aGUgdG9kb3MgYXJyYXlcclxuICAgIGZ1bmN0aW9uIGNoZWNrRm9yUHJvamVjdCh0aGVQcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgY29uc3QgdG9kb3NCeVByb2plY3QgPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRvZG8ucHJvamVjdCA9PSB0aGVQcm9qZWN0TmFtZSlcclxuICAgICAgICAgICAgICAgIHRvZG9zQnlQcm9qZWN0LnVuc2hpZnQodG9kbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9zQnlQcm9qZWN0XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtjaGVja0ZvclByb2plY3QsIHRvZG9zVG9kYXksIHRvZG9zRm9yQVdlZWssIHRvZG9zRm9yTW9udGh9XHJcbn1cclxuXHJcbmNvbnN0IHRvZG9zRm9yQVdlZWsgPSBteVNvcnQoKS50b2Rvc0ZvckFXZWVrO1xyXG5jb25zdCB0b2Rvc0Zvck1vbnRoID0gbXlTb3J0KCkudG9kb3NGb3JNb250aDtcclxuY29uc3QgdG9kb3NUb2RheSA9IG15U29ydCgpLnRvZG9zVG9kYXk7XHJcbmNvbnN0IGNoZWNrRm9yUHJvamVjdCA9IG15U29ydCgpLmNoZWNrRm9yUHJvamVjdDtcclxuZXhwb3J0IHtjaGVja0ZvclByb2plY3QsIHRvZG9zVG9kYXksIHRvZG9zRm9yQVdlZWssIHRvZG9zRm9yTW9udGh9IiwiaW1wb3J0IFRvZG9zIGZyb20gXCIuL2NsYXNzLmpzXCJcclxuaW1wb3J0IHtzYXZlVG9EYiwgZ2V0RnJvbURifSBmcm9tICcuL2RiLmpzJztcclxuXHJcblxyXG5sZXQgYWxsVG9kb3MgPSBbXTtcclxuY29uc3QgZGJOYW1lID0gXCJhbGxUb2Rvc1wiO1xyXG5cclxuKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCB0ZXN0dG9kbyA9IGdldEZyb21EYihkYk5hbWUpO1xyXG4gICAgaWYoIXRlc3R0b2RvKXtcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIGFsbFRvZG9zKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRlc3R0b2RvLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIGFsbFRvZG9zKVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gdG9kb3NDcmVhdG9yKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIG5vdGUsIGR1ZURhdGUsIHByb2plY3QsIGNoZWNrZWQpe1xyXG4gICAgICAgIGNvbnN0IHRvZG9zID0gbmV3IFRvZG9zKHRpdGxlLCBub3RlLCBkdWVEYXRlLCBwcm9qZWN0LCBjaGVja2VkKTtcclxuICAgICAgICBhZGRUb2Rvcyh0b2RvcykgXHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBhbGxUb2RvcylcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gYWRkVG9kb3ModG9kb3Mpe1xyXG4gICAgICAgIGFsbFRvZG9zLnVuc2hpZnQodG9kb3MpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVsZXRlQnlQcm9qZWN0KHByb2plY3ROYW1lKXtcclxuICAgICAgICBhbGxUb2Rvcz0gZ2V0RnJvbURiKGRiTmFtZSk7XHJcbiAgICAgICAgaWYoIWFsbFRvZG9zKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhbGxUb2Rvcy5maW5kSW5kZXgodGhlVG9kbyA9PiB0aGVUb2RvLnByb2plY3QgPT09IHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgYWxsVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIGFsbFRvZG9zKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyh0aXRsZSl7XHJcbiAgICAgICAgYWxsVG9kb3M9IGdldEZyb21EYihkYk5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWxsVG9kb3MuZmluZEluZGV4KHRoZVRvZG8gPT4gdGhlVG9kby50aXRsZSA9PT0gdGl0bGUpO1xyXG4gICAgICAgIGFsbFRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBhbGxUb2RvcylcclxuICAgIH0gXHJcbiAgICBmdW5jdGlvbiBlZGl0VG9kbyh0b2RvcywgbmV3VGl0bGUsIG5ld05vdGUsIG5ld0R1ZURhdGUsIG5ld1Byb2plY3Qpe1xyXG4gICAgICAgIGlmKG5ld1RpdGxlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3MudGl0bGUgPSBuZXdUaXRsZVxyXG4gICAgICAgIGlmKG5ld05vdGUgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy5ub3RlID0gbmV3Tm90ZVxyXG4gICAgICAgIGlmKG5ld0R1ZURhdGUgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy5kdWVEYXRlID0gbmV3RHVlRGF0ZVxyXG4gICAgICAgIGlmKG5ld1Byb2plY3QgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy5wcm9qZWN0ID0gbmV3UHJvamVjdDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgICAgIGFsbFRvZG9zPSBnZXRGcm9tRGIoZGJOYW1lKTtcclxuICAgICAgICBpZighYWxsVG9kb3Mpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxUb2RvcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2RlbGV0ZUJ5UHJvamVjdCwgZGVsZXRlVG9kbywgY3JlYXRlVG9kbywgZWRpdFRvZG8sIHJlbmRlcn1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVG9kbyA9IHRvZG9zQ3JlYXRvcigpLmNyZWF0ZVRvZG87XHJcbmNvbnN0IGRlbGV0ZVRvZG8gPSB0b2Rvc0NyZWF0b3IoKS5kZWxldGVUb2RvO1xyXG5jb25zdCBlZGl0VG9kbyA9IHRvZG9zQ3JlYXRvcigpLmVkaXRUb2RvO1xyXG5jb25zdCByZW5kZXIgPSB0b2Rvc0NyZWF0b3IoKS5yZW5kZXI7XHJcbmNvbnN0IGRlbGV0ZUJ5UHJvamVjdCA9IHRvZG9zQ3JlYXRvcigpLmRlbGV0ZUJ5UHJvamVjdDtcclxuXHJcblxyXG5leHBvcnQgeyBkZWxldGVCeVByb2plY3QsIGNyZWF0ZVRvZG8sIGRlbGV0ZVRvZG8sIHJlbmRlciwgZWRpdFRvZG99IiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcik/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcilcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiksIG5ldyBEYXRlKDIwMTQsIDgsIDI1KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTUgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNSwgOCwgMjUpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lTW9udGgoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG4gIHJldHVybiAoXG4gICAgX2RhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgPT09IF9kYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxuICAgIF9kYXRlTGVmdC5nZXRNb250aCgpID09PSBfZGF0ZVJpZ2h0LmdldE1vbnRoKClcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVNb250aDtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1NhbWVXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lV2VlayhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkYXRlTGVmdCwgb3B0aW9ucyk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGF0ZVJpZ2h0LCBvcHRpb25zKTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZldlZWsgPT09ICtkYXRlUmlnaHRTdGFydE9mV2Vlaztcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVXZWVrO1xuIiwiaW1wb3J0IHsgaXNTYW1lTW9udGggfSBmcm9tIFwiLi9pc1NhbWVNb250aC5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIG1vbnRoIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhpcyBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMTUgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc01vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDE1KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RoaXNNb250aChkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVNb250aChEYXRlLm5vdygpLCBkYXRlKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RoaXNNb250aDtcbiIsImltcG9ydCB7IGlzU2FtZVdlZWsgfSBmcm9tIFwiLi9pc1NhbWVXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNUaGlzV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gaXNTYW1lV2VlayhkYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RoaXNXZWVrO1xuIiwiaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSBcIi4vaXNTYW1lRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgRGF0ZS5ub3coKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUb2RheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcclxuaW1wb3J0IHtjcmVhdGVUb2RvLCBlZGl0VG9kbywgZGVsZXRlVG9kbywgcmVuZGVyfWZyb20gXCIuL3RvZG9zLmpzXCI7XHJcbmltcG9ydCB7Y2hlY2tGb3JQcm9qZWN0LCB0b2Rvc1RvZGF5LCB0b2Rvc0ZvckFXZWVrLCB0b2Rvc0Zvck1vbnRofSBmcm9tIFwiLi9zb3J0LmpzXCI7XHJcbmltcG9ydCB7Z2V0UHJvamVjdCwgZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3QsIGFkZFByb2plY3QsIHJlbmRlclByb2plY3RzfSBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQge3dyaXRlQWxsVGFzaywgc2hvd0VhY2hUYXNrfSBmcm9tICcuL21haW4uanMnO1xyXG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSAnLi9jcmVhdGUuanMnO1xyXG5cclxuKGZ1bmN0aW9uKCl7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudFwiLCBcIjFcIilcclxuICAgIGNvbnN0IHRvZG9zVGl0bGUgPSBcIkNsaWNrIFRvIExlYXJuIE1vcmVcIjtcclxuICAgIGNvbnN0IHRvZG9Ob3RlID0gYC1Zb3UgY2FuIGFkZCBUYXNrIGFuZCBzZWdtZW50IHRoZW0gaW50byBwcm9qZWN0cy5cclxuXHJcbiAgICAtQ2xpY2sgZWFjaCB0YXNrIHRpdGxlIHRvIHNlZSBtb3JlIGRldGFpbHMgYWJvdXQgdGhlIHRhc2tcclxuXHJcbiAgICAtQ2xpY2sgdGhlIHBsdXMgYnV0dG9uIHRvIGFkZCBuZXcgcHJvamVjdHMuXHJcblxyXG4gICAgLUNoZWNrb3V0IHRhc2tzIGFzIGNvbXBsZXRlZCBhbmQgZGVsZXRlZCB0aGVtIGFmdGVyd2FyZHMuXHJcblxyXG4gICAgLVRoYW5rIHlvdWA7XHJcbiAgICBjb25zdCBkYXRlID0gXCIyMDI0LTEtMTlcIjtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRcIikgIT09IFwiMVwiKXtcclxuICAgICAgICBjcmVhdGVUb2RvKHRvZG9zVGl0bGUsIHRvZG9Ob3RlLCBkYXRlLCBcImRlZmF1bHRcIik7XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4vL0RvbWUgQ2FjaGVcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnRuJyk7XHJcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XHJcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWJhckRhaWxvZycpO1xyXG5jb25zdCBmaWx0ZXJUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvcycpO1xyXG5jb25zdCB0aGVUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZS1wcm9qZWN0cycpO1xyXG5jb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWxvZy1FZGl0Jyk7XHJcbmNvbnN0IHRleHRJbnB1dEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0Jyk7XHJcbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdEJ0bicpO1xyXG5jb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Rm9ybScpO1xyXG5sZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRwcm9qZWN0YnRuJyk7XHJcbmNvbnN0IGFkZFByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdGRpYWxvZycpO1xyXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdHRleHQnKTtcclxuY29uc3QgYWRkTmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2dBZGRQcm9qZWN0QnRuJylcclxuY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRGb3JtJyk7XHJcbmNvbnN0IGNsb3NlQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQWRkJyk7XHJcbmNvbnN0IGNsb3NlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUVkaXQnKVxyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XHJcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tGb3JtJyk7XHJcbmNvbnN0IGFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZGlhbG9nJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2t0aXRsZScpO1xyXG5jb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tub3RlJyk7XHJcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xyXG5sZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlUHJvamVjdHMnKTtcclxuY29uc3QgYWRkQVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQVRhc2snKTtcclxubGV0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja0J0bicpO1xyXG5sZXQgZGVsVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtdGFzaycpO1xyXG5sZXQgYXZhaWxhYmxlUHJvamVjdHMgPSBnZXRQcm9qZWN0KCk7XHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxubGV0IGVhY2hUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZXRhc2t0aXRsZScpO1xyXG5jb25zdCB0YXNrVmlld2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGFzay12aWV3ZXInKVxyXG5sZXQgdGFncztcclxuXHJcbi8vRGlmZmVyZW50aWF0aW5nIGJldHdlZW4gdGhlIG1vYmlsZSBhbmQgbGFyZ2Ugc2NyZWVuIHNpZGViYXJcclxuKGZ1bmN0aW9uKCl7ICBcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpe1xyXG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoZVRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFnLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpZGViYXJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWdzID0gdGFnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIGFkZFByb2plY3RCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBpZihidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpZGViYXJcIil7XHJcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuID0gYnRuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHRoZVRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFnLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpYmFyRGFpbG9nXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFncyA9IHRhZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkZFByb2plY3RCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBpZihidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpYmFyRGFpbG9nXCIpe1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0biA9IGJ0bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG4vKiBJSUZFIHRoYXQgY3JlYXRlcyB0aGUgcGFnZSBvbiBlYWNoIGxvYWQsIGdldHRpbmcgdGhlIGRhdGEgc3RvcmVkIGluIHRoZSBsb2NhbHN0b3JhZ2VcclxuICAgIGFjY2luZyBlYWNoIG5ldyBlbGVtZW50IGFuZCBhZGRpbmcgbmVjZXNzYXJ5IGV2ZWVudCBvbiBldmVyeSBsb2FkXHJcbiovXHJcbihmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdGhpc3Byb2plY3RzID0gcmVuZGVyKCk7XHJcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xyXG4gICAgd3JpdGVBbGxUYXNrKHRoaXNwcm9qZWN0cywgY29udGVudCk7XHJcblxyXG4gICAgZWFjaFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGhldGFza3RpdGxlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZWFjaFRhc2ssICdjbGljaycsIHNob3dUYXNrKTtcclxuICAgIHJlbmRlclByb2plY3RzKHRhZ3MpXHJcbiAgICBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xyXG4gICAgYWRkTGlzdGVybmVyKGNoZWNrLCBcImNoYW5nZVwiLCB0aGVjaGVja2VyKVxyXG4gICAgZGVsVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtdGFzaycpXHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsVGFzaywgXCJjbGlja1wiLCBkZWxldGVUaGVUYXNrKVxyXG59KSgpO1xyXG5cclxuXHJcbi8vIEV2ZW50IGxpc3RlbmVyc1xyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xyXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XHJcblxyXG5cclxuLy8gb3BlbiB0aGUgc2lkZSBiYXIgb24gdGhlIG1vYmlsZSBhbmQgdGFiIHZpd1xyXG5mdW5jdGlvbiBvcGVuTWVudSgpe1xyXG4gICAgZGlhbG9nLnNob3coKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHRhc2tWaWV3ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG59XHJcblxyXG4vL2Nsb3NlcyB0aGUgc2lkZVxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoKXtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbi8vIEZpbHRlcnMgdGhlIG1haW4gdmlldyBiYXNlZCBvbiB0aGUgZmlsdGVyIG9wdGlvbnNcclxuZmlsdGVyVG9kb3MuZm9yRWFjaCh0b2RvRmlsdGVyID0+IHtcclxuICAgIFxyXG4gICAgICAgIHRvZG9GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnQWxsJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHNvcnRUb01haW4odGhpc3Byb2plY3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnVG9kYXknKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5UHJvamVjdHMgPSB0b2Rvc1RvZGF5KCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKHRvZGF5UHJvamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodG9kb0ZpbHRlci5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09ICdXZWVrJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWVrUHJvamVjdHMgPSB0b2Rvc0ZvckFXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKHdlZWtQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoUHJvamVjdHMgPSB0b2Rvc0Zvck1vbnRoKCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKG1vbnRoUHJvamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc29ydFRvTWFpbihwcm9qZWN0KXtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICB3cml0ZUFsbFRhc2socHJvamVjdCwgY29udGVudCk7XHJcbiAgICBlYWNoVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGV0YXNrdGl0bGUnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlYWNoVGFzaywgJ2NsaWNrJywgc2hvd1Rhc2spO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcclxuICAgIGFkZExpc3Rlcm5lcihjaGVjaywgXCJjaGFuZ2VcIiwgdGhlY2hlY2tlcilcclxuICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgYWRkTGlzdGVybmVyKGRlbFRhc2ssIFwiY2xpY2tcIiwgZGVsZXRlVGhlVGFzaylcclxufVxyXG5cclxuLy9BZGRzIEV2ZW50TGlzdGVybmVycyB0byByZWR1Y2UgcmVwZWF0IGNvZGVcclxuZnVuY3Rpb24gYWRkTGlzdGVybmVyKG5vZGVzLCB0aGVFdmVudCwgdGhlRnVuY3Rpb24pe1xyXG4gICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodGhlRXZlbnQsIHRoZUZ1bmN0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDaGVja3Mgd2hlbiBhIHVzZXIgZGltcyBhIHByb2plY3QgYXMgY29tcGxldGVkXHJcbmZ1bmN0aW9uIHRoZWNoZWNrZXIoZSl7XHJcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKXtcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vZGVsZXRlcyBhIHRhc2tcclxuZnVuY3Rpb24gZGVsZXRlVGhlVGFzayhlKXtcclxuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgZGVsZXRlVG9kbyh0aXRsZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcclxuICAgIC8vIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgIHNvcnRUb01haW4odGhpc3Byb2plY3RzKTtcclxufVxyXG5cclxuLy9FdmVudCBMaXN0ZW5lcnNcclxudGFncy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0YWdzRXZlbnQpO1xyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Byb2plY3RBZGRNb2RhbCk7XHJcbmFkZE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcclxuYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWRkVGFzayk7XHJcblxyXG5cclxuZnVuY3Rpb24gdGFnc0V2ZW50KCl7XHJcbiAgICBjb25zdCBlZGl0QW5kRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZGVsZXRlJyk7XHJcblxyXG4gICAgaWYoZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID09ICdub25lJylcclxuICAgICAgICBlZGl0QW5kRGVsZXRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG4vLyBPcGVucyB0aGUgYWRkUHJvamVjdCBNb2RhbFxyXG5mdW5jdGlvbiBzaG93UHJvamVjdEFkZE1vZGFsKCl7XHJcbiAgICBhZGRQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG5ld1Byb2plY3RJbnB1dC5mb2N1cygpO1xyXG4gICAgLy8gZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG4vL0FkZHMgbmV3IFByb2plY3RcclxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWVcclxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICBhdmFpbGFibGVQcm9qZWN0cyA9IGdldFByb2plY3QoKTtcclxuICAgIHJlbmRlclByb2plY3RzKHRhZ3MpXHJcbiAgICBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsZXRlQnRuLCAnY2xpY2snLCBkZWwpXHJcbiAgICBcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlZGl0QnRuLCBcImNsaWNrXCIsIGVkaXRNb2RhbCk7XHJcbiAgICBcclxuICAgIGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1maWx0ZXInKTtcclxuICAgIGFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzayk7XHJcblxyXG4gICAgYWRkRm9ybS5yZXNldCgpO1xyXG4gICAgYWRkUHJvamVjdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG4vL2Nsb3NlIHRoZSBhZGQgdGFzayBwYW5lbFxyXG5mdW5jdGlvbiBjbG9zZUFkZFRhc2soKXtcclxuICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbn1cclxuXHJcbmxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxubGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcclxubGV0IGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWdzJyk7XHJcbmxldCBjdXJyZW50UHJvamVjdDtcclxuXHJcblxyXG5hZGRMaXN0ZXJuZXIoZWRpdEJ0biwgXCJjbGlja1wiLCBlZGl0TW9kYWwpO1xyXG5hbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZmlsdGVyJyk7XHJcbmFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzayk7XHJcblxyXG4vLyBTb3J0cyB0YXNrcyBieSBwcm9qZWN0c1xyXG5mdW5jdGlvbiBzaG93UHJvamVjdFRhc2soZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIGNvbnN0IGJ5UHJvamVjdCA9IGNoZWNrRm9yUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBzb3J0VG9NYWluKGJ5UHJvamVjdCk7XHJcblxyXG59XHJcbmZ1bmN0aW9uIGVkaXRNb2RhbChlKXtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBlZGl0RGlhbG9nLnNob3dNb2RhbCgpXHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdGV4dElucHV0RWRpdC5mb2N1cygpO1xyXG4gICAgdGV4dElucHV0RWRpdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VycmVudFByb2plY3QpOyAgIFxyXG59XHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRoZVByb2plY3QpO1xyXG5cclxuLy9FZGl0cyB0aGUgcHJvamVjdFxyXG5mdW5jdGlvbiBlZGl0VGhlUHJvamVjdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWdzJyk7XHJcbiAgICBjb25zdCBuZXdOYW1lID0gZWRpdFByb2plY3QoY3VycmVudFByb2plY3QsIHRleHRJbnB1dEVkaXQudmFsdWUpO1xyXG4gICAgYWxsVGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgaWYodGFnLnRleHRDb250ZW50ID09IGN1cnJlbnRQcm9qZWN0KXtcclxuICAgICAgICAgICAgdGFnLnRleHRDb250ZW50ID0gbmV3TmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICAgICBlZGl0Rm9ybS5yZXNldCgpO1xyXG4gICAgICAgIGVkaXREaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgLy8gbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxufVxyXG5cclxuXHJcbmRlbGV0ZUJ0bi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWwpO1xyXG59KTtcclxuXHJcbi8vIERlbGV0ZXMgYSBwcm9qZWN0XHJcbmZ1bmN0aW9uIGRlbChlKXtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICByZW5kZXJQcm9qZWN0cyh0YWdzKTtcclxuXHJcbiAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICB3cml0ZUFsbFRhc2sodGhpc3Byb2plY3RzLCBjb250ZW50KTtcclxuICAgIFxyXG4gICAgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhZ3MnKTtcclxuICAgIGFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzaylcclxuXHJcbiAgICBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsZXRlQnRuLCBcImNsaWNrXCIsIGRlbClcclxuXHJcbiAgICBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdCcpO1xyXG4gICAgYWRkTGlzdGVybmVyKGVkaXRCdG4sIFwiY2xpY2tcIiwgZWRpdE1vZGFsKVxyXG59XHJcblxyXG4vL0Nsb3NpbmcgdGhlIGFkZCBwcm9qZWN0IGRpYWxvZ1xyXG5jbG9zZUFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBhZGRQcm9qZWN0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNsb3NlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxufSk7XHJcblxyXG4vL0Nsb3NpbmcgdGhlIGVkaXQgcHJvamVjdCBkaWFsb2dcclxuY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGVkaXREaWFsb2cuY2xvc2UoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGhlVGFzayk7XHJcblxyXG4vLyBPcGVucyB0aGUgYWRkIHRhc2sgZGlhbG9nXHJcbmZ1bmN0aW9uIGFkZFRoZVRhc2soKXtcclxuICAgIGFkZFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgYWRkVGFza1Byb2plY3QoKTtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBjb2xsZWN0IHRhc2sgZGV0YWlsc1xyXG5hZGRBVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxlY3RUYXNrKTtcclxuXHJcbi8vIENyZWF0ZXMgdG9vZCBvYmplY3QgXHJcbmZ1bmN0aW9uIGNvbGxlY3RUYXNrKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlUHJvamVjdHMnKTtcclxuICAgIGNvbnN0IHRoZVRpdGxlID0gdGl0bGUudmFsdWU7XHJcbiAgICBjb25zdCB0aGVOb3RlICA9IG5vdGUudmFsdWU7XHJcbiAgICBjb25zdCB0aGVEdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcclxuICAgIGNvbnN0IHRoZVByb2plY3QgPSB0YXNrUHJvamVjdC52YWx1ZTtcclxuICAgIGlmKHRoZVRpdGxlICYmIHRoZUR1ZURhdGUpe1xyXG4gICAgICAgIGNyZWF0ZVRvZG8odGhlVGl0bGUsIHRoZU5vdGUsIHRoZUR1ZURhdGUsIHRoZVByb2plY3QpO1xyXG4gICAgICAgIGNvbnN0IHRoaXNwcm9qZWN0cyA9IHJlbmRlcigpO1xyXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICAgICAgd3JpdGVBbGxUYXNrKHRoaXNwcm9qZWN0cywgY29udGVudCk7XHJcbiAgICAgICAgZWFjaFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGhldGFza3RpdGxlJyk7XHJcbiAgICAgICAgYWRkTGlzdGVybmVyKGVhY2hUYXNrLCAnY2xpY2snLCBzaG93VGFzayk7XHJcbiAgICAgICAgYWRkVGFza0Zvcm0ucmVzZXQoKTtcclxuICAgICAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xyXG4gICAgICAgIGFkZExpc3Rlcm5lcihjaGVjaywgXCJjaGFuZ2VcIiwgdGhlY2hlY2tlcilcclxuICAgICAgICBkZWxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbC10YXNrJylcclxuICAgICAgICBhZGRMaXN0ZXJuZXIoZGVsVGFzaywgXCJjbGlja1wiLCBkZWxldGVUaGVUYXNrKVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGRzIHRoZSBhdmFpbGFibGUgcHJvamVjdHMgdG8gdGhlIGZvcm0gc2VsZWN0IGVsZW1lbnQgYXMgb3B0aW9ucyBmb3IgdGhlIHVzZXJcclxuZnVuY3Rpb24gYWRkVGFza1Byb2plY3QoKXtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXModGFza1Byb2plY3QpO1xyXG4gICAgYXZhaWxhYmxlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRhc2tQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gRGlzcGxheXMgbW9yZSBkZXRhaWxzIG9uIGVhY2ggdGFza1xyXG5mdW5jdGlvbiBzaG93VGFzayhlKXtcclxuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB0YXNrVmlld2VyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIGNvbnN0IHRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgIGlmKHRvZG8udGl0bGUgPT0gdGl0bGUpe1xyXG4gICAgICAgICAgICBzaG93RWFjaFRhc2sodG9kbywgdGFza1ZpZXdlcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tUb0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrVG9BbGwnKTtcclxuICAgICAgICAgICAgYmFja1RvQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29CYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ2xvc2VzIHRoZSBtb3JlIHNjcmVlbiBvbiBlYWNoIHRhc2tcclxuZnVuY3Rpb24gZ29CYWNrKGUpe1xyXG4gICAgdGFza1ZpZXdlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHRhc2tWaWV3ZXIpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9