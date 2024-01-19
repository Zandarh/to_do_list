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
    input.addprojecttext{
        background-color: #d1cdcd;
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
    gap: 20px;
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
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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Ac;IACd,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iCAAiC;AACrC;AACA;;IAEI,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;AACA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,eAAe;AACnB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,oBAAoB;AACxB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,aAAa;AACjB;AACA;;;;IAII,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;AACA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;AACA;;QAEQ,iBAAiB;IACrB;AACJ;IACI,cAAc;AAClB;AACA;;IAEI,cAAc;IACd,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,aAAa;;AAEjB;AACA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA,UAAU;AACV;IACI;QACI,UAAU;QACV,UAAU;QACV,UAAU;;IAEd;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,UAAU;IACd;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;IACf;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,cAAc;QACd,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,SAAS;IACb;IACA;;QAEI,eAAe;QACf,aAAa;IACjB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,cAAc;IAClB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,iBAAiB;IACrB;IACA;;QAEI,SAAS;IACb;AACJ;;AAEA,YAAY;AACZ;IACI;QACI,aAAa;QACb,gCAAgC;QAChC,6BAA6B;QAC7B,SAAS;IACb;IACA;QACI,kBAAkB;QAClB,kBAAkB;QAClB,yBAAyB;IAC7B;IACA;QACI,kBAAkB;QAClB,yBAAyB;QACzB,uBAAuB;IAC3B;IACA;QACI,kBAAkB;QAClB,aAAa;IACjB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,aAAa;QACb,mCAAmC;QACnC,aAAa;QACb,SAAS;IACb;IACA;QACI,eAAe;IACnB;IACA;QACI,aAAa;IACjB;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;QACX,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;QACV,YAAY;QACZ,mBAAmB;QACnB,aAAa;QACb,WAAW;IACf;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,SAAS;IACb;IACA;;QAEI,iBAAiB;IACrB;IACA;QACI,mBAAmB;IACvB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;;QAEI,SAAS;IACb;IACA;;QAEI,WAAW;IACf;IACA;;QAEI,eAAe;IACnB;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    --color-fg: #eee;\r\n    --color-bg: #121212;\r\n    --heading: #0464a4;\r\n}\r\n.menuB,\r\n.filter-white{\r\n    filter: invert(100%) sepia(0%) saturate(7435%) hue-rotate(65deg) brightness(105%) contrast(95%);\r\n}\r\n.filter > p{\r\n    color: var(--color-fg);\r\n}\r\ndialog{\r\n    background-color: #272727;\r\n}\r\ndiv.overlay{\r\n    background-color: rgba(29, 25, 25, 0.71);\r\n}\r\ndiv.task-div{\r\n    background-color: #3d3c3c;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    background-color: #474848;\r\n    color: var(--color-bg);\r\n}\r\n.addprojectbtn{\r\n    color: var(--color-fg);\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    background-color: #3d3c3c;\r\n}\r\np.thetasktitle{\r\n    cursor: pointer;\r\n}\r\n@media (prefers-color-scheme: light){\r\n    :root{\r\n        --color-bg: #cfcdcd;\r\n        --color-fg: #1A1C20;\r\n    }\r\n    .backImg,\r\n    .del-task,\r\n    .menuB{\r\n        filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%);\r\n    }\r\n    .addprojectbtn,\r\n    .filter > p{\r\n        color: var(--color-bg);\r\n    }\r\n    dialog{\r\n        background-color: #343232;\r\n    }\r\n    div.overlay{\r\n        background-color: rgba(184, 179, 179, 0.9);\r\n    }\r\n    div.task-div{\r\n        background-color: #d1cdcd;\r\n    }\r\n    textarea#tasknote,\r\n    input#tasktitle,\r\n    select#theProjects, \r\n    input#duedate{\r\n        background-color: #d1cdcd;\r\n    }\r\n    input.addprojecttext{\r\n        background-color: #d1cdcd;\r\n}\r\n}\r\nhtml, body{\r\n    height: 100%;\r\n}\r\nhtml{\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nbody{\r\n    min-height: 100vh;\r\n    background-color: var(--color-bg);\r\n    color: var(--color-fg);\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\ndiv.container{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-rows: 0.2fr 3fr 0.3fr;\r\n}\r\nheader{\r\n    grid-area: 1/1/1/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\nheader > h1{\r\n    color: var(--heading);\r\n    font-size: 1.5rem;\r\n}\r\ndiv.menu{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\nbutton.backBtn,\r\nbutton.delbtn,\r\nbutton.closeAdd,\r\nbutton.closeEdit,\r\nbutton.closeBtn,\r\nbutton.menuBtn,\r\nbutton.addprojectbtn{\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.menu > .closeBtn > img,\r\ndiv.menu > .menuBtn > img{\r\n    color: var(--color-fg);\r\n    width: 12%;\r\n}\r\nbutton#close.closeBtn{\r\n    display: none;\r\n    z-index: 11;\r\n}\r\ndiv.main{\r\n    padding-top: 50px;\r\n}\r\ndiv.main-container{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 5px;\r\n    gap: 20px;\r\n}\r\ndiv.main-task-viewer{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: none;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 5px;\r\n    gap: 20px;\r\n}\r\n\r\ndiv.main-heading{\r\n    grid-area: 1/1/1/2;\r\n    padding: 10px;\r\n}\r\ndiv.main-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.7rem;\r\n\r\n}\r\ndiv.main-content{\r\n    grid-area: 2/1/3/2;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.add-taskdiv{\r\n    grid-area: 3/1/4/2;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding: 5px;\r\n}\r\n\r\ndiv.add-taskdiv > button.addTask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\nbutton.backBtn > img{\r\n    width: 30px;\r\n}\r\ndialog{\r\n    top: 100px;\r\n    left: 20px;\r\n    width: 90%;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    z-index: 12;\r\n\r\n}\r\n.dailog-Edit,\r\n.addprojectdialog{\r\n    height: 80%;\r\n}\r\ndiv.overlay{\r\n    display: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10;\r\n}\r\ndiv.addbtn{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\ndiv.dailog-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n.filter > p{\r\n    font-size: 1rem;\r\n}\r\n\r\ndiv.filter-div, \r\ndiv.project-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    gap: 5px;\r\n}\r\n.filter{\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.the-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.filter > img{\r\n    width: 2.8rem;\r\n    padding: 10px;\r\n}\r\ndiv.add-project{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    width: 100%;\r\n\r\n}\r\n\r\ndiv.dialog-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.3rem;\r\n}\r\n.addprojectbtn{\r\n    border: none;\r\n}\r\n.addprojectbtn > h3{\r\n    font-size: 2rem;\r\n}\r\ndiv.projects{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\ndiv.edit-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 2px;\r\n}\r\ndiv.edit-delete *{\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\nform.addForm,\r\nform.editForm{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    height: 2.4rem;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    color: var(--color-fg);\r\n    border: 1px solid var(--color-bg);\r\n}\r\nform.addForm > button,\r\nform.editForm > button{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    background-color: #4bb2f9;\r\n    color: var(--color-bg);\r\n    border: none;\r\n}\r\n\r\nbutton.closeAdd,\r\nbutton.closeEdit{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 230px;\r\n}\r\nbutton#closeAdd.closeAdd > img,\r\nbutton#closeEdit.closeEdit > img{\r\n    color: var(--color-fg);\r\n    width: 30%;\r\n}\r\ndiv.content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    gap: 10px;\r\n}\r\ndiv.no-task-div{\r\n    width: 100%;\r\n    padding: 30px;\r\n}\r\ndiv.content{\r\n    width: 90%;\r\n}\r\ndiv.no-task-div > h4{\r\n    font-size: 1rem;\r\n}\r\nh4.no-task{\r\n    color: #4bb2f9;\r\n    text-align: center;\r\n    font-weight: 200;\r\n}\r\ndiv.task-div{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 2.4rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\ndiv.task-div img{\r\n    width: 8%;\r\n}\r\np.thetasktitle{\r\n    font-size: 1.2rem;\r\n}\r\ndiv.right{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\ndiv.dialog-container4{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nform.addTaskForm{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\ndiv.formdetails{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding-bottom: 40px;\r\n}\r\nlabel{\r\n    display: block;\r\n    font-size: 1.4rem;\r\n    color: var(--heading);\r\n    font-weight: 700;\r\n}\r\ndiv.moreDetails{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\ntextarea{\r\n    overflow: auto;\r\n    height: 200px;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: #474848;\r\n    color: var(--color-fg);\r\n    border: none;\r\n}\r\n.formdetails > input::placeholder,\r\ntextarea::placeholder{\r\n    color: var(--color-fg);\r\n    font-size: 1rem;\r\n}\r\ntextarea,\r\n    input[type=text]{\r\n        font-size: 1.2rem;\r\n    }\r\n.formdetails > input{\r\n    height: 2.8rem;\r\n}\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    height: 2.8rem;\r\n    width: 98%;\r\n    padding: 5px;\r\n    font-size: 1rem;\r\n}\r\n.todo-options{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px\r\n}\r\n\r\ndiv.control{\r\n    grid-area: 2/1/2/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 10px;\r\n    \r\n}\r\ndiv.control > button.addATask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.del-task{\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n/*Tablets*/\r\n@media only screen and (min-width: 541px){\r\n    dialog{\r\n        top: 140px;\r\n        left: 40px;\r\n        width: 90%;\r\n    \r\n    }\r\n    header > h1{\r\n        font-size: 2.5rem;\r\n    }\r\n    .filter > p{\r\n        font-size: 1.6rem;\r\n    }\r\n    div.menu > .closeBtn > img,\r\n    div.menu > .menuBtn > img{\r\n        width: 24%;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 500px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 80px;\r\n    }\r\n    .filter > img{\r\n        width: 3.8rem;\r\n    }\r\n    div.task-div img{\r\n        width: 6%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 40px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 2.7rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 2rem;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 2.3rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 4rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 4.4rem;\r\n        padding: 20px;\r\n    }\r\n    .formdetails > input{\r\n        height: 4.8rem;\r\n    }\r\n    textarea{\r\n        height: 40%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 3rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 2rem;\r\n    }\r\n    label{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 15px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 2rem;\r\n        padding: 15px;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 2rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 2rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 2rem;\r\n    }\r\n    div.task-div{\r\n        height: 4.4rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 2.2rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 2.2rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n}\r\n\r\n/* Laptops */\r\n@media only screen and (min-width: 1024px){\r\n    div.container{\r\n        display: grid;\r\n        grid-template-columns: 0.6fr 3fr;\r\n        grid-template-rows: 0.3fr 3fr;\r\n        gap: 20px;\r\n    }\r\n    div.sidebar{\r\n        padding-top: 100px;\r\n        grid-area: 1/1/3/1;\r\n        background-color: #3d3c3c;\r\n    }\r\n    header{\r\n        grid-area: 2/1/1/3;\r\n        background-color: #3d3c3c;\r\n        justify-content: center;\r\n    }\r\n    div.main{\r\n        grid-area: 2/2/3/3;\r\n        display: flex;\r\n    }\r\n    div.main-container{\r\n        grid-area: 3/1/3/2;\r\n        width: 60%;\r\n        height: 90%;\r\n        display: grid;\r\n        grid-template-rows: 0.2fr 3fr 0.4fr;\r\n        padding: 15px;\r\n        gap: 20px;\r\n    }\r\n    .filter > p{\r\n        font-size: 1rem;\r\n    }\r\n    div.menu {\r\n        display: none;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 280px;\r\n        width: 120px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 30px;\r\n    }\r\n    .filter > img{\r\n        width: 2.5rem;\r\n    }\r\n    div.task-div img{\r\n        width: 3%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 18px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 1.1rem;\r\n    }\r\n    dialog{\r\n        top: 100px;\r\n        left: 300px;\r\n        width: 40%;\r\n        border: none;\r\n        border-radius: 10px;\r\n        padding: 10px;\r\n        z-index: 12;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 1rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 1.6rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 2rem;\r\n        padding: 15px;\r\n    }\r\n    .add-task-dialog{\r\n        top: 100px;\r\n        left: 350px;\r\n        width: 60%;\r\n    }\r\n    .formdetails > input{\r\n        height: 2rem;\r\n    }\r\n    textarea{\r\n        height: 20%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 2rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 1rem;\r\n    }\r\n    label{\r\n        font-size: 1rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 1.3rem;\r\n    }\r\n    div.control{\r\n        align-items: center;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 1rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 1rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 1rem;\r\n    }\r\n    div.task-div{\r\n        height: 2rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 1rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 1rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        width: 100%;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 1rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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

        window.localStorage.setItem(`${dbName}`, JSON.stringify(dbValue));
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
        backButton.src = _img_back_svg__WEBPACK_IMPORTED_MODULE_1__;

        backDiv.appendChild(backButton);

        contentDiv.appendChild(task);
        contentDiv.appendChild(noteDiv);
        node.appendChild(contentDiv);
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
        console.log(projects);
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







// const todosTitle = "Click To Learn How To Use"
// createTodo(todosTitle, "my Note", "default");


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
menuBtn.addEventListener('click', () => {
    dialog.show();
    overlay.style.display = 'block'
    menuBtn.style.display = "none";
    mainContent.style.display = 'none';
    close.style.display = "flex";
});
close.addEventListener('click', closeMenu);

function closeMenu(){
    dialog.close();
    overlay.style.display = 'none'
    menuBtn.style.display = "flex";
    mainContent.style.display = 'grid';
    close.style.display = "none";
}
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

closeAdd.addEventListener('click', (e) => {
    addProjectDialog.close();
    dialog.close();
    overlay.style.display = 'none';
    close.style.display = "none";
    menuBtn.style.display = "flex";
    mainContent.style.display = 'grid';
});

closeEdit.addEventListener('click', (e) => {
    editDialog.close();
    dialog.close();
    close.style.display = "none";
    menuBtn.style.display = "flex";
    mainContent.style.display = 'grid';
    overlay.style.display = 'none';
});

addTask.addEventListener('click', (e) => {
    addTaskDialog.showModal();
    overlay.style.display = 'block';
    addTaskProject();
    mainContent.style.display = 'none';
});

addATaskBtn.addEventListener('click', (e) => {
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
});

function addTaskProject(){
    (0,_create_js__WEBPACK_IMPORTED_MODULE_5__.removeAllChildNodes)(taskProject);
    availableProjects.forEach(project => {
        const option = document.createElement('option');
        option.value = project;
        option.innerText = project;
        taskProject.appendChild(option);
    });
}

function showTask(e){
    const title = e.target.textContent;
    mainContent.style.display = "none";
    taskViewer.style.display = "grid";
    const todos = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
    todos.forEach(todo => {
        if(todo.title = title){
            (0,_main_js__WEBPACK_IMPORTED_MODULE_4__.showEachTask)(todo, taskViewer);
        }
    });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxRQUFRLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxRQUFRLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVU7QUFDbEIsNkJBQTZCLGlEQUFNO0FBQ25DLFFBQVEsK0RBQW1CO0FBQzNCLFFBQVEsc0RBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSwrREFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQU07QUFDeEI7QUFDQTtBQUNBLFlBQVksc0RBQVk7QUFDeEI7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2RiLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zb3J0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZURheS5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVNb250aC5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVXZWVrLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVGhpc01vbnRoLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVGhpc1dlZWsubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbjpyb290e1xyXG4gICAgLS1jb2xvci1mZzogI2VlZTtcclxuICAgIC0tY29sb3ItYmc6ICMxMjEyMTI7XHJcbiAgICAtLWhlYWRpbmc6ICMwNDY0YTQ7XHJcbn1cclxuLm1lbnVCLFxyXG4uZmlsdGVyLXdoaXRle1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MzUlKSBodWUtcm90YXRlKDY1ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDk1JSk7XHJcbn1cclxuLmZpbHRlciA+IHB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG59XHJcbmRpYWxvZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbn1cclxuZGl2Lm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAyNSwgMjUsIDAuNzEpO1xyXG59XHJcbmRpdi50YXNrLWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbn1cclxudGV4dGFyZWEsXHJcbi5mb3JtZGV0YWlscyA+IGlucHV0LFxyXG5zZWxlY3QsIFxyXG5kaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG59XHJcbi5hZGRwcm9qZWN0YnRue1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxufVxyXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcclxuZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcclxufVxyXG5wLnRoZXRhc2t0aXRsZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCl7XHJcbiAgICA6cm9vdHtcclxuICAgICAgICAtLWNvbG9yLWJnOiAjY2ZjZGNkO1xyXG4gICAgICAgIC0tY29sb3ItZmc6ICMxQTFDMjA7XHJcbiAgICB9XHJcbiAgICAuYmFja0ltZyxcclxuICAgIC5kZWwtdGFzayxcclxuICAgIC5tZW51QntcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDMxZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7XHJcbiAgICB9XHJcbiAgICAuYWRkcHJvamVjdGJ0bixcclxuICAgIC5maWx0ZXIgPiBwe1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICB9XHJcbiAgICBkaWFsb2d7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzIzMjtcclxuICAgIH1cclxuICAgIGRpdi5vdmVybGF5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg0LCAxNzksIDE3OSwgMC45KTtcclxuICAgIH1cclxuICAgIGRpdi50YXNrLWRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEjdGFza25vdGUsXHJcbiAgICBpbnB1dCN0YXNrdGl0bGUsXHJcbiAgICBzZWxlY3QjdGhlUHJvamVjdHMsIFxyXG4gICAgaW5wdXQjZHVlZGF0ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkO1xyXG4gICAgfVxyXG4gICAgaW5wdXQuYWRkcHJvamVjdHRleHR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2RjZDtcclxufVxyXG59XHJcbmh0bWwsIGJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuaHRtbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbmJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5kaXYuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC4zZnI7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5oZWFkZXIgPiBoMXtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbmRpdi5tZW51e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbmJ1dHRvbi5iYWNrQnRuLFxyXG5idXR0b24uZGVsYnRuLFxyXG5idXR0b24uY2xvc2VBZGQsXHJcbmJ1dHRvbi5jbG9zZUVkaXQsXHJcbmJ1dHRvbi5jbG9zZUJ0bixcclxuYnV0dG9uLm1lbnVCdG4sXHJcbmJ1dHRvbi5hZGRwcm9qZWN0YnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxyXG5kaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIHdpZHRoOiAxMiU7XHJcbn1cclxuYnV0dG9uI2Nsb3NlLmNsb3NlQnRue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcbmRpdi5tYWlue1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuZGl2Lm1haW4tY29udGFpbmVye1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcbmRpdi5tYWluLXRhc2stdmlld2Vye1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG5kaXYubWFpbi1oZWFkaW5ne1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5kaXYubWFpbi1oZWFkaW5nID4gaDN7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuXHJcbn1cclxuZGl2Lm1haW4tY29udGVudHtcclxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5kaXYuYWRkLXRhc2tkaXZ7XHJcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmRpdi5hZGQtdGFza2RpdiA+IGJ1dHRvbi5hZGRUYXNre1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbmJ1dHRvbi5iYWNrQnRuID4gaW1ne1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuZGlhbG9ne1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMjtcclxuXHJcbn1cclxuLmRhaWxvZy1FZGl0LFxyXG4uYWRkcHJvamVjdGRpYWxvZ3tcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcbmRpdi5vdmVybGF5e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuZGl2LmFkZGJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuZGl2LmRhaWxvZy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmlsdGVyID4gcHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuZGl2LmZpbHRlci1kaXYsIFxyXG5kaXYucHJvamVjdC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuLmZpbHRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50aGUtcHJvamVjdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmlsdGVyID4gaW1ne1xyXG4gICAgd2lkdGg6IDIuOHJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LmFkZC1wcm9qZWN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4uYWRkcHJvamVjdGJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYWRkcHJvamVjdGJ0biA+IGgze1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbmRpdi5wcm9qZWN0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZGl2LmVkaXQtZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGdhcDogMnB4O1xyXG59XHJcbmRpdi5lZGl0LWRlbGV0ZSAqe1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuZm9ybS5hZGRGb3JtLFxyXG5mb3JtLmVkaXRGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbmZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmcpO1xyXG59XHJcbmZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcclxuZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjJmOTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5jbG9zZUFkZCxcclxuYnV0dG9uLmNsb3NlRWRpdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDIzMHB4O1xyXG59XHJcbmJ1dHRvbiNjbG9zZUFkZC5jbG9zZUFkZCA+IGltZyxcclxuYnV0dG9uI2Nsb3NlRWRpdC5jbG9zZUVkaXQgPiBpbWd7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5kaXYuY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5kaXYubm8tdGFzay1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuZGl2LmNvbnRlbnR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbmRpdi5uby10YXNrLWRpdiA+IGg0e1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbmg0Lm5vLXRhc2t7XHJcbiAgICBjb2xvcjogIzRiYjJmOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuZGl2LnRhc2stZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LnRhc2stZGl2IGltZ3tcclxuICAgIHdpZHRoOiA4JTtcclxufVxyXG5wLnRoZXRhc2t0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbmRpdi5yaWdodHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcbmRpdi5kaWFsb2ctY29udGFpbmVyNHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmZvcm0uYWRkVGFza0Zvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5kaXYuZm9ybWRldGFpbHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5kaXYubW9yZURldGFpbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbnRleHRhcmVhLFxyXG4uZm9ybWRldGFpbHMgPiBpbnB1dCxcclxuc2VsZWN0LCBcclxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcclxudGV4dGFyZWE6OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG50ZXh0YXJlYSxcclxuICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbi5mb3JtZGV0YWlscyA+IGlucHV0e1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbn1cclxuc2VsZWN0LCBcclxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnRvZG8tb3B0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4XHJcbn1cclxuXHJcbmRpdi5jb250cm9se1xyXG4gICAgZ3JpZC1hcmVhOiAyLzEvMi8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG5kaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZGVsLXRhc2t7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qVGFibGV0cyovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQxcHgpe1xyXG4gICAgZGlhbG9ne1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoZWFkZXIgPiBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIC5maWx0ZXIgPiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXHJcbiAgICBkaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyNCU7XHJcbiAgICB9XHJcbiAgICBidXR0b24uY2xvc2VBZGQsXHJcbiAgICBidXR0b24uY2xvc2VFZGl0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24uYmFja0J0biA+IGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgIH1cclxuICAgIC5maWx0ZXIgPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMuOHJlbTtcclxuICAgIH1cclxuICAgIGRpdi50YXNrLWRpdiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDYlO1xyXG4gICAgfVxyXG4gICAgZGl2LmVkaXQtZGVsZXRlICp7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYubWFpbi1oZWFkaW5nID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5hZGRwcm9qZWN0YnRuID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dHtcclxuICAgICAgICBoZWlnaHQ6IDQuOHJlbTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhe1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0LCBcclxuICAgIGRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmZvcm1kZXRhaWxze1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcclxuICAgIGZvcm0uZWRpdEZvcm0gPiBidXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2stZGl2e1xyXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xyXG4gICAgfVxyXG4gICAgcC50aGV0YXNrdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYSxcclxuICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZmlsdGVyLWRpdiwgXHJcbiAgICBkaXYucHJvamVjdC1kaXZ7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBMYXB0b3BzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAgIGRpdi5jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNmZyIDNmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDNmcjtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBkaXYuc2lkZWJhcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMy8xO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbiAgICB9XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMS8zO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXYubWFpbntcclxuICAgICAgICBncmlkLWFyZWE6IDIvMi8zLzM7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIGRpdi5tYWluLWNvbnRhaW5lcntcclxuICAgICAgICBncmlkLWFyZWE6IDMvMS8zLzI7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpbHRlciA+IHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBidXR0b24uY2xvc2VBZGQsXHJcbiAgICBidXR0b24uY2xvc2VFZGl0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMjgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmJhY2tCdG4gPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudGFzay1kaXYgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzJTtcclxuICAgIH1cclxuICAgIGRpdi5lZGl0LWRlbGV0ZSAqe1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgZGl2Lm1haW4taGVhZGluZyA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICBkaWFsb2d7XHJcbiAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICBsZWZ0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTI7XHJcbiAgICB9XHJcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmFkZC10YXNrLWRpYWxvZ3tcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDM1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dHtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYXtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgIH1cclxuICAgIHNlbGVjdCwgXHJcbiAgICBkaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZm9ybWRldGFpbHN7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxyXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIH1cclxuICAgIGRpdi5jb250cm9se1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2stZGl2e1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxuICAgIHAudGhldGFza3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhLFxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZmlsdGVyLWRpdiwgXHJcbiAgICBkaXYucHJvamVjdC1kaXZ7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLCtGQUErRjtBQUNuRztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7Ozs7SUFJSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtJQUN2QjtJQUNBOzs7UUFHSSx3SEFBd0g7SUFDNUg7SUFDQTs7UUFFSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksMENBQTBDO0lBQzlDO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTs7OztRQUlJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0kseUJBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7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WUFBWTtRQUNaLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBOztRQUVJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxTQUFTO0lBQ2I7SUFDQTs7UUFFSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1jb2xvci1mZzogI2VlZTtcXHJcXG4gICAgLS1jb2xvci1iZzogIzEyMTIxMjtcXHJcXG4gICAgLS1oZWFkaW5nOiAjMDQ2NGE0O1xcclxcbn1cXHJcXG4ubWVudUIsXFxyXFxuLmZpbHRlci13aGl0ZXtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MzUlKSBodWUtcm90YXRlKDY1ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDk1JSk7XFxyXFxufVxcclxcbi5maWx0ZXIgPiBwe1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbn1cXHJcXG5kaWFsb2d7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxyXFxufVxcclxcbmRpdi5vdmVybGF5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAyNSwgMjUsIDAuNzEpO1xcclxcbn1cXHJcXG5kaXYudGFzay1kaXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxufVxcclxcbnRleHRhcmVhLFxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0LFxcclxcbnNlbGVjdCwgXFxyXFxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxufVxcclxcbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbn1cXHJcXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxufVxcclxcbnAudGhldGFza3RpdGxle1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KXtcXHJcXG4gICAgOnJvb3R7XFxyXFxuICAgICAgICAtLWNvbG9yLWJnOiAjY2ZjZGNkO1xcclxcbiAgICAgICAgLS1jb2xvci1mZzogIzFBMUMyMDtcXHJcXG4gICAgfVxcclxcbiAgICAuYmFja0ltZyxcXHJcXG4gICAgLmRlbC10YXNrLFxcclxcbiAgICAubWVudUJ7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDMxZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFkZHByb2plY3RidG4sXFxyXFxuICAgIC5maWx0ZXIgPiBwe1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgfVxcclxcbiAgICBkaWFsb2d7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzMjMyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5vdmVybGF5e1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODQsIDE3OSwgMTc5LCAwLjkpO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNkY2Q7XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWEjdGFza25vdGUsXFxyXFxuICAgIGlucHV0I3Rhc2t0aXRsZSxcXHJcXG4gICAgc2VsZWN0I3RoZVByb2plY3RzLCBcXHJcXG4gICAgaW5wdXQjZHVlZGF0ZXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNkY2Q7XFxyXFxuICAgIH1cXHJcXG4gICAgaW5wdXQuYWRkcHJvamVjdHRleHR7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZGNkO1xcclxcbn1cXHJcXG59XFxyXFxuaHRtbCwgYm9keXtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5odG1se1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbmRpdi5jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuM2ZyO1xcclxcbn1cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTogMS8xLzEvMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuaGVhZGVyID4gaDF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcbmRpdi5tZW51e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5idXR0b24uYmFja0J0bixcXHJcXG5idXR0b24uZGVsYnRuLFxcclxcbmJ1dHRvbi5jbG9zZUFkZCxcXHJcXG5idXR0b24uY2xvc2VFZGl0LFxcclxcbmJ1dHRvbi5jbG9zZUJ0bixcXHJcXG5idXR0b24ubWVudUJ0bixcXHJcXG5idXR0b24uYWRkcHJvamVjdGJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYubWVudSA+IC5jbG9zZUJ0biA+IGltZyxcXHJcXG5kaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbiAgICB3aWR0aDogMTIlO1xcclxcbn1cXHJcXG5idXR0b24jY2xvc2UuY2xvc2VCdG57XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHotaW5kZXg6IDExO1xcclxcbn1cXHJcXG5kaXYubWFpbntcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxufVxcclxcbmRpdi5tYWluLWNvbnRhaW5lcntcXHJcXG4gICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC40ZnI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5kaXYubWFpbi10YXNrLXZpZXdlcntcXHJcXG4gICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC40ZnI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYubWFpbi1oZWFkaW5ne1xcclxcbiAgICBncmlkLWFyZWE6IDEvMS8xLzI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbmRpdi5tYWluLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG5cXHJcXG59XFxyXFxuZGl2Lm1haW4tY29udGVudHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuZGl2LmFkZC10YXNrZGl2e1xcclxcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5idXR0b24uYmFja0J0biA+IGltZ3tcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcbmRpYWxvZ3tcXHJcXG4gICAgdG9wOiAxMDBweDtcXHJcXG4gICAgbGVmdDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMjtcXHJcXG5cXHJcXG59XFxyXFxuLmRhaWxvZy1FZGl0LFxcclxcbi5hZGRwcm9qZWN0ZGlhbG9ne1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuZGl2Lm92ZXJsYXl7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcbmRpdi5hZGRidG57XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5kaXYuZGFpbG9nLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZpbHRlciA+IHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZpbHRlci1kaXYsIFxcclxcbmRpdi5wcm9qZWN0LWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uZmlsdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50aGUtcHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZmlsdGVyID4gaW1ne1xcclxcbiAgICB3aWR0aDogMi44cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYuYWRkLXByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5hZGRwcm9qZWN0YnRuID4gaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuZGl2LnByb2plY3Rze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZWRpdC1kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDJweDtcXHJcXG59XFxyXFxuZGl2LmVkaXQtZGVsZXRlICp7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSxcXHJcXG5mb3JtLmVkaXRGb3Jte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbmZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJnKTtcXHJcXG59XFxyXFxuZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxcclxcbmZvcm0uZWRpdEZvcm0gPiBidXR0b257XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMmY5O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5jbG9zZUFkZCxcXHJcXG5idXR0b24uY2xvc2VFZGl0e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMjMwcHg7XFxyXFxufVxcclxcbmJ1dHRvbiNjbG9zZUFkZC5jbG9zZUFkZCA+IGltZyxcXHJcXG5idXR0b24jY2xvc2VFZGl0LmNsb3NlRWRpdCA+IGltZ3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuZGl2LmNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuZGl2Lm5vLXRhc2stZGl2e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuZGl2LmNvbnRlbnR7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcbmRpdi5uby10YXNrLWRpdiA+IGg0e1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbmg0Lm5vLXRhc2t7XFxyXFxuICAgIGNvbG9yOiAjNGJiMmY5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcbmRpdi50YXNrLWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbmRpdi50YXNrLWRpdiBpbWd7XFxyXFxuICAgIHdpZHRoOiA4JTtcXHJcXG59XFxyXFxucC50aGV0YXNrdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5kaXYucmlnaHR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuZGl2LmRpYWxvZy1jb250YWluZXI0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5mb3JtLmFkZFRhc2tGb3Jte1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5kaXYuZm9ybWRldGFpbHN7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5sYWJlbHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbmRpdi5tb3JlRGV0YWlsc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcbnRleHRhcmVhLFxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0LFxcclxcbnNlbGVjdCwgXFxyXFxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ4NDg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmZvcm1kZXRhaWxzID4gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG50ZXh0YXJlYSxcXHJcXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxuLmZvcm1kZXRhaWxzID4gaW5wdXR7XFxyXFxuICAgIGhlaWdodDogMi44cmVtO1xcclxcbn1cXHJcXG5zZWxlY3QsIFxcclxcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xcclxcbiAgICBoZWlnaHQ6IDIuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDk4JTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi50b2RvLW9wdGlvbnN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweFxcclxcbn1cXHJcXG5cXHJcXG5kaXYuY29udHJvbHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMi8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcbmRpdi5jb250cm9sID4gYnV0dG9uLmFkZEFUYXNre1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmRlbC10YXNre1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi8qVGFibGV0cyovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDFweCl7XFxyXFxuICAgIGRpYWxvZ3tcXHJcXG4gICAgICAgIHRvcDogMTQwcHg7XFxyXFxuICAgICAgICBsZWZ0OiA0MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG4gICAgaGVhZGVyID4gaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyID4gcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxcclxcbiAgICBkaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDI0JTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uY2xvc2VBZGQsXFxyXFxuICAgIGJ1dHRvbi5jbG9zZUVkaXR7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiA1MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uYmFja0J0biA+IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXIgPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMy44cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogNiU7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmVkaXQtZGVsZXRlICp7XFxyXFxuICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWFpbi1oZWFkaW5nID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuN3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbi5hZGRwcm9qZWN0YnRuID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNGZyO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQuNHJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXR7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICB0ZXh0YXJlYXtcXHJcXG4gICAgICAgIGhlaWdodDogNDAlO1xcclxcbiAgICB9XFxyXFxuICAgIHNlbGVjdCwgXFxyXFxuICAgIGRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xcclxcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGxhYmVse1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmZvcm1kZXRhaWxze1xcclxcbiAgICAgICAgZ2FwOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmNvbnRyb2wgPiBidXR0b24uYWRkQVRhc2t7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRhc2stZGl2e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0LjRyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgcC50aGV0YXNrdGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICB0ZXh0YXJlYSxcXHJcXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5maWx0ZXItZGl2LCBcXHJcXG4gICAgZGl2LnByb2plY3QtZGl2e1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIExhcHRvcHMgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XFxyXFxuICAgIGRpdi5jb250YWluZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAzZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDNmcjtcXHJcXG4gICAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuc2lkZWJhcntcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMS8xLzMvMTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxuICAgIH1cXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMS8zO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tYWlue1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWFpbi1jb250YWluZXJ7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDMvMS8zLzI7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC40ZnI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXIgPiBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tZW51IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uLmNsb3NlQWRkLFxcclxcbiAgICBidXR0b24uY2xvc2VFZGl0e1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogMjgwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uLmJhY2tCdG4gPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFzay1kaXYgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDMlO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5lZGl0LWRlbGV0ZSAqe1xcclxcbiAgICAgICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1haW4taGVhZGluZyA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaWFsb2d7XFxyXFxuICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICAgICAgbGVmdDogMzAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNDAlO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMjtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNGZyO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hZGQtdGFzay1kaWFsb2d7XFxyXFxuICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICAgICAgbGVmdDogMzUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0e1xcclxcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHRleHRhcmVhe1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgc2VsZWN0LCBcXHJcXG4gICAgZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XFxyXFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgbGFiZWx7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmZvcm1kZXRhaWxze1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5jb250cm9se1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxuICAgIHRleHRhcmVhOjpwbGFjZWhvbGRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubm8tdGFzay1kaXYgPiBoNHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFzay1kaXZ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgcC50aGV0YXNrdGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWEsXFxyXFxuICAgIGlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmZpbHRlci1kaXYsIFxcclxcbiAgICBkaXYucHJvamVjdC1kaXZ7XFxyXFxuICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIG5vdGUsIGR1ZURhdGUsICBwcm9qZWN0LCBjaGVja2VkKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLm5vdGUgPSBub3RlXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIGlmKHByb2plY3QgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgaWYoY2hlY2tlZCA9PSB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIFxyXG4gICAgfTtcclxufTsiLCJpbXBvcnQgRm9sZGVyIGZyb20gJy4vaW1nL2ZvbGRlci5zdmcnO1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuL2ltZy9lZGl0LnN2Zyc7XHJcbmltcG9ydCBEZWxldGUgZnJvbSAnLi9pbWcvZGVsZXRlLnN2Zyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RzLCB0YWdzKXtcclxuXHJcbiAgICBpZih0YWdzLmZpcnN0RWxlbWVudENoaWxkKXtcclxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHRhZ3MpO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aGVwcm9qZWN0Rmlyc3RMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoZXByb2plY3RGaXJzdExheWVyLmNsYXNzTmFtZSA9ICd0aGUtcHJvamVjdHMnO1xyXG5cclxuICAgICAgICBjb25zdCB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuY2xhc3NOYW1lID0gJ3Byb2plY3RzJztcclxuXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdFRoaXJkTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGVwcm9qZWN0VGhpcmRMYXllci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInLCAncHJvamVjdC1maWx0ZXInKVxyXG5cclxuICAgICAgICBjb25zdCBpbWFnZUZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltYWdlRm9sZGVyLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1pY29uJywgJ2ZpbHRlci13aGl0ZScpXHJcbiAgICAgICAgaW1hZ2VGb2xkZXIuc3JjID0gRm9sZGVyO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSAncHJvamVjdC10YWdzJztcclxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3Q7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RUaGlyZExheWVyLmFwcGVuZENoaWxkKGltYWdlRm9sZGVyKTtcclxuICAgICAgICB0aGVwcm9qZWN0VGhpcmRMYXllci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RTZWNvbmRMYXllci5hcHBlbmRDaGlsZCh0aGVwcm9qZWN0VGhpcmRMYXllcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250cm9sRGl2LmNsYXNzTmFtZSA9ICdlZGl0LWRlbGV0ZSc7XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGVkaXRJbWFnZS5jbGFzc0xpc3QuYWRkKCdlZGl0JywgJ2ZpbHRlci13aGl0ZScpXHJcbiAgICAgICAgZWRpdEltYWdlLnNyYyA9IEVkaXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgZGVsZXRlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJywgJ2ZpbHRlci13aGl0ZScpXHJcbiAgICAgICAgZGVsZXRlSW1hZ2Uuc3JjID0gRGVsZXRlO1xyXG5cclxuICAgICAgICBjb250cm9sRGl2LmFwcGVuZENoaWxkKGVkaXRJbWFnZSk7XHJcbiAgICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSk7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RTZWNvbmRMYXllci5hcHBlbmRDaGlsZChjb250cm9sRGl2KTtcclxuXHJcbiAgICAgICAgdGhlcHJvamVjdEZpcnN0TGF5ZXIuYXBwZW5kQ2hpbGQodGhlcHJvamVjdFNlY29uZExheWVyKVxyXG4gICAgICAgIHRhZ3MuYXBwZW5kQ2hpbGQodGhlcHJvamVjdEZpcnN0TGF5ZXIpXHJcblxyXG4gICAgfSk7XHJcbiAgICB9XHJcblxyXG4vLyByZW1vdmVzICBhbGwgY2hpbGQgZWxlbWVudHMgb24gdGhlIHNjcmVlblxyXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCl7XHJcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtyZW1vdmVBbGxDaGlsZE5vZGVzLCBjcmVhdGVQcm9qZWN0fSIsImZ1bmN0aW9uIGxvY2FsRGIoKXtcclxuICAgIGxldCBkYlJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVG9EYihkYk5hbWUsIGRiVmFsdWUpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7ZGJOYW1lfWAsIEpTT04uc3RyaW5naWZ5KGRiVmFsdWUpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEZyb21EYihkYk5hbWUpe1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYk5hbWUpXHJcbiAgICAgICAgZGJSZXR1cm4gPSBKU09OLnBhcnNlKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIGRiUmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue3NhdmVUb0RiLCBnZXRGcm9tRGJ9XHJcbn1cclxuXHJcbmNvbnN0IHNhdmVUb0RiID0gbG9jYWxEYigpLnNhdmVUb0RiO1xyXG5jb25zdCBnZXRGcm9tRGIgPSBsb2NhbERiKCkuZ2V0RnJvbURiO1xyXG5leHBvcnQge3NhdmVUb0RiLCBnZXRGcm9tRGJ9IiwiaW1wb3J0IERlbCBmcm9tICcuL2ltZy9kZWxldGUuc3ZnJztcclxuaW1wb3J0IEJhY2sgZnJvbSAnLi9pbWcvYmFjay5zdmcnO1xyXG5cclxuZnVuY3Rpb24gd3JpdGVUb01haW4oKXtcclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUFsbFRhc2sodG9kb3MsIG5vZGUpe1xyXG5cclxuICAgICAgICBpZighdG9kb3Mpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRvZG9zLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICduby10YXNrLWRpdic7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9ICdObyB0YXNrIGZvdW5kJztcclxuICAgICAgICAgICAgaGVhZGluZy5jbGFzc05hbWUgPSAnbm8tdGFzayc7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBcclxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ3Rhc2stZGl2JztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgdGFza0hvbGRlci5jbGFzc05hbWUgPSBcInJpZ2h0XCJcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VyLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlci5jbGFzc05hbWUgPSBcImNoZWNrXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrLmNsYXNzTmFtZSA9IFwidGhldGFza3RpdGxlXCI7XHJcbiAgICAgICAgICAgICAgICB0YXNrLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XHJcbiAgICAgICAgICAgICAgICB0YXNrSG9sZGVyLmFwcGVuZENoaWxkKGNoZWNrZXIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0hvbGRlci5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLXRhc2snLCAnZmlsdGVyLXdoaXRlJylcclxuICAgICAgICAgICAgICAgIGRlbEJ1dHRvbi5zcmMgPSBEZWw7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0hvbGRlcik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dFYWNoVGFzayh0b2RvLCBub2RlKXtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ3Rhc2stZGl2JztcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrLmNsYXNzTmFtZSA9ICd0YXNrLXRpdGxlLWRpdic7XHJcbiAgICBcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc05hbWUgPSBcInRhc2stdGl0bGVcIlxyXG4gICAgICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlXHJcblxyXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5vdGVEaXYuY2xhc3NOYW1lID0gJ25vdGUtZGl2JztcclxuXHJcbiAgICAgICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBub3RlLmlubmVyVGV4dCA9IHRvZG8ubm90ZTtcclxuXHJcbiAgICAgICAgbm90ZURpdi5hcHBlbmRDaGlsZChub3RlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JhY2tJbWcnLCAnZmlsdGVyLXdoaXRlJylcclxuICAgICAgICBiYWNrQnV0dG9uLmNsYXNzTmFtZSA9IFwiYmFja0RpdlwiO1xyXG4gICAgICAgIGJhY2tCdXR0b24uc3JjID0gQmFjaztcclxuXHJcbiAgICAgICAgYmFja0Rpdi5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKTtcclxuXHJcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5vdGVEaXYpO1xyXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3dyaXRlQWxsVGFzaywgc2hvd0VhY2hUYXNrfVxyXG59XHJcblxyXG5jb25zdCB3cml0ZUFsbFRhc2sgPSB3cml0ZVRvTWFpbigpLndyaXRlQWxsVGFzaztcclxuY29uc3Qgc2hvd0VhY2hUYXNrID13cml0ZVRvTWFpbigpLnNob3dFYWNoVGFzaztcclxuXHJcbmV4cG9ydCB7d3JpdGVBbGxUYXNrLCBzaG93RWFjaFRhc2t9IiwiaW1wb3J0IHtkZWxldGVCeVByb2plY3QgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVByb2plY3R9IGZyb20gJy4vY3JlYXRlLmpzJztcclxuaW1wb3J0IHtzYXZlVG9EYiwgZ2V0RnJvbURifSBmcm9tICcuL2RiLmpzJztcclxuXHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXCJkZWZhdWx0XCJdO1xyXG5jb25zdCBkYk5hbWUgPSBcInByb2plY3RzXCI7XHJcbihmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdGVzdHByb2plY3RzID0gZ2V0RnJvbURiKGRiTmFtZSk7XHJcbiAgICBpZighdGVzdHByb2plY3RzKXtcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIHByb2plY3RzKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRlc3Rwcm9qZWN0cy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgcHJvamVjdHMpO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuLy8gU29ydCBieSBQcm9qZWN0c1xyXG5mdW5jdGlvbiBwcm9qZWN0U29ydCgpe1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGlmKCFwcm9qZWN0TmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHByb2plY3RzLnVuc2hpZnQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgcHJvamVjdHMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdChvbGRQcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpe1xyXG4gICAgICAgIHByb2plY3RzID0gZ2V0RnJvbURiKGRiTmFtZSlcclxuXHJcbiAgICAgICAgaWYoIW5ld1Byb2plY3ROYW1lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYocHJvamVjdHNbaV0gPT0gb2xkUHJvamVjdE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0gPSBuZXdQcm9qZWN0TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgcHJvamVjdHMpO1xyXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0TmFtZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpe1xyXG4gICAgICAgIHByb2plY3RzID0gZ2V0RnJvbURiKGRiTmFtZSlcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYocHJvamVjdHNbaV0gPT0gcHJvamVjdE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgcHJvamVjdHMpO1xyXG4gICAgICAgIGRlbGV0ZUJ5UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyh0YWdzKXtcclxuICAgICAgICBwcm9qZWN0cyA9IGdldEZyb21EYihkYk5hbWUpXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0cywgdGFncyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KCl7XHJcbiAgICAgICAgcHJvamVjdHMgPSBnZXRGcm9tRGIoZGJOYW1lKTtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2dldFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0c31cclxufVxyXG5cclxuY29uc3QgYWRkUHJvamVjdCA9IHByb2plY3RTb3J0KCkuYWRkUHJvamVjdDtcclxuY29uc3QgcmVuZGVyUHJvamVjdHMgPSBwcm9qZWN0U29ydCgpLnJlbmRlclByb2plY3RzO1xyXG5jb25zdCBlZGl0UHJvamVjdCA9IHByb2plY3RTb3J0KCkuZWRpdFByb2plY3Q7XHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBwcm9qZWN0U29ydCgpLmRlbGV0ZVByb2plY3Q7XHJcbmNvbnN0IGdldFByb2plY3QgPSBwcm9qZWN0U29ydCgpLmdldFByb2plY3Q7XHJcblxyXG5leHBvcnQge2dldFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0c30iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge2lzVG9kYXksIGlzVGhpc1dlZWssIGlzVGhpc01vbnRofSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcblxyXG4vLyBzb3J0IGJ5IERhdGVcclxuXHJcbmZ1bmN0aW9uIG15U29ydCgpe1xyXG5cclxuICAgIC8vdG9kYXlcclxuICAgIGZ1bmN0aW9uIHRvZG9zVG9kYXkoKXtcclxuICAgICAgICBjb25zdCB0b2RheVNvcnQgPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVG9kYXkodG9kby5kdWVEYXRlKSlcclxuICAgICAgICAgICAgICAgIHRvZGF5U29ydC5wdXNoKHRvZG8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b2RheVNvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc29ydCBieSB3ZWVrXHJcbiAgICBmdW5jdGlvbiB0b2Rvc0ZvckFXZWVrKCl7XHJcbiAgICAgICAgY29uc3QgdGhpc1dlZWsgPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVGhpc1dlZWsodG9kby5kdWVEYXRlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzV2Vlay5wdXNoKHRvZG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXNXZWVrO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc29ydCBieSBtb250aFxyXG4gICAgZnVuY3Rpb24gdG9kb3NGb3JNb250aCgpe1xyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUaGlzTW9udGgodG9kby5kdWVEYXRlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzTW9udGgucHVzaCh0b2RvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzTW9udGg7ICAgXHJcbiAgICB9XHJcbiAgICAvLyBDaGVja3MgZm9yIHNwZWNpZmljIHByb2plY3QgaW4gdGhlIHRvZG9zIGFycmF5XHJcbiAgICBmdW5jdGlvbiBjaGVja0ZvclByb2plY3QodGhlUHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IHRvZG9zQnlQcm9qZWN0ID0gW107XHJcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSByZW5kZXIoKTtcclxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZih0b2RvLnByb2plY3QgPT0gdGhlUHJvamVjdE5hbWUpXHJcbiAgICAgICAgICAgICAgICB0b2Rvc0J5UHJvamVjdC51bnNoaWZ0KHRvZG8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b2Rvc0J5UHJvamVjdFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y2hlY2tGb3JQcm9qZWN0LCB0b2Rvc1RvZGF5LCB0b2Rvc0ZvckFXZWVrLCB0b2Rvc0Zvck1vbnRofVxyXG59XHJcblxyXG5jb25zdCB0b2Rvc0ZvckFXZWVrID0gbXlTb3J0KCkudG9kb3NGb3JBV2VlaztcclxuY29uc3QgdG9kb3NGb3JNb250aCA9IG15U29ydCgpLnRvZG9zRm9yTW9udGg7XHJcbmNvbnN0IHRvZG9zVG9kYXkgPSBteVNvcnQoKS50b2Rvc1RvZGF5O1xyXG5jb25zdCBjaGVja0ZvclByb2plY3QgPSBteVNvcnQoKS5jaGVja0ZvclByb2plY3Q7XHJcbmV4cG9ydCB7Y2hlY2tGb3JQcm9qZWN0LCB0b2Rvc1RvZGF5LCB0b2Rvc0ZvckFXZWVrLCB0b2Rvc0Zvck1vbnRofSIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi9jbGFzcy5qc1wiXHJcbmltcG9ydCB7c2F2ZVRvRGIsIGdldEZyb21EYn0gZnJvbSAnLi9kYi5qcyc7XHJcblxyXG5cclxubGV0IGFsbFRvZG9zID0gW107XHJcbmNvbnN0IGRiTmFtZSA9IFwiYWxsVG9kb3NcIjtcclxuKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCB0ZXN0dG9kbyA9IGdldEZyb21EYihkYk5hbWUpO1xyXG4gICAgaWYoIXRlc3R0b2RvKXtcclxuICAgICAgICBzYXZlVG9EYihkYk5hbWUsIGFsbFRvZG9zKTtcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIHRvZG9zQ3JlYXRvcigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBub3RlLCBkdWVEYXRlLCBwcm9qZWN0LCBjaGVja2VkKXtcclxuICAgICAgICBjb25zdCB0b2RvcyA9IG5ldyBUb2Rvcyh0aXRsZSwgbm90ZSwgZHVlRGF0ZSwgcHJvamVjdCwgY2hlY2tlZCk7XHJcbiAgICAgICAgYWRkVG9kb3ModG9kb3MpIFxyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgYWxsVG9kb3MpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGFkZFRvZG9zKHRvZG9zKXtcclxuICAgICAgICBhbGxUb2Rvcy51bnNoaWZ0KHRvZG9zKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUJ5UHJvamVjdChwcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgYWxsVG9kb3M9IGdldEZyb21EYihkYk5hbWUpO1xyXG4gICAgICAgIGlmKCFhbGxUb2RvcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYWxsVG9kb3MuZmluZEluZGV4KHRoZVRvZG8gPT4gdGhlVG9kby5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIGFsbFRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2F2ZVRvRGIoZGJOYW1lLCBhbGxUb2RvcylcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8odGl0bGUpe1xyXG4gICAgICAgIGFsbFRvZG9zPSBnZXRGcm9tRGIoZGJOYW1lKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFsbFRvZG9zLmZpbmRJbmRleCh0aGVUb2RvID0+IHRoZVRvZG8udGl0bGUgPT09IHRpdGxlKTtcclxuICAgICAgICBhbGxUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNhdmVUb0RiKGRiTmFtZSwgYWxsVG9kb3MpXHJcbiAgICB9IFxyXG4gICAgZnVuY3Rpb24gZWRpdFRvZG8odG9kb3MsIG5ld1RpdGxlLCBuZXdOb3RlLCBuZXdEdWVEYXRlLCBuZXdQcm9qZWN0KXtcclxuICAgICAgICBpZihuZXdUaXRsZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRvZG9zLnRpdGxlID0gbmV3VGl0bGVcclxuICAgICAgICBpZihuZXdOb3RlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3Mubm90ZSA9IG5ld05vdGVcclxuICAgICAgICBpZihuZXdEdWVEYXRlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3MuZHVlRGF0ZSA9IG5ld0R1ZURhdGVcclxuICAgICAgICBpZihuZXdQcm9qZWN0ICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3MucHJvamVjdCA9IG5ld1Byb2plY3Q7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgICAgICBhbGxUb2Rvcz0gZ2V0RnJvbURiKGRiTmFtZSk7XHJcbiAgICAgICAgaWYoIWFsbFRvZG9zKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsVG9kb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtkZWxldGVCeVByb2plY3QsIGRlbGV0ZVRvZG8sIGNyZWF0ZVRvZG8sIGVkaXRUb2RvLCByZW5kZXJ9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRvZG8gPSB0b2Rvc0NyZWF0b3IoKS5jcmVhdGVUb2RvO1xyXG5jb25zdCBkZWxldGVUb2RvID0gdG9kb3NDcmVhdG9yKCkuZGVsZXRlVG9kbztcclxuY29uc3QgZWRpdFRvZG8gPSB0b2Rvc0NyZWF0b3IoKS5lZGl0VG9kbztcclxuY29uc3QgcmVuZGVyID0gdG9kb3NDcmVhdG9yKCkucmVuZGVyO1xyXG5jb25zdCBkZWxldGVCeVByb2plY3QgPSB0b2Rvc0NyZWF0b3IoKS5kZWxldGVCeVByb2plY3Q7XHJcblxyXG5leHBvcnQgeyBkZWxldGVCeVByb2plY3QsIGNyZWF0ZVRvZG8sIGRlbGV0ZVRvZG8sIHJlbmRlciwgZWRpdFRvZG99IiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcik/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcilcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiksIG5ldyBEYXRlKDIwMTQsIDgsIDI1KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTUgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNSwgOCwgMjUpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lTW9udGgoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG4gIHJldHVybiAoXG4gICAgX2RhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgPT09IF9kYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxuICAgIF9kYXRlTGVmdC5nZXRNb250aCgpID09PSBfZGF0ZVJpZ2h0LmdldE1vbnRoKClcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVNb250aDtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1NhbWVXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lV2VlayhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkYXRlTGVmdCwgb3B0aW9ucyk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGF0ZVJpZ2h0LCBvcHRpb25zKTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZldlZWsgPT09ICtkYXRlUmlnaHRTdGFydE9mV2Vlaztcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVXZWVrO1xuIiwiaW1wb3J0IHsgaXNTYW1lTW9udGggfSBmcm9tIFwiLi9pc1NhbWVNb250aC5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIG1vbnRoIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhpcyBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMTUgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc01vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDE1KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RoaXNNb250aChkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVNb250aChEYXRlLm5vdygpLCBkYXRlKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RoaXNNb250aDtcbiIsImltcG9ydCB7IGlzU2FtZVdlZWsgfSBmcm9tIFwiLi9pc1NhbWVXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNUaGlzV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gaXNTYW1lV2VlayhkYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RoaXNXZWVrO1xuIiwiaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSBcIi4vaXNTYW1lRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgRGF0ZS5ub3coKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUb2RheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcclxuaW1wb3J0IHtjcmVhdGVUb2RvLCBlZGl0VG9kbywgZGVsZXRlVG9kbywgcmVuZGVyfWZyb20gXCIuL3RvZG9zLmpzXCI7XHJcbmltcG9ydCB7Y2hlY2tGb3JQcm9qZWN0LCB0b2Rvc1RvZGF5LCB0b2Rvc0ZvckFXZWVrLCB0b2Rvc0Zvck1vbnRofSBmcm9tIFwiLi9zb3J0LmpzXCI7XHJcbmltcG9ydCB7Z2V0UHJvamVjdCwgZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3QsIGFkZFByb2plY3QsIHJlbmRlclByb2plY3RzfSBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQge3dyaXRlQWxsVGFzaywgc2hvd0VhY2hUYXNrfSBmcm9tICcuL21haW4uanMnO1xyXG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSAnLi9jcmVhdGUuanMnO1xyXG5cclxuLy8gY29uc3QgdG9kb3NUaXRsZSA9IFwiQ2xpY2sgVG8gTGVhcm4gSG93IFRvIFVzZVwiXHJcbi8vIGNyZWF0ZVRvZG8odG9kb3NUaXRsZSwgXCJteSBOb3RlXCIsIFwiZGVmYXVsdFwiKTtcclxuXHJcblxyXG4vL0RvbWUgQ2FjaGVcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnRuJyk7XHJcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XHJcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWJhckRhaWxvZycpO1xyXG5jb25zdCBmaWx0ZXJUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvcycpO1xyXG5jb25zdCB0aGVUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZS1wcm9qZWN0cycpO1xyXG5jb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWxvZy1FZGl0Jyk7XHJcbmNvbnN0IHRleHRJbnB1dEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0Jyk7XHJcbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdEJ0bicpO1xyXG5jb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Rm9ybScpO1xyXG5sZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRwcm9qZWN0YnRuJyk7XHJcbmNvbnN0IGFkZFByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdGRpYWxvZycpO1xyXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdHRleHQnKTtcclxuY29uc3QgYWRkTmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2dBZGRQcm9qZWN0QnRuJylcclxuY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRGb3JtJyk7XHJcbmNvbnN0IGNsb3NlQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQWRkJyk7XHJcbmNvbnN0IGNsb3NlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUVkaXQnKVxyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XHJcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tGb3JtJyk7XHJcbmNvbnN0IGFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZGlhbG9nJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2t0aXRsZScpO1xyXG5jb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tub3RlJyk7XHJcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xyXG5sZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlUHJvamVjdHMnKTtcclxuY29uc3QgYWRkQVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQVRhc2snKTtcclxubGV0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja0J0bicpO1xyXG5sZXQgZGVsVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtdGFzaycpO1xyXG5sZXQgYXZhaWxhYmxlUHJvamVjdHMgPSBnZXRQcm9qZWN0KCk7XHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxubGV0IGVhY2hUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZXRhc2t0aXRsZScpO1xyXG5jb25zdCB0YXNrVmlld2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGFzay12aWV3ZXInKVxyXG5sZXQgdGFncztcclxuXHJcbi8vRGlmZmVyZW50aWF0aW5nIGJldHdlZW4gdGhlIG1vYmlsZSBhbmQgbGFyZ2Ugc2NyZWVuIHNpZGViYXJcclxuKGZ1bmN0aW9uKCl7ICBcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpe1xyXG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoZVRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFnLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpZGViYXJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWdzID0gdGFnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIGFkZFByb2plY3RCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBpZihidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpZGViYXJcIil7XHJcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuID0gYnRuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHRoZVRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFnLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpYmFyRGFpbG9nXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFncyA9IHRhZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkZFByb2plY3RCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBpZihidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PSBcInNpYmFyRGFpbG9nXCIpe1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0biA9IGJ0bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICB3cml0ZUFsbFRhc2sodGhpc3Byb2plY3RzLCBjb250ZW50KTtcclxuXHJcbiAgICBlYWNoVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGV0YXNrdGl0bGUnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlYWNoVGFzaywgJ2NsaWNrJywgc2hvd1Rhc2spO1xyXG4gICAgcmVuZGVyUHJvamVjdHModGFncylcclxuICAgIGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoY2hlY2ssIFwiY2hhbmdlXCIsIHRoZWNoZWNrZXIpXHJcbiAgICBkZWxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbC10YXNrJylcclxuICAgIGFkZExpc3Rlcm5lcihkZWxUYXNrLCBcImNsaWNrXCIsIGRlbGV0ZVRoZVRhc2spXHJcbn0pKCk7XHJcblxyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXJzXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaWFsb2cuc2hvdygpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG59KTtcclxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xyXG5cclxuZnVuY3Rpb24gY2xvc2VNZW51KCl7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcbmZpbHRlclRvZG9zLmZvckVhY2godG9kb0ZpbHRlciA9PiB7XHJcbiAgICBcclxuICAgICAgICB0b2RvRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0b2RvRmlsdGVyLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhpc3Byb2plY3RzID0gcmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKHRoaXNwcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0b2RvRmlsdGVyLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPT0gJ1RvZGF5Jyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheVByb2plY3RzID0gdG9kb3NUb2RheSgpO1xyXG4gICAgICAgICAgICAgICAgc29ydFRvTWFpbih0b2RheVByb2plY3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnV2Vlaycpe1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2Vla1Byb2plY3RzID0gdG9kb3NGb3JBV2VlaygpO1xyXG4gICAgICAgICAgICAgICAgc29ydFRvTWFpbih3ZWVrUHJvamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aFByb2plY3RzID0gdG9kb3NGb3JNb250aCgpO1xyXG4gICAgICAgICAgICAgICAgc29ydFRvTWFpbihtb250aFByb2plY3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNvcnRUb01haW4ocHJvamVjdCl7XHJcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xyXG4gICAgd3JpdGVBbGxUYXNrKHByb2plY3QsIGNvbnRlbnQpO1xyXG4gICAgZWFjaFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGhldGFza3RpdGxlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZWFjaFRhc2ssICdjbGljaycsIHNob3dUYXNrKTtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNsb3NlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMDI0KVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoY2hlY2ssIFwiY2hhbmdlXCIsIHRoZWNoZWNrZXIpXHJcbiAgICBkZWxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbC10YXNrJylcclxuICAgIGFkZExpc3Rlcm5lcihkZWxUYXNrLCBcImNsaWNrXCIsIGRlbGV0ZVRoZVRhc2spXHJcbn1cclxuXHJcbi8vQWRkcyBFdmVudExpc3Rlcm5lcnMgdG8gcmVkdWNlIHJlcGVhdCBjb2RlXHJcbmZ1bmN0aW9uIGFkZExpc3Rlcm5lcihub2RlcywgdGhlRXZlbnQsIHRoZUZ1bmN0aW9uKXtcclxuICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHRoZUV2ZW50LCB0aGVGdW5jdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ2hlY2tzIHdoZW4gYSB1c2VyIGRpbXMgYSBwcm9qZWN0IGFzIGNvbXBsZXRlZFxyXG5mdW5jdGlvbiB0aGVjaGVja2VyKGUpe1xyXG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCl7XHJcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4vL2RlbGV0ZXMgYSB0YXNrXHJcbmZ1bmN0aW9uIGRlbGV0ZVRoZVRhc2soZSl7XHJcbiAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIGRlbGV0ZVRvZG8odGl0bGUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAvLyBjb250ZW50LnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgY29uc3QgdGhpc3Byb2plY3RzID0gcmVuZGVyKCk7XHJcbiAgICBzb3J0VG9NYWluKHRoaXNwcm9qZWN0cyk7XHJcbn1cclxuXHJcbi8vRXZlbnQgTGlzdGVuZXJzXHJcbnRhZ3MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGFnc0V2ZW50KTtcclxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQcm9qZWN0QWRkTW9kYWwpO1xyXG5hZGROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3UHJvamVjdCk7XHJcbmJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUFkZFRhc2spO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRhZ3NFdmVudCgpe1xyXG4gICAgY29uc3QgZWRpdEFuZERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRlbGV0ZScpO1xyXG5cclxuICAgIGlmKGVkaXRBbmREZWxldGUuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpXHJcbiAgICAgICAgZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVkaXRBbmREZWxldGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuLy8gT3BlbnMgdGhlIGFkZFByb2plY3QgTW9kYWxcclxuZnVuY3Rpb24gc2hvd1Byb2plY3RBZGRNb2RhbCgpe1xyXG4gICAgYWRkUHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBuZXdQcm9qZWN0SW5wdXQuZm9jdXMoKTtcclxuICAgIC8vIGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuLy9BZGRzIG5ldyBQcm9qZWN0XHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3UHJvamVjdElucHV0LnZhbHVlXHJcbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgYXZhaWxhYmxlUHJvamVjdHMgPSBnZXRQcm9qZWN0KCk7XHJcbiAgICByZW5kZXJQcm9qZWN0cyh0YWdzKVxyXG4gICAgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xyXG4gICAgYWRkTGlzdGVybmVyKGRlbGV0ZUJ0biwgJ2NsaWNrJywgZGVsKVxyXG4gICAgXHJcbiAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0Jyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZWRpdEJ0biwgXCJjbGlja1wiLCBlZGl0TW9kYWwpO1xyXG4gICAgXHJcbiAgICBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZmlsdGVyJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoYWxsVGFncywgXCJjbGlja1wiLCBzaG93UHJvamVjdFRhc2spO1xyXG5cclxuICAgIGFkZEZvcm0ucmVzZXQoKTtcclxuICAgIGFkZFByb2plY3REaWFsb2cuY2xvc2UoKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuLy9jbG9zZSB0aGUgYWRkIHRhc2sgcGFuZWxcclxuZnVuY3Rpb24gY2xvc2VBZGRUYXNrKCl7XHJcbiAgICBhZGRUYXNrRGlhbG9nLmNsb3NlKCk7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG59XHJcblxyXG5sZXQgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0Jyk7XHJcbmxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XHJcbmxldCBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG5sZXQgY3VycmVudFByb2plY3Q7XHJcblxyXG5cclxuYWRkTGlzdGVybmVyKGVkaXRCdG4sIFwiY2xpY2tcIiwgZWRpdE1vZGFsKTtcclxuYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWZpbHRlcicpO1xyXG5hZGRMaXN0ZXJuZXIoYWxsVGFncywgXCJjbGlja1wiLCBzaG93UHJvamVjdFRhc2spO1xyXG5cclxuLy8gU29ydHMgdGFza3MgYnkgcHJvamVjdHNcclxuZnVuY3Rpb24gc2hvd1Byb2plY3RUYXNrKGUpe1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCBieVByb2plY3QgPSBjaGVja0ZvclByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgc29ydFRvTWFpbihieVByb2plY3QpO1xyXG5cclxufVxyXG5mdW5jdGlvbiBlZGl0TW9kYWwoZSl7XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgZWRpdERpYWxvZy5zaG93TW9kYWwoKVxyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRleHRJbnB1dEVkaXQuZm9jdXMoKTtcclxuICAgIHRleHRJbnB1dEVkaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1cnJlbnRQcm9qZWN0KTsgICBcclxufVxyXG5cclxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUaGVQcm9qZWN0KTtcclxuXHJcbi8vRWRpdHMgdGhlIHByb2plY3RcclxuZnVuY3Rpb24gZWRpdFRoZVByb2plY3QoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG4gICAgY29uc3QgbmV3TmFtZSA9IGVkaXRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0LCB0ZXh0SW5wdXRFZGl0LnZhbHVlKTtcclxuICAgIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgIGlmKHRhZy50ZXh0Q29udGVudCA9PSBjdXJyZW50UHJvamVjdCl7XHJcbiAgICAgICAgICAgIHRhZy50ZXh0Q29udGVudCA9IG5ld05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAgICAgZWRpdEZvcm0ucmVzZXQoKTtcclxuICAgICAgICBlZGl0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIC8vIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbn1cclxuXHJcblxyXG5kZWxldGVCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsKTtcclxufSk7XHJcblxyXG4vLyBEZWxldGVzIGEgcHJvamVjdFxyXG5mdW5jdGlvbiBkZWwoZSl7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcmVuZGVyUHJvamVjdHModGFncyk7XHJcblxyXG4gICAgY29uc3QgdGhpc3Byb2plY3RzID0gcmVuZGVyKCk7XHJcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xyXG4gICAgd3JpdGVBbGxUYXNrKHRoaXNwcm9qZWN0cywgY29udGVudCk7XHJcbiAgICBcclxuICAgIGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWdzJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoYWxsVGFncywgXCJjbGlja1wiLCBzaG93UHJvamVjdFRhc2spXHJcblxyXG4gICAgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xyXG4gICAgYWRkTGlzdGVybmVyKGRlbGV0ZUJ0biwgXCJjbGlja1wiLCBkZWwpXHJcblxyXG4gICAgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhZ3MnKTtcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlZGl0QnRuLCBcImNsaWNrXCIsIGVkaXRNb2RhbClcclxufVxyXG5cclxuY2xvc2VBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgYWRkUHJvamVjdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbn0pO1xyXG5cclxuY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGVkaXREaWFsb2cuY2xvc2UoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgYWRkVGFza0RpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBhZGRUYXNrUHJvamVjdCgpO1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufSk7XHJcblxyXG5hZGRBVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVQcm9qZWN0cycpO1xyXG4gICAgY29uc3QgdGhlVGl0bGUgPSB0aXRsZS52YWx1ZTtcclxuICAgIGNvbnN0IHRoZU5vdGUgID0gbm90ZS52YWx1ZTtcclxuICAgIGNvbnN0IHRoZUR1ZURhdGUgPSBkdWVEYXRlLnZhbHVlO1xyXG4gICAgY29uc3QgdGhlUHJvamVjdCA9IHRhc2tQcm9qZWN0LnZhbHVlO1xyXG4gICAgaWYodGhlVGl0bGUgJiYgdGhlRHVlRGF0ZSl7XHJcbiAgICAgICAgY3JlYXRlVG9kbyh0aGVUaXRsZSwgdGhlTm90ZSwgdGhlRHVlRGF0ZSwgdGhlUHJvamVjdCk7XHJcbiAgICAgICAgY29uc3QgdGhpc3Byb2plY3RzID0gcmVuZGVyKCk7XHJcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcclxuICAgICAgICB3cml0ZUFsbFRhc2sodGhpc3Byb2plY3RzLCBjb250ZW50KTtcclxuICAgICAgICBlYWNoVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGV0YXNrdGl0bGUnKTtcclxuICAgICAgICBhZGRMaXN0ZXJuZXIoZWFjaFRhc2ssICdjbGljaycsIHNob3dUYXNrKTtcclxuICAgICAgICBhZGRUYXNrRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbiAgICAgICAgYWRkTGlzdGVybmVyKGNoZWNrLCBcImNoYW5nZVwiLCB0aGVjaGVja2VyKVxyXG4gICAgICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgICAgIGFkZExpc3Rlcm5lcihkZWxUYXNrLCBcImNsaWNrXCIsIGRlbGV0ZVRoZVRhc2spXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFza1Byb2plY3QoKXtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXModGFza1Byb2plY3QpO1xyXG4gICAgYXZhaWxhYmxlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRhc2tQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Rhc2soZSl7XHJcbiAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdGFza1ZpZXdlci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICBjb25zdCB0b2RvcyA9IHJlbmRlcigpO1xyXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICBpZih0b2RvLnRpdGxlID0gdGl0bGUpe1xyXG4gICAgICAgICAgICBzaG93RWFjaFRhc2sodG9kbywgdGFza1ZpZXdlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=