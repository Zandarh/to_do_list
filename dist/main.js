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
    p.date{
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
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;IAEI,+FAA+F;AACnG;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,yBAAyB;AAC7B;AACA;;;;IAII,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;AACA;;IAEI,yBAAyB;AAC7B;AACA;IACI,eAAe;AACnB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI;QACI,mBAAmB;QACnB,mBAAmB;IACvB;IACA;;;QAGI,wHAAwH;IAC5H;IACA;;QAEI,sBAAsB;IAC1B;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,0CAA0C;IAC9C;IACA;QACI,yBAAyB;IAC7B;IACA;;;;QAII,yBAAyB;IAC7B;IACA;;QAEI,yBAAyB;IAC7B;IACA;;;QAGI,sBAAsB;IAC1B;AACJ;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,yCAAyC;AAC7C;AACA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;;;;;;;IAOI,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,iBAAiB;;AAErB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,UAAU;IACV,UAAU;IACV,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,WAAW;;AAEf;AACA;;IAEI,WAAW;AACf;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;AACf;AACA;IACI,WAAW;IACX,aAAa;IACb,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gCAAgC;IAChC,UAAU;AACd;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;IACI,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,QAAQ;AACZ;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,WAAW;;AAEf;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,QAAQ;AACZ;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;;IAEI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iCAAiC;AACrC;AACA;;IAEI,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;AACA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,eAAe;AACnB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,oBAAoB;AACxB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,aAAa;AACjB;AACA;;;;IAII,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;AACA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;AACA;;QAEQ,iBAAiB;IACrB;AACJ;IACI,cAAc;AAClB;AACA;;IAEI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,aAAa;;AAEjB;AACA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA,UAAU;AACV;IACI;QACI,UAAU;QACV,UAAU;QACV,UAAU;;IAEd;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,UAAU;IACd;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;IACf;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,cAAc;QACd,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,SAAS;IACb;IACA;;QAEI,eAAe;QACf,aAAa;IACjB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,cAAc;IAClB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,iBAAiB;IACrB;IACA;;QAEI,SAAS;IACb;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;QACb,mBAAmB;QACnB,iBAAiB;IACrB;AACJ;;AAEA,YAAY;AACZ;IACI;QACI,aAAa;QACb,gCAAgC;QAChC,6BAA6B;QAC7B,SAAS;IACb;IACA;QACI,kBAAkB;QAClB,kBAAkB;QAClB,yBAAyB;IAC7B;IACA;QACI,kBAAkB;QAClB,yBAAyB;QACzB,uBAAuB;IAC3B;IACA;QACI,kBAAkB;QAClB,aAAa;IACjB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,aAAa;QACb,mCAAmC;QACnC,aAAa;QACb,SAAS;IACb;IACA;QACI,eAAe;IACnB;IACA;QACI,aAAa;IACjB;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;QACX,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;QACV,YAAY;QACZ,mBAAmB;QACnB,aAAa;QACb,WAAW;IACf;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,SAAS;IACb;IACA;;QAEI,iBAAiB;IACrB;IACA;QACI,mBAAmB;IACvB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;;QAEI,SAAS;IACb;IACA;;QAEI,WAAW;IACf;IACA;;QAEI,eAAe;IACnB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    --color-fg: #eee;\r\n    --color-bg: #121212;\r\n    --heading: #0464a4;\r\n}\r\n.menuB,\r\n.filter-white{\r\n    filter: invert(100%) sepia(0%) saturate(7435%) hue-rotate(65deg) brightness(105%) contrast(95%);\r\n}\r\n.filter > p{\r\n    color: var(--color-fg);\r\n}\r\ndiv.taskheading > h2{\r\n    color: var(--color-fg);\r\n}\r\ndialog{\r\n    background-color: #272727;\r\n}\r\ndiv.overlay{\r\n    background-color: rgba(29, 25, 25, 0.71);\r\n}\r\ndiv.task-div{\r\n    background-color: #3d3c3c;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    background-color: #474848;\r\n    color: var(--color-bg);\r\n}\r\n.addprojectbtn{\r\n    color: var(--color-fg);\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    background-color: #3d3c3c;\r\n}\r\np.thetasktitle{\r\n    cursor: pointer;\r\n}\r\ndiv.main-task-viewer *p{\r\n    color: var(--color-fg);\r\n}\r\n@media (prefers-color-scheme: light){\r\n    :root{\r\n        --color-bg: #cfcdcd;\r\n        --color-fg: #1A1C20;\r\n    }\r\n    .backImg,\r\n    .del-task,\r\n    .menuB{\r\n        filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%);\r\n    }\r\n    .addprojectbtn,\r\n    .filter > p{\r\n        color: var(--color-bg);\r\n    }\r\n    dialog{\r\n        background-color: #343232;\r\n    }\r\n    div.overlay{\r\n        background-color: rgba(184, 179, 179, 0.9);\r\n    }\r\n    div.task-div{\r\n        background-color: #d1cdcd;\r\n    }\r\n    textarea#tasknote,\r\n    input#tasktitle,\r\n    select#theProjects, \r\n    input#duedate{\r\n        background-color: #d1cdcd;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        background-color: #d1cdcd; \r\n    }\r\n    div.taskheading > h2,\r\n    p.thenote,\r\n    p.date{\r\n        color: var(--color-bg);\r\n    }\r\n}\r\nhtml, body{\r\n    height: 100%;\r\n}\r\nhtml{\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nbody{\r\n    min-height: 100vh;\r\n    background-color: var(--color-bg);\r\n    color: var(--color-fg);\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\ndiv.container{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-rows: 0.2fr 3fr 0.3fr;\r\n}\r\nheader{\r\n    grid-area: 1/1/1/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\nheader > h1{\r\n    color: var(--heading);\r\n    font-size: 1.5rem;\r\n}\r\ndiv.menu{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\nbutton.backBtn,\r\nbutton.delbtn,\r\nbutton.closeAdd,\r\nbutton.closeEdit,\r\nbutton.closeBtn,\r\nbutton.menuBtn,\r\nbutton.addprojectbtn{\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.menu > .closeBtn > img,\r\ndiv.menu > .menuBtn > img{\r\n    color: var(--color-fg);\r\n    width: 12%;\r\n}\r\nbutton#close.closeBtn{\r\n    display: none;\r\n    z-index: 11;\r\n}\r\ndiv.main{\r\n    padding-top: 50px;\r\n}\r\ndiv.main-container{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 5px;\r\n    gap: 20px;\r\n}\r\ndiv.main-task-viewer{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: none;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 5px;\r\n    gap: 15px;\r\n    padding: 20px;\r\n}\r\n\r\ndiv.main-heading{\r\n    grid-area: 1/1/1/2;\r\n    padding: 10px;\r\n}\r\ndiv.main-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.7rem;\r\n\r\n}\r\ndiv.main-content{\r\n    grid-area: 2/1/3/2;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.add-taskdiv{\r\n    grid-area: 3/1/4/2;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding: 5px;\r\n}\r\n\r\ndiv.add-taskdiv > button.addTask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\nbutton.backBtn > img{\r\n    width: 30px;\r\n}\r\ndialog{\r\n    top: 100px;\r\n    left: 20px;\r\n    width: 90%;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    z-index: 12;\r\n\r\n}\r\n.dailog-Edit,\r\n.addprojectdialog{\r\n    height: 80%;\r\n}\r\ndiv.overlay{\r\n    display: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10;\r\n}\r\ndiv.addbtn{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\ndiv.taskproject{\r\n    display: flex;\r\n    gap: 30px;\r\n    flex-direction: column;\r\n}\r\ndiv.todoinfo{\r\n    display: flex;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\ndiv.todoinfo > img{\r\n    width: 20px;\r\n    opacity: 0.4;\r\n}\r\ndiv.todoinfo > h4{\r\n    opacity: 0.4;\r\n    font-size: 0.9rem;\r\n}\r\ndiv.taskheading {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    align-items: center;\r\n}\r\ndiv.taskheading > h2{\r\n    text-align: center;\r\n}\r\nhr{\r\n    border: 1px solid var(--heading);\r\n    width: 80%;\r\n}\r\np.thenote{\r\n    font-size: 1.2rem;\r\n}\r\ndiv.taskControl{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\nimg.backToAll{\r\n    width: 30px;\r\n    cursor: pointer;\r\n}\r\np.date{\r\n    border: 1px solid var(--heading);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n}\r\ndiv.dailog-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n.filter > p{\r\n    font-size: 1rem;\r\n}\r\n\r\ndiv.filter-div, \r\ndiv.project-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    gap: 5px;\r\n}\r\n.filter{\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.the-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.filter > img{\r\n    width: 2.8rem;\r\n    padding: 10px;\r\n}\r\ndiv.add-project{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    width: 100%;\r\n\r\n}\r\n\r\ndiv.dialog-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.3rem;\r\n}\r\n.addprojectbtn{\r\n    border: none;\r\n}\r\n.addprojectbtn > h3{\r\n    font-size: 2rem;\r\n}\r\ndiv.projects{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\ndiv.edit-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 2px;\r\n}\r\ndiv.edit-delete *{\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\nform.addForm,\r\nform.editForm{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    height: 2.4rem;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    color: var(--color-fg);\r\n    border: 1px solid var(--color-bg);\r\n}\r\nform.addForm > button,\r\nform.editForm > button{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    background-color: #4bb2f9;\r\n    color: var(--color-bg);\r\n    border: none;\r\n}\r\n\r\nbutton.closeAdd,\r\nbutton.closeEdit{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 230px;\r\n}\r\nbutton#closeAdd.closeAdd > img,\r\nbutton#closeEdit.closeEdit > img{\r\n    color: var(--color-fg);\r\n    width: 30%;\r\n}\r\ndiv.content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    gap: 10px;\r\n}\r\ndiv.no-task-div{\r\n    width: 100%;\r\n    padding: 30px;\r\n}\r\ndiv.content{\r\n    width: 90%;\r\n}\r\ndiv.no-task-div > h4{\r\n    font-size: 1rem;\r\n}\r\nh4.no-task{\r\n    color: #4bb2f9;\r\n    text-align: center;\r\n    font-weight: 200;\r\n}\r\ndiv.task-div{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 2.4rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\ndiv.task-div img{\r\n    width: 8%;\r\n}\r\np.thetasktitle{\r\n    font-size: 1.2rem;\r\n}\r\ndiv.right{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\ndiv.dialog-container4{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nform.addTaskForm{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\ndiv.formdetails{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding-bottom: 40px;\r\n}\r\nlabel{\r\n    display: block;\r\n    font-size: 1.4rem;\r\n    color: var(--heading);\r\n    font-weight: 700;\r\n}\r\ndiv.moreDetails{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\ntextarea{\r\n    overflow: auto;\r\n    height: 200px;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: #474848;\r\n    color: var(--color-fg);\r\n    border: none;\r\n}\r\n.formdetails > input::placeholder,\r\ntextarea::placeholder{\r\n    color: var(--color-fg);\r\n    font-size: 1rem;\r\n}\r\ntextarea,\r\n    input[type=text]{\r\n        font-size: 1.2rem;\r\n    }\r\n.formdetails > input{\r\n    height: 2.8rem;\r\n}\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    height: 2.8rem;\r\n    width: 150px;\r\n    padding: 5px;\r\n    font-size: 1rem;\r\n}\r\n.todo-options{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px\r\n}\r\n\r\ndiv.control{\r\n    grid-area: 2/1/2/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 10px;\r\n    \r\n}\r\ndiv.control > button.addATask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.del-task{\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n/*Tablets*/\r\n@media only screen and (min-width: 541px){\r\n    dialog{\r\n        top: 140px;\r\n        left: 40px;\r\n        width: 90%;\r\n    \r\n    }\r\n    header > h1{\r\n        font-size: 2.5rem;\r\n    }\r\n    .filter > p{\r\n        font-size: 1.6rem;\r\n    }\r\n    div.menu > .closeBtn > img,\r\n    div.menu > .menuBtn > img{\r\n        width: 24%;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 500px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 80px;\r\n    }\r\n    .filter > img{\r\n        width: 3.8rem;\r\n    }\r\n    div.task-div img{\r\n        width: 6%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 40px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 2.7rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 2rem;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 2.3rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 4rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 4.4rem;\r\n        padding: 20px;\r\n    }\r\n    .formdetails > input{\r\n        height: 4.8rem;\r\n    }\r\n    textarea{\r\n        height: 40%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 3rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 2rem;\r\n    }\r\n    label{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 15px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 2rem;\r\n        padding: 15px;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 2rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 2rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 2rem;\r\n    }\r\n    div.task-div{\r\n        height: 4.4rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 2.2rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 2.2rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n    div.taskheading > h2{\r\n        font-size: 2.5rem;\r\n    }\r\n    p.thenote{\r\n        font-size: 1.7rem;\r\n    }\r\n    div.todoinfo > img{\r\n        width: 40px;\r\n    }\r\n    div.todoinfo > h4{\r\n        font-size: 1.2rem;\r\n    }\r\n    img.backToAll{\r\n        width: 50px;\r\n    }\r\n    p.date{\r\n        padding: 10px;\r\n        border-radius: 10px;\r\n        font-size: 1.4rem;\r\n    }\r\n}\r\n\r\n/* Laptops */\r\n@media only screen and (min-width: 1024px){\r\n    div.container{\r\n        display: grid;\r\n        grid-template-columns: 0.6fr 3fr;\r\n        grid-template-rows: 0.3fr 3fr;\r\n        gap: 20px;\r\n    }\r\n    div.sidebar{\r\n        padding-top: 100px;\r\n        grid-area: 1/1/3/1;\r\n        background-color: #3d3c3c;\r\n    }\r\n    header{\r\n        grid-area: 2/1/1/3;\r\n        background-color: #3d3c3c;\r\n        justify-content: center;\r\n    }\r\n    div.main{\r\n        grid-area: 2/2/3/3;\r\n        display: flex;\r\n    }\r\n    div.main-container{\r\n        grid-area: 3/1/3/2;\r\n        width: 60%;\r\n        height: 90%;\r\n        display: grid;\r\n        grid-template-rows: 0.2fr 3fr 0.4fr;\r\n        padding: 15px;\r\n        gap: 20px;\r\n    }\r\n    .filter > p{\r\n        font-size: 1rem;\r\n    }\r\n    div.menu {\r\n        display: none;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 280px;\r\n        width: 120px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 30px;\r\n    }\r\n    .filter > img{\r\n        width: 2.5rem;\r\n    }\r\n    div.task-div img{\r\n        width: 3%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 18px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 1.1rem;\r\n    }\r\n    dialog{\r\n        top: 100px;\r\n        left: 300px;\r\n        width: 40%;\r\n        border: none;\r\n        border-radius: 10px;\r\n        padding: 10px;\r\n        z-index: 12;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 1rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 1.6rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 2rem;\r\n        padding: 15px;\r\n    }\r\n    .add-task-dialog{\r\n        top: 100px;\r\n        left: 350px;\r\n        width: 60%;\r\n    }\r\n    .formdetails > input{\r\n        height: 2rem;\r\n    }\r\n    textarea{\r\n        height: 20%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 2rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 1rem;\r\n    }\r\n    label{\r\n        font-size: 1rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 1.3rem;\r\n    }\r\n    div.control{\r\n        align-items: center;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 1rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 1rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 1rem;\r\n    }\r\n    div.task-div{\r\n        height: 2rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 1rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 1rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        width: 100%;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 1rem;\r\n    }\r\n    div.main-task-viewer{\r\n        width: 50%;\r\n        height: 80%;\r\n    }\r\n    p.thenote{\r\n        font-size: 1rem;\r\n    }\r\n    div.taskheading > h2{\r\n        font-size: 1.5rem;\r\n    }\r\n    p.date{\r\n        font-size: 0.8rem;\r\n    }\r\n    div.todoinfo > h4{\r\n        font-size: 0.8rem;\r\n    }\r\n    div.todoinfo > img{\r\n        width: 15px;\r\n    }\r\n    img.backToAll{\r\n        width: 2rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFFBQVEsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFFBQVEsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sUUFBUSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxL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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJtQztBQUNEO0FBQ0k7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0Q0FBRztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQ0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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WTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFVO0FBQ2xCLDZCQUE2QixpREFBTTtBQUNuQyxRQUFRLCtEQUFtQjtBQUMzQixRQUFRLHNEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQU07QUFDeEI7QUFDQTtBQUNBLFlBQVksc0RBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQW1CO0FBQ3ZCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc29ydC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lTW9udGgubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RoaXNNb250aC5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RoaXNXZWVrLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVG9kYXkubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG46cm9vdHtcclxuICAgIC0tY29sb3ItZmc6ICNlZWU7XHJcbiAgICAtLWNvbG9yLWJnOiAjMTIxMjEyO1xyXG4gICAgLS1oZWFkaW5nOiAjMDQ2NGE0O1xyXG59XHJcbi5tZW51QixcclxuLmZpbHRlci13aGl0ZXtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDM1JSkgaHVlLXJvdGF0ZSg2NWRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCg5NSUpO1xyXG59XHJcbi5maWx0ZXIgPiBwe1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxufVxyXG5kaXYudGFza2hlYWRpbmcgPiBoMntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbn1cclxuZGlhbG9ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcclxufVxyXG5kaXYub3ZlcmxheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDI1LCAyNSwgMC43MSk7XHJcbn1cclxuZGl2LnRhc2stZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcclxufVxyXG50ZXh0YXJlYSxcclxuLmZvcm1kZXRhaWxzID4gaW5wdXQsXHJcbnNlbGVjdCwgXHJcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDg0ODtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbn1cclxuLmFkZHByb2plY3RidG57XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG59XHJcbmZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG5mb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xyXG59XHJcbnAudGhldGFza3RpdGxle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmRpdi5tYWluLXRhc2stdmlld2VyICpwe1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxufVxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCl7XHJcbiAgICA6cm9vdHtcclxuICAgICAgICAtLWNvbG9yLWJnOiAjY2ZjZGNkO1xyXG4gICAgICAgIC0tY29sb3ItZmc6ICMxQTFDMjA7XHJcbiAgICB9XHJcbiAgICAuYmFja0ltZyxcclxuICAgIC5kZWwtdGFzayxcclxuICAgIC5tZW51QntcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDMxZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7XHJcbiAgICB9XHJcbiAgICAuYWRkcHJvamVjdGJ0bixcclxuICAgIC5maWx0ZXIgPiBwe1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICB9XHJcbiAgICBkaWFsb2d7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzIzMjtcclxuICAgIH1cclxuICAgIGRpdi5vdmVybGF5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg0LCAxNzksIDE3OSwgMC45KTtcclxuICAgIH1cclxuICAgIGRpdi50YXNrLWRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEjdGFza25vdGUsXHJcbiAgICBpbnB1dCN0YXNrdGl0bGUsXHJcbiAgICBzZWxlY3QjdGhlUHJvamVjdHMsIFxyXG4gICAgaW5wdXQjZHVlZGF0ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2RjZDsgXHJcbiAgICB9XHJcbiAgICBkaXYudGFza2hlYWRpbmcgPiBoMixcclxuICAgIHAudGhlbm90ZSxcclxuICAgIHAuZGF0ZXtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgfVxyXG59XHJcbmh0bWwsIGJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuaHRtbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbmJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5kaXYuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC4zZnI7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5oZWFkZXIgPiBoMXtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbmRpdi5tZW51e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbmJ1dHRvbi5iYWNrQnRuLFxyXG5idXR0b24uZGVsYnRuLFxyXG5idXR0b24uY2xvc2VBZGQsXHJcbmJ1dHRvbi5jbG9zZUVkaXQsXHJcbmJ1dHRvbi5jbG9zZUJ0bixcclxuYnV0dG9uLm1lbnVCdG4sXHJcbmJ1dHRvbi5hZGRwcm9qZWN0YnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxyXG5kaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIHdpZHRoOiAxMiU7XHJcbn1cclxuYnV0dG9uI2Nsb3NlLmNsb3NlQnRue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcbmRpdi5tYWlue1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuZGl2Lm1haW4tY29udGFpbmVye1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcbmRpdi5tYWluLXRhc2stdmlld2Vye1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuZGl2Lm1haW4taGVhZGluZ3tcclxuICAgIGdyaWQtYXJlYTogMS8xLzEvMjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2Lm1haW4taGVhZGluZyA+IGgze1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcblxyXG59XHJcbmRpdi5tYWluLWNvbnRlbnR7XHJcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuZGl2LmFkZC10YXNrZGl2e1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5kaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5idXR0b24uYmFja0J0biA+IGltZ3tcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcbmRpYWxvZ3tcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTI7XHJcblxyXG59XHJcbi5kYWlsb2ctRWRpdCxcclxuLmFkZHByb2plY3RkaWFsb2d7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufVxyXG5kaXYub3ZlcmxheXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbmRpdi5hZGRidG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbmRpdi50YXNrcHJvamVjdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmRpdi50b2RvaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmRpdi50b2RvaW5mbyA+IGltZ3tcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcbmRpdi50b2RvaW5mbyA+IGg0e1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuZGl2LnRhc2toZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmRpdi50YXNraGVhZGluZyA+IGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGluZyk7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbnAudGhlbm90ZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbmRpdi50YXNrQ29udHJvbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmltZy5iYWNrVG9BbGx7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5wLmRhdGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkaW5nKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuZGl2LmRhaWxvZy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmlsdGVyID4gcHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuZGl2LmZpbHRlci1kaXYsIFxyXG5kaXYucHJvamVjdC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuLmZpbHRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50aGUtcHJvamVjdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmlsdGVyID4gaW1ne1xyXG4gICAgd2lkdGg6IDIuOHJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LmFkZC1wcm9qZWN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4uYWRkcHJvamVjdGJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYWRkcHJvamVjdGJ0biA+IGgze1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbmRpdi5wcm9qZWN0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZGl2LmVkaXQtZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGdhcDogMnB4O1xyXG59XHJcbmRpdi5lZGl0LWRlbGV0ZSAqe1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuZm9ybS5hZGRGb3JtLFxyXG5mb3JtLmVkaXRGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbmZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmcpO1xyXG59XHJcbmZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcclxuZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjJmOTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5jbG9zZUFkZCxcclxuYnV0dG9uLmNsb3NlRWRpdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDIzMHB4O1xyXG59XHJcbmJ1dHRvbiNjbG9zZUFkZC5jbG9zZUFkZCA+IGltZyxcclxuYnV0dG9uI2Nsb3NlRWRpdC5jbG9zZUVkaXQgPiBpbWd7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5kaXYuY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5kaXYubm8tdGFzay1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuZGl2LmNvbnRlbnR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbmRpdi5uby10YXNrLWRpdiA+IGg0e1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbmg0Lm5vLXRhc2t7XHJcbiAgICBjb2xvcjogIzRiYjJmOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuZGl2LnRhc2stZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LnRhc2stZGl2IGltZ3tcclxuICAgIHdpZHRoOiA4JTtcclxufVxyXG5wLnRoZXRhc2t0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbmRpdi5yaWdodHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcbmRpdi5kaWFsb2ctY29udGFpbmVyNHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmZvcm0uYWRkVGFza0Zvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5kaXYuZm9ybWRldGFpbHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5kaXYubW9yZURldGFpbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbnRleHRhcmVhLFxyXG4uZm9ybWRldGFpbHMgPiBpbnB1dCxcclxuc2VsZWN0LCBcclxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcclxudGV4dGFyZWE6OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG50ZXh0YXJlYSxcclxuICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbi5mb3JtZGV0YWlscyA+IGlucHV0e1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbn1cclxuc2VsZWN0LCBcclxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4udG9kby1vcHRpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHhcclxufVxyXG5cclxuZGl2LmNvbnRyb2x7XHJcbiAgICBncmlkLWFyZWE6IDIvMS8yLzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG59XHJcbmRpdi5jb250cm9sID4gYnV0dG9uLmFkZEFUYXNre1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5kZWwtdGFza3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLypUYWJsZXRzKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDFweCl7XHJcbiAgICBkaWFsb2d7XHJcbiAgICAgICAgdG9wOiAxNDBweDtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICBcclxuICAgIH1cclxuICAgIGhlYWRlciA+IGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgLmZpbHRlciA+IHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICB9XHJcbiAgICBkaXYubWVudSA+IC5jbG9zZUJ0biA+IGltZyxcclxuICAgIGRpdi5tZW51ID4gLm1lbnVCdG4gPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDI0JTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5jbG9zZUFkZCxcclxuICAgIGJ1dHRvbi5jbG9zZUVkaXR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiA1MDBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5iYWNrQnRuID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmZpbHRlciA+IGltZ3tcclxuICAgICAgICB3aWR0aDogMy44cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2stZGl2IGltZ3tcclxuICAgICAgICB3aWR0aDogNiU7XHJcbiAgICB9XHJcbiAgICBkaXYuZWRpdC1kZWxldGUgKntcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgIH1cclxuICAgIGRpdi5tYWluLWhlYWRpbmcgPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDIuN3JlbTtcclxuICAgIH1cclxuICAgIGRpdi5hZGQtdGFza2RpdiA+IGJ1dHRvbi5hZGRUYXNre1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIGRpdi5kaWFsb2ctaGVhZGluZyA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmFkZHByb2plY3RidG4gPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZFRhc2tGb3Jte1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNGZyO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiA0LjRyZW07XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogNC44cmVtO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWF7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QsIFxyXG4gICAgZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZm9ybWRldGFpbHN7XHJcbiAgICAgICAgZ2FwOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIGRpdi5jb250cm9sID4gYnV0dG9uLmFkZEFUYXNre1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcclxuICAgIHRleHRhcmVhOjpwbGFjZWhvbGRlcntcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBkaXYubm8tdGFzay1kaXYgPiBoNHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudGFzay1kaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiA0LjRyZW07XHJcbiAgICB9XHJcbiAgICBwLnRoZXRhc2t0aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhLFxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIH1cclxuICAgIGRpdi5maWx0ZXItZGl2LCBcclxuICAgIGRpdi5wcm9qZWN0LWRpdntcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYudGFza2hlYWRpbmcgPiBoMntcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIHAudGhlbm90ZXtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxuICAgIGRpdi50b2RvaW5mbyA+IGltZ3tcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgIH1cclxuICAgIGRpdi50b2RvaW5mbyA+IGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgaW1nLmJhY2tUb0FsbHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxuICAgIHAuZGF0ZXtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIExhcHRvcHMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgZGl2LmNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC42ZnIgM2ZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgM2ZyO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgIH1cclxuICAgIGRpdi5zaWRlYmFye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgICAgICBncmlkLWFyZWE6IDEvMS8zLzE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcclxuICAgIH1cclxuICAgIGhlYWRlcntcclxuICAgICAgICBncmlkLWFyZWE6IDIvMS8xLzM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGRpdi5tYWlue1xyXG4gICAgICAgIGdyaWQtYXJlYTogMi8yLzMvMztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgZGl2Lm1haW4tY29udGFpbmVye1xyXG4gICAgICAgIGdyaWQtYXJlYTogMy8xLzMvMjtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC40ZnI7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyID4gcHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYubWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5jbG9zZUFkZCxcclxuICAgIGJ1dHRvbi5jbG9zZUVkaXR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAyODBweDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24uYmFja0J0biA+IGltZ3tcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgIH1cclxuICAgIC5maWx0ZXIgPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIGRpdi50YXNrLWRpdiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMlO1xyXG4gICAgfVxyXG4gICAgZGl2LmVkaXQtZGVsZXRlICp7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBkaXYubWFpbi1oZWFkaW5nID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIGRpYWxvZ3tcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB6LWluZGV4OiAxMjtcclxuICAgIH1cclxuICAgIGRpdi5kaWFsb2ctaGVhZGluZyA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5hZGRwcm9qZWN0YnRuID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZFRhc2tGb3Jte1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNGZyO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYWRkLXRhc2stZGlhbG9ne1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgbGVmdDogMzUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhe1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0LCBcclxuICAgIGRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIGRpdi5mb3JtZGV0YWlsc3tcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmNvbnRyb2x7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGRpdi5jb250cm9sID4gYnV0dG9uLmFkZEFUYXNre1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcclxuICAgIHRleHRhcmVhOjpwbGFjZWhvbGRlcntcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYubm8tdGFzay1kaXYgPiBoNHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudGFzay1kaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG4gICAgcC50aGV0YXNrdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEsXHJcbiAgICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIGRpdi5maWx0ZXItZGl2LCBcclxuICAgIGRpdi5wcm9qZWN0LWRpdntcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZEZvcm0gPiBpbnB1dCxcclxuICAgIGZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcclxuICAgIGZvcm0uZWRpdEZvcm0gPiBidXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1haW4tdGFzay12aWV3ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgIH1cclxuICAgIHAudGhlbm90ZXtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudGFza2hlYWRpbmcgPiBoMntcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIHAuZGF0ZXtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIGRpdi50b2RvaW5mbyA+IGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRvZG9pbmZvID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgaW1nLmJhY2tUb0FsbHtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLCtGQUErRjtBQUNuRztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTs7OztJQUlJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtBQUMx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NkJBQTZCO0lBQ2pDO0lBQ0E7O1FBRUksWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTs7UUFFSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksU0FBUztJQUNiO0lBQ0E7O1FBRUksV0FBVztJQUNmO0lBQ0E7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290e1xcclxcbiAgICAtLWNvbG9yLWZnOiAjZWVlO1xcclxcbiAgICAtLWNvbG9yLWJnOiAjMTIxMjEyO1xcclxcbiAgICAtLWhlYWRpbmc6ICMwNDY0YTQ7XFxyXFxufVxcclxcbi5tZW51QixcXHJcXG4uZmlsdGVyLXdoaXRle1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzNSUpIGh1ZS1yb3RhdGUoNjVkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoOTUlKTtcXHJcXG59XFxyXFxuLmZpbHRlciA+IHB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxufVxcclxcbmRpdi50YXNraGVhZGluZyA+IGgye1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbn1cXHJcXG5kaWFsb2d7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxyXFxufVxcclxcbmRpdi5vdmVybGF5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAyNSwgMjUsIDAuNzEpO1xcclxcbn1cXHJcXG5kaXYudGFzay1kaXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxufVxcclxcbnRleHRhcmVhLFxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0LFxcclxcbnNlbGVjdCwgXFxyXFxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxufVxcclxcbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbn1cXHJcXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxufVxcclxcbnAudGhldGFza3RpdGxle1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmRpdi5tYWluLXRhc2stdmlld2VyICpwe1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbn1cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCl7XFxyXFxuICAgIDpyb290e1xcclxcbiAgICAgICAgLS1jb2xvci1iZzogI2NmY2RjZDtcXHJcXG4gICAgICAgIC0tY29sb3ItZmc6ICMxQTFDMjA7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJhY2tJbWcsXFxyXFxuICAgIC5kZWwtdGFzayxcXHJcXG4gICAgLm1lbnVCe1xcclxcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgwJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgzMWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMSUpO1xcclxcbiAgICB9XFxyXFxuICAgIC5hZGRwcm9qZWN0YnRuLFxcclxcbiAgICAuZmlsdGVyID4gcHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgZGlhbG9ne1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzIzMjtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYub3ZlcmxheXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg0LCAxNzksIDE3OSwgMC45KTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFzay1kaXZ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkO1xcclxcbiAgICB9XFxyXFxuICAgIHRleHRhcmVhI3Rhc2tub3RlLFxcclxcbiAgICBpbnB1dCN0YXNrdGl0bGUsXFxyXFxuICAgIHNlbGVjdCN0aGVQcm9qZWN0cywgXFxyXFxuICAgIGlucHV0I2R1ZWRhdGV7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkOyBcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFza2hlYWRpbmcgPiBoMixcXHJcXG4gICAgcC50aGVub3RlLFxcclxcbiAgICBwLmRhdGV7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5kaXYuY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjNmcjtcXHJcXG59XFxyXFxuaGVhZGVye1xcclxcbiAgICBncmlkLWFyZWE6IDEvMS8xLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbmhlYWRlciA+IGgxe1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5kaXYubWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuYnV0dG9uLmJhY2tCdG4sXFxyXFxuYnV0dG9uLmRlbGJ0bixcXHJcXG5idXR0b24uY2xvc2VBZGQsXFxyXFxuYnV0dG9uLmNsb3NlRWRpdCxcXHJcXG5idXR0b24uY2xvc2VCdG4sXFxyXFxuYnV0dG9uLm1lbnVCdG4sXFxyXFxuYnV0dG9uLmFkZHByb2plY3RidG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXFxyXFxuZGl2Lm1lbnUgPiAubWVudUJ0biA+IGltZ3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgd2lkdGg6IDEyJTtcXHJcXG59XFxyXFxuYnV0dG9uI2Nsb3NlLmNsb3NlQnRue1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB6LWluZGV4OiAxMTtcXHJcXG59XFxyXFxuZGl2Lm1haW57XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5kaXYubWFpbi1jb250YWluZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTogMy8xLzMvMjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuZGl2Lm1haW4tdGFzay12aWV3ZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTogMy8xLzMvMjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2Lm1haW4taGVhZGluZ3tcXHJcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYubWFpbi1oZWFkaW5nID4gaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuXFxyXFxufVxcclxcbmRpdi5tYWluLWNvbnRlbnR7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbmRpdi5hZGQtdGFza2RpdntcXHJcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5hZGQtdGFza2RpdiA+IGJ1dHRvbi5hZGRUYXNre1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuYnV0dG9uLmJhY2tCdG4gPiBpbWd7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG5kaWFsb2d7XFxyXFxuICAgIHRvcDogMTAwcHg7XFxyXFxuICAgIGxlZnQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgei1pbmRleDogMTI7XFxyXFxuXFxyXFxufVxcclxcbi5kYWlsb2ctRWRpdCxcXHJcXG4uYWRkcHJvamVjdGRpYWxvZ3tcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcbmRpdi5vdmVybGF5e1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5kaXYuYWRkYnRue1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuZGl2LnRhc2twcm9qZWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbmRpdi50b2RvaW5mb3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5kaXYudG9kb2luZm8gPiBpbWd7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcbmRpdi50b2RvaW5mbyA+IGg0e1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5kaXYudGFza2hlYWRpbmcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuZGl2LnRhc2toZWFkaW5nID4gaDJ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuaHJ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5wLnRoZW5vdGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5kaXYudGFza0NvbnRyb2x7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuaW1nLmJhY2tUb0FsbHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxucC5kYXRle1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYuZGFpbG9nLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZpbHRlciA+IHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZpbHRlci1kaXYsIFxcclxcbmRpdi5wcm9qZWN0LWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uZmlsdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50aGUtcHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZmlsdGVyID4gaW1ne1xcclxcbiAgICB3aWR0aDogMi44cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYuYWRkLXByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5hZGRwcm9qZWN0YnRuID4gaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuZGl2LnByb2plY3Rze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZWRpdC1kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDJweDtcXHJcXG59XFxyXFxuZGl2LmVkaXQtZGVsZXRlICp7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSxcXHJcXG5mb3JtLmVkaXRGb3Jte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbmZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJnKTtcXHJcXG59XFxyXFxuZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxcclxcbmZvcm0uZWRpdEZvcm0gPiBidXR0b257XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMmY5O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5jbG9zZUFkZCxcXHJcXG5idXR0b24uY2xvc2VFZGl0e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMjMwcHg7XFxyXFxufVxcclxcbmJ1dHRvbiNjbG9zZUFkZC5jbG9zZUFkZCA+IGltZyxcXHJcXG5idXR0b24jY2xvc2VFZGl0LmNsb3NlRWRpdCA+IGltZ3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuZGl2LmNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuZGl2Lm5vLXRhc2stZGl2e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuZGl2LmNvbnRlbnR7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcbmRpdi5uby10YXNrLWRpdiA+IGg0e1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbmg0Lm5vLXRhc2t7XFxyXFxuICAgIGNvbG9yOiAjNGJiMmY5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcbmRpdi50YXNrLWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbmRpdi50YXNrLWRpdiBpbWd7XFxyXFxuICAgIHdpZHRoOiA4JTtcXHJcXG59XFxyXFxucC50aGV0YXNrdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5kaXYucmlnaHR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuZGl2LmRpYWxvZy1jb250YWluZXI0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5mb3JtLmFkZFRhc2tGb3Jte1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5kaXYuZm9ybWRldGFpbHN7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5sYWJlbHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbmRpdi5tb3JlRGV0YWlsc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcbnRleHRhcmVhLFxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0LFxcclxcbnNlbGVjdCwgXFxyXFxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmZvcm1kZXRhaWxzID4gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG50ZXh0YXJlYSxcXHJcXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxuLmZvcm1kZXRhaWxzID4gaW5wdXR7XFxyXFxuICAgIGhlaWdodDogMi44cmVtO1xcclxcbn1cXHJcXG5zZWxlY3QsIFxcclxcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xcclxcbiAgICBoZWlnaHQ6IDIuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLnRvZG8tb3B0aW9uc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4XFxyXFxufVxcclxcblxcclxcbmRpdi5jb250cm9se1xcclxcbiAgICBncmlkLWFyZWE6IDIvMS8yLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuZGl2LmNvbnRyb2wgPiBidXR0b24uYWRkQVRhc2t7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uZGVsLXRhc2t7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLypUYWJsZXRzKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MXB4KXtcXHJcXG4gICAgZGlhbG9ne1xcclxcbiAgICAgICAgdG9wOiAxNDBweDtcXHJcXG4gICAgICAgIGxlZnQ6IDQwcHg7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICBcXHJcXG4gICAgfVxcclxcbiAgICBoZWFkZXIgPiBoMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXIgPiBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXFxyXFxuICAgIGRpdi5tZW51ID4gLm1lbnVCdG4gPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMjQlO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbi5jbG9zZUFkZCxcXHJcXG4gICAgYnV0dG9uLmNsb3NlRWRpdHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDUwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbi5iYWNrQnRuID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZpbHRlciA+IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAzLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRhc2stZGl2IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiA2JTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZWRpdC1kZWxldGUgKntcXHJcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tYWluLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi43cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5hZGQtdGFza2RpdiA+IGJ1dHRvbi5hZGRUYXNre1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5kaWFsb2ctaGVhZGluZyA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uLmFkZHByb2plY3RidG4gPiBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZFRhc2tGb3Jte1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC40ZnI7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dHtcXHJcXG4gICAgICAgIGhlaWdodDogNC44cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHRleHRhcmVhe1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgc2VsZWN0LCBcXHJcXG4gICAgZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XFxyXFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgbGFiZWx7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZm9ybWRldGFpbHN7XFxyXFxuICAgICAgICBnYXA6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxuICAgIHRleHRhcmVhOjpwbGFjZWhvbGRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubm8tdGFzay1kaXYgPiBoNHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFzay1kaXZ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQuNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBwLnRoZXRhc2t0aXRsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHRleHRhcmVhLFxcclxcbiAgICBpbnB1dFt0eXBlPXRleHRde1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmZpbHRlci1kaXYsIFxcclxcbiAgICBkaXYucHJvamVjdC1kaXZ7XFxyXFxuICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRhc2toZWFkaW5nID4gaDJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBwLnRoZW5vdGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudG9kb2luZm8gPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudG9kb2luZm8gPiBoNHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGltZy5iYWNrVG9BbGx7XFxyXFxuICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBwLmRhdGV7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIExhcHRvcHMgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XFxyXFxuICAgIGRpdi5jb250YWluZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAzZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDNmcjtcXHJcXG4gICAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuc2lkZWJhcntcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMS8xLzMvMTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxuICAgIH1cXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMS8zO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tYWlue1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWFpbi1jb250YWluZXJ7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDMvMS8zLzI7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC40ZnI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXIgPiBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tZW51IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uLmNsb3NlQWRkLFxcclxcbiAgICBidXR0b24uY2xvc2VFZGl0e1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogMjgwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uLmJhY2tCdG4gPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFzay1kaXYgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDMlO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5lZGl0LWRlbGV0ZSAqe1xcclxcbiAgICAgICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1haW4taGVhZGluZyA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaWFsb2d7XFxyXFxuICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICAgICAgbGVmdDogMzAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNDAlO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMjtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNGZyO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hZGQtdGFzay1kaWFsb2d7XFxyXFxuICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICAgICAgbGVmdDogMzUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0e1xcclxcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHRleHRhcmVhe1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgc2VsZWN0LCBcXHJcXG4gICAgZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XFxyXFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgbGFiZWx7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmZvcm1kZXRhaWxze1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5jb250cm9se1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxuICAgIHRleHRhcmVhOjpwbGFjZWhvbGRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubm8tdGFzay1kaXYgPiBoNHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFzay1kaXZ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgcC50aGV0YXNrdGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWEsXFxyXFxuICAgIGlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmZpbHRlci1kaXYsIFxcclxcbiAgICBkaXYucHJvamVjdC1kaXZ7XFxyXFxuICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWFpbi10YXNrLXZpZXdlcntcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgfVxcclxcbiAgICBwLnRoZW5vdGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRhc2toZWFkaW5nID4gaDJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBwLmRhdGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudG9kb2luZm8gPiBoNHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50b2RvaW5mbyA+IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIGltZy5iYWNrVG9BbGx7XFxyXFxuICAgICAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIG5vdGUsIGR1ZURhdGUsICBwcm9qZWN0LCBjaGVja2VkKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLm5vdGUgPSBub3RlXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIGlmKHByb2plY3QgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgaWYoY2hlY2tlZCA9PSB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIFxyXG4gICAgfTtcclxufTsiLCJpbXBvcnQgRm9sZGVyIGZyb20gJy4vaW1nL2ZvbGRlci5zdmcnO1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuL2ltZy9lZGl0LnN2Zyc7XHJcbmltcG9ydCBEZWxldGUgZnJvbSAnLi9pbWcvZGVsZXRlLnN2Zyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RzLCB0YWdzKXtcclxuXHJcbiAgICBpZih0YWdzLmZpcnN0RWxlbWVudENoaWxkKXtcclxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHRhZ3MpO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aGVwcm9qZWN0Rmlyc3RMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoZXByb2plY3RGaXJzdExheWVyLmNsYXNzTmFtZSA9ICd0aGUtcHJvamVjdHMnO1xyXG5cclxuICAgICAgICBjb25zdCB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuY2xhc3NOYW1lID0gJ3Byb2plY3RzJztcclxuXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdFRoaXJkTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGVwcm9qZWN0VGhpcmRMYXllci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInLCAncHJvamVjdC1maWx0ZXInKVxyXG5cclxuICAgICAgICBjb25zdCBpbWFnZUZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltYWdlRm9sZGVyLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1pY29uJywgJ2ZpbHRlci13aGl0ZScpXHJcbiAgICAgICAgaW1hZ2VGb2xkZXIuc3JjID0gRm9sZGVyO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSAncHJvamVjdC10YWdzJztcclxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3Q7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RUaGlyZExheWVyLmFwcGVuZENoaWxkKGltYWdlRm9sZGVyKTtcclxuICAgICAgICB0aGVwcm9qZWN0VGhpcmRMYXllci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RTZWNvbmRMYXllci5hcHBlbmRDaGlsZCh0aGVwcm9qZWN0VGhpcmRMYXllcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250cm9sRGl2LmNsYXNzTmFtZSA9ICdlZGl0LWRlbGV0ZSc7XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGVkaXRJbWFnZS5jbGFzc0xpc3QuYWRkKCdlZGl0JywgJ2ZpbHRlci13aGl0ZScpXHJcbiAgICAgICAgZWRpdEltYWdlLnNyYyA9IEVkaXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgZGVsZXRlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJywgJ2ZpbHRlci13aGl0ZScpXHJcbiAgICAgICAgZGVsZXRlSW1hZ2Uuc3JjID0gRGVsZXRlO1xyXG5cclxuICAgICAgICBjb250cm9sRGl2LmFwcGVuZENoaWxkKGVkaXRJbWFnZSk7XHJcbiAgICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSk7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RTZWNvbmRMYXllci5hcHBlbmRDaGlsZChjb250cm9sRGl2KTtcclxuXHJcbiAgICAgICAgdGhlcHJvamVjdEZpcnN0TGF5ZXIuYXBwZW5kQ2hpbGQodGhlcHJvamVjdFNlY29uZExheWVyKVxyXG4gICAgICAgIHRhZ3MuYXBwZW5kQ2hpbGQodGhlcHJvamVjdEZpcnN0TGF5ZXIpXHJcblxyXG4gICAgfSk7XHJcbiAgICB9XHJcblxyXG4vLyByZW1vdmVzICBhbGwgY2hpbGQgZWxlbWVudHMgb24gdGhlIHNjcmVlblxyXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCl7XHJcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtyZW1vdmVBbGxDaGlsZE5vZGVzLCBjcmVhdGVQcm9qZWN0fSIsImZ1bmN0aW9uIGxvY2FsRGIoKXtcclxuICAgIGxldCBkYlJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVG9EYihkYk5hbWUsIGRiVmFsdWUpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oZGJOYW1lLCBKU09OLnN0cmluZ2lmeShkYlZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRGcm9tRGIoZGJOYW1lKXtcclxuICAgICAgICBjb25zdCBvYmogPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oZGJOYW1lKVxyXG4gICAgICAgIGRiUmV0dXJuID0gSlNPTi5wYXJzZShvYmopO1xyXG4gICAgICAgIHJldHVybiBkYlJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntzYXZlVG9EYiwgZ2V0RnJvbURifVxyXG59XHJcblxyXG5jb25zdCBzYXZlVG9EYiA9IGxvY2FsRGIoKS5zYXZlVG9EYjtcclxuY29uc3QgZ2V0RnJvbURiID0gbG9jYWxEYigpLmdldEZyb21EYjtcclxuZXhwb3J0IHtzYXZlVG9EYiwgZ2V0RnJvbURifSIsImltcG9ydCBEZWwgZnJvbSAnLi9pbWcvZGVsZXRlLnN2Zyc7XHJcbmltcG9ydCBCYWNrIGZyb20gJy4vaW1nL2JhY2suc3ZnJztcclxuaW1wb3J0IGZvbGRlciBmcm9tICcuL2ltZy9mb2xkZXIuc3ZnJztcclxuXHJcbmZ1bmN0aW9uIHdyaXRlVG9NYWluKCl7XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVBbGxUYXNrKHRvZG9zLCBub2RlKXtcclxuXHJcbiAgICAgICAgaWYoIXRvZG9zKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0b2Rvcy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29udGVudERpdi5jbGFzc05hbWUgPSAnbm8tdGFzay1kaXYnO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSAnTm8gdGFzayBmb3VuZCc7XHJcbiAgICAgICAgICAgIGhlYWRpbmcuY2xhc3NOYW1lID0gJ25vLXRhc2snO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICd0YXNrLWRpdic7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHRhc2tIb2xkZXIuY2xhc3NOYW1lID0gXCJyaWdodFwiXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlci50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICAgICAgICAgIGNoZWNrZXIuY2xhc3NOYW1lID0gXCJjaGVja1wiO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgdGFzay5jbGFzc05hbWUgPSBcInRoZXRhc2t0aXRsZVwiO1xyXG4gICAgICAgICAgICAgICAgdGFzay5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgdGFza0hvbGRlci5hcHBlbmRDaGlsZChjaGVja2VyKTtcclxuICAgICAgICAgICAgICAgIHRhc2tIb2xkZXIuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgZGVsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbC10YXNrJywgJ2ZpbHRlci13aGl0ZScpXHJcbiAgICAgICAgICAgICAgICBkZWxCdXR0b24uc3JjID0gRGVsO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tIb2xkZXIpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkZWxCdXR0b24pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93RWFjaFRhc2sodG9kbywgbm9kZSl7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza1Byb2plY3QuY2xhc3NOYW1lID0gJ3Rhc2twcm9qZWN0JztcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrRGV0YWlsLmNsYXNzTmFtZSA9ICd0b2RvaW5mbyc7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBmb2xkZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBmb2xkZXJJbWcuY2xhc3NOYW1lID0gXCJmaWx0ZXItd2hpdGVcIjtcclxuICAgICAgICBmb2xkZXJJbWcuc3JjID0gZm9sZGVyO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSB0b2RvLnByb2plY3Q7XHJcblxyXG4gICAgICAgIHRhc2tEZXRhaWwuYXBwZW5kQ2hpbGQoZm9sZGVySW1nKTtcclxuICAgICAgICB0YXNrRGV0YWlsLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXNrSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tIZWFkaW5nLmNsYXNzTmFtZSA9IFwidGFza2hlYWRpbmdcIjtcclxuXHJcbiAgICAgICAgdGFza1Byb2plY3QuYXBwZW5kQ2hpbGQodGFza0RldGFpbCk7XHJcbiAgICAgICAgdGFza1Byb2plY3QuYXBwZW5kQ2hpbGQodGFza0hlYWRpbmcpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlXHJcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcblxyXG4gICAgICAgIHRhc2tIZWFkaW5nLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgdGFza0hlYWRpbmcuYXBwZW5kQ2hpbGQobGluZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3Qgbm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5vdGVEaXYuY2xhc3NOYW1lID0gJ25vdGVEaXYnO1xyXG5cclxuICAgICAgICBjb25zdCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG5vdGUuaW5uZXJUZXh0ID0gdG9kby5ub3RlO1xyXG4gICAgICAgIG5vdGUuY2xhc3NOYW1lID0gXCJ0aGVub3RlXCJcclxuXHJcbiAgICAgICAgbm90ZURpdi5hcHBlbmRDaGlsZChub3RlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrQ29udHJvbC5jbGFzc05hbWUgPSBcInRhc2tDb250cm9sXCI7XHJcbiAgICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYmFja1RvQWxsJywgJ2ZpbHRlci13aGl0ZScpXHJcbiAgICAgICAgYmFja0J1dHRvbi5zcmMgPSBCYWNrO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRhdGUuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xyXG4gICAgICAgIGRhdGUuY2xhc3NOYW1lID0gXCJkYXRlXCI7XHJcblxyXG4gICAgICAgIHRhc2tDb250cm9sLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xyXG4gICAgICAgIHRhc2tDb250cm9sLmFwcGVuZENoaWxkKGRhdGUpO1xyXG5cclxuXHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdCk7XHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChub3RlRGl2KTtcclxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRhc2tDb250cm9sKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7d3JpdGVBbGxUYXNrLCBzaG93RWFjaFRhc2t9XHJcbn1cclxuXHJcbmNvbnN0IHdyaXRlQWxsVGFzayA9IHdyaXRlVG9NYWluKCkud3JpdGVBbGxUYXNrO1xyXG5jb25zdCBzaG93RWFjaFRhc2sgPXdyaXRlVG9NYWluKCkuc2hvd0VhY2hUYXNrO1xyXG5cclxuZXhwb3J0IHt3cml0ZUFsbFRhc2ssIHNob3dFYWNoVGFza30iLCJpbXBvcnQge2RlbGV0ZUJ5UHJvamVjdCB9IGZyb20gXCIuL3RvZG9zLmpzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUHJvamVjdH0gZnJvbSAnLi9jcmVhdGUuanMnO1xyXG5pbXBvcnQge3NhdmVUb0RiLCBnZXRGcm9tRGJ9IGZyb20gJy4vZGIuanMnO1xyXG5cclxuXHJcbmxldCBwcm9qZWN0cyA9IFtcImRlZmF1bHRcIl07XHJcbmNvbnN0IGRiTmFtZSA9IFwicHJvamVjdHNcIjtcclxuKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCB0ZXN0cHJvamVjdHMgPSBnZXRGcm9tRGIoZGJOYW1lKTtcclxuICAgIGlmKCF0ZXN0cHJvamVjdHMpe1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgcHJvamVjdHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGVzdHByb2plY3RzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIHByb2plY3RzKTtcclxuICAgIH1cclxufSkoKTtcclxuXHJcbi8vIFNvcnQgYnkgUHJvamVjdHNcclxuZnVuY3Rpb24gcHJvamVjdFNvcnQoKXtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKXtcclxuICAgICAgICBpZighcHJvamVjdE5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBwcm9qZWN0cy51bnNoaWZ0KHByb2plY3ROYW1lKTtcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIHByb2plY3RzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZWRpdFByb2plY3Qob2xkUHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lKXtcclxuICAgICAgICBwcm9qZWN0cyA9IGdldEZyb21EYihkYk5hbWUpXHJcblxyXG4gICAgICAgIGlmKCFuZXdQcm9qZWN0TmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldID09IG9sZFByb2plY3ROYW1lKXtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldID0gbmV3UHJvamVjdE5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIHByb2plY3RzKTtcclxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKXtcclxuICAgICAgICBwcm9qZWN0cyA9IGdldEZyb21EYihkYk5hbWUpXHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldID09IHByb2plY3ROYW1lKXtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIHByb2plY3RzKTtcclxuICAgICAgICBkZWxldGVCeVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHModGFncyl7XHJcbiAgICAgICAgcHJvamVjdHMgPSBnZXRGcm9tRGIoZGJOYW1lKVxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdHMsIHRhZ3MpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdCgpe1xyXG4gICAgICAgIHByb2plY3RzID0gZ2V0RnJvbURiKGRiTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgYWRkUHJvamVjdCwgcmVuZGVyUHJvamVjdHN9XHJcbn1cclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSBwcm9qZWN0U29ydCgpLmFkZFByb2plY3Q7XHJcbmNvbnN0IHJlbmRlclByb2plY3RzID0gcHJvamVjdFNvcnQoKS5yZW5kZXJQcm9qZWN0cztcclxuY29uc3QgZWRpdFByb2plY3QgPSBwcm9qZWN0U29ydCgpLmVkaXRQcm9qZWN0O1xyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gcHJvamVjdFNvcnQoKS5kZWxldGVQcm9qZWN0O1xyXG5jb25zdCBnZXRQcm9qZWN0ID0gcHJvamVjdFNvcnQoKS5nZXRQcm9qZWN0O1xyXG5cclxuZXhwb3J0IHtnZXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgYWRkUHJvamVjdCwgcmVuZGVyUHJvamVjdHN9IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vdG9kb3MuanNcIjtcclxuaW1wb3J0IHtpc1RvZGF5LCBpc1RoaXNXZWVrLCBpc1RoaXNNb250aH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5cclxuLy8gc29ydCBieSBEYXRlXHJcblxyXG5mdW5jdGlvbiBteVNvcnQoKXtcclxuXHJcbiAgICAvL3RvZGF5XHJcbiAgICBmdW5jdGlvbiB0b2Rvc1RvZGF5KCl7XHJcbiAgICAgICAgY29uc3QgdG9kYXlTb3J0ID0gW107XHJcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSByZW5kZXIoKTtcclxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZihpc1RvZGF5KHRvZG8uZHVlRGF0ZSkpXHJcbiAgICAgICAgICAgICAgICB0b2RheVNvcnQucHVzaCh0b2RvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG9kYXlTb3J0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNvcnQgYnkgd2Vla1xyXG4gICAgZnVuY3Rpb24gdG9kb3NGb3JBV2Vlaygpe1xyXG4gICAgICAgIGNvbnN0IHRoaXNXZWVrID0gW107XHJcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSByZW5kZXIoKTtcclxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZihpc1RoaXNXZWVrKHRvZG8uZHVlRGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpc1dlZWsucHVzaCh0b2RvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzV2VlaztcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNvcnQgYnkgbW9udGhcclxuICAgIGZ1bmN0aW9uIHRvZG9zRm9yTW9udGgoKXtcclxuICAgICAgICBjb25zdCB0aGlzTW9udGggPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVGhpc01vbnRoKHRvZG8uZHVlRGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpc01vbnRoLnB1c2godG9kbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpc01vbnRoOyAgIFxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2tzIGZvciBzcGVjaWZpYyBwcm9qZWN0IGluIHRoZSB0b2RvcyBhcnJheVxyXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JQcm9qZWN0KHRoZVByb2plY3ROYW1lKXtcclxuICAgICAgICBjb25zdCB0b2Rvc0J5UHJvamVjdCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYodG9kby5wcm9qZWN0ID09IHRoZVByb2plY3ROYW1lKVxyXG4gICAgICAgICAgICAgICAgdG9kb3NCeVByb2plY3QudW5zaGlmdCh0b2RvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG9kb3NCeVByb2plY3RcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NoZWNrRm9yUHJvamVjdCwgdG9kb3NUb2RheSwgdG9kb3NGb3JBV2VlaywgdG9kb3NGb3JNb250aH1cclxufVxyXG5cclxuY29uc3QgdG9kb3NGb3JBV2VlayA9IG15U29ydCgpLnRvZG9zRm9yQVdlZWs7XHJcbmNvbnN0IHRvZG9zRm9yTW9udGggPSBteVNvcnQoKS50b2Rvc0Zvck1vbnRoO1xyXG5jb25zdCB0b2Rvc1RvZGF5ID0gbXlTb3J0KCkudG9kb3NUb2RheTtcclxuY29uc3QgY2hlY2tGb3JQcm9qZWN0ID0gbXlTb3J0KCkuY2hlY2tGb3JQcm9qZWN0O1xyXG5leHBvcnQge2NoZWNrRm9yUHJvamVjdCwgdG9kb3NUb2RheSwgdG9kb3NGb3JBV2VlaywgdG9kb3NGb3JNb250aH0iLCJpbXBvcnQgVG9kb3MgZnJvbSBcIi4vY2xhc3MuanNcIlxyXG5pbXBvcnQge3NhdmVUb0RiLCBnZXRGcm9tRGJ9IGZyb20gJy4vZGIuanMnO1xyXG5cclxuXHJcbmxldCBhbGxUb2RvcyA9IFtdO1xyXG5jb25zdCBkYk5hbWUgPSBcImFsbFRvZG9zXCI7XHJcblxyXG4oZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IHRlc3R0b2RvID0gZ2V0RnJvbURiKGRiTmFtZSk7XHJcbiAgICBpZighdGVzdHRvZG8pe1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgYWxsVG9kb3MpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGVzdHRvZG8ubGVuZ3RoID09IDApe1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgYWxsVG9kb3MpXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiB0b2Rvc0NyZWF0b3IoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgbm90ZSwgZHVlRGF0ZSwgcHJvamVjdCwgY2hlY2tlZCl7XHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSBuZXcgVG9kb3ModGl0bGUsIG5vdGUsIGR1ZURhdGUsIHByb2plY3QsIGNoZWNrZWQpO1xyXG4gICAgICAgIGFkZFRvZG9zKHRvZG9zKSBcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIGFsbFRvZG9zKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBhZGRUb2Rvcyh0b2Rvcyl7XHJcbiAgICAgICAgYWxsVG9kb3MudW5zaGlmdCh0b2Rvcyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxldGVCeVByb2plY3QocHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGFsbFRvZG9zPSBnZXRGcm9tRGIoZGJOYW1lKTtcclxuICAgICAgICBpZighYWxsVG9kb3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGFsbFRvZG9zLmZpbmRJbmRleCh0aGVUb2RvID0+IHRoZVRvZG8ucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBhbGxUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgYWxsVG9kb3MpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvKHRpdGxlKXtcclxuICAgICAgICBhbGxUb2Rvcz0gZ2V0RnJvbURiKGRiTmFtZSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhbGxUb2Rvcy5maW5kSW5kZXgodGhlVG9kbyA9PiB0aGVUb2RvLnRpdGxlID09PSB0aXRsZSk7XHJcbiAgICAgICAgYWxsVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIGFsbFRvZG9zKVxyXG4gICAgfSBcclxuICAgIGZ1bmN0aW9uIGVkaXRUb2RvKHRvZG9zLCBuZXdUaXRsZSwgbmV3Tm90ZSwgbmV3RHVlRGF0ZSwgbmV3UHJvamVjdCl7XHJcbiAgICAgICAgaWYobmV3VGl0bGUgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy50aXRsZSA9IG5ld1RpdGxlXHJcbiAgICAgICAgaWYobmV3Tm90ZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRvZG9zLm5vdGUgPSBuZXdOb3RlXHJcbiAgICAgICAgaWYobmV3RHVlRGF0ZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRvZG9zLmR1ZURhdGUgPSBuZXdEdWVEYXRlXHJcbiAgICAgICAgaWYobmV3UHJvamVjdCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRvZG9zLnByb2plY3QgPSBuZXdQcm9qZWN0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICAgICAgYWxsVG9kb3M9IGdldEZyb21EYihkYk5hbWUpO1xyXG4gICAgICAgIGlmKCFhbGxUb2Rvcyl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbFRvZG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7ZGVsZXRlQnlQcm9qZWN0LCBkZWxldGVUb2RvLCBjcmVhdGVUb2RvLCBlZGl0VG9kbywgcmVuZGVyfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUb2RvID0gdG9kb3NDcmVhdG9yKCkuY3JlYXRlVG9kbztcclxuY29uc3QgZGVsZXRlVG9kbyA9IHRvZG9zQ3JlYXRvcigpLmRlbGV0ZVRvZG87XHJcbmNvbnN0IGVkaXRUb2RvID0gdG9kb3NDcmVhdG9yKCkuZWRpdFRvZG87XHJcbmNvbnN0IHJlbmRlciA9IHRvZG9zQ3JlYXRvcigpLnJlbmRlcjtcclxuY29uc3QgZGVsZXRlQnlQcm9qZWN0ID0gdG9kb3NDcmVhdG9yKCkuZGVsZXRlQnlQcm9qZWN0O1xyXG5cclxuXHJcbmV4cG9ydCB7IGRlbGV0ZUJ5UHJvamVjdCwgY3JlYXRlVG9kbywgZGVsZXRlVG9kbywgcmVuZGVyLCBlZGl0VG9kb30iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNCwgOCwgMjUpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNSBpbiB0aGUgc2FtZSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE1LCA4LCAyNSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVNb250aChkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIChcbiAgICBfZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gX2RhdGVSaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgX2RhdGVMZWZ0LmdldE1vbnRoKCkgPT09IF9kYXRlUmlnaHQuZ2V0TW9udGgoKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZU1vbnRoO1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzU2FtZVdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVMZWZ0LCBvcHRpb25zKTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkYXRlUmlnaHQsIG9wdGlvbnMpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mV2VlayA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZXZWVrO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZVdlZWs7XG4iLCJpbXBvcnQgeyBpc1NhbWVNb250aCB9IGZyb20gXCIuL2lzU2FtZU1vbnRoLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc01vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGlzIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAxNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMTUpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc01vbnRoKGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZU1vbnRoKERhdGUubm93KCksIGRhdGUpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc01vbnRoO1xuIiwiaW1wb3J0IHsgaXNTYW1lV2VlayB9IGZyb20gXCIuL2lzU2FtZVdlZWsubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1RoaXNXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUaGlzV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc1dlZWs7XG4iLCJpbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge2NyZWF0ZVRvZG8sIGVkaXRUb2RvLCBkZWxldGVUb2RvLCByZW5kZXJ9ZnJvbSBcIi4vdG9kb3MuanNcIjtcclxuaW1wb3J0IHtjaGVja0ZvclByb2plY3QsIHRvZG9zVG9kYXksIHRvZG9zRm9yQVdlZWssIHRvZG9zRm9yTW9udGh9IGZyb20gXCIuL3NvcnQuanNcIjtcclxuaW1wb3J0IHtnZXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgYWRkUHJvamVjdCwgcmVuZGVyUHJvamVjdHN9IGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCB7d3JpdGVBbGxUYXNrLCBzaG93RWFjaFRhc2t9IGZyb20gJy4vbWFpbi5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tICcuL2NyZWF0ZS5qcyc7XHJcblxyXG4vL0RvbWUgQ2FjaGVcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnRuJyk7XHJcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XHJcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWJhckRhaWxvZycpO1xyXG5jb25zdCBmaWx0ZXJUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvcycpO1xyXG5jb25zdCB0aGVUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZS1wcm9qZWN0cycpO1xyXG5jb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWxvZy1FZGl0Jyk7XHJcbmNvbnN0IHRleHRJbnB1dEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0Jyk7XHJcbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdEJ0bicpO1xyXG5jb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Rm9ybScpO1xyXG5sZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRwcm9qZWN0YnRuJyk7XHJcbmNvbnN0IGFkZFByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdGRpYWxvZycpO1xyXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdHRleHQnKTtcclxuY29uc3QgYWRkTmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2dBZGRQcm9qZWN0QnRuJylcclxuY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRGb3JtJyk7XHJcbmNvbnN0IGNsb3NlQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQWRkJyk7XHJcbmNvbnN0IGNsb3NlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUVkaXQnKVxyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XHJcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tGb3JtJyk7XHJcbmNvbnN0IGFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZGlhbG9nJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2t0aXRsZScpO1xyXG5jb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tub3RlJyk7XHJcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xyXG5sZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlUHJvamVjdHMnKTtcclxuY29uc3QgYWRkQVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQVRhc2snKTtcclxubGV0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja0J0bicpO1xyXG5sZXQgZGVsVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtdGFzaycpO1xyXG5sZXQgYXZhaWxhYmxlUHJvamVjdHMgPSBnZXRQcm9qZWN0KCk7XHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxubGV0IGVhY2hUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZXRhc2t0aXRsZScpO1xyXG5jb25zdCB0YXNrVmlld2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGFzay12aWV3ZXInKVxyXG5sZXQgdGFncztcclxuXHJcbi8vRGlmZmVyZW50aWF0aW5nIGJldHdlZW4gdGhlIG1vYmlsZSBhbmQgbGFyZ2Ugc2NyZWVuIHNpZGViYXJcclxuKGZ1bmN0aW9uKCl7ICBcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpe1xyXG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoZVRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFnLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpZGViYXJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWdzID0gdGFnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIGFkZFByb2plY3RCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBpZihidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpZGViYXJcIil7XHJcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuID0gYnRuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHRoZVRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFnLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpYmFyRGFpbG9nXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFncyA9IHRhZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkZFByb2plY3RCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBpZihidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpYmFyRGFpbG9nXCIpe1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0biA9IGJ0bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG4vKiBJSUZFIHRoYXQgY3JlYXRlcyB0aGUgcGFnZSBvbiBlYWNoIGxvYWQsIGdldHRpbmcgdGhlIGRhdGEgc3RvcmVkIGluIHRoZSBsb2NhbHN0b3JhZ2VcclxuICAgIGFjY2luZyBlYWNoIG5ldyBlbGVtZW50IGFuZCBhZGRpbmcgbmVjZXNzYXJ5IGV2ZWVudCBvbiBldmVyeSBsb2FkXHJcbiovXHJcbihmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdGhpc3Byb2plY3RzID0gcmVuZGVyKCk7XHJcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xyXG4gICAgd3JpdGVBbGxUYXNrKHRoaXNwcm9qZWN0cywgY29udGVudCk7XHJcblxyXG4gICAgZWFjaFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGhldGFza3RpdGxlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZWFjaFRhc2ssICdjbGljaycsIHNob3dUYXNrKTtcclxuICAgIHJlbmRlclByb2plY3RzKHRhZ3MpXHJcbiAgICBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xyXG4gICAgYWRkTGlzdGVybmVyKGNoZWNrLCBcImNoYW5nZVwiLCB0aGVjaGVja2VyKVxyXG4gICAgZGVsVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtdGFzaycpXHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsVGFzaywgXCJjbGlja1wiLCBkZWxldGVUaGVUYXNrKVxyXG59KSgpO1xyXG5cclxuXHJcbi8vIEV2ZW50IGxpc3RlbmVyc1xyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xyXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XHJcblxyXG5cclxuLy8gb3BlbiB0aGUgc2lkZSBiYXIgb24gdGhlIG1vYmlsZSBhbmQgdGFiIHZpd1xyXG5mdW5jdGlvbiBvcGVuTWVudSgpe1xyXG4gICAgZGlhbG9nLnNob3coKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHRhc2tWaWV3ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG59XHJcblxyXG4vL2Nsb3NlcyB0aGUgc2lkZVxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoKXtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbi8vIEZpbHRlcnMgdGhlIG1haW4gdmlldyBiYXNlZCBvbiB0aGUgZmlsdGVyIG9wdGlvbnNcclxuZmlsdGVyVG9kb3MuZm9yRWFjaCh0b2RvRmlsdGVyID0+IHtcclxuICAgIFxyXG4gICAgICAgIHRvZG9GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnQWxsJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHNvcnRUb01haW4odGhpc3Byb2plY3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnVG9kYXknKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5UHJvamVjdHMgPSB0b2Rvc1RvZGF5KCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKHRvZGF5UHJvamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodG9kb0ZpbHRlci5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09ICdXZWVrJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWVrUHJvamVjdHMgPSB0b2Rvc0ZvckFXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKHdlZWtQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoUHJvamVjdHMgPSB0b2Rvc0Zvck1vbnRoKCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKG1vbnRoUHJvamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc29ydFRvTWFpbihwcm9qZWN0KXtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICB3cml0ZUFsbFRhc2socHJvamVjdCwgY29udGVudCk7XHJcbiAgICBlYWNoVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGV0YXNrdGl0bGUnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlYWNoVGFzaywgJ2NsaWNrJywgc2hvd1Rhc2spO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcclxuICAgIGFkZExpc3Rlcm5lcihjaGVjaywgXCJjaGFuZ2VcIiwgdGhlY2hlY2tlcilcclxuICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgYWRkTGlzdGVybmVyKGRlbFRhc2ssIFwiY2xpY2tcIiwgZGVsZXRlVGhlVGFzaylcclxufVxyXG5cclxuLy9BZGRzIEV2ZW50TGlzdGVybmVycyB0byByZWR1Y2UgcmVwZWF0IGNvZGVcclxuZnVuY3Rpb24gYWRkTGlzdGVybmVyKG5vZGVzLCB0aGVFdmVudCwgdGhlRnVuY3Rpb24pe1xyXG4gICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodGhlRXZlbnQsIHRoZUZ1bmN0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDaGVja3Mgd2hlbiBhIHVzZXIgZGltcyBhIHByb2plY3QgYXMgY29tcGxldGVkXHJcbmZ1bmN0aW9uIHRoZWNoZWNrZXIoZSl7XHJcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKXtcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vZGVsZXRlcyBhIHRhc2tcclxuZnVuY3Rpb24gZGVsZXRlVGhlVGFzayhlKXtcclxuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgZGVsZXRlVG9kbyh0aXRsZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcclxuICAgIC8vIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgIHNvcnRUb01haW4odGhpc3Byb2plY3RzKTtcclxufVxyXG5cclxuLy9FdmVudCBMaXN0ZW5lcnNcclxudGFncy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0YWdzRXZlbnQpO1xyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Byb2plY3RBZGRNb2RhbCk7XHJcbmFkZE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcclxuYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWRkVGFzayk7XHJcblxyXG5cclxuZnVuY3Rpb24gdGFnc0V2ZW50KCl7XHJcbiAgICBjb25zdCBlZGl0QW5kRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZGVsZXRlJyk7XHJcblxyXG4gICAgaWYoZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID09ICdub25lJylcclxuICAgICAgICBlZGl0QW5kRGVsZXRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG4vLyBPcGVucyB0aGUgYWRkUHJvamVjdCBNb2RhbFxyXG5mdW5jdGlvbiBzaG93UHJvamVjdEFkZE1vZGFsKCl7XHJcbiAgICBhZGRQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG5ld1Byb2plY3RJbnB1dC5mb2N1cygpO1xyXG4gICAgLy8gZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG4vL0FkZHMgbmV3IFByb2plY3RcclxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWVcclxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICBhdmFpbGFibGVQcm9qZWN0cyA9IGdldFByb2plY3QoKTtcclxuICAgIHJlbmRlclByb2plY3RzKHRhZ3MpXHJcbiAgICBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsZXRlQnRuLCAnY2xpY2snLCBkZWwpXHJcbiAgICBcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlZGl0QnRuLCBcImNsaWNrXCIsIGVkaXRNb2RhbCk7XHJcbiAgICBcclxuICAgIGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1maWx0ZXInKTtcclxuICAgIGFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzayk7XHJcblxyXG4gICAgYWRkRm9ybS5yZXNldCgpO1xyXG4gICAgYWRkUHJvamVjdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG4vL2Nsb3NlIHRoZSBhZGQgdGFzayBwYW5lbFxyXG5mdW5jdGlvbiBjbG9zZUFkZFRhc2soKXtcclxuICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbn1cclxuXHJcbmxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxubGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcclxubGV0IGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWdzJyk7XHJcbmxldCBjdXJyZW50UHJvamVjdDtcclxuXHJcblxyXG5hZGRMaXN0ZXJuZXIoZWRpdEJ0biwgXCJjbGlja1wiLCBlZGl0TW9kYWwpO1xyXG5hbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZmlsdGVyJyk7XHJcbmFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzayk7XHJcblxyXG4vLyBTb3J0cyB0YXNrcyBieSBwcm9qZWN0c1xyXG5mdW5jdGlvbiBzaG93UHJvamVjdFRhc2soZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIGNvbnN0IGJ5UHJvamVjdCA9IGNoZWNrRm9yUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBzb3J0VG9NYWluKGJ5UHJvamVjdCk7XHJcblxyXG59XHJcbmZ1bmN0aW9uIGVkaXRNb2RhbChlKXtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBlZGl0RGlhbG9nLnNob3dNb2RhbCgpXHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdGV4dElucHV0RWRpdC5mb2N1cygpO1xyXG4gICAgdGV4dElucHV0RWRpdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VycmVudFByb2plY3QpOyAgIFxyXG59XHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRoZVByb2plY3QpO1xyXG5cclxuLy9FZGl0cyB0aGUgcHJvamVjdFxyXG5mdW5jdGlvbiBlZGl0VGhlUHJvamVjdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWdzJyk7XHJcbiAgICBjb25zdCBuZXdOYW1lID0gZWRpdFByb2plY3QoY3VycmVudFByb2plY3QsIHRleHRJbnB1dEVkaXQudmFsdWUpO1xyXG4gICAgYWxsVGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgaWYodGFnLnRleHRDb250ZW50ID09IGN1cnJlbnRQcm9qZWN0KXtcclxuICAgICAgICAgICAgdGFnLnRleHRDb250ZW50ID0gbmV3TmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICAgICBlZGl0Rm9ybS5yZXNldCgpO1xyXG4gICAgICAgIGVkaXREaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgLy8gbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxufVxyXG5cclxuXHJcbmRlbGV0ZUJ0bi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWwpO1xyXG59KTtcclxuXHJcbi8vIERlbGV0ZXMgYSBwcm9qZWN0XHJcbmZ1bmN0aW9uIGRlbChlKXtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICByZW5kZXJQcm9qZWN0cyh0YWdzKTtcclxuXHJcbiAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICB3cml0ZUFsbFRhc2sodGhpc3Byb2plY3RzLCBjb250ZW50KTtcclxuICAgIFxyXG4gICAgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhZ3MnKTtcclxuICAgIGFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzaylcclxuXHJcbiAgICBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsZXRlQnRuLCBcImNsaWNrXCIsIGRlbClcclxuXHJcbiAgICBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdCcpO1xyXG4gICAgYWRkTGlzdGVybmVyKGVkaXRCdG4sIFwiY2xpY2tcIiwgZWRpdE1vZGFsKVxyXG59XHJcblxyXG4vL0Nsb3NpbmcgdGhlIGFkZCBwcm9qZWN0IGRpYWxvZ1xyXG5jbG9zZUFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBhZGRQcm9qZWN0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNsb3NlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxufSk7XHJcblxyXG4vL0Nsb3NpbmcgdGhlIGVkaXQgcHJvamVjdCBkaWFsb2dcclxuY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGVkaXREaWFsb2cuY2xvc2UoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGhlVGFzayk7XHJcblxyXG4vLyBPcGVucyB0aGUgYWRkIHRhc2sgZGlhbG9nXHJcbmZ1bmN0aW9uIGFkZFRoZVRhc2soKXtcclxuICAgIGFkZFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgYWRkVGFza1Byb2plY3QoKTtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBjb2xsZWN0IHRhc2sgZGV0YWlsc1xyXG5hZGRBVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxlY3RUYXNrKTtcclxuXHJcbi8vIENyZWF0ZXMgdG9vZCBvYmplY3QgXHJcbmZ1bmN0aW9uIGNvbGxlY3RUYXNrKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlUHJvamVjdHMnKTtcclxuICAgIGNvbnN0IHRoZVRpdGxlID0gdGl0bGUudmFsdWU7XHJcbiAgICBjb25zdCB0aGVOb3RlICA9IG5vdGUudmFsdWU7XHJcbiAgICBjb25zdCB0aGVEdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcclxuICAgIGNvbnN0IHRoZVByb2plY3QgPSB0YXNrUHJvamVjdC52YWx1ZTtcclxuICAgIGlmKHRoZVRpdGxlICYmIHRoZUR1ZURhdGUpe1xyXG4gICAgICAgIGNyZWF0ZVRvZG8odGhlVGl0bGUsIHRoZU5vdGUsIHRoZUR1ZURhdGUsIHRoZVByb2plY3QpO1xyXG4gICAgICAgIGNvbnN0IHRoaXNwcm9qZWN0cyA9IHJlbmRlcigpO1xyXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICAgICAgd3JpdGVBbGxUYXNrKHRoaXNwcm9qZWN0cywgY29udGVudCk7XHJcbiAgICAgICAgZWFjaFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGhldGFza3RpdGxlJyk7XHJcbiAgICAgICAgYWRkTGlzdGVybmVyKGVhY2hUYXNrLCAnY2xpY2snLCBzaG93VGFzayk7XHJcbiAgICAgICAgYWRkVGFza0Zvcm0ucmVzZXQoKTtcclxuICAgICAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xyXG4gICAgICAgIGFkZExpc3Rlcm5lcihjaGVjaywgXCJjaGFuZ2VcIiwgdGhlY2hlY2tlcilcclxuICAgICAgICBkZWxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbC10YXNrJylcclxuICAgICAgICBhZGRMaXN0ZXJuZXIoZGVsVGFzaywgXCJjbGlja1wiLCBkZWxldGVUaGVUYXNrKVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGRzIHRoZSBhdmFpbGFibGUgcHJvamVjdHMgdG8gdGhlIGZvcm0gc2VsZWN0IGVsZW1lbnQgYXMgb3B0aW9ucyBmb3IgdGhlIHVzZXJcclxuZnVuY3Rpb24gYWRkVGFza1Byb2plY3QoKXtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXModGFza1Byb2plY3QpO1xyXG4gICAgYXZhaWxhYmxlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRhc2tQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gRGlzcGxheXMgbW9yZSBkZXRhaWxzIG9uIGVhY2ggdGFza1xyXG5mdW5jdGlvbiBzaG93VGFzayhlKXtcclxuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB0YXNrVmlld2VyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIGNvbnN0IHRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgIGlmKHRvZG8udGl0bGUgPT0gdGl0bGUpe1xyXG4gICAgICAgICAgICBzaG93RWFjaFRhc2sodG9kbywgdGFza1ZpZXdlcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tUb0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrVG9BbGwnKTtcclxuICAgICAgICAgICAgYmFja1RvQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29CYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ2xvc2VzIHRoZSBtb3JlIHNjcmVlbiBvbiBlYWNoIHRhc2tcclxuZnVuY3Rpb24gZ29CYWNrKGUpe1xyXG4gICAgdGFza1ZpZXdlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHRhc2tWaWV3ZXIpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9