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
@media (prefers-color-scheme: light){
    :root{
        --color-bg: #cfcdcd;
        --color-fg: #1A1C20;
    }
    .filter-white{
        filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%);
    }
    .filter > p{
        color: var(--color-bg);
    }
    dialog{
        background-color: #343232;
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
}
div.container{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 0.2fr 0.2fr 3fr 0.3fr;
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
}
dialog.add-task-dialog{
    width: 90%;
    left: 20px;
    height: 60%;
    top: 120px;
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
button.addprojectbtn{
    color: var(--color-fg);
}
button.addprojectbtn > h3{
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
    gap: 10px;
}
div.formdetails{
    grid-area: 1/1/2/1;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
}
label{
    display: block;
    font-size: 1rem;
    color: var(--heading);
}
div.moreDetails{
    display: flex;
    justify-content: space-between;
}
textarea{
    overflow: auto;
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
textarea::placeholder{
    color: var(--color-fg);
}
.formdetails > input{
    height: 2.5rem;
}
select, 
div.todo-options > input[type=date]{
    height: 2.5rem;
    width: 150px;
}
.todo-options{
    display: flex;
    flex-direction: column;
    gap: 10px;
    
}

div.control{
    grid-area: 2/1/2/2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
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
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,+FAA+F;AACnG;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI;QACI,mBAAmB;QACnB,mBAAmB;IACvB;IACA;QACI,wHAAwH;IAC5H;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,yBAAyB;IAC7B;AACJ;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,yCAAyC;AAC7C;AACA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,sBAAsB;IACtB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,yCAAyC;AAC7C;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;;;;;;;IAOI,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,iBAAiB;;AAErB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,UAAU;IACV,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,UAAU;IACV,UAAU;IACV,WAAW;IACX,UAAU;AACd;AACA;IACI,WAAW;IACX,aAAa;IACb,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,WAAW;;AAEf;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,QAAQ;AACZ;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;;IAEI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,iCAAiC;AACrC;AACA;;IAEI,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;AACA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,WAAW;IACX,yBAAyB;IACzB,cAAc;IACd,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;AACA;IACI,cAAc;IACd,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,cAAc;AAClB;AACA;;;;IAII,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,cAAc;AAClB;AACA;;IAEI,cAAc;IACd,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;AAEb;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;AAEvB;AACA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,aAAa;AACjB","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    --color-fg: #eee;\r\n    --color-bg: #121212;\r\n    --heading: #0464a4;\r\n}\r\n.filter-white{\r\n    filter: invert(100%) sepia(0%) saturate(7435%) hue-rotate(65deg) brightness(105%) contrast(95%);\r\n}\r\n.filter > p{\r\n    color: var(--color-fg);\r\n}\r\ndialog{\r\n    background-color: #272727;\r\n}\r\n@media (prefers-color-scheme: light){\r\n    :root{\r\n        --color-bg: #cfcdcd;\r\n        --color-fg: #1A1C20;\r\n    }\r\n    .filter-white{\r\n        filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%);\r\n    }\r\n    .filter > p{\r\n        color: var(--color-bg);\r\n    }\r\n    dialog{\r\n        background-color: #343232;\r\n    }\r\n}\r\nhtml, body{\r\n    height: 100%;\r\n}\r\nhtml{\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nbody{\r\n    min-height: 100vh;\r\n    background-color: var(--color-bg);\r\n    color: var(--color-fg);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\ndiv.container{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-rows: 0.2fr 0.2fr 3fr 0.3fr;\r\n}\r\nheader{\r\n    grid-area: 1/1/1/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\nheader > h1{\r\n    color: var(--heading);\r\n    font-size: 1.5rem;\r\n}\r\ndiv.menu{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\nbutton.backBtn,\r\nbutton.delbtn,\r\nbutton.closeAdd,\r\nbutton.closeEdit,\r\nbutton.closeBtn,\r\nbutton.menuBtn,\r\nbutton.addprojectbtn{\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.menu > .closeBtn > img,\r\ndiv.menu > .menuBtn > img{\r\n    color: var(--color-fg);\r\n    width: 12%;\r\n}\r\nbutton#close.closeBtn{\r\n    display: none;\r\n}\r\ndiv.main-container{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-rows: 0.2fr 3fr 0.4fr;\r\n    padding: 15px;\r\n    gap: 20px;\r\n}\r\n\r\ndiv.main-heading{\r\n    grid-area: 1/1/1/2;\r\n    padding: 10px;\r\n}\r\ndiv.main-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.7rem;\r\n\r\n}\r\ndiv.main-content{\r\n    grid-area: 2/1/3/2;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.add-taskdiv{\r\n    grid-area: 3/1/4/2;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding: 5px;\r\n}\r\n\r\ndiv.add-taskdiv > button.addTask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\nbutton.backBtn > img{\r\n    width: 50px;\r\n}\r\ndialog{\r\n    top: 100px;\r\n    left: 20px;\r\n    width: 90%;\r\n    height: 80%;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n}\r\ndialog.add-task-dialog{\r\n    width: 90%;\r\n    left: 20px;\r\n    height: 60%;\r\n    top: 120px;\r\n}\r\ndiv.addbtn{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\ndiv.dailog-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n.filter > p{\r\n    font-size: 1rem;\r\n}\r\n\r\ndiv.filter-div, \r\ndiv.project-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.filter{\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.the-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.filter > img{\r\n    width: 2.8rem;\r\n    padding: 10px;\r\n}\r\ndiv.add-project{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    width: 100%;\r\n\r\n}\r\n\r\ndiv.dialog-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.3rem;\r\n}\r\nbutton.addprojectbtn{\r\n    color: var(--color-fg);\r\n}\r\nbutton.addprojectbtn > h3{\r\n    font-size: 2rem;\r\n}\r\ndiv.projects{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\ndiv.edit-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 2px;\r\n}\r\ndiv.edit-delete *{\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\nform.addForm,\r\nform.editForm{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    height: 2.4rem;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    background-color: #3d3c3c;\r\n    color: var(--color-fg);\r\n    border: 1px solid var(--color-bg);\r\n}\r\nform.addForm > button,\r\nform.editForm > button{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    background-color: #4bb2f9;\r\n    color: var(--color-bg);\r\n}\r\n\r\nbutton.closeAdd,\r\nbutton.closeEdit{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 230px;\r\n}\r\nbutton#closeAdd.closeAdd > img,\r\nbutton#closeEdit.closeEdit > img{\r\n    color: var(--color-fg);\r\n    width: 30%;\r\n}\r\ndiv.content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    gap: 10px;\r\n}\r\ndiv.no-task-div{\r\n    width: 100%;\r\n    padding: 30px;\r\n}\r\nh4.no-task{\r\n    color: #4bb2f9;\r\n    text-align: center;\r\n    font-weight: 200;\r\n}\r\ndiv.task-div{\r\n    display: flex;\r\n    width: 100%;\r\n    background-color: #3d3c3c;\r\n    height: 2.4rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\ndiv.task-div img{\r\n    width: 8%;\r\n}\r\np.thetasktitle{\r\n    font-size: 1.2rem;\r\n}\r\ndiv.right{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\ndiv.dialog-container4{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nform.addTaskForm{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 3fr 0.8fr;   \r\n    gap: 10px;\r\n}\r\ndiv.formdetails{\r\n    grid-area: 1/1/2/1;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    gap: 10px;\r\n}\r\nlabel{\r\n    display: block;\r\n    font-size: 1rem;\r\n    color: var(--heading);\r\n}\r\ndiv.moreDetails{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\ntextarea{\r\n    overflow: auto;\r\n}\r\ntextarea,\r\n.formdetails > input,\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: #474848;\r\n    color: var(--color-fg);\r\n    border: none;\r\n}\r\ntextarea::placeholder{\r\n    color: var(--color-fg);\r\n}\r\n.formdetails > input{\r\n    height: 2.5rem;\r\n}\r\nselect, \r\ndiv.todo-options > input[type=date]{\r\n    height: 2.5rem;\r\n    width: 150px;\r\n}\r\n.todo-options{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    \r\n}\r\n\r\ndiv.control{\r\n    grid-area: 2/1/2/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    \r\n}\r\ndiv.control > button.addATask{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    background-color: var(--heading);\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.del-task{\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n"],"sourceRoot":""}]);
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

(function(){
    const thisprojects = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)();
    localStorage.clear();
    console.log(localStorage.length);
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
    menuBtn.style.display = "none";
    mainContent.style.display = 'none';
    close.style.display = "flex";
});
close.addEventListener('click', closeMenu);

function closeMenu(){
    dialog.close();
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
    newProjectInput.focus();
}
//Adds new Project
function addNewProject(){
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
    textInputEdit.focus();
    textInputEdit.setAttribute('value', currentProject);   
}

editButton.addEventListener('click', editTheProject);

//Edits the project
function editTheProject(){
    allTags = document.querySelectorAll('.project-tags');
    const newName = (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.editProject)(currentProject, textInputEdit.value);
    allTags.forEach(tag => {
        if(tag.textContent == currentProject){
            tag.textContent = newName;
        }
    });
        editForm.reset();
        editDialog.close();
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
});

addTask.addEventListener('click', (e) => {
    addTaskDialog.showModal();
    addTaskProject();
    mainContent.style.display = 'none';
});

addATaskBtn.addEventListener('click', (e) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQixJQUFJLDJEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFVO0FBQ2hDLHNEQUFzRCxrRUFBa0U7QUFDeEgsNkJBQTZCLGlEQUFNO0FBQ25DLFFBQVEsK0RBQW1CO0FBQzNCLFFBQVEsb0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZU1vbnRoLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZVdlZWsubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUaGlzTW9udGgubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUaGlzV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuOnJvb3R7XHJcbiAgICAtLWNvbG9yLWZnOiAjZWVlO1xyXG4gICAgLS1jb2xvci1iZzogIzEyMTIxMjtcclxuICAgIC0taGVhZGluZzogIzA0NjRhNDtcclxufVxyXG4uZmlsdGVyLXdoaXRle1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MzUlKSBodWUtcm90YXRlKDY1ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDk1JSk7XHJcbn1cclxuLmZpbHRlciA+IHB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG59XHJcbmRpYWxvZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbn1cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpe1xyXG4gICAgOnJvb3R7XHJcbiAgICAgICAgLS1jb2xvci1iZzogI2NmY2RjZDtcclxuICAgICAgICAtLWNvbG9yLWZnOiAjMUExQzIwO1xyXG4gICAgfVxyXG4gICAgLmZpbHRlci13aGl0ZXtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDMxZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyID4gcHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgfVxyXG4gICAgZGlhbG9ne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDMyMzI7XHJcbiAgICB9XHJcbn1cclxuaHRtbCwgYm9keXtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5odG1se1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuYm9keXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmRpdi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDAuMmZyIDNmciAwLjNmcjtcclxufVxyXG5oZWFkZXJ7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8xLzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmhlYWRlciA+IGgxe1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuZGl2Lm1lbnV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuYnV0dG9uLmJhY2tCdG4sXHJcbmJ1dHRvbi5kZWxidG4sXHJcbmJ1dHRvbi5jbG9zZUFkZCxcclxuYnV0dG9uLmNsb3NlRWRpdCxcclxuYnV0dG9uLmNsb3NlQnRuLFxyXG5idXR0b24ubWVudUJ0bixcclxuYnV0dG9uLmFkZHByb2plY3RidG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXHJcbmRpdi5tZW51ID4gLm1lbnVCdG4gPiBpbWd7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgd2lkdGg6IDEyJTtcclxufVxyXG5idXR0b24jY2xvc2UuY2xvc2VCdG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmRpdi5tYWluLWNvbnRhaW5lcntcclxuICAgIGdyaWQtYXJlYTogMy8xLzMvMjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbmRpdi5tYWluLWhlYWRpbmd7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8xLzI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5tYWluLWhlYWRpbmcgPiBoM3tcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG5cclxufVxyXG5kaXYubWFpbi1jb250ZW50e1xyXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmRpdi5hZGQtdGFza2RpdntcclxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYnV0dG9uLmJhY2tCdG4gPiBpbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5kaWFsb2d7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpYWxvZy5hZGQtdGFzay1kaWFsb2d7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgdG9wOiAxMjBweDtcclxufVxyXG5kaXYuYWRkYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5kaXYuZGFpbG9nLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5maWx0ZXIgPiBwe1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5kaXYuZmlsdGVyLWRpdiwgXHJcbmRpdi5wcm9qZWN0LWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWx0ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGhlLXByb2plY3Rze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpbHRlciA+IGltZ3tcclxuICAgIHdpZHRoOiAyLjhyZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5hZGQtcHJvamVjdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbmRpdi5kaWFsb2ctaGVhZGluZyA+IGgze1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuYnV0dG9uLmFkZHByb2plY3RidG57XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG59XHJcbmJ1dHRvbi5hZGRwcm9qZWN0YnRuID4gaDN7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuZGl2LnByb2plY3Rze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5kaXYuZWRpdC1kZWxldGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZ2FwOiAycHg7XHJcbn1cclxuZGl2LmVkaXQtZGVsZXRlICp7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5mb3JtLmFkZEZvcm0sXHJcbmZvcm0uZWRpdEZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcclxuZm9ybS5lZGl0Rm9ybSA+IGlucHV0e1xyXG4gICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmcpO1xyXG59XHJcbmZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcclxuZm9ybS5lZGl0Rm9ybSA+IGJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjJmOTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbn1cclxuXHJcbmJ1dHRvbi5jbG9zZUFkZCxcclxuYnV0dG9uLmNsb3NlRWRpdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDIzMHB4O1xyXG59XHJcbmJ1dHRvbiNjbG9zZUFkZC5jbG9zZUFkZCA+IGltZyxcclxuYnV0dG9uI2Nsb3NlRWRpdC5jbG9zZUVkaXQgPiBpbWd7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5kaXYuY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5kaXYubm8tdGFzay1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuaDQubm8tdGFza3tcclxuICAgIGNvbG9yOiAjNGJiMmY5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5kaXYudGFzay1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xyXG4gICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LnRhc2stZGl2IGltZ3tcclxuICAgIHdpZHRoOiA4JTtcclxufVxyXG5wLnRoZXRhc2t0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbmRpdi5yaWdodHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcbmRpdi5kaWFsb2ctY29udGFpbmVyNHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmZvcm0uYWRkVGFza0Zvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAwLjhmcjsgICBcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5kaXYuZm9ybWRldGFpbHN7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8yLzE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5sYWJlbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG59XHJcbmRpdi5tb3JlRGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxudGV4dGFyZWF7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG50ZXh0YXJlYSxcclxuLmZvcm1kZXRhaWxzID4gaW5wdXQsXHJcbnNlbGVjdCwgXHJcbmRpdi50b2RvLW9wdGlvbnMgPiBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ODQ4O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG59XHJcbi5mb3JtZGV0YWlscyA+IGlucHV0e1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbn1cclxuc2VsZWN0LCBcclxuZGl2LnRvZG8tb3B0aW9ucyA+IGlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG4udG9kby1vcHRpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuZGl2LmNvbnRyb2x7XHJcbiAgICBncmlkLWFyZWE6IDIvMS8yLzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbmRpdi5jb250cm9sID4gYnV0dG9uLmFkZEFUYXNre1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5kZWwtdGFza3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwrRkFBK0Y7QUFDbkc7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHdIQUF3SDtJQUM1SDtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUNBOzs7Ozs7O0lBT0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixRQUFRO0FBQ1o7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQztBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztBQUNmO0FBQ0E7O0lBRUksc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7OztJQUlJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTOztBQUViOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tY29sb3ItZmc6ICNlZWU7XFxyXFxuICAgIC0tY29sb3ItYmc6ICMxMjEyMTI7XFxyXFxuICAgIC0taGVhZGluZzogIzA0NjRhNDtcXHJcXG59XFxyXFxuLmZpbHRlci13aGl0ZXtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MzUlKSBodWUtcm90YXRlKDY1ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDk1JSk7XFxyXFxufVxcclxcbi5maWx0ZXIgPiBwe1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbn1cXHJcXG5kaWFsb2d7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxyXFxufVxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KXtcXHJcXG4gICAgOnJvb3R7XFxyXFxuICAgICAgICAtLWNvbG9yLWJnOiAjY2ZjZGNkO1xcclxcbiAgICAgICAgLS1jb2xvci1mZzogIzFBMUMyMDtcXHJcXG4gICAgfVxcclxcbiAgICAuZmlsdGVyLXdoaXRle1xcclxcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgwJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgzMWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMSUpO1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXIgPiBwe1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgfVxcclxcbiAgICBkaWFsb2d7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzMjMyO1xcclxcbiAgICB9XFxyXFxufVxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuZGl2LmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjJmciAzZnIgMC4zZnI7XFxyXFxufVxcclxcbmhlYWRlcntcXHJcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5oZWFkZXIgPiBoMXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuZGl2Lm1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcbmJ1dHRvbi5iYWNrQnRuLFxcclxcbmJ1dHRvbi5kZWxidG4sXFxyXFxuYnV0dG9uLmNsb3NlQWRkLFxcclxcbmJ1dHRvbi5jbG9zZUVkaXQsXFxyXFxuYnV0dG9uLmNsb3NlQnRuLFxcclxcbmJ1dHRvbi5tZW51QnRuLFxcclxcbmJ1dHRvbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxcclxcbmRpdi5tZW51ID4gLm1lbnVCdG4gPiBpbWd7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIHdpZHRoOiAxMiU7XFxyXFxufVxcclxcbmJ1dHRvbiNjbG9zZS5jbG9zZUJ0bntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuZGl2Lm1haW4tY29udGFpbmVye1xcclxcbiAgICBncmlkLWFyZWE6IDMvMS8zLzI7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjRmcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYubWFpbi1oZWFkaW5ne1xcclxcbiAgICBncmlkLWFyZWE6IDEvMS8xLzI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbmRpdi5tYWluLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG5cXHJcXG59XFxyXFxuZGl2Lm1haW4tY29udGVudHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuZGl2LmFkZC10YXNrZGl2e1xcclxcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmFkZC10YXNrZGl2ID4gYnV0dG9uLmFkZFRhc2t7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5idXR0b24uYmFja0J0biA+IGltZ3tcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcbmRpYWxvZ3tcXHJcXG4gICAgdG9wOiAxMDBweDtcXHJcXG4gICAgbGVmdDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuZGlhbG9nLmFkZC10YXNrLWRpYWxvZ3tcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbGVmdDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIHRvcDogMTIwcHg7XFxyXFxufVxcclxcbmRpdi5hZGRidG57XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5kaXYuZGFpbG9nLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZpbHRlciA+IHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZpbHRlci1kaXYsIFxcclxcbmRpdi5wcm9qZWN0LWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnRoZS1wcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5maWx0ZXIgPiBpbWd7XFxyXFxuICAgIHdpZHRoOiAyLjhyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbmRpdi5hZGQtcHJvamVjdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5kaXYuZGlhbG9nLWhlYWRpbmcgPiBoM3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuYnV0dG9uLmFkZHByb2plY3RidG57XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxufVxcclxcbmJ1dHRvbi5hZGRwcm9qZWN0YnRuID4gaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuZGl2LnByb2plY3Rze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZWRpdC1kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDJweDtcXHJcXG59XFxyXFxuZGl2LmVkaXQtZGVsZXRlICp7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSxcXHJcXG5mb3JtLmVkaXRGb3Jte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSA+IGlucHV0LFxcclxcbmZvcm0uZWRpdEZvcm0gPiBpbnB1dHtcXHJcXG4gICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJnKTtcXHJcXG59XFxyXFxuZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxcclxcbmZvcm0uZWRpdEZvcm0gPiBidXR0b257XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMmY5O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uY2xvc2VBZGQsXFxyXFxuYnV0dG9uLmNsb3NlRWRpdHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDIzMHB4O1xcclxcbn1cXHJcXG5idXR0b24jY2xvc2VBZGQuY2xvc2VBZGQgPiBpbWcsXFxyXFxuYnV0dG9uI2Nsb3NlRWRpdC5jbG9zZUVkaXQgPiBpbWd7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcbmRpdi5jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmRpdi5uby10YXNrLWRpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcbmg0Lm5vLXRhc2t7XFxyXFxuICAgIGNvbG9yOiAjNGJiMmY5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcbmRpdi50YXNrLWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNjM2M7XFxyXFxuICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbmRpdi50YXNrLWRpdiBpbWd7XFxyXFxuICAgIHdpZHRoOiA4JTtcXHJcXG59XFxyXFxucC50aGV0YXNrdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5kaXYucmlnaHR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuZGl2LmRpYWxvZy1jb250YWluZXI0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5mb3JtLmFkZFRhc2tGb3Jte1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAwLjhmcjsgICBcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYuZm9ybWRldGFpbHN7XFxyXFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxubGFiZWx7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG59XFxyXFxuZGl2Lm1vcmVEZXRhaWxze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbnRleHRhcmVhe1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxudGV4dGFyZWEsXFxyXFxuLmZvcm1kZXRhaWxzID4gaW5wdXQsXFxyXFxuc2VsZWN0LCBcXHJcXG5kaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDg0ODtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxufVxcclxcbi5mb3JtZGV0YWlscyA+IGlucHV0e1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG59XFxyXFxuc2VsZWN0LCBcXHJcXG5kaXYudG9kby1vcHRpb25zID4gaW5wdXRbdHlwZT1kYXRlXXtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuLnRvZG8tb3B0aW9uc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNvbnRyb2x7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8xLzIvMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuZGl2LmNvbnRyb2wgPiBidXR0b24uYWRkQVRhc2t7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uZGVsLXRhc2t7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9zIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBub3RlLCBkdWVEYXRlLCAgcHJvamVjdCwgY2hlY2tlZCl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICBpZihwcm9qZWN0ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIGlmKGNoZWNrZWQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICBcclxuICAgIH07XHJcbn07IiwiaW1wb3J0IEZvbGRlciBmcm9tICcuL2ltZy9mb2xkZXIuc3ZnJztcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi9pbWcvZWRpdC5zdmcnO1xyXG5pbXBvcnQgRGVsZXRlIGZyb20gJy4vaW1nL2RlbGV0ZS5zdmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0cywgdGFncyl7XHJcblxyXG4gICAgaWYodGFncy5maXJzdEVsZW1lbnRDaGlsZCl7XHJcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyh0YWdzKTtcclxuICAgIH1cclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdEZpcnN0TGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGVwcm9qZWN0Rmlyc3RMYXllci5jbGFzc05hbWUgPSAndGhlLXByb2plY3RzJztcclxuXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdFNlY29uZExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhlcHJvamVjdFNlY29uZExheWVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0cyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHRoZXByb2plY3RUaGlyZExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhlcHJvamVjdFRoaXJkTGF5ZXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVyJywgJ3Byb2plY3QtZmlsdGVyJylcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWFnZUZvbGRlci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItaWNvbicsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGltYWdlRm9sZGVyLnNyYyA9IEZvbGRlcjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGFncyc7XHJcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0VGhpcmRMYXllci5hcHBlbmRDaGlsZChpbWFnZUZvbGRlcik7XHJcbiAgICAgICAgdGhlcHJvamVjdFRoaXJkTGF5ZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuYXBwZW5kQ2hpbGQodGhlcHJvamVjdFRoaXJkTGF5ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udHJvbERpdi5jbGFzc05hbWUgPSAnZWRpdC1kZWxldGUnO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBlZGl0SW1hZ2UuY2xhc3NMaXN0LmFkZCgnZWRpdCcsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGVkaXRJbWFnZS5zcmMgPSBFZGl0O1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGRlbGV0ZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGRlbGV0ZUltYWdlLnNyYyA9IERlbGV0ZTtcclxuXHJcbiAgICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChlZGl0SW1hZ2UpO1xyXG4gICAgICAgIGNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpO1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuYXBwZW5kQ2hpbGQoY29udHJvbERpdik7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RGaXJzdExheWVyLmFwcGVuZENoaWxkKHRoZXByb2plY3RTZWNvbmRMYXllcilcclxuICAgICAgICB0YWdzLmFwcGVuZENoaWxkKHRoZXByb2plY3RGaXJzdExheWVyKVxyXG5cclxuICAgIH0pO1xyXG4gICAgfVxyXG5cclxuLy8gcmVtb3ZlcyAgYWxsIGNoaWxkIGVsZW1lbnRzIG9uIHRoZSBzY3JlZW5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpe1xyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVtb3ZlQWxsQ2hpbGROb2RlcywgY3JlYXRlUHJvamVjdH0iLCJpbXBvcnQgRGVsIGZyb20gJy4vaW1nL2RlbGV0ZS5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JpdGVUb01haW4odG9kb3MsIG5vZGUpe1xyXG4gICAgaWYodG9kb3MubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICduby10YXNrLWRpdic7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSAnTm8gdGFzayBmb3VuZCc7XHJcbiAgICAgICAgaGVhZGluZy5jbGFzc05hbWUgPSAnbm8tdGFzayc7XHJcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICd0YXNrLWRpdic7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRhc2tIb2xkZXIuY2xhc3NOYW1lID0gXCJyaWdodFwiXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgY2hlY2tlci50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICAgICAgY2hlY2tlci5jbGFzc05hbWUgPSBcImNoZWNrXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB0YXNrLmNsYXNzTmFtZSA9IFwidGhldGFza3RpdGxlXCI7XHJcbiAgICAgICAgICAgIHRhc2suaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICAgICAgICAgICAgdGFza0hvbGRlci5hcHBlbmRDaGlsZChjaGVja2VyKTtcclxuICAgICAgICAgICAgdGFza0hvbGRlci5hcHBlbmRDaGlsZCh0YXNrKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLXRhc2snLCAnZmlsdGVyLXdoaXRlJylcclxuICAgICAgICAgICAgZGVsQnV0dG9uLnNyYyA9IERlbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0hvbGRlcik7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVByb2plY3R9IGZyb20gJy4vY3JlYXRlLmpzJztcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtcImRlZmF1bHRcIl07XHJcblxyXG4vLyBTb3J0IGJ5IFByb2plY3RzXHJcbmZ1bmN0aW9uIHByb2plY3RTb3J0KCl7XHJcbiAgICBcclxuICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgaWYoIXByb2plY3ROYW1lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgcHJvamVjdHMudW5zaGlmdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KG9sZFByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgaWYoIW5ld1Byb2plY3ROYW1lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYocHJvamVjdHNbaV0gPT0gb2xkUHJvamVjdE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0gPSBuZXdQcm9qZWN0TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0TmFtZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldID09IHByb2plY3ROYW1lKXtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHRhZ3Mpe1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RzLCB0YWdzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QoKXtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2dldFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0c31cclxufVxyXG5cclxuY29uc3QgYWRkUHJvamVjdCA9IHByb2plY3RTb3J0KCkuYWRkUHJvamVjdDtcclxuY29uc3QgcmVuZGVyUHJvamVjdHMgPSBwcm9qZWN0U29ydCgpLnJlbmRlclByb2plY3RzO1xyXG5jb25zdCBlZGl0UHJvamVjdCA9IHByb2plY3RTb3J0KCkuZWRpdFByb2plY3Q7XHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBwcm9qZWN0U29ydCgpLmRlbGV0ZVByb2plY3Q7XHJcbmNvbnN0IGdldFByb2plY3QgPSBwcm9qZWN0U29ydCgpLmdldFByb2plY3Q7XHJcblxyXG5leHBvcnQge2dldFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0c30iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge2lzVG9kYXksIGlzVGhpc1dlZWssIGlzVGhpc01vbnRofSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcblxyXG4vLyBzb3J0IGJ5IERhdGVcclxuXHJcbmZ1bmN0aW9uIG15U29ydCgpe1xyXG5cclxuICAgIC8vdG9kYXlcclxuICAgIGZ1bmN0aW9uIHRvZG9zVG9kYXkoKXtcclxuICAgICAgICBjb25zdCB0b2RheVNvcnQgPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVG9kYXkodG9kby5kdWVEYXRlKSlcclxuICAgICAgICAgICAgICAgIHRvZGF5U29ydC5wdXNoKHRvZG8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b2RheVNvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc29ydCBieSB3ZWVrXHJcbiAgICBmdW5jdGlvbiB0b2Rvc0ZvckFXZWVrKCl7XHJcbiAgICAgICAgY29uc3QgdGhpc1dlZWsgPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVGhpc1dlZWsodG9kby5kdWVEYXRlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzV2Vlay5wdXNoKHRvZG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXNXZWVrO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc29ydCBieSBtb250aFxyXG4gICAgZnVuY3Rpb24gdG9kb3NGb3JNb250aCgpe1xyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUaGlzTW9udGgodG9kby5kdWVEYXRlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzTW9udGgucHVzaCh0b2RvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzTW9udGg7ICAgXHJcbiAgICB9XHJcbiAgICAvLyBDaGVja3MgZm9yIHNwZWNpZmljIHByb2plY3QgaW4gdGhlIHRvZG9zIGFycmF5XHJcbiAgICBmdW5jdGlvbiBjaGVja0ZvclByb2plY3QodGhlUHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IHRvZG9zQnlQcm9qZWN0ID0gW107XHJcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSByZW5kZXIoKTtcclxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZih0b2RvLnByb2plY3QgPT0gdGhlUHJvamVjdE5hbWUpXHJcbiAgICAgICAgICAgICAgICB0b2Rvc0J5UHJvamVjdC51bnNoaWZ0KHRvZG8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b2Rvc0J5UHJvamVjdFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y2hlY2tGb3JQcm9qZWN0LCB0b2Rvc1RvZGF5LCB0b2Rvc0ZvckFXZWVrLCB0b2Rvc0Zvck1vbnRofVxyXG59XHJcblxyXG5jb25zdCB0b2Rvc0ZvckFXZWVrID0gbXlTb3J0KCkudG9kb3NGb3JBV2VlaztcclxuY29uc3QgdG9kb3NGb3JNb250aCA9IG15U29ydCgpLnRvZG9zRm9yTW9udGg7XHJcbmNvbnN0IHRvZG9zVG9kYXkgPSBteVNvcnQoKS50b2Rvc1RvZGF5O1xyXG5jb25zdCBjaGVja0ZvclByb2plY3QgPSBteVNvcnQoKS5jaGVja0ZvclByb2plY3Q7XHJcbmV4cG9ydCB7Y2hlY2tGb3JQcm9qZWN0LCB0b2Rvc1RvZGF5LCB0b2Rvc0ZvckFXZWVrLCB0b2Rvc0Zvck1vbnRofSIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi9jbGFzcy5qc1wiXHJcblxyXG5sZXQgYWxsVG9kb3MgPSBbXTtcclxuZnVuY3Rpb24gdG9kb3NDcmVhdG9yKCkge1xyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgbm90ZSwgZHVlRGF0ZSwgcHJvamVjdCwgY2hlY2tlZCl7XHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSBuZXcgVG9kb3ModGl0bGUsIG5vdGUsIGR1ZURhdGUsIHByb2plY3QsIGNoZWNrZWQpO1xyXG4gICAgICAgIGFkZFRvZG9zKHRvZG9zKVxyXG4gICAgICAgIHJldHVybiB0b2RvcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gYWRkVG9kb3ModG9kb3Mpe1xyXG4gICAgICAgIGFsbFRvZG9zLnVuc2hpZnQodG9kb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8odGl0bGUpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWxsVG9kb3MuZmluZEluZGV4KHRoZVRvZG8gPT4gdGhlVG9kby50aXRsZSA9PT0gdGl0bGUpO1xyXG4gICAgICAgIGFsbFRvZG9zLnNoaWZ0KGluZGV4KTtcclxuICAgIH0gXHJcbiAgICBmdW5jdGlvbiBlZGl0VG9kbyh0b2RvcywgbmV3VGl0bGUsIG5ld05vdGUsIG5ld0R1ZURhdGUsIG5ld1Byb2plY3Qpe1xyXG4gICAgICAgIGlmKG5ld1RpdGxlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3MudGl0bGUgPSBuZXdUaXRsZVxyXG4gICAgICAgIGlmKG5ld05vdGUgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy5ub3RlID0gbmV3Tm90ZVxyXG4gICAgICAgIGlmKG5ld0R1ZURhdGUgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy5kdWVEYXRlID0gbmV3RHVlRGF0ZVxyXG4gICAgICAgIGlmKG5ld1Byb2plY3QgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy5wcm9qZWN0ID0gbmV3UHJvamVjdDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiBhbGxUb2RvcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2RlbGV0ZVRvZG8sIGNyZWF0ZVRvZG8sIGVkaXRUb2RvLCByZW5kZXJ9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRvZG8gPSB0b2Rvc0NyZWF0b3IoKS5jcmVhdGVUb2RvO1xyXG5jb25zdCBkZWxldGVUb2RvID0gdG9kb3NDcmVhdG9yKCkuZGVsZXRlVG9kbztcclxuY29uc3QgZWRpdFRvZG8gPSB0b2Rvc0NyZWF0b3IoKS5lZGl0VG9kbztcclxuY29uc3QgcmVuZGVyID0gdG9kb3NDcmVhdG9yKCkucmVuZGVyO1xyXG5cclxuZXhwb3J0IHtjcmVhdGVUb2RvLCBkZWxldGVUb2RvLCByZW5kZXIsIGVkaXRUb2RvfSIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcblxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZkRheSA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZEYXk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lRGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZU1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE0LCA4LCAyNSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE1IGluIHRoZSBzYW1lIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiksIG5ldyBEYXRlKDIwMTUsIDgsIDI1KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU1vbnRoKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuICByZXR1cm4gKFxuICAgIF9kYXRlTGVmdC5nZXRGdWxsWWVhcigpID09PSBfZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICBfZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gX2RhdGVSaWdodC5nZXRNb250aCgpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lTW9udGg7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNTYW1lV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGF0ZUxlZnQsIG9wdGlvbnMpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVSaWdodCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZXZWVrID09PSArZGF0ZVJpZ2h0U3RhcnRPZldlZWs7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lV2VlaztcbiIsImltcG9ydCB7IGlzU2FtZU1vbnRoIH0gZnJvbSBcIi4vaXNTYW1lTW9udGgubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIG1vbnRoIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoaXMgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDE1IFNlcHRlbWJlciAyMDE0IGluIHRoaXMgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAxNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUaGlzTW9udGgoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lTW9udGgoRGF0ZS5ub3coKSwgZGF0ZSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUaGlzTW9udGg7XG4iLCJpbXBvcnQgeyBpc1NhbWVXZWVrIH0gZnJvbSBcIi4vaXNTYW1lV2Vlay5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzVGhpc1dlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUaGlzV2VlaztcbiIsImltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7Y3JlYXRlVG9kbywgZWRpdFRvZG8sIGRlbGV0ZVRvZG8sIHJlbmRlcn1mcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge2NoZWNrRm9yUHJvamVjdCwgdG9kb3NUb2RheSwgdG9kb3NGb3JBV2VlaywgdG9kb3NGb3JNb250aH0gZnJvbSBcIi4vc29ydC5qc1wiO1xyXG5pbXBvcnQge2dldFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0LmpzJztcclxuaW1wb3J0IHdyaXRlVG9NYWluIGZyb20gJy4vbWFpbi5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tICcuL2NyZWF0ZS5qcyc7XHJcblxyXG5cclxuY29uc3QgdGl0bGUxID0gXCJDYWxsIE11bVwiO1xyXG5jb25zdCBub3RlMSA9IFwiVmVyeSBJbXBvcnRhbnRcIjtcclxuY29uc3QgZHVlRGF0ZTEgPSBcIjIwMjQtMDEtMTNcIjtcclxuY29uc3QgcHJvamVjdDEgPSBcIndvcmtcIjtcclxuY29uc3QgY2hlY2tlZCA9IHRydWU7XHJcblxyXG5cclxuY29uc3QgdG9kb3MxID0gY3JlYXRlVG9kbyh0aXRsZTEsIG5vdGUxLCBkdWVEYXRlMSwgcHJvamVjdDEsIGNoZWNrZWQpO1xyXG5cclxuY29uc3QgdGl0bGUyID0gXCJSZWFkIG9uIERvbVwiO1xyXG5jb25zdCBub3RlMiA9IFwiUGhld3chXCI7XHJcbmNvbnN0IGR1ZURhdGUyID0gXCIyMDI0LTAzLTIxXCI7XHJcblxyXG5jb25zdCB0b2RvczIgPSBjcmVhdGVUb2RvKHRpdGxlMiwgbm90ZTIsIGR1ZURhdGUyKTtcclxuXHJcbmNvbnN0IHRpdGxlMyA9IFwiQWxleFwiO1xyXG5jb25zdCBub3RlMyA9IFwiTXkgbGlmZVwiO1xyXG5jb25zdCBkdWVEYXRlMyA9IFwiMjAyNC0wMS0xOVwiO1xyXG5jb25zdCBwcm9qZWN0MyA9IFwicGVyc29uYWxcIlxyXG5cclxuY29uc3QgdG9kb3MzID0gY3JlYXRlVG9kbyh0aXRsZTMsIG5vdGUzLCBkdWVEYXRlMywgcHJvamVjdDMpO1xyXG5cclxuXHJcbmFkZFByb2plY3QoXCJ3b3JrXCIpO1xyXG5hZGRQcm9qZWN0KFwicGVyc29uYWxcIik7XHJcbmFkZFByb2plY3QoXCJmdW5cIik7XHJcblxyXG4vL0RvbWUgQ2FjaGVcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnRuJyk7XHJcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XHJcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWJhckRhaWxvZycpO1xyXG5jb25zdCBmaWx0ZXJUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvcycpO1xyXG5jb25zdCB0YWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZS1wcm9qZWN0cycpO1xyXG5jb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWxvZy1FZGl0Jyk7XHJcbmNvbnN0IHRleHRJbnB1dEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0Jyk7XHJcbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdEJ0bicpO1xyXG5jb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Rm9ybScpO1xyXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHByb2plY3RidG4nKTtcclxuY29uc3QgYWRkUHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRwcm9qZWN0ZGlhbG9nJyk7XHJcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRwcm9qZWN0dGV4dCcpO1xyXG5jb25zdCBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ0FkZFByb2plY3RCdG4nKVxyXG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEZvcm0nKTtcclxuY29uc3QgY2xvc2VBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VBZGQnKTtcclxuY29uc3QgY2xvc2VFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlRWRpdCcpXHJcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTtcclxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0Zvcm0nKTtcclxuY29uc3QgYWRkVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1kaWFsb2cnKTtcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3RpdGxlJyk7XHJcbmNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza25vdGUnKTtcclxuY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJyk7XHJcbmxldCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVQcm9qZWN0cycpO1xyXG5jb25zdCBhZGRBVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRBVGFzaycpO1xyXG5sZXQgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcclxuY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrQnRuJyk7XHJcbmxldCBkZWxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbC10YXNrJyk7XHJcbmxldCBhdmFpbGFibGVQcm9qZWN0cyA9IGdldFByb2plY3QoKTtcclxuXHJcbihmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdGhpc3Byb2plY3RzID0gcmVuZGVyKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5sZW5ndGgpO1xyXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcclxuICAgIHdyaXRlVG9NYWluKHRoaXNwcm9qZWN0cywgY29udGVudCk7XHJcbiAgICByZW5kZXJQcm9qZWN0cyh0YWdzKVxyXG4gICAgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcclxuICAgIGFkZExpc3Rlcm5lcihjaGVjaywgXCJjaGFuZ2VcIiwgdGhlY2hlY2tlcilcclxuICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgYWRkTGlzdGVybmVyKGRlbFRhc2ssIFwiY2xpY2tcIiwgZGVsZXRlVGhlVGFzaylcclxufSkoKTtcclxuXHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lcnNcclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpYWxvZy5zaG93KCk7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn0pO1xyXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoKXtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcbmZpbHRlclRvZG9zLmZvckVhY2godG9kb0ZpbHRlciA9PiB7XHJcbiAgICBcclxuICAgICAgICB0b2RvRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0b2RvRmlsdGVyLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhpc3Byb2plY3RzID0gcmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBzb3J0VG9NYWluKHRoaXNwcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0b2RvRmlsdGVyLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPT0gJ1RvZGF5Jyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheVByb2plY3RzID0gdG9kb3NUb2RheSgpO1xyXG4gICAgICAgICAgICAgICAgc29ydFRvTWFpbih0b2RheVByb2plY3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnV2Vlaycpe1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2Vla1Byb2plY3RzID0gdG9kb3NGb3JBV2VlaygpO1xyXG4gICAgICAgICAgICAgICAgc29ydFRvTWFpbih3ZWVrUHJvamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aFByb2plY3RzID0gdG9kb3NGb3JNb250aCgpO1xyXG4gICAgICAgICAgICAgICAgc29ydFRvTWFpbihtb250aFByb2plY3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNvcnRUb01haW4ocHJvamVjdCl7XHJcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xyXG4gICAgd3JpdGVUb01haW4ocHJvamVjdCwgY29udGVudClcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNsb3NlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcclxuICAgIGFkZExpc3Rlcm5lcihjaGVjaywgXCJjaGFuZ2VcIiwgdGhlY2hlY2tlcilcclxuICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgYWRkTGlzdGVybmVyKGRlbFRhc2ssIFwiY2xpY2tcIiwgZGVsZXRlVGhlVGFzaylcclxufVxyXG5cclxuLy9BZGRzIEV2ZW50TGlzdGVybmVycyB0byByZWR1Y2UgcmVwZWF0IGNvZGVcclxuZnVuY3Rpb24gYWRkTGlzdGVybmVyKG5vZGVzLCB0aGVFdmVudCwgdGhlRnVuY3Rpb24pe1xyXG4gICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodGhlRXZlbnQsIHRoZUZ1bmN0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDaGVja3Mgd2hlbiBhIHVzZXIgZGltcyBhIHByb2plY3QgYXMgY29tcGxldGVkXHJcbmZ1bmN0aW9uIHRoZWNoZWNrZXIoZSl7XHJcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKXtcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgY29uc3QgZGVsVGFzayA9IFxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFwiKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzY1wiKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLy9kZWxldGVzIGEgdGFza1xyXG5mdW5jdGlvbiBkZWxldGVUaGVUYXNrKGUpe1xyXG4gICAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBkZWxldGVUb2RvKHRpdGxlKTtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICBjb25zdCB0aGlzcHJvamVjdHMgPSByZW5kZXIoKTtcclxuICAgIHNvcnRUb01haW4odGhpc3Byb2plY3RzKTtcclxufVxyXG5cclxuLy9FdmVudCBMaXN0ZW5lcnNcclxudGFncy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0YWdzRXZlbnQpO1xyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Byb2plY3RBZGRNb2RhbCk7XHJcbmFkZE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcclxuYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWRkVGFzayk7XHJcblxyXG5cclxuZnVuY3Rpb24gdGFnc0V2ZW50KCl7XHJcbiAgICBjb25zdCBlZGl0QW5kRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZGVsZXRlJyk7XHJcblxyXG4gICAgaWYoZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID09ICdub25lJylcclxuICAgICAgICBlZGl0QW5kRGVsZXRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG4vLyBPcGVucyB0aGUgYWRkUHJvamVjdCBNb2RhbFxyXG5mdW5jdGlvbiBzaG93UHJvamVjdEFkZE1vZGFsKCl7XHJcbiAgICBhZGRQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgbmV3UHJvamVjdElucHV0LmZvY3VzKCk7XHJcbn1cclxuLy9BZGRzIG5ldyBQcm9qZWN0XHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKXtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWVcclxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICBhdmFpbGFibGVQcm9qZWN0cyA9IGdldFByb2plY3QoKTtcclxuICAgIHJlbmRlclByb2plY3RzKHRhZ3MpXHJcbiAgICBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoZGVsZXRlQnRuLCAnY2xpY2snLCBkZWwpXHJcbiAgICBcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlZGl0QnRuLCBcImNsaWNrXCIsIGVkaXRNb2RhbCk7XHJcbiAgICBcclxuICAgIGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1maWx0ZXInKTtcclxuICAgIGFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzayk7XHJcblxyXG4gICAgYWRkRm9ybS5yZXNldCgpO1xyXG4gICAgYWRkUHJvamVjdERpYWxvZy5jbG9zZSgpO1xyXG59XHJcblxyXG4vL2Nsb3NlIHRoZSBhZGQgdGFzayBwYW5lbFxyXG5mdW5jdGlvbiBjbG9zZUFkZFRhc2soKXtcclxuICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbn1cclxuXHJcbmxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxubGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcclxubGV0IGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWdzJyk7XHJcbmxldCBjdXJyZW50UHJvamVjdDtcclxuXHJcblxyXG5hZGRMaXN0ZXJuZXIoZWRpdEJ0biwgXCJjbGlja1wiLCBlZGl0TW9kYWwpO1xyXG5hbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZmlsdGVyJyk7XHJcbmFkZExpc3Rlcm5lcihhbGxUYWdzLCBcImNsaWNrXCIsIHNob3dQcm9qZWN0VGFzayk7XHJcblxyXG4vLyBTb3J0cyB0YXNrcyBieSBwcm9qZWN0c1xyXG5mdW5jdGlvbiBzaG93UHJvamVjdFRhc2soZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIGNvbnN0IGJ5UHJvamVjdCA9IGNoZWNrRm9yUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBzb3J0VG9NYWluKGJ5UHJvamVjdCk7XHJcblxyXG59XHJcbmZ1bmN0aW9uIGVkaXRNb2RhbChlKXtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBlZGl0RGlhbG9nLnNob3dNb2RhbCgpXHJcbiAgICB0ZXh0SW5wdXRFZGl0LmZvY3VzKCk7XHJcbiAgICB0ZXh0SW5wdXRFZGl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50UHJvamVjdCk7ICAgXHJcbn1cclxuXHJcbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGhlUHJvamVjdCk7XHJcblxyXG4vL0VkaXRzIHRoZSBwcm9qZWN0XHJcbmZ1bmN0aW9uIGVkaXRUaGVQcm9qZWN0KCl7XHJcbiAgICBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG4gICAgY29uc3QgbmV3TmFtZSA9IGVkaXRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0LCB0ZXh0SW5wdXRFZGl0LnZhbHVlKTtcclxuICAgIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgIGlmKHRhZy50ZXh0Q29udGVudCA9PSBjdXJyZW50UHJvamVjdCl7XHJcbiAgICAgICAgICAgIHRhZy50ZXh0Q29udGVudCA9IG5ld05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAgICAgZWRpdEZvcm0ucmVzZXQoKTtcclxuICAgICAgICBlZGl0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgLy8gbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxufVxyXG5cclxuXHJcbmRlbGV0ZUJ0bi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWwpO1xyXG59KTtcclxuXHJcbi8vIERlbGV0ZXMgYSBwcm9qZWN0XHJcbmZ1bmN0aW9uIGRlbChlKXtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICByZW5kZXJQcm9qZWN0cyh0YWdzKTtcclxuICAgIGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWdzJyk7XHJcbiAgICBhZGRMaXN0ZXJuZXIoYWxsVGFncywgXCJjbGlja1wiLCBzaG93UHJvamVjdFRhc2spXHJcblxyXG4gICAgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xyXG4gICAgYWRkTGlzdGVybmVyKGRlbGV0ZUJ0biwgXCJjbGlja1wiLCBkZWwpXHJcblxyXG4gICAgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhZ3MnKTtcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxuICAgIGFkZExpc3Rlcm5lcihlZGl0QnRuLCBcImNsaWNrXCIsIGVkaXRNb2RhbClcclxufVxyXG5cclxuY2xvc2VBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgYWRkUHJvamVjdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbn0pO1xyXG5cclxuY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGVkaXREaWFsb2cuY2xvc2UoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG59KTtcclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgYWRkVGFza0RpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIGFkZFRhc2tQcm9qZWN0KCk7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcbmFkZEFUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZVByb2plY3RzJyk7XHJcbiAgICBjb25zdCB0aGVUaXRsZSA9IHRpdGxlLnZhbHVlO1xyXG4gICAgY29uc3QgdGhlTm90ZSAgPSBub3RlLnZhbHVlO1xyXG4gICAgY29uc3QgdGhlRHVlRGF0ZSA9IGR1ZURhdGUudmFsdWU7XHJcbiAgICBjb25zdCB0aGVQcm9qZWN0ID0gdGFza1Byb2plY3QudmFsdWU7XHJcbiAgICBpZih0aGVUaXRsZSAmJiB0aGVEdWVEYXRlKXtcclxuICAgICAgICBjb25zdCB0b2RvcyA9IGNyZWF0ZVRvZG8odGhlVGl0bGUsIHRoZU5vdGUsIHRoZUR1ZURhdGUsIHRoZVByb2plY3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkoe3RpdGxlOiB0aGVUaXRsZSwgbm90ZTogdGhlTm90ZSwgZHVlRGF0ZTogdGhlRHVlRGF0ZSwgdGhlUHJvamVjdCwgfSkpO1xyXG4gICAgICAgIGNvbnN0IHRoaXNwcm9qZWN0cyA9IHJlbmRlcigpO1xyXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgICAgICAgd3JpdGVUb01haW4odGhpc3Byb2plY3RzLCBjb250ZW50KTtcclxuICAgICAgICBhZGRUYXNrRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbiAgICAgICAgYWRkTGlzdGVybmVyKGNoZWNrLCBcImNoYW5nZVwiLCB0aGVjaGVja2VyKVxyXG4gICAgICAgIGRlbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRhc2snKVxyXG4gICAgICAgIGFkZExpc3Rlcm5lcihkZWxUYXNrLCBcImNsaWNrXCIsIGRlbGV0ZVRoZVRhc2spXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFza1Byb2plY3QoKXtcclxuICAgIGF2YWlsYWJsZVByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gcHJvamVjdDtcclxuICAgICAgICB0YXNrUHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=