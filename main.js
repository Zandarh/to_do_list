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
@media (prefers-color-scheme: light){
    :root{
        --color-bg: #cfcdcd;
        --color-fg: #1A1C20;
    }
    .filter-white{
        /* filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%); */
    }
    .filter > p{
        color: var(--color-bg);
    }
    dialog{
        background-color: #343232;
    }
    div.overlay{
        background-color: rgba(233, 217, 217, 0.7);
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
    padding: 15px;
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
    width: 50px;
}
dialog{
    top: 100px;
    left: 20px;
    width: 90%;
    height: 80%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    z-index: 12;

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
    color: var(--color-fg);
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
    background-color: #3d3c3c;
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
    background-color: #3d3c3c;
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
    display: grid;
    grid-template-rows: 3fr 0.8fr;
 
}
div.formdetails{
    grid-area: 1/1/2/1;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    border: 1px solid red;
}
label{
    display: block;
    font-size: 1.4rem;
    color: var(--heading);
    text-transform: uppercase;
}
div.moreDetails{
    border: 1px solid blue;
    display: flex;
    justify-content: space-between;
}
textarea{
    overflow: auto;
    height: 50%;
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
        height: 80%;
    
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
        width: 100px;
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
        left: 500px;
    }
    button.backBtn > img{
        width: 100px;
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
        left: 500px;
        width: 25%;
        height: 30%;
        border: none;
        border-radius: 10px;
        padding: 10px;
        z-index: 12;
    }
    div.dialog-container2,
    div.dialog-container3{
        display: flex;
        justify-content: center;
        width: 100%;
        border: 1px solid red;
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
        width: 55%;
        height: 70%;
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
    form.editForm > input,
    form.addForm > button,
    form.editForm > button{
        width: 50%;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,+FAA+F;AACnG;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,wCAAwC;AAC5C;AACA;IACI;QACI,mBAAmB;QACnB,mBAAmB;IACvB;IACA;QACI,8HAA8H;IAClI;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,0CAA0C;IAC9C;AACJ;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,yCAAyC;AAC7C;AACA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;;;;;;;IAOI,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,iBAAiB;;AAErB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,UAAU;IACV,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,WAAW;;AAEf;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;AACf;AACA;IACI,WAAW;IACX,aAAa;IACb,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,WAAW;;AAEf;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,QAAQ;AACZ;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;;IAEI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,iCAAiC;AACrC;AACA;;IAEI,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;AACA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,eAAe;AACnB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,WAAW;IACX,yBAAyB;IACzB,cAAc;IACd,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,6BAA6B;;AAEjC;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,yBAAyB;AAC7B;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,WAAW;AACf;AACA;;;;IAII,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;AACA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;AACA;;QAEQ,iBAAiB;IACrB;AACJ;IACI,cAAc;AAClB;AACA;;IAEI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,aAAa;;AAEjB;AACA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA,UAAU;AACV;IACI;QACI,UAAU;QACV,UAAU;QACV,UAAU;QACV,WAAW;;IAEf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,UAAU;IACd;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;IACf;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,cAAc;QACd,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,SAAS;IACb;IACA;;QAEI,eAAe;QACf,aAAa;IACjB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,cAAc;IAClB;IACA;QACI,iBAAiB;IACrB;IACA;;QAEI,iBAAiB;IACrB;IACA;;QAEI,SAAS;IACb;AACJ;;AAEA,YAAY;AACZ;IACI;QACI,aAAa;QACb,gCAAgC;QAChC,6BAA6B;QAC7B,SAAS;IACb;IACA;QACI,kBAAkB;QAClB,kBAAkB;QAClB,yBAAyB;IAC7B;IACA;QACI,kBAAkB;QAClB,yBAAyB;QACzB,uBAAuB;IAC3B;IACA;QACI,kBAAkB;QAClB,aAAa;IACjB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,aAAa;QACb,mCAAmC;QACnC,aAAa;QACb,SAAS;IACb;IACA;QACI,eAAe;IACnB;IACA;QACI,aAAa;IACjB;IACA;;QAEI,kBAAkB;QAClB,MAAM;QACN,WAAW;IACf;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;QACV,WAAW;QACX,YAAY;QACZ,mBAAmB;QACnB,aAAa;QACb,WAAW;IACf;IACA;;QAEI,aAAa;QACb,uBAAuB;QACvB,WAAW;QACX,qBAAqB;IACzB;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,6BAA6B;IACjC;IACA;;QAEI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,UAAU;QACV,WAAW;QACX,UAAU;QACV,WAAW;IACf;IACA;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;;QAEI,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,SAAS;IACb;IACA;;QAEI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;;QAEI,eAAe;IACnB;IACA;;QAEI,SAAS;IACb;IACA;;;;QAII,UAAU;IACd;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    --color-fg: #eee;\r\n    --color-bg: #121212;\r\n    --heading: #0464a4;\r\n}\r\n.filter-white{\r\n    filter: invert(100%) sepia(0%) saturate(7435%) hue-rotate(65deg) brightness(105%) contrast(95%);\r\n}\r\n.filter > p{\r\n    color: var(--color-fg);\r\n}\r\ndialog{\r\n    background-color: #272727;\r\n}\r\ndiv.overlay{\r\n    background-color: rgba(29, 25, 25, 0.71);\r\n}\r\n@media (prefers-color-scheme: light){\r\n    :root{\r\n        --color-bg: #cfcdcd;\r\n        --color-fg: #1A1C20;\r\n    }\r\n    .filter-white{\r\n        /* filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%); */\r\n    }\r\n    .filter > p{\r\n        color: var(--color-bg);\r\n    }\r\n    dialog{\r\n        background-color: #343232;\r\n    }\r\n    div.overlay{\r\n        background-color: rgba(233, 217, 217, 0.7);\r\n    }\r\n}\r\nhtml, body{\r\n    height: 100%;\r\n}\r\nhtml{\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nbody{\r\n    min-height: 100vh;\r\n    background-color: var(--color-bg);\r\n    color: var(--color-fg);\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\ndiv.container{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-rows: 0.2fr 3fr 0.3fr;\r\n}\r\nheader{\r\n    grid-area: 1/1/1/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\nheader > h1{\r\n    color: var(--heading);\r\n    font-size: 1.5rem;\r\n}\r\ndiv.menu{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\nbutton.backBtn,\r\nbutton.delbtn,\r\nbutton.closeAdd,\r\nbutton.closeEdit,\r\nbutton.closeBtn,\r\nbutton.menuBtn,\r\nbutton.addprojectbtn{\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.menu > .closeBtn > img,\r\ndiv.menu > .menuBtn > img{\r\n    color: var(--color-fg);\r\n    width: 12%;\r\n}\r\nbutton#close.closeBtn{\r\n    display: none;\r\n    z-index: 11;\r\n}\r\ndiv.main{\r\n    padding-top: 50px;\r\n}\r\ndiv.main-container{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 15px;\r\n    gap: 20px;\r\n}\r\n\r\ndiv.main-heading{\r\n    grid-area: 1/1/1/2;\r\n    padding: 10px;\r\n}\r\ndiv.main-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.7rem;\r\n\r\n}\r\ndiv.main-content{\r\n    grid-area: 2/1/3/2;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.add-taskdiv{\r\n    grid-area: 3/1/4/2;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding: 5px;\r\n}\r\n\r\ndiv.add-taskdiv > button.addTask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\nbutton.backBtn > img{\r\n    width: 50px;\r\n}\r\ndialog{\r\n    top: 100px;\r\n    left: 20px;\r\n    width: 90%;\r\n    height: 80%;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    z-index: 12;\r\n\r\n}\r\ndiv.overlay{\r\n    display: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10;\r\n}\r\ndiv.addbtn{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\ndiv.dailog-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n.filter > p{\r\n    font-size: 1rem;\r\n}\r\n\r\ndiv.filter-div, \r\ndiv.project-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    gap: 5px;\r\n}\r\n\r\n.filter{\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.the-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.filter > img{\r\n    width: 2.8rem;\r\n    padding: 10px;\r\n}\r\ndiv.add-project{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    width: 100%;\r\n\r\n}\r\n\r\ndiv.dialog-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.3rem;\r\n}\r\n.addprojectbtn{\r\n    color: var(--color-fg);\r\n    border: none;\r\n}\r\n.addprojectbtn > h3{\r\n    font-size: 2rem;\r\n}\r\ndiv.projects{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\ndiv.edit-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 2px;\r\n}\r\ndiv.edit-delete *{\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\nform.addForm,\r\nform.editForm{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    height: 2.4rem;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    background-color: #3d3c3c;\r\n    color: var(--color-fg);\r\n    border: 1px solid var(--color-bg);\r\n}\r\nform.addForm > button,\r\nform.editForm > button{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    background-color: #4bb2f9;\r\n    color: var(--color-bg);\r\n    border: none;\r\n}\r\n\r\nbutton.closeAdd,\r\nbutton.closeEdit{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 230px;\r\n}\r\nbutton#closeAdd.closeAdd > img,\r\nbutton#closeEdit.closeEdit > img{\r\n    color: var(--color-fg);\r\n    width: 30%;\r\n}\r\ndiv.content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    gap: 10px;\r\n}\r\ndiv.no-task-div{\r\n    width: 100%;\r\n    padding: 30px;\r\n}\r\ndiv.no-task-div > h4{\r\n    font-size: 1rem;\r\n}\r\nh4.no-task{\r\n    color: #4bb2f9;\r\n    text-align: center;\r\n    font-weight: 200;\r\n}\r\ndiv.task-div{\r\n    display: flex;\r\n    width: 100%;\r\n    background-color: #3d3c3c;\r\n    height: 2.4rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\ndiv.task-div img{\r\n    width: 8%;\r\n}\r\np.thetasktitle{\r\n    font-size: 1.2rem;\r\n}\r\ndiv.right{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\ndiv.dialog-container4{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nform.addTaskForm{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 3fr 0.8fr;\r\n \r\n}\r\ndiv.formdetails{\r\n    grid-area: 1/1/2/1;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    gap: 10px;\r\n    border: 1px solid red;\r\n}\r\nlabel{\r\n    display: block;\r\n    font-size: 1.4rem;\r\n    color: var(--heading);\r\n    text-transform: uppercase;\r\n}\r\ndiv.moreDetails{\r\n    border: 1px solid blue;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\ntextarea{\r\n    overflow: auto;\r\n    height: 50%;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: #474848;\r\n    color: var(--color-fg);\r\n    border: none;\r\n}\r\n.formdetails > input::placeholder,\r\ntextarea::placeholder{\r\n    color: var(--color-fg);\r\n    font-size: 1rem;\r\n}\r\ntextarea,\r\n    input[type=text]{\r\n        font-size: 1.2rem;\r\n    }\r\n.formdetails > input{\r\n    height: 2.8rem;\r\n}\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    height: 2.8rem;\r\n    width: 150px;\r\n    padding: 5px;\r\n    font-size: 1rem;\r\n}\r\n.todo-options{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px\r\n}\r\n\r\ndiv.control{\r\n    grid-area: 2/1/2/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 10px;\r\n    \r\n}\r\ndiv.control > button.addATask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.del-task{\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n/*Tablets*/\r\n@media only screen and (min-width: 541px){\r\n    dialog{\r\n        top: 140px;\r\n        left: 40px;\r\n        width: 90%;\r\n        height: 80%;\r\n    \r\n    }\r\n    header > h1{\r\n        font-size: 2.5rem;\r\n    }\r\n    .filter > p{\r\n        font-size: 1.6rem;\r\n    }\r\n    div.menu > .closeBtn > img,\r\n    div.menu > .menuBtn > img{\r\n        width: 24%;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 500px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 100px;\r\n    }\r\n    .filter > img{\r\n        width: 3.8rem;\r\n    }\r\n    div.task-div img{\r\n        width: 6%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 40px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 2.7rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 2rem;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 2.3rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 4rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 4.4rem;\r\n        padding: 20px;\r\n    }\r\n    .formdetails > input{\r\n        height: 4.8rem;\r\n    }\r\n    textarea{\r\n        height: 40%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 3rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 2rem;\r\n    }\r\n    label{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 15px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 2rem;\r\n        padding: 15px;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 2rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 2rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 2rem;\r\n    }\r\n    div.task-div{\r\n        height: 4.4rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 2.2rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 2.2rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n}\r\n\r\n/* Laptops */\r\n@media only screen and (min-width: 1024px){\r\n    div.container{\r\n        display: grid;\r\n        grid-template-columns: 0.6fr 3fr;\r\n        grid-template-rows: 0.3fr 3fr;\r\n        gap: 20px;\r\n    }\r\n    div.sidebar{\r\n        padding-top: 100px;\r\n        grid-area: 1/1/3/1;\r\n        background-color: #3d3c3c;\r\n    }\r\n    header{\r\n        grid-area: 2/1/1/3;\r\n        background-color: #3d3c3c;\r\n        justify-content: center;\r\n    }\r\n    div.main{\r\n        grid-area: 2/2/3/3;\r\n        display: flex;\r\n    }\r\n    div.main-container{\r\n        grid-area: 3/1/3/2;\r\n        width: 60%;\r\n        height: 90%;\r\n        display: grid;\r\n        grid-template-rows: 0.2fr 3fr 0.4fr;\r\n        padding: 15px;\r\n        gap: 20px;\r\n    }\r\n    .filter > p{\r\n        font-size: 1rem;\r\n    }\r\n    div.menu {\r\n        display: none;\r\n    }\r\n    button.closeAdd,\r\n    button.closeEdit{\r\n        position: absolute;\r\n        top: 0;\r\n        left: 500px;\r\n    }\r\n    button.backBtn > img{\r\n        width: 100px;\r\n    }\r\n    .filter > img{\r\n        width: 2.5rem;\r\n    }\r\n    div.task-div img{\r\n        width: 3%;\r\n    }\r\n    div.edit-delete *{\r\n        width: 18px;\r\n    }\r\n    div.main-heading > h3{\r\n        font-size: 1.5rem;\r\n    }\r\n    div.add-taskdiv > button.addTask{\r\n        font-size: 1.1rem;\r\n    }\r\n    dialog{\r\n        top: 100px;\r\n        left: 500px;\r\n        width: 25%;\r\n        height: 30%;\r\n        border: none;\r\n        border-radius: 10px;\r\n        padding: 10px;\r\n        z-index: 12;\r\n    }\r\n    div.dialog-container2,\r\n    div.dialog-container3{\r\n        display: flex;\r\n        justify-content: center;\r\n        width: 100%;\r\n        border: 1px solid red;\r\n    }\r\n    div.dialog-heading > h3{\r\n        font-size: 1rem;\r\n    }\r\n    button.addprojectbtn > h3{\r\n        font-size: 1.6rem;\r\n    }\r\n    form.addTaskForm{\r\n        grid-template-rows: 1fr 0.4fr;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input{\r\n        height: 2rem;\r\n        padding: 15px;\r\n    }\r\n    .add-task-dialog{\r\n        top: 100px;\r\n        left: 350px;\r\n        width: 55%;\r\n        height: 70%;\r\n    }\r\n    .formdetails > input{\r\n        height: 2rem;\r\n    }\r\n    textarea{\r\n        height: 20%;\r\n    }\r\n    select, \r\n    div.todo-options > input[type=date]{\r\n        height: 2rem;\r\n        width: 300px;\r\n        padding: 5px;\r\n        font-size: 1rem;\r\n    }\r\n    label{\r\n        font-size: 1rem;\r\n    }\r\n    div.formdetails{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        font-size: 1.3rem;\r\n    }\r\n    div.control > button.addATask{\r\n        font-size: 1rem;\r\n    }\r\n    .formdetails > input::placeholder,\r\n    textarea::placeholder{\r\n        font-size: 1rem;\r\n    }\r\n    div.no-task-div > h4{\r\n        font-size: 1rem;\r\n    }\r\n    div.task-div{\r\n        height: 2rem;\r\n    }\r\n    p.thetasktitle{\r\n        font-size: 1rem;\r\n    }\r\n    textarea,\r\n    input[type=text]{\r\n        font-size: 1rem;\r\n    }\r\n    div.filter-div, \r\n    div.project-div{\r\n        gap: 10px;\r\n    }\r\n    form.addForm > input,\r\n    form.editForm > input,\r\n    form.addForm > button,\r\n    form.editForm > button{\r\n        width: 50%;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ writeToMain)
/* harmony export */ });
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg");


function writeToMain(todos, node){
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




const projects = ["default"];

// Sort by Projects
function projectSort(){
    
    const allTodos = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.render)();

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
            (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(projects, tags);
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
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   editTodo: () => (/* binding */ editTodo),
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ "./src/class.js");


let allTodos = [];
function todosCreator() {
    

    function createTodo(title, note, dueDate, project, checked){
        const todos = new _class_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, note, dueDate, project, checked);
        addTodos(todos)
        return todos;
    }
    
    function addTodos(todos){
        allTodos.unshift(todos);
    }

    function deleteTodo(title){
        const index = allTodos.findIndex(theTodo => theTodo.title === title);
        allTodos.shift(index);
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
        return allTodos;
    }

    return {deleteTodo, createTodo, editTodo, render}
}

const createTodo = todosCreator().createTodo;
const deleteTodo = todosCreator().deleteTodo;
const editTodo = todosCreator().editTodo;
const render = todosCreator().render;



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








const title1 = "Call Mum";
const note1 = "Very Important";
const dueDate1 = "2024-01-13";
const project1 = "work";
const checked = true;


const todos1 = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title1, note1, dueDate1, project1, checked);

const title2 = "Read on Dom";
const note2 = "Pheww!";
const dueDate2 = "2024-03-21";

const todos2 = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title2, note2, dueDate2);

const title3 = "Alex";
const note3 = "My life";
const dueDate3 = "2024-01-19";
const project3 = "personal"

const todos3 = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title3, note3, dueDate3, project3);


(0,_project_js__WEBPACK_IMPORTED_MODULE_3__.addProject)("work");
(0,_project_js__WEBPACK_IMPORTED_MODULE_3__.addProject)("personal");
(0,_project_js__WEBPACK_IMPORTED_MODULE_3__.addProject)("fun");

//Dome Cache
const menuBtn = document.querySelector('.menuBtn');
const close = document.querySelector('#close');
const dialog = document.querySelector('.sibarDailog');
const filterTodos = document.querySelectorAll('.todos');
const tags = document.querySelector('.the-projects');
const editDialog = document.querySelector('.dailog-Edit');
const textInputEdit = document.querySelector('.edit-project');
const editButton = document.querySelector('.editBtn');
const editForm = document.querySelector('.editForm');
const addProjectBtn = document.querySelector('.addprojectbtn');
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

(function(){
    if(window.innerWidth >= 1024){
        sidebar.style.display = "flex";
    }
})();




(function(){
    const thisprojects = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
    (0,_create_js__WEBPACK_IMPORTED_MODULE_5__.removeAllChildNodes)(content);
    (0,_main_js__WEBPACK_IMPORTED_MODULE_4__["default"])(thisprojects, content);
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
    (0,_main_js__WEBPACK_IMPORTED_MODULE_4__["default"])(project, content)
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
        const delTask = 
        e.target.parentElement.parentElement.setAttribute('style', "background-color: transparent");
    }
    else{
        e.target.nextElementSibling.style.textDecoration = "none";
        e.target.parentElement.nextElementSibling.style.display = 'none';
        e.target.parentElement.parentElement.setAttribute('style', "background-color: #3d3c3c");
        
    }
}

//deletes a task
function deleteTheTask(e){
    const title = e.target.parentElement.firstElementChild.lastElementChild.textContent;
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(title);
    content.removeChild(e.target.parentElement);
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
    if(window.innerWidth < 1024)
        overlay.style.display = 'block';
    newProjectInput.focus();
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
}

//close the add task panel
function closeAddTask(){
    addTaskDialog.close();
    if(window.innerWidth < 1024)
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
    if(window.innerWidth < 1024)
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
        if(window.innerWidth < 1024)
            overlay.style.display = 'block';
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
    if(window.innerWidth < 1024)
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
    if(window.innerWidth < 1024)
        overlay.style.display = 'none';
});

addTask.addEventListener('click', (e) => {
    addTaskDialog.showModal();
    if(window.innerWidth < 1024)
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
        const todos = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(theTitle, theNote, theDueDate, theProject);
        localStorage.setItem("Todos", JSON.stringify({title: theTitle, note: theNote, dueDate: theDueDate, theProject, }));
        const thisprojects = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
        (0,_create_js__WEBPACK_IMPORTED_MODULE_5__.removeAllChildNodes)(content);
        (0,_main_js__WEBPACK_IMPORTED_MODULE_4__["default"])(thisprojects, content);
        addTaskForm.reset();
        mainContent.style.display = 'grid';
        addTaskDialog.close();
        check = document.querySelectorAll('.check');
        addListerner(check, "change", thechecker)
        delTask = document.querySelectorAll('.del-task')
        addListerner(delTask, "click", deleteTheTask)
        
        
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFJQUFxSTtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssUUFBUSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakIsSUFBSSwyREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFVO0FBQ2hDLHNEQUFzRCxrRUFBa0U7QUFDeEgsNkJBQTZCLGlEQUFNO0FBQ25DLFFBQVEsK0RBQW1CO0FBQzNCLFFBQVEsb0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksK0RBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc29ydC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lTW9udGgubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RoaXNNb250aC5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RoaXNXZWVrLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVG9kYXkubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG46cm9vdHtcclxuICAgIC0tY29sb3ItZmc6ICNlZWU7XHJcbiAgICAtLWNvbG9yLWJnOiAjMTIxMjEyO1xyXG4gICAgLS1oZWFkaW5nOiAjMDQ2NGE0O1xyXG59XHJcbi5maWx0ZXItd2hpdGV7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzNSUpIGh1ZS1yb3RhdGUoNjVkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoOTUlKTtcclxufVxyXG4uZmlsdGVyID4gcHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbn1cclxuZGlhbG9ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcclxufVxyXG5kaXYub3ZlcmxheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDI1LCAyNSwgMC43MSk7XHJcbn1cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpe1xyXG4gICAgOnJvb3R7XHJcbiAgICAgICAgLS1jb2xvci1iZzogI2NmY2RjZDtcclxuICAgICAgICAtLWNvbG9yLWZnOiAjMUExQzIwO1xyXG4gICAgfVxyXG4gICAgLmZpbHRlci13aGl0ZXtcclxuICAgICAgICAvKiBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDMxZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7ICovXHJcbiAgICB9XHJcbiAgICAuZmlsdGVyID4gcHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgfVxyXG4gICAgZGlhbG9ne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDMyMzI7XHJcbiAgICB9XHJcbiAgICBkaXYub3ZlcmxheXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMjE3LCAyMTcsIDAuNyk7XHJcbiAgICB9XHJcbn1cclxuaHRtbCwgYm9keXtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5odG1se1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuYm9keXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmRpdi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjNmcjtcclxufVxyXG5oZWFkZXJ7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8xLzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmhlYWRlciA+IGgxe1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuZGl2Lm1lbnV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuYnV0dG9uLmJhY2tCdG4sXHJcbmJ1dHRvbi5kZWxidG4sXHJcbmJ1dHRvbi5jbG9zZUFkZCxcclxuYnV0dG9uLmNsb3NlRWRpdCxcclxuYnV0dG9uLmNsb3NlQnRuLFxyXG5idXR0b24ubWVudUJ0bixcclxuYnV0dG9uLmFkZHByb2plY3RidG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXHJcbmRpdi5tZW51ID4gLm1lbnVCdG4gPiBpbWd7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgd2lkdGg6IDEyJTtcclxufVxyXG5idXR0b24jY2xvc2UuY2xvc2VCdG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgei1pbmRleDogMTE7XHJcbn1cclxuZGl2Lm1haW57XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5kaXYubWFpbi1jb250YWluZXJ7XHJcbiAgICBncmlkLWFyZWE6IDMvMS8zLzI7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAzZnIgMC40ZnI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG5kaXYubWFpbi1oZWFkaW5ne1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5kaXYubWFpbi1oZWFkaW5nID4gaDN7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuXHJcbn1cclxuZGl2Lm1haW4tY29udGVudHtcclxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5kaXYuYWRkLXRhc2tkaXZ7XHJcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmRpdi5hZGQtdGFza2RpdiA+IGJ1dHRvbi5hZGRUYXNre1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbmJ1dHRvbi5iYWNrQnRuID4gaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuZGlhbG9ne1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHotaW5kZXg6IDEyO1xyXG5cclxufVxyXG5kaXYub3ZlcmxheXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbmRpdi5hZGRidG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbmRpdi5kYWlsb2ctY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpbHRlciA+IHB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmRpdi5maWx0ZXItZGl2LCBcclxuZGl2LnByb2plY3QtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4uZmlsdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRoZS1wcm9qZWN0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5maWx0ZXIgPiBpbWd7XHJcbiAgICB3aWR0aDogMi44cmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5kaXYuYWRkLXByb2plY3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG5kaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcbi5hZGRwcm9qZWN0YnRue1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYWRkcHJvamVjdGJ0biA+IGgze1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbmRpdi5wcm9qZWN0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZGl2LmVkaXQtZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGdhcDogMnB4O1xyXG59XHJcbmRpdi5lZGl0LWRlbGV0ZSAqe1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuZm9ybS5hZGRGb3JtLFxyXG5mb3JtLmVkaXRGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbmZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJnKTtcclxufVxyXG5mb3JtLmFkZEZvcm0gPiBidXR0b24sXHJcbmZvcm0uZWRpdEZvcm0gPiBidXR0b257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIyZjk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5idXR0b24uY2xvc2VBZGQsXHJcbmJ1dHRvbi5jbG9zZUVkaXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAyMzBweDtcclxufVxyXG5idXR0b24jY2xvc2VBZGQuY2xvc2VBZGQgPiBpbWcsXHJcbmJ1dHRvbiNjbG9zZUVkaXQuY2xvc2VFZGl0ID4gaW1ne1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuZGl2LmNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuZGl2Lm5vLXRhc2stZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbmRpdi5uby10YXNrLWRpdiA+IGg0e1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbmg0Lm5vLXRhc2t7XHJcbiAgICBjb2xvcjogIzRiYjJmOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuZGl2LnRhc2stZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi50YXNrLWRpdiBpbWd7XHJcbiAgICB3aWR0aDogOCU7XHJcbn1cclxucC50aGV0YXNrdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5kaXYucmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5kaXYuZGlhbG9nLWNvbnRhaW5lcjR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5mb3JtLmFkZFRhc2tGb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMC44ZnI7XHJcbiBcclxufVxyXG5kaXYuZm9ybWRldGFpbHN7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8yLzE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5sYWJlbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbmRpdi5tb3JlRGV0YWlsc3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG50ZXh0YXJlYSxcclxuLmZvcm1kZXRhaWxzID4gaW5wdXQsXHJcbnNlbGVjdCwgXHJcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ODQ4O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbnRleHRhcmVhOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxudGV4dGFyZWEsXHJcbiAgICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4uZm9ybWRldGFpbHMgPiBpbnB1dHtcclxuICAgIGhlaWdodDogMi44cmVtO1xyXG59XHJcbnNlbGVjdCwgXHJcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnRvZG8tb3B0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4XHJcbn1cclxuXHJcbmRpdi5jb250cm9se1xyXG4gICAgZ3JpZC1hcmVhOiAyLzEvMi8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG5kaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZGVsLXRhc2t7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qVGFibGV0cyovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQxcHgpe1xyXG4gICAgZGlhbG9ne1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoZWFkZXIgPiBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIC5maWx0ZXIgPiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXHJcbiAgICBkaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyNCU7XHJcbiAgICB9XHJcbiAgICBidXR0b24uY2xvc2VBZGQsXHJcbiAgICBidXR0b24uY2xvc2VFZGl0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24uYmFja0J0biA+IGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyID4gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzLjhyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudGFzay1kaXYgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA2JTtcclxuICAgIH1cclxuICAgIGRpdi5lZGl0LWRlbGV0ZSAqe1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgZGl2Lm1haW4taGVhZGluZyA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi43cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkVGFza0Zvcm17XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC40ZnI7XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZEZvcm0gPiBpbnB1dCxcclxuICAgIGZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcclxuICAgICAgICBoZWlnaHQ6IDQuNHJlbTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiA0LjhyZW07XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYXtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgIH1cclxuICAgIHNlbGVjdCwgXHJcbiAgICBkaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIGRpdi5mb3JtZGV0YWlsc3tcclxuICAgICAgICBnYXA6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgZGl2LmNvbnRyb2wgPiBidXR0b24uYWRkQVRhc2t7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXQ6OnBsYWNlaG9sZGVyLFxyXG4gICAgdGV4dGFyZWE6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIGRpdi5uby10YXNrLWRpdiA+IGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIGRpdi50YXNrLWRpdntcclxuICAgICAgICBoZWlnaHQ6IDQuNHJlbTtcclxuICAgIH1cclxuICAgIHAudGhldGFza3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEsXHJcbiAgICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmZpbHRlci1kaXYsIFxyXG4gICAgZGl2LnByb2plY3QtZGl2e1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLyogTGFwdG9wcyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XHJcbiAgICBkaXYuY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAzZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAzZnI7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2LnNpZGViYXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgIGdyaWQtYXJlYTogMS8xLzMvMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xyXG4gICAgfVxyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIGdyaWQtYXJlYTogMi8xLzEvMztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1haW57XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICBkaXYubWFpbi1jb250YWluZXJ7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgIH1cclxuICAgIC5maWx0ZXIgPiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIGRpdi5tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmNsb3NlQWRkLFxyXG4gICAgYnV0dG9uLmNsb3NlRWRpdHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmJhY2tCdG4gPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpbHRlciA+IGltZ3tcclxuICAgICAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2stZGl2IGltZ3tcclxuICAgICAgICB3aWR0aDogMyU7XHJcbiAgICB9XHJcbiAgICBkaXYuZWRpdC1kZWxldGUgKntcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgIH1cclxuICAgIGRpdi5tYWluLWhlYWRpbmcgPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIGRpdi5hZGQtdGFza2RpdiA+IGJ1dHRvbi5hZGRUYXNre1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgZGlhbG9ne1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgbGVmdDogNTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEyO1xyXG4gICAgfVxyXG4gICAgZGl2LmRpYWxvZy1jb250YWluZXIyLFxyXG4gICAgZGl2LmRpYWxvZy1jb250YWluZXIze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgfVxyXG4gICAgZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmFkZHByb2plY3RidG4gPiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkVGFza0Zvcm17XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC40ZnI7XHJcbiAgICB9XHJcbiAgICBmb3JtLmFkZEZvcm0gPiBpbnB1dCxcclxuICAgIGZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIC5hZGQtdGFzay1kaWFsb2d7XHJcbiAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICBsZWZ0OiAzNTBweDtcclxuICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgfVxyXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWF7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QsIFxyXG4gICAgZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LmZvcm1kZXRhaWxze1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgIH1cclxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcclxuICAgIGZvcm0uZWRpdEZvcm0gPiBidXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZGl2LnRhc2stZGl2e1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxuICAgIHAudGhldGFza3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhLFxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBkaXYuZmlsdGVyLWRpdiwgXHJcbiAgICBkaXYucHJvamVjdC1kaXZ7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybS5hZGRGb3JtID4gaW5wdXQsXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXQsXHJcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXHJcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLCtGQUErRjtBQUNuRztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSw4SEFBOEg7SUFDbEk7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ks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QUNYLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTs7UUFFSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTs7UUFFSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksZUFBZTtJQUNuQjtJQUNBOztRQUVJLFNBQVM7SUFDYjtJQUNBOzs7O1FBSUksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1jb2xvci1mZzogI2VlZTtcXHJcXG4gICAgLS1jb2xvci1iZzogIzEyMTIxMjtcXHJcXG4gICAgLS1oZWFkaW5nOiAjMDQ2NGE0O1xcclxcbn1cXHJcXG4uZmlsdGVyLXdoaXRle1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzNSUpIGh1ZS1yb3RhdGUoNjVkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoOTUlKTtcXHJcXG59XFxyXFxuLmZpbHRlciA+IHB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxufVxcclxcbmRpYWxvZ3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXHJcXG59XFxyXFxuZGl2Lm92ZXJsYXl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDI1LCAyNSwgMC43MSk7XFxyXFxufVxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KXtcXHJcXG4gICAgOnJvb3R7XFxyXFxuICAgICAgICAtLWNvbG9yLWJnOiAjY2ZjZGNkO1xcclxcbiAgICAgICAgLS1jb2xvci1mZzogIzFBMUMyMDtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyLXdoaXRle1xcclxcbiAgICAgICAgLyogZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgwJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgzMWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMSUpOyAqL1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXIgPiBwe1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgfVxcclxcbiAgICBkaWFsb2d7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzMjMyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5vdmVybGF5e1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDIxNywgMjE3LCAwLjcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5kaXYuY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjNmcjtcXHJcXG59XFxyXFxuaGVhZGVye1xcclxcbiAgICBncmlkLWFyZWE6IDEvMS8xLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbmhlYWRlciA+IGgxe1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5kaXYubWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuYnV0dG9uLmJhY2tCdG4sXFxyXFxuYnV0dG9uLmRlbGJ0bixcXHJcXG5idXR0b24uY2xvc2VBZGQsXFxyXFxuYnV0dG9uLmNsb3NlRWRpdCxcXHJcXG5idXR0b24uY2xvc2VCdG4sXFxyXFxuYnV0dG9uLm1lbnVCdG4sXFxyXFxuYnV0dG9uLmFkZHByb2plY3RidG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXFxyXFxuZGl2Lm1lbnUgPiAubWVudUJ0biA+IGltZ3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgd2lkdGg6IDEyJTtcXHJcXG59XFxyXFxuYnV0dG9uI2Nsb3NlLmNsb3NlQnRue1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB6LWluZGV4OiAxMTtcXHJcXG59XFxyXFxuZGl2Lm1haW57XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5kaXYubWFpbi1jb250YWluZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTogMy8xLzMvMjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5tYWluLWhlYWRpbmd7XFxyXFxuICAgIGdyaWQtYXJlYTogMS8xLzEvMjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuZGl2Lm1haW4taGVhZGluZyA+IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcblxcclxcbn1cXHJcXG5kaXYubWFpbi1jb250ZW50e1xcclxcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5kaXYuYWRkLXRhc2tkaXZ7XFxyXFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbmJ1dHRvbi5iYWNrQnRuID4gaW1ne1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuZGlhbG9ne1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMjtcXHJcXG5cXHJcXG59XFxyXFxuZGl2Lm92ZXJsYXl7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcbmRpdi5hZGRidG57XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5kaXYuZGFpbG9nLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZpbHRlciA+IHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZpbHRlci1kaXYsIFxcclxcbmRpdi5wcm9qZWN0LWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50aGUtcHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZmlsdGVyID4gaW1ne1xcclxcbiAgICB3aWR0aDogMi44cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYuYWRkLXByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5hZGRwcm9qZWN0YnRuID4gaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuZGl2LnByb2plY3Rze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZWRpdC1kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDJweDtcXHJcXG59XFxyXFxuZGl2LmVkaXQtZGVsZXRlICp7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSxcXHJcXG5mb3JtLmVkaXRGb3Jte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbmZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJnKTtcXHJcXG59XFxyXFxuZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxcclxcbmZvcm0uZWRpdEZvcm0gPiBidXR0b257XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMmY5O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5jbG9zZUFkZCxcXHJcXG5idXR0b24uY2xvc2VFZGl0e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMjMwcHg7XFxyXFxufVxcclxcbmJ1dHRvbiNjbG9zZUFkZC5jbG9zZUFkZCA+IGltZyxcXHJcXG5idXR0b24jY2xvc2VFZGl0LmNsb3NlRWRpdCA+IGltZ3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuZGl2LmNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuZGl2Lm5vLXRhc2stZGl2e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuZGl2Lm5vLXRhc2stZGl2ID4gaDR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuaDQubm8tdGFza3tcXHJcXG4gICAgY29sb3I6ICM0YmIyZjk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuZGl2LnRhc2stZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcXHJcXG4gICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuZGl2LnRhc2stZGl2IGltZ3tcXHJcXG4gICAgd2lkdGg6IDglO1xcclxcbn1cXHJcXG5wLnRoZXRhc2t0aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcbmRpdi5yaWdodHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYuZGlhbG9nLWNvbnRhaW5lcjR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbmZvcm0uYWRkVGFza0Zvcm17XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuOGZyO1xcclxcbiBcXHJcXG59XFxyXFxuZGl2LmZvcm1kZXRhaWxze1xcclxcbiAgICBncmlkLWFyZWE6IDEvMS8yLzE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxubGFiZWx7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5kaXYubW9yZURldGFpbHN7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxudGV4dGFyZWF7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG59XFxyXFxudGV4dGFyZWEsXFxyXFxuLmZvcm1kZXRhaWxzID4gaW5wdXQsXFxyXFxuc2VsZWN0LCBcXHJcXG5kaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDg0ODtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uZm9ybWRldGFpbHMgPiBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbnRleHRhcmVhLFxcclxcbiAgICBpbnB1dFt0eXBlPXRleHRde1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG4uZm9ybWRldGFpbHMgPiBpbnB1dHtcXHJcXG4gICAgaGVpZ2h0OiAyLjhyZW07XFxyXFxufVxcclxcbnNlbGVjdCwgXFxyXFxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XFxyXFxuICAgIGhlaWdodDogMi44cmVtO1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4udG9kby1vcHRpb25ze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHhcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNvbnRyb2x7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8xLzIvMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5kaXYuY29udHJvbCA+IGJ1dHRvbi5hZGRBVGFza3tcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5kZWwtdGFza3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4vKlRhYmxldHMqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQxcHgpe1xcclxcbiAgICBkaWFsb2d7XFxyXFxuICAgICAgICB0b3A6IDE0MHB4O1xcclxcbiAgICAgICAgbGVmdDogNDBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG4gICAgaGVhZGVyID4gaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyID4gcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxcclxcbiAgICBkaXYubWVudSA+IC5tZW51QnRuID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDI0JTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uY2xvc2VBZGQsXFxyXFxuICAgIGJ1dHRvbi5jbG9zZUVkaXR7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiA1MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uYmFja0J0biA+IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDMuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYudGFzay1kaXYgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDYlO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5lZGl0LWRlbGV0ZSAqe1xcclxcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1haW4taGVhZGluZyA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkVGFza0Zvcm17XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0LjRyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0LjhyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWF7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwJTtcXHJcXG4gICAgfVxcclxcbiAgICBzZWxlY3QsIFxcclxcbiAgICBkaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBsYWJlbHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5mb3JtZGV0YWlsc3tcXHJcXG4gICAgICAgIGdhcDogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBmb3JtLmFkZEZvcm0gPiBidXR0b24sXFxyXFxuICAgIGZvcm0uZWRpdEZvcm0gPiBidXR0b257XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5jb250cm9sID4gYnV0dG9uLmFkZEFUYXNre1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtZGV0YWlscyA+IGlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG4gICAgdGV4dGFyZWE6OnBsYWNlaG9sZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5uby10YXNrLWRpdiA+IGg0e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdntcXHJcXG4gICAgICAgIGhlaWdodDogNC40cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHAudGhldGFza3RpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWEsXFxyXFxuICAgIGlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZmlsdGVyLWRpdiwgXFxyXFxuICAgIGRpdi5wcm9qZWN0LWRpdntcXHJcXG4gICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXB0b3BzICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgICBkaXYuY29udGFpbmVye1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC42ZnIgM2ZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAzZnI7XFxyXFxuICAgICAgICBnYXA6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnNpZGViYXJ7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEvMS8zLzE7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xcclxcbiAgICB9XFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMi8xLzEvMztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWFpbntcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMi8yLzMvMztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm1haW4tY29udGFpbmVye1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvMy8yO1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgM2ZyIDAuNGZyO1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyID4gcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWVudSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbi5jbG9zZUFkZCxcXHJcXG4gICAgYnV0dG9uLmNsb3NlRWRpdHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDUwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbi5iYWNrQnRuID4gaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXIgPiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi50YXNrLWRpdiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMyU7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmVkaXQtZGVsZXRlICp7XFxyXFxuICAgICAgICB3aWR0aDogMThweDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYubWFpbi1oZWFkaW5nID4gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuYWRkLXRhc2tkaXYgPiBidXR0b24uYWRkVGFza3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpYWxvZ3tcXHJcXG4gICAgICAgIHRvcDogMTAwcHg7XFxyXFxuICAgICAgICBsZWZ0OiA1MDBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwJTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTI7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmRpYWxvZy1jb250YWluZXIyLFxcclxcbiAgICBkaXYuZGlhbG9nLWNvbnRhaW5lcjN7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRUYXNrRm9ybXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNGZyO1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hZGQtdGFzay1kaWFsb2d7XFxyXFxuICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICAgICAgbGVmdDogMzUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNTUlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA3MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXR7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWF7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgfVxcclxcbiAgICBzZWxlY3QsIFxcclxcbiAgICBkaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBsYWJlbHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYuZm9ybWRldGFpbHN7XFxyXFxuICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LmNvbnRyb2wgPiBidXR0b24uYWRkQVRhc2t7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm1kZXRhaWxzID4gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2Lm5vLXRhc2stZGl2ID4gaDR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2LnRhc2stZGl2e1xcclxcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHAudGhldGFza3RpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHRleHRhcmVhLFxcclxcbiAgICBpbnB1dFt0eXBlPXRleHRde1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdi5maWx0ZXItZGl2LCBcXHJcXG4gICAgZGl2LnByb2plY3QtZGl2e1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbiAgICBmb3JtLmVkaXRGb3JtID4gaW5wdXQsXFxyXFxuICAgIGZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG4gICAgZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9zIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBub3RlLCBkdWVEYXRlLCAgcHJvamVjdCwgY2hlY2tlZCl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICBpZihwcm9qZWN0ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIGlmKGNoZWNrZWQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICBcclxuICAgIH07XHJcbn07IiwiaW1wb3J0IEZvbGRlciBmcm9tICcuL2ltZy9mb2xkZXIuc3ZnJztcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi9pbWcvZWRpdC5zdmcnO1xyXG5pbXBvcnQgRGVsZXRlIGZyb20gJy4vaW1nL2RlbGV0ZS5zdmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0cywgdGFncyl7XHJcblxyXG4gICAgaWYodGFncy5maXJzdEVsZW1lbnRDaGlsZCl7XHJcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyh0YWdzKTtcclxuICAgIH1cclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdEZpcnN0TGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGVwcm9qZWN0Rmlyc3RMYXllci5jbGFzc05hbWUgPSAndGhlLXByb2plY3RzJztcclxuXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdFNlY29uZExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhlcHJvamVjdFNlY29uZExheWVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0cyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHRoZXByb2plY3RUaGlyZExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhlcHJvamVjdFRoaXJkTGF5ZXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVyJywgJ3Byb2plY3QtZmlsdGVyJylcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWFnZUZvbGRlci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItaWNvbicsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGltYWdlRm9sZGVyLnNyYyA9IEZvbGRlcjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGFncyc7XHJcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0VGhpcmRMYXllci5hcHBlbmRDaGlsZChpbWFnZUZvbGRlcik7XHJcbiAgICAgICAgdGhlcHJvamVjdFRoaXJkTGF5ZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuYXBwZW5kQ2hpbGQodGhlcHJvamVjdFRoaXJkTGF5ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udHJvbERpdi5jbGFzc05hbWUgPSAnZWRpdC1kZWxldGUnO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBlZGl0SW1hZ2UuY2xhc3NMaXN0LmFkZCgnZWRpdCcsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGVkaXRJbWFnZS5zcmMgPSBFZGl0O1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGRlbGV0ZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGRlbGV0ZUltYWdlLnNyYyA9IERlbGV0ZTtcclxuXHJcbiAgICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChlZGl0SW1hZ2UpO1xyXG4gICAgICAgIGNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpO1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuYXBwZW5kQ2hpbGQoY29udHJvbERpdik7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RGaXJzdExheWVyLmFwcGVuZENoaWxkKHRoZXByb2plY3RTZWNvbmRMYXllcilcclxuICAgICAgICB0YWdzLmFwcGVuZENoaWxkKHRoZXByb2plY3RGaXJzdExheWVyKVxyXG5cclxuICAgIH0pO1xyXG4gICAgfVxyXG5cclxuLy8gcmVtb3ZlcyAgYWxsIGNoaWxkIGVsZW1lbnRzIG9uIHRoZSBzY3JlZW5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpe1xyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVtb3ZlQWxsQ2hpbGROb2RlcywgY3JlYXRlUHJvamVjdH0iLCJpbXBvcnQgRGVsIGZyb20gJy4vaW1nL2RlbGV0ZS5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JpdGVUb01haW4odG9kb3MsIG5vZGUpe1xyXG4gICAgaWYodG9kb3MubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICduby10YXNrLWRpdic7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSAnTm8gdGFzayBmb3VuZCc7XHJcbiAgICAgICAgaGVhZGluZy5jbGFzc05hbWUgPSAnbm8tdGFzayc7XHJcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICd0YXNrLWRpdic7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRhc2tIb2xkZXIuY2xhc3NOYW1lID0gXCJyaWdodFwiXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgY2hlY2tlci50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICAgICAgY2hlY2tlci5jbGFzc05hbWUgPSBcImNoZWNrXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB0YXNrLmNsYXNzTmFtZSA9IFwidGhldGFza3RpdGxlXCI7XHJcbiAgICAgICAgICAgIHRhc2suaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICAgICAgICAgICAgdGFza0hvbGRlci5hcHBlbmRDaGlsZChjaGVja2VyKTtcclxuICAgICAgICAgICAgdGFza0hvbGRlci5hcHBlbmRDaGlsZCh0YXNrKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLXRhc2snLCAnZmlsdGVyLXdoaXRlJylcclxuICAgICAgICAgICAgZGVsQnV0dG9uLnNyYyA9IERlbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0hvbGRlcik7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vdG9kb3MuanNcIjtcclxuaW1wb3J0IHtjcmVhdGVQcm9qZWN0fSBmcm9tICcuL2NyZWF0ZS5qcyc7XHJcblxyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXCJkZWZhdWx0XCJdO1xyXG5cclxuLy8gU29ydCBieSBQcm9qZWN0c1xyXG5mdW5jdGlvbiBwcm9qZWN0U29ydCgpe1xyXG4gICAgXHJcbiAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGlmKCFwcm9qZWN0TmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHByb2plY3RzLnVuc2hpZnQocHJvamVjdE5hbWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdChvbGRQcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGlmKCFuZXdQcm9qZWN0TmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldID09IG9sZFByb2plY3ROYW1lKXtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldID0gbmV3UHJvamVjdE5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0c1tpXSA9PSBwcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyh0YWdzKXtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0cywgdGFncyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KCl7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgYWRkUHJvamVjdCwgcmVuZGVyUHJvamVjdHN9XHJcbn1cclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSBwcm9qZWN0U29ydCgpLmFkZFByb2plY3Q7XHJcbmNvbnN0IHJlbmRlclByb2plY3RzID0gcHJvamVjdFNvcnQoKS5yZW5kZXJQcm9qZWN0cztcclxuY29uc3QgZWRpdFByb2plY3QgPSBwcm9qZWN0U29ydCgpLmVkaXRQcm9qZWN0O1xyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gcHJvamVjdFNvcnQoKS5kZWxldGVQcm9qZWN0O1xyXG5jb25zdCBnZXRQcm9qZWN0ID0gcHJvamVjdFNvcnQoKS5nZXRQcm9qZWN0O1xyXG5cclxuZXhwb3J0IHtnZXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgYWRkUHJvamVjdCwgcmVuZGVyUHJvamVjdHN9IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vdG9kb3MuanNcIjtcclxuaW1wb3J0IHtpc1RvZGF5LCBpc1RoaXNXZWVrLCBpc1RoaXNNb250aH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5cclxuLy8gc29ydCBieSBEYXRlXHJcblxyXG5mdW5jdGlvbiBteVNvcnQoKXtcclxuXHJcbiAgICAvL3RvZGF5XHJcbiAgICBmdW5jdGlvbiB0b2Rvc1RvZGF5KCl7XHJcbiAgICAgICAgY29uc3QgdG9kYXlTb3J0ID0gW107XHJcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSByZW5kZXIoKTtcclxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZihpc1RvZGF5KHRvZG8uZHVlRGF0ZSkpXHJcbiAgICAgICAgICAgICAgICB0b2RheVNvcnQucHVzaCh0b2RvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG9kYXlTb3J0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNvcnQgYnkgd2Vla1xyXG4gICAgZnVuY3Rpb24gdG9kb3NGb3JBV2Vlaygpe1xyXG4gICAgICAgIGNvbnN0IHRoaXNXZWVrID0gW107XHJcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSByZW5kZXIoKTtcclxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZihpc1RoaXNXZWVrKHRvZG8uZHVlRGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpc1dlZWsucHVzaCh0b2RvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzV2VlaztcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNvcnQgYnkgbW9udGhcclxuICAgIGZ1bmN0aW9uIHRvZG9zRm9yTW9udGgoKXtcclxuICAgICAgICBjb25zdCB0aGlzTW9udGggPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVGhpc01vbnRoKHRvZG8uZHVlRGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpc01vbnRoLnB1c2godG9kbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpc01vbnRoOyAgIFxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2tzIGZvciBzcGVjaWZpYyBwcm9qZWN0IGluIHRoZSB0b2RvcyBhcnJheVxyXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JQcm9qZWN0KHRoZVByb2plY3ROYW1lKXtcclxuICAgICAgICBjb25zdCB0b2Rvc0J5UHJvamVjdCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYodG9kby5wcm9qZWN0ID09IHRoZVByb2plY3ROYW1lKVxyXG4gICAgICAgICAgICAgICAgdG9kb3NCeVByb2plY3QudW5zaGlmdCh0b2RvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG9kb3NCeVByb2plY3RcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NoZWNrRm9yUHJvamVjdCwgdG9kb3NUb2RheSwgdG9kb3NGb3JBV2VlaywgdG9kb3NGb3JNb250aH1cclxufVxyXG5cclxuY29uc3QgdG9kb3NGb3JBV2VlayA9IG15U29ydCgpLnRvZG9zRm9yQVdlZWs7XHJcbmNvbnN0IHRvZG9zRm9yTW9udGggPSBteVNvcnQoKS50b2Rvc0Zvck1vbnRoO1xyXG5jb25zdCB0b2Rvc1RvZGF5ID0gbXlTb3J0KCkudG9kb3NUb2RheTtcclxuY29uc3QgY2hlY2tGb3JQcm9qZWN0ID0gbXlTb3J0KCkuY2hlY2tGb3JQcm9qZWN0O1xyXG5leHBvcnQge2NoZWNrRm9yUHJvamVjdCwgdG9kb3NUb2RheSwgdG9kb3NGb3JBV2VlaywgdG9kb3NGb3JNb250aH0iLCJpbXBvcnQgVG9kb3MgZnJvbSBcIi4vY2xhc3MuanNcIlxyXG5cclxubGV0IGFsbFRvZG9zID0gW107XHJcbmZ1bmN0aW9uIHRvZG9zQ3JlYXRvcigpIHtcclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIG5vdGUsIGR1ZURhdGUsIHByb2plY3QsIGNoZWNrZWQpe1xyXG4gICAgICAgIGNvbnN0IHRvZG9zID0gbmV3IFRvZG9zKHRpdGxlLCBub3RlLCBkdWVEYXRlLCBwcm9qZWN0LCBjaGVja2VkKTtcclxuICAgICAgICBhZGRUb2Rvcyh0b2RvcylcclxuICAgICAgICByZXR1cm4gdG9kb3M7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGFkZFRvZG9zKHRvZG9zKXtcclxuICAgICAgICBhbGxUb2Rvcy51bnNoaWZ0KHRvZG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvKHRpdGxlKXtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFsbFRvZG9zLmZpbmRJbmRleCh0aGVUb2RvID0+IHRoZVRvZG8udGl0bGUgPT09IHRpdGxlKTtcclxuICAgICAgICBhbGxUb2Rvcy5zaGlmdChpbmRleCk7XHJcbiAgICB9IFxyXG4gICAgZnVuY3Rpb24gZWRpdFRvZG8odG9kb3MsIG5ld1RpdGxlLCBuZXdOb3RlLCBuZXdEdWVEYXRlLCBuZXdQcm9qZWN0KXtcclxuICAgICAgICBpZihuZXdUaXRsZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRvZG9zLnRpdGxlID0gbmV3VGl0bGVcclxuICAgICAgICBpZihuZXdOb3RlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3Mubm90ZSA9IG5ld05vdGVcclxuICAgICAgICBpZihuZXdEdWVEYXRlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3MuZHVlRGF0ZSA9IG5ld0R1ZURhdGVcclxuICAgICAgICBpZihuZXdQcm9qZWN0ICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3MucHJvamVjdCA9IG5ld1Byb2plY3Q7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gYWxsVG9kb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtkZWxldGVUb2RvLCBjcmVhdGVUb2RvLCBlZGl0VG9kbywgcmVuZGVyfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUb2RvID0gdG9kb3NDcmVhdG9yKCkuY3JlYXRlVG9kbztcclxuY29uc3QgZGVsZXRlVG9kbyA9IHRvZG9zQ3JlYXRvcigpLmRlbGV0ZVRvZG87XHJcbmNvbnN0IGVkaXRUb2RvID0gdG9kb3NDcmVhdG9yKCkuZWRpdFRvZG87XHJcbmNvbnN0IHJlbmRlciA9IHRvZG9zQ3JlYXRvcigpLnJlbmRlcjtcclxuXHJcbmV4cG9ydCB7Y3JlYXRlVG9kbywgZGVsZXRlVG9kbywgcmVuZGVyLCBlZGl0VG9kb30iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNCwgOCwgMjUpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNSBpbiB0aGUgc2FtZSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE1LCA4LCAyNSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVNb250aChkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIChcbiAgICBfZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gX2RhdGVSaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgX2RhdGVMZWZ0LmdldE1vbnRoKCkgPT09IF9kYXRlUmlnaHQuZ2V0TW9udGgoKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZU1vbnRoO1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzU2FtZVdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVMZWZ0LCBvcHRpb25zKTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkYXRlUmlnaHQsIG9wdGlvbnMpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mV2VlayA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZXZWVrO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZVdlZWs7XG4iLCJpbXBvcnQgeyBpc1NhbWVNb250aCB9IGZyb20gXCIuL2lzU2FtZU1vbnRoLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc01vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGlzIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAxNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMTUpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc01vbnRoKGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZU1vbnRoKERhdGUubm93KCksIGRhdGUpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc01vbnRoO1xuIiwiaW1wb3J0IHsgaXNTYW1lV2VlayB9IGZyb20gXCIuL2lzU2FtZVdlZWsubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1RoaXNXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUaGlzV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc1dlZWs7XG4iLCJpbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge2NyZWF0ZVRvZG8sIGVkaXRUb2RvLCBkZWxldGVUb2RvLCByZW5kZXJ9ZnJvbSBcIi4vdG9kb3MuanNcIjtcclxuaW1wb3J0IHtjaGVja0ZvclByb2plY3QsIHRvZG9zVG9kYXksIHRvZG9zRm9yQVdlZWssIHRvZG9zRm9yTW9udGh9IGZyb20gXCIuL3NvcnQuanNcIjtcclxuaW1wb3J0IHtnZXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgYWRkUHJvamVjdCwgcmVuZGVyUHJvamVjdHN9IGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCB3cml0ZVRvTWFpbiBmcm9tICcuL21haW4uanMnO1xyXG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSAnLi9jcmVhdGUuanMnO1xyXG5cclxuXHJcbmNvbnN0IHRpdGxlMSA9IFwiQ2FsbCBNdW1cIjtcclxuY29uc3Qgbm90ZTEgPSBcIlZlcnkgSW1wb3J0YW50XCI7XHJcbmNvbnN0IGR1ZURhdGUxID0gXCIyMDI0LTAxLTEzXCI7XHJcbmNvbnN0IHByb2plY3QxID0gXCJ3b3JrXCI7XHJcbmNvbnN0IGNoZWNrZWQgPSB0cnVlO1xyXG5cclxuXHJcbmNvbnN0IHRvZG9zMSA9IGNyZWF0ZVRvZG8odGl0bGUxLCBub3RlMSwgZHVlRGF0ZTEsIHByb2plY3QxLCBjaGVja2VkKTtcclxuXHJcbmNvbnN0IHRpdGxlMiA9IFwiUmVhZCBvbiBEb21cIjtcclxuY29uc3Qgbm90ZTIgPSBcIlBoZXd3IVwiO1xyXG5jb25zdCBkdWVEYXRlMiA9IFwiMjAyNC0wMy0yMVwiO1xyXG5cclxuY29uc3QgdG9kb3MyID0gY3JlYXRlVG9kbyh0aXRsZTIsIG5vdGUyLCBkdWVEYXRlMik7XHJcblxyXG5jb25zdCB0aXRsZTMgPSBcIkFsZXhcIjtcclxuY29uc3Qgbm90ZTMgPSBcIk15IGxpZmVcIjtcclxuY29uc3QgZHVlRGF0ZTMgPSBcIjIwMjQtMDEtMTlcIjtcclxuY29uc3QgcHJvamVjdDMgPSBcInBlcnNvbmFsXCJcclxuXHJcbmNvbnN0IHRvZG9zMyA9IGNyZWF0ZVRvZG8odGl0bGUzLCBub3RlMywgZHVlRGF0ZTMsIHByb2plY3QzKTtcclxuXHJcblxyXG5hZGRQcm9qZWN0KFwid29ya1wiKTtcclxuYWRkUHJvamVjdChcInBlcnNvbmFsXCIpO1xyXG5hZGRQcm9qZWN0KFwiZnVuXCIpO1xyXG5cclxuLy9Eb21lIENhY2hlXHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ0bicpO1xyXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xyXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2liYXJEYWlsb2cnKTtcclxuY29uc3QgZmlsdGVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb3MnKTtcclxuY29uc3QgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGUtcHJvamVjdHMnKTtcclxuY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlsb2ctRWRpdCcpO1xyXG5jb25zdCB0ZXh0SW5wdXRFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdCcpO1xyXG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRCdG4nKTtcclxuY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdEZvcm0nKTtcclxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRwcm9qZWN0YnRuJyk7XHJcbmNvbnN0IGFkZFByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdGRpYWxvZycpO1xyXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdHRleHQnKTtcclxuY29uc3QgYWRkTmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2dBZGRQcm9qZWN0QnRuJylcclxuY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRGb3JtJyk7XHJcbmNvbnN0IGNsb3NlQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQWRkJyk7XHJcbmNvbnN0IGNsb3NlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUVkaXQnKVxyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XHJcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tGb3JtJyk7XHJcbmNvbnN0IGFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZGlhbG9nJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2t0aXRsZScpO1xyXG5jb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tub3RlJyk7XHJcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xyXG5sZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlUHJvamVjdHMnKTtcclxuY29uc3QgYWRkQVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQVRhc2snKTtcclxubGV0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja0J0bicpO1xyXG5sZXQgZGVsVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtdGFzaycpO1xyXG5sZXQgYXZhaWxhYmxlUHJvamVjdHMgPSBnZXRQcm9qZWN0KCk7XHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbihmdW5jdGlvbigpe1xyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCl7XHJcbiAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG4oZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IHRoaXNwcm9qZWN0cyA9IHJlbmRlcigpO1xyXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcclxuICAgIHdyaXRlVG9NYWluKHRoaXNwcm9qZWN0cywgY29udGVudCk7XHJcbiAgICByZW5kZXJQcm9qZWN0cyh0YWdzKVxyXG4gICAgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcclxuICAgIGFkZExpc3Rlcm5lcihjaGVjaywgXCJjaGFuZ2VcIiwgdGhlY2hlY2tlcilcclxuICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgYWRkTGlzdGVybmVyKGRlbFRhc2ssIFwiY2xpY2tcIiwgZGVsZXRlVGhlVGFzaylcclxufSkoKTtcclxuXHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lcnNcclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpYWxvZy5zaG93KCk7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn0pO1xyXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoKXtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuZmlsdGVyVG9kb3MuZm9yRWFjaCh0b2RvRmlsdGVyID0+IHtcclxuICAgIFxyXG4gICAgICAgIHRvZG9GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnQWxsJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHNvcnRUb01haW4odGhpc3Byb2plY3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnVG9kYXknKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5UHJvamVjdHMgPSB0b2Rvc1RvZGF5KCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKHRvZGF5UHJvamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodG9kb0ZpbHRlci5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09ICdXZWVrJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWVrUHJvamVjdHMgPSB0b2Rvc0ZvckFXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKHdlZWtQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoUHJvamVjdHMgPSB0b2Rvc0Zvck1vbnRoKCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKG1vbnRoUHJvamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc29ydFRvTWFpbihwcm9qZWN0KXtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICB3cml0ZVRvTWFpbihwcm9qZWN0LCBjb250ZW50KVxyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcclxuICAgIGFkZExpc3Rlcm5lcihjaGVjaywgXCJjaGFuZ2VcIiwgdGhlY2hlY2tlcilcclxuICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgYWRkTGlzdGVybmVyKGRlbFRhc2ssIFwiY2xpY2tcIiwgZGVsZXRlVGhlVGFzaylcclxufVxyXG5cclxuLy9BZGRzIEV2ZW50TGlzdGVybmVycyB0byByZWR1Y2UgcmVwZWF0IGNvZGVcclxuZnVuY3Rpb24gYWRkTGlzdGVybmVyKG5vZGVzLCB0aGVFdmVudCwgdGhlRnVuY3Rpb24pe1xyXG4gICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodGhlRXZlbnQsIHRoZUZ1bmN0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDaGVja3Mgd2hlbiBhIHVzZXIgZGltcyBhIHByb2plY3QgYXMgY29tcGxldGVkXHJcbmZ1bmN0aW9uIHRoZWNoZWNrZXIoZSl7XHJcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKXtcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgY29uc3QgZGVsVGFzayA9IFxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFwiKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzY1wiKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLy9kZWxldGVzIGEgdGFza1xyXG5mdW5jdGlvbiBkZWxldGVUaGVUYXNrKGUpe1xyXG4gICAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBkZWxldGVUb2RvKHRpdGxlKTtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgIHNvcnRUb01haW4odGhpc3Byb2plY3RzKTtcclxufVxyXG5cclxuLy9FdmVudCBMaXN0ZW5lcnNcclxudGFncy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0YWdzRXZlbnQpO1xyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Byb2plY3RBZGRNb2RhbCk7XHJcbmFkZE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcclxuYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWRkVGFzayk7XHJcblxyXG5cclxuZnVuY3Rpb24gdGFnc0V2ZW50KCl7XHJcbiAgICBjb25zdCBlZGl0QW5kRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZGVsZXRlJyk7XHJcblxyXG4gICAgaWYoZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID09ICdub25lJylcclxuICAgICAgICBlZGl0QW5kRGVsZXRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG4vLyBPcGVucyB0aGUgYWRkUHJvamVjdCBNb2RhbFxyXG5mdW5jdGlvbiBzaG93UHJvamVjdEFkZE1vZGFsKCl7XHJcbiAgICBhZGRQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMDI0KVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBuZXdQcm9qZWN0SW5wdXQuZm9jdXMoKTtcclxufVxyXG4vL0FkZHMgbmV3IFByb2plY3RcclxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWVcclxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICBhdmFpbGFibGVQcm9qZWN0cyA9IGdldFByb2plY3QoKTtcclxuICAgIHJlbmRlclByb2plY3RzKHRhZ3MpXHJcbiAgICBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsZXRlQnRuLCAnY2xpY2snLCBkZWwpXHJcbiAgICBcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlZGl0QnRuLCBcImNsaWNrXCIsIGVkaXRNb2RhbCk7XHJcbiAgICBcclxuICAgIGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1maWx0ZXInKTtcclxuICAgIGFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzayk7XHJcblxyXG4gICAgYWRkRm9ybS5yZXNldCgpO1xyXG4gICAgYWRkUHJvamVjdERpYWxvZy5jbG9zZSgpO1xyXG59XHJcblxyXG4vL2Nsb3NlIHRoZSBhZGQgdGFzayBwYW5lbFxyXG5mdW5jdGlvbiBjbG9zZUFkZFRhc2soKXtcclxuICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNClcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG59XHJcblxyXG5sZXQgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0Jyk7XHJcbmxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XHJcbmxldCBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG5sZXQgY3VycmVudFByb2plY3Q7XHJcblxyXG5cclxuYWRkTGlzdGVybmVyKGVkaXRCdG4sIFwiY2xpY2tcIiwgZWRpdE1vZGFsKTtcclxuYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWZpbHRlcicpO1xyXG5hZGRMaXN0ZXJuZXIoYWxsVGFncywgXCJjbGlja1wiLCBzaG93UHJvamVjdFRhc2spO1xyXG5cclxuLy8gU29ydHMgdGFza3MgYnkgcHJvamVjdHNcclxuZnVuY3Rpb24gc2hvd1Byb2plY3RUYXNrKGUpe1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCBieVByb2plY3QgPSBjaGVja0ZvclByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgc29ydFRvTWFpbihieVByb2plY3QpO1xyXG5cclxufVxyXG5mdW5jdGlvbiBlZGl0TW9kYWwoZSl7XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgZWRpdERpYWxvZy5zaG93TW9kYWwoKVxyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMDI0KVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB0ZXh0SW5wdXRFZGl0LmZvY3VzKCk7XHJcbiAgICB0ZXh0SW5wdXRFZGl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50UHJvamVjdCk7ICAgXHJcbn1cclxuXHJcbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGhlUHJvamVjdCk7XHJcblxyXG4vL0VkaXRzIHRoZSBwcm9qZWN0XHJcbmZ1bmN0aW9uIGVkaXRUaGVQcm9qZWN0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhZ3MnKTtcclxuICAgIGNvbnN0IG5ld05hbWUgPSBlZGl0UHJvamVjdChjdXJyZW50UHJvamVjdCwgdGV4dElucHV0RWRpdC52YWx1ZSk7XHJcbiAgICBhbGxUYWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICBpZih0YWcudGV4dENvbnRlbnQgPT0gY3VycmVudFByb2plY3Qpe1xyXG4gICAgICAgICAgICB0YWcudGV4dENvbnRlbnQgPSBuZXdOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgICAgIGVkaXRGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgZWRpdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNClcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAvLyBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG59XHJcblxyXG5cclxuZGVsZXRlQnRuLmZvckVhY2goYnRuID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbCk7XHJcbn0pO1xyXG5cclxuLy8gRGVsZXRlcyBhIHByb2plY3RcclxuZnVuY3Rpb24gZGVsKGUpe1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHJlbmRlclByb2plY3RzKHRhZ3MpO1xyXG4gICAgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhZ3MnKTtcclxuICAgIGFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzaylcclxuXHJcbiAgICBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsZXRlQnRuLCBcImNsaWNrXCIsIGRlbClcclxuXHJcbiAgICBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdCcpO1xyXG4gICAgYWRkTGlzdGVybmVyKGVkaXRCdG4sIFwiY2xpY2tcIiwgZWRpdE1vZGFsKVxyXG59XHJcblxyXG5jbG9zZUFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBhZGRQcm9qZWN0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNClcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbn0pO1xyXG5cclxuY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGVkaXREaWFsb2cuY2xvc2UoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMDI0KVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufSk7XHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGFkZFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGFkZFRhc2tQcm9qZWN0KCk7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcbmFkZEFUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZVByb2plY3RzJyk7XHJcbiAgICBjb25zdCB0aGVUaXRsZSA9IHRpdGxlLnZhbHVlO1xyXG4gICAgY29uc3QgdGhlTm90ZSAgPSBub3RlLnZhbHVlO1xyXG4gICAgY29uc3QgdGhlRHVlRGF0ZSA9IGR1ZURhdGUudmFsdWU7XHJcbiAgICBjb25zdCB0aGVQcm9qZWN0ID0gdGFza1Byb2plY3QudmFsdWU7XHJcbiAgICBpZih0aGVUaXRsZSAmJiB0aGVEdWVEYXRlKXtcclxuICAgICAgICBjb25zdCB0b2RvcyA9IGNyZWF0ZVRvZG8odGhlVGl0bGUsIHRoZU5vdGUsIHRoZUR1ZURhdGUsIHRoZVByb2plY3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkoe3RpdGxlOiB0aGVUaXRsZSwgbm90ZTogdGhlTm90ZSwgZHVlRGF0ZTogdGhlRHVlRGF0ZSwgdGhlUHJvamVjdCwgfSkpO1xyXG4gICAgICAgIGNvbnN0IHRoaXNwcm9qZWN0cyA9IHJlbmRlcigpO1xyXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICAgICAgd3JpdGVUb01haW4odGhpc3Byb2plY3RzLCBjb250ZW50KTtcclxuICAgICAgICBhZGRUYXNrRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbiAgICAgICAgYWRkTGlzdGVybmVyKGNoZWNrLCBcImNoYW5nZVwiLCB0aGVjaGVja2VyKVxyXG4gICAgICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgICAgIGFkZExpc3Rlcm5lcihkZWxUYXNrLCBcImNsaWNrXCIsIGRlbGV0ZVRoZVRhc2spXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFza1Byb2plY3QoKXtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXModGFza1Byb2plY3QpO1xyXG4gICAgYXZhaWxhYmxlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRhc2tQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==