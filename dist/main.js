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
    --heading: #4bb2f9;
}
.filter-white{
    filter: invert(100%) sepia(0%) saturate(7435%) hue-rotate(65deg) brightness(105%) contrast(95%);
}
.filter > p{
    color: var(--color-fg);
}

@media (prefers-color-scheme: light){
    :root{
        --color-bg: #ffffff;
        --color-fg: #1A1C20;
    }
    .filter-white{
        filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%);
    }
    .filter > p{
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
}
div.container{
    display: grid;
    /* gap: 30px; */
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
    grid-template-rows: 0.2fr 3fr 0.2fr;
    padding: 15px;
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
div.add-taskdiv > button{
    text-transform: uppercase;
    font-size: 1rem;
    padding: 10px;
    border-radius: 30px;
    background-color: #4bb2f9;
    color: var(--color-bg);
    cursor: pointer;
    border: none;
}
dialog{
    top: 100px;
    left: 60px;
    width: 70%;
    height: 80%;
    background-color: #272727;
    border: none;
    border-radius: 10px;
    padding: 10px;
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
    /* height: 1.5rem; */
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
    width: 70%;
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
    gap: 10px;
    width: 100%;
    background-color: #3d3c3c;
    height: 1.7rem;
    align-items: center;
    border-radius: 15px;
    padding: 10px;
}
/* div.task-div *{
    border-radius: 10px;
    height: 2rem;
} */`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,+FAA+F;AACnG;AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI;QACI,mBAAmB;QACnB,mBAAmB;IACvB;IACA;QACI,wHAAwH;IAC5H;IACA;QACI,sBAAsB;IAC1B;AACJ;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,yCAAyC;AAC7C;AACA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,sBAAsB;IACtB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,yCAAyC;AAC7C;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;;;;;IAKI,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;AACnB;AACA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,iBAAiB;;AAErB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AACA;IACI,UAAU;IACV,UAAU;IACV,UAAU;IACV,WAAW;IACX,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,WAAW;IACX,aAAa;IACb,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,WAAW;;AAEf;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,QAAQ;AACZ;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;;IAEI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,iCAAiC;AACrC;AACA;;IAEI,oBAAoB;IACpB,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;AACA;;IAEI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,yBAAyB;IACzB,cAAc;IACd,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;AACjB;AACA;;;GAGG","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    --color-fg: #eee;\r\n    --color-bg: #121212;\r\n    --heading: #4bb2f9;\r\n}\r\n.filter-white{\r\n    filter: invert(100%) sepia(0%) saturate(7435%) hue-rotate(65deg) brightness(105%) contrast(95%);\r\n}\r\n.filter > p{\r\n    color: var(--color-fg);\r\n}\r\n\r\n@media (prefers-color-scheme: light){\r\n    :root{\r\n        --color-bg: #ffffff;\r\n        --color-fg: #1A1C20;\r\n    }\r\n    .filter-white{\r\n        filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(6%) hue-rotate(31deg) brightness(98%) contrast(101%);\r\n    }\r\n    .filter > p{\r\n        color: var(--color-bg);\r\n    }\r\n}\r\nhtml, body{\r\n    height: 100%;\r\n}\r\nhtml{\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nbody{\r\n    min-height: 100vh;\r\n    background-color: var(--color-bg);\r\n    color: var(--color-fg);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\ndiv.container{\r\n    display: grid;\r\n    /* gap: 30px; */\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-rows: 0.2fr 0.2fr 3fr 0.3fr;\r\n}\r\nheader{\r\n    grid-area: 1/1/1/2;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\nheader > h1{\r\n    color: var(--heading);\r\n    font-size: 1.5rem;\r\n}\r\ndiv.menu{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\nbutton.closeAdd,\r\nbutton.closeEdit,\r\nbutton.closeBtn,\r\nbutton.menuBtn,\r\nbutton.addprojectbtn{\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    cursor: pointer;\r\n}\r\ndiv.menu > .closeBtn > img,\r\ndiv.menu > .menuBtn > img{\r\n    color: var(--color-fg);\r\n    width: 12%;\r\n}\r\nbutton#close.closeBtn{\r\n    display: none;\r\n}\r\ndiv.main-container{\r\n    grid-area: 3/1/3/2;\r\n    width: 90%;\r\n    height: 100%;\r\n    background-color: #272727;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-rows: 0.2fr 3fr 0.2fr;\r\n    padding: 15px;\r\n}\r\ndiv.main-heading{\r\n    grid-area: 1/1/1/2;\r\n    padding: 10px;\r\n}\r\ndiv.main-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.7rem;\r\n\r\n}\r\ndiv.main-content{\r\n    grid-area: 2/1/3/2;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.add-taskdiv{\r\n    grid-area: 3/1/4/2;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding: 5px;\r\n}\r\ndiv.add-taskdiv > button{\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 10px;\r\n    border-radius: 30px;\r\n    background-color: #4bb2f9;\r\n    color: var(--color-bg);\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\ndialog{\r\n    top: 100px;\r\n    left: 60px;\r\n    width: 70%;\r\n    height: 80%;\r\n    background-color: #272727;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n}\r\ndiv.addbtn{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\ndiv.dailog-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n.filter > p{\r\n    font-size: 1rem;\r\n}\r\n\r\ndiv.filter-div, \r\ndiv.project-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.filter{\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.the-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.filter > img{\r\n    width: 2.8rem;\r\n    padding: 10px;\r\n}\r\ndiv.add-project{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    width: 100%;\r\n\r\n}\r\n\r\ndiv.dialog-heading > h3{\r\n    color: var(--heading);\r\n    font-size: 1.3rem;\r\n}\r\nbutton.addprojectbtn{\r\n    color: var(--color-fg);\r\n}\r\nbutton.addprojectbtn > h3{\r\n    font-size: 2rem;\r\n}\r\ndiv.projects{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\ndiv.edit-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 2px;\r\n}\r\ndiv.edit-delete *{\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\nform.addForm,\r\nform.editForm{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\nform.addForm > input,\r\nform.editForm > input{\r\n    height: 2.4rem;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    background-color: #3d3c3c;\r\n    color: var(--color-fg);\r\n    border: 1px solid var(--color-bg);\r\n}\r\nform.addForm > button,\r\nform.editForm > button{\r\n    /* height: 1.5rem; */\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    background-color: #4bb2f9;\r\n    color: var(--color-bg);\r\n}\r\n\r\nbutton.closeAdd,\r\nbutton.closeEdit{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 230px;\r\n}\r\nbutton#closeAdd.closeAdd > img,\r\nbutton#closeEdit.closeEdit > img{\r\n    color: var(--color-fg);\r\n    width: 70%;\r\n}\r\ndiv.content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    gap: 10px;\r\n}\r\ndiv.no-task-div{\r\n    width: 100%;\r\n    padding: 30px;\r\n}\r\nh4.no-task{\r\n    color: #4bb2f9;\r\n    text-align: center;\r\n    font-weight: 200;\r\n}\r\ndiv.task-div{\r\n    display: flex;\r\n    gap: 10px;\r\n    width: 100%;\r\n    background-color: #3d3c3c;\r\n    height: 1.7rem;\r\n    align-items: center;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\n/* div.task-div *{\r\n    border-radius: 10px;\r\n    height: 2rem;\r\n} */"],"sourceRoot":""}]);
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

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   checkForProject: () => (/* binding */ checkForProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProject: () => (/* binding */ editProject),
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

    // Checks for specific project in the todos array
    function checkForProject(theProjectName){
        const todosByProject = [];
        allTodos.forEach(todo => {
            if(todo.project == theProjectName)
                todosByProject.unshift(todo);
        });
        return todosByProject
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
    return {deleteProject, editProject, checkForProject, addProject, renderProjects}
}

const addProject = projectSort().addProject;
const checkForProject = projectSort().checkForProject;
const renderProjects = projectSort().renderProjects;
const editProject = projectSort().editProject;
const deleteProject = projectSort().deleteProject;



/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todosForAWeek: () => (/* binding */ todosForAWeek),
/* harmony export */   todosForMonth: () => (/* binding */ todosForMonth)
/* harmony export */ });
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisMonth.mjs");




// sort by Date

function dateSort(){
    // sort by week
    function todosForAWeek(){
        const thisWeek = [];
        const allTodos = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.render)();
        allTodos.forEach(todo => {
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isThisWeek)(todo.dueDate)){
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
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isThisMonth)(todo.dueDate)){
                thisMonth.push(todo);
            }
        });
        
        return thisMonth;   
    }
    return {todosForAWeek, todosForMonth}
}

const todosForAWeek = dateSort().todosForAWeek;
const todosForMonth = dateSort().todosForMonth;



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

    function deleteTodo(todos){
        console.log(todos.title);
        const index = allTodos.findIndex(theTodo => theTodo.title === todos.title);
        console.log(index);
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
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create.js */ "./src/create.js");







const title1 = "Get a life";
const note1 = "This is how to get  a life";
const dueDate1 = "2024-01-13";
const project1 = "work";
const checked = true;


const todos1 = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title1, note1, dueDate1, project1, checked);
// deleteTodo(todos1);
// todos 2

const title2 = "Gbam";
const note2 = "This is life";
const dueDate2 = "2024-03-21";

const todos2 = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title2, note2, dueDate2);
(0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.editTodo)(todos2, "Hand over")
// deleteTodo(todos2);

// object 3
const title3 = "Alex";
const note3 = "My life";
const dueDate3 = "2024-01-19";
const project3 = "Personal"

const todos3 = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title3, note3, dueDate3, project3);
// deleteTodo(todos3);




(0,_project_js__WEBPACK_IMPORTED_MODULE_3__.addProject)("work");
(0,_project_js__WEBPACK_IMPORTED_MODULE_3__.addProject)("personal");
(0,_project_js__WEBPACK_IMPORTED_MODULE_3__.addProject)("fun");
// console.table(theprojects());
// console.table(checkForProject("Personal"));

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


// Event listeners
menuBtn.addEventListener('click', () => {
    dialog.show();
    menuBtn.style.display = "none";
    mainContent.style.display = 'none';
    close.style.display = "flex";
});
close.addEventListener('click', () => {
    dialog.close();
    menuBtn.style.display = "flex";
    mainContent.style.display = 'grid';
    close.style.display = "none";
});
filterTodos.forEach(todoFilter => {
    
        todoFilter.addEventListener('click', () => {
            if(todoFilter.lastElementChild.textContent == 'All'){
                console.table((0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.render)());
            }
            else if(todoFilter.lastElementChild.textContent == 'Today'){
                console.log(todoFilter.lastElementChild.textContent)
            }
            else if(todoFilter.lastElementChild.textContent == 'Week'){
                console.table((0,_sort_js__WEBPACK_IMPORTED_MODULE_2__.todosForAWeek)());
            }
            else{
                console.table((0,_sort_js__WEBPACK_IMPORTED_MODULE_2__.todosForMonth)());
            }
        });
});

tags.addEventListener('touchmove', (e) => {
    const editAndDelete = document.querySelector('.edit-delete');

    if(editAndDelete.style.display == 'none')
        editAndDelete.style.display = 'flex';
    else
        editAndDelete.style.display = 'none';
});

addProjectBtn.addEventListener('click', (e) => {
    addProjectDialog.showModal();
});

addNewProjectBtn.addEventListener('click', (e) => {
    const newProject = newProjectInput.value
    ;(0,_project_js__WEBPACK_IMPORTED_MODULE_3__.addProject)(newProject);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(tags)
    deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', del);
    });
    let editBtn = document.querySelectorAll('.edit');
    allTags = document.querySelectorAll('.project-tags');
    editBtn.forEach(edit => {
        edit.addEventListener('click', editModal);     
    });
    addForm.reset();
});

(0,_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(tags)


let editBtn = document.querySelectorAll('.edit');
let deleteBtn = document.querySelectorAll('.delete');
let allTags = document.querySelectorAll('.project-tags');
let currentProject;
editBtn.forEach(edit => {
    edit.addEventListener('click', editModal);     
});

function editModal(e){
    currentProject = e.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
    editDialog.showModal()
    textInputEdit.setAttribute('value', currentProject);
}

editButton.addEventListener('click', (e) => {
    const newName = (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.editProject)(currentProject, textInputEdit.value);
    allTags.forEach(tag => {
        if(tag.textContent == currentProject){
            tag.textContent = newName;
        }
    });
        editForm.reset();
});

deleteBtn.forEach(btn => {
    btn.addEventListener('click', del);
});

function del(e){

    const projectName = e.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
    (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject)(projectName);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(tags);
    deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', del);
    });
    let editBtn = document.querySelectorAll('.edit');
    allTags = document.querySelectorAll('.project-tags');
    editBtn.forEach(edit => {
        edit.addEventListener('click', editModal);     
    });
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
    mainContent.style.display = 'none';
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxzRkFBc0YsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxTQUFTLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTywyQkFBMkIsa0JBQWtCLG1CQUFtQiwrQkFBK0IsS0FBSyxVQUFVLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLEtBQUssa0JBQWtCLHdHQUF3RyxLQUFLLGdCQUFnQiwrQkFBK0IsS0FBSyw2Q0FBNkMsY0FBYyxnQ0FBZ0MsZ0NBQWdDLFNBQVMsc0JBQXNCLHFJQUFxSSxTQUFTLG9CQUFvQixtQ0FBbUMsU0FBUyxLQUFLLGVBQWUscUJBQXFCLEtBQUssU0FBUyx3QkFBd0Isa0RBQWtELEtBQUssU0FBUywwQkFBMEIsMENBQTBDLCtCQUErQixzQkFBc0IsK0JBQStCLEtBQUssa0JBQWtCLHNCQUFzQixzQkFBc0Isc0JBQXNCLHFCQUFxQixrREFBa0QsS0FBSyxXQUFXLDJCQUEyQixzQkFBc0IsdUNBQXVDLHNCQUFzQixvQkFBb0IsS0FBSyxnQkFBZ0IsOEJBQThCLDBCQUEwQixLQUFLLGFBQWEsc0JBQXNCLDRCQUE0QixrQ0FBa0MsS0FBSyx5R0FBeUcsc0NBQXNDLHFCQUFxQixzQkFBc0IsNEJBQTRCLGtDQUFrQyx3QkFBd0IsS0FBSyw2REFBNkQsK0JBQStCLG1CQUFtQixLQUFLLDBCQUEwQixzQkFBc0IsS0FBSyx1QkFBdUIsMkJBQTJCLG1CQUFtQixxQkFBcUIsa0NBQWtDLDRCQUE0QixxQkFBcUIsc0JBQXNCLDRDQUE0QyxzQkFBc0IsS0FBSyxxQkFBcUIsMkJBQTJCLHNCQUFzQixLQUFLLDBCQUEwQiw4QkFBOEIsMEJBQTBCLFNBQVMscUJBQXFCLDJCQUEyQixzQkFBc0IsZ0NBQWdDLEtBQUssb0JBQW9CLDJCQUEyQixzQkFBc0Isa0NBQWtDLDRCQUE0QixxQkFBcUIsS0FBSyw2QkFBNkIsa0NBQWtDLHdCQUF3QixzQkFBc0IsNEJBQTRCLGtDQUFrQywrQkFBK0Isd0JBQXdCLHFCQUFxQixLQUFLLFdBQVcsbUJBQW1CLG1CQUFtQixtQkFBbUIsb0JBQW9CLGtDQUFrQyxxQkFBcUIsNEJBQTRCLHNCQUFzQixLQUFLLGVBQWUsb0JBQW9CLHNCQUFzQixrQ0FBa0MsS0FBSyx5QkFBeUIsc0JBQXNCLCtCQUErQixrQkFBa0Isc0JBQXNCLG9CQUFvQixLQUFLLGdCQUFnQix3QkFBd0IsS0FBSyw0Q0FBNEMsc0JBQXNCLCtCQUErQixvQkFBb0IsS0FBSyxnQkFBZ0Isc0JBQXNCLDRCQUE0Qix3QkFBd0IsS0FBSyxrQkFBa0Isc0JBQXNCLCtCQUErQiw0QkFBNEIsb0JBQW9CLEtBQUssa0JBQWtCLHNCQUFzQixzQkFBc0IsS0FBSyxvQkFBb0Isc0JBQXNCLHVDQUF1QyxrQkFBa0Isb0JBQW9CLFNBQVMsZ0NBQWdDLDhCQUE4QiwwQkFBMEIsS0FBSyx5QkFBeUIsK0JBQStCLEtBQUssOEJBQThCLHdCQUF3QixLQUFLLGlCQUFpQixzQkFBc0IsdUNBQXVDLG9CQUFvQixLQUFLLHlCQUF5QixzQkFBc0IsNEJBQTRCLGtDQUFrQyxpQkFBaUIsS0FBSyxzQkFBc0Isb0JBQW9CLHdCQUF3QixLQUFLLG1DQUFtQyxzQkFBc0IsK0JBQStCLGtCQUFrQixLQUFLLG1EQUFtRCx1QkFBdUIsc0JBQXNCLDRCQUE0QixrQ0FBa0MsK0JBQStCLDBDQUEwQyxLQUFLLHFEQUFxRCwyQkFBMkIsb0NBQW9DLHdCQUF3QixxQkFBcUIsNEJBQTRCLGtDQUFrQywrQkFBK0IsS0FBSyw2Q0FBNkMsMkJBQTJCLGVBQWUsb0JBQW9CLEtBQUssd0VBQXdFLCtCQUErQixtQkFBbUIsS0FBSyxnQkFBZ0Isc0JBQXNCLCtCQUErQixtQkFBbUIsa0JBQWtCLEtBQUssb0JBQW9CLG9CQUFvQixzQkFBc0IsS0FBSyxlQUFlLHVCQUF1QiwyQkFBMkIseUJBQXlCLEtBQUssaUJBQWlCLHNCQUFzQixrQkFBa0Isb0JBQW9CLGtDQUFrQyx1QkFBdUIsNEJBQTRCLDRCQUE0QixzQkFBc0IsS0FBSyxzQkFBc0IsNEJBQTRCLHFCQUFxQixNQUFNLHFCQUFxQjtBQUNsbVE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmc0M7QUFDSjtBQUNJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQ0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RvQztBQUNNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWE7QUFDekI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEb0M7QUFDYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFNO0FBQy9CO0FBQ0EsZUFBZSxvREFBVTtBQUN6QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQU07QUFDL0I7QUFDQSxlQUFlLHFEQUFXO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzhCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG9CQUFvQixtREFBTTtBQUMxQixxQkFBcUIsbURBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3FCOztBQUVoRDtBQUNBLFFBQVEsa0JBQWtCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDhCQUE4Qiw2REFBVztBQUN6QywrQkFBK0IsNkRBQVc7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERzQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFNBQVMsNkRBQVc7QUFDcEI7O0FBRUE7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJtQjs7QUFFOUM7QUFDQSxRQUFRLGtCQUFrQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsaUJBQWlCO0FBQ3ZFO0FBQ0E7QUFDTztBQUNQLFNBQVMsMkRBQVU7QUFDbkI7O0FBRUE7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDWTtBQUN3Qjs7QUFFOUQ7QUFDQSxRQUFRLG1CQUFtQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGlCQUFpQjtBQUNsRjtBQUNBO0FBQ087QUFDUCx5QkFBeUIsMEVBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsbURBQU07QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7VUN6RHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUN3QztBQUNaO0FBQzhDO0FBQ3JEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFEQUFVO0FBQ3pCLG1EQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFVO0FBQ1YsdURBQVU7QUFDVix1REFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVEQUFhO0FBQzNDO0FBQ0E7QUFDQSw4QkFBOEIsdURBQWE7QUFDM0M7QUFDQSxTQUFTO0FBQ1QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVU7QUFDZCxJQUFJLDJEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBLDJEQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakIsSUFBSSwyREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zb3J0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZU1vbnRoLm1qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZVdlZWsubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUaGlzTW9udGgubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUaGlzV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG46cm9vdHtcclxuICAgIC0tY29sb3ItZmc6ICNlZWU7XHJcbiAgICAtLWNvbG9yLWJnOiAjMTIxMjEyO1xyXG4gICAgLS1oZWFkaW5nOiAjNGJiMmY5O1xyXG59XHJcbi5maWx0ZXItd2hpdGV7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzNSUpIGh1ZS1yb3RhdGUoNjVkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoOTUlKTtcclxufVxyXG4uZmlsdGVyID4gcHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KXtcclxuICAgIDpyb290e1xyXG4gICAgICAgIC0tY29sb3ItYmc6ICNmZmZmZmY7XHJcbiAgICAgICAgLS1jb2xvci1mZzogIzFBMUMyMDtcclxuICAgIH1cclxuICAgIC5maWx0ZXItd2hpdGV7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgwJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgzMWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMSUpO1xyXG4gICAgfVxyXG4gICAgLmZpbHRlciA+IHB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIH1cclxufVxyXG5odG1sLCBib2R5e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmh0bWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5ib2R5e1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuZGl2LmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvKiBnYXA6IDMwcHg7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMC4yZnIgM2ZyIDAuM2ZyO1xyXG59XHJcbmhlYWRlcntcclxuICAgIGdyaWQtYXJlYTogMS8xLzEvMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaGVhZGVyID4gaDF7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5kaXYubWVudXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5idXR0b24uY2xvc2VBZGQsXHJcbmJ1dHRvbi5jbG9zZUVkaXQsXHJcbmJ1dHRvbi5jbG9zZUJ0bixcclxuYnV0dG9uLm1lbnVCdG4sXHJcbmJ1dHRvbi5hZGRwcm9qZWN0YnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuZGl2Lm1lbnUgPiAuY2xvc2VCdG4gPiBpbWcsXHJcbmRpdi5tZW51ID4gLm1lbnVCdG4gPiBpbWd7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xyXG4gICAgd2lkdGg6IDEyJTtcclxufVxyXG5idXR0b24jY2xvc2UuY2xvc2VCdG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmRpdi5tYWluLWNvbnRhaW5lcntcclxuICAgIGdyaWQtYXJlYTogMy8xLzMvMjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjJmcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuZGl2Lm1haW4taGVhZGluZ3tcclxuICAgIGdyaWQtYXJlYTogMS8xLzEvMjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2Lm1haW4taGVhZGluZyA+IGgze1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcblxyXG59XHJcbmRpdi5tYWluLWNvbnRlbnR7XHJcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuZGl2LmFkZC10YXNrZGl2e1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbmRpdi5hZGQtdGFza2RpdiA+IGJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIyZjk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbmRpYWxvZ3tcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5hZGRidG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbmRpdi5kYWlsb2ctY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpbHRlciA+IHB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmRpdi5maWx0ZXItZGl2LCBcclxuZGl2LnByb2plY3QtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpbHRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50aGUtcHJvamVjdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmlsdGVyID4gaW1ne1xyXG4gICAgd2lkdGg6IDIuOHJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LmFkZC1wcm9qZWN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5idXR0b24uYWRkcHJvamVjdGJ0bntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbn1cclxuYnV0dG9uLmFkZHByb2plY3RidG4gPiBoM3tcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5kaXYucHJvamVjdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5lZGl0LWRlbGV0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBnYXA6IDJweDtcclxufVxyXG5kaXYuZWRpdC1kZWxldGUgKntcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmZvcm0uYWRkRm9ybSxcclxuZm9ybS5lZGl0Rm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcbmZvcm0uYWRkRm9ybSA+IGlucHV0LFxyXG5mb3JtLmVkaXRGb3JtID4gaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1iZyk7XHJcbn1cclxuZm9ybS5hZGRGb3JtID4gYnV0dG9uLFxyXG5mb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xyXG4gICAgLyogaGVpZ2h0OiAxLjVyZW07ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIyZjk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG59XHJcblxyXG5idXR0b24uY2xvc2VBZGQsXHJcbmJ1dHRvbi5jbG9zZUVkaXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAyMzBweDtcclxufVxyXG5idXR0b24jY2xvc2VBZGQuY2xvc2VBZGQgPiBpbWcsXHJcbmJ1dHRvbiNjbG9zZUVkaXQuY2xvc2VFZGl0ID4gaW1ne1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuZGl2LmNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuZGl2Lm5vLXRhc2stZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbmg0Lm5vLXRhc2t7XHJcbiAgICBjb2xvcjogIzRiYjJmOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuZGl2LnRhc2stZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2MzYztcclxuICAgIGhlaWdodDogMS43cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi8qIGRpdi50YXNrLWRpdiAqe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDogMnJlbTtcclxufSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lB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SUFFSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQztBQUNBOztJQUVJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7QUFDZjtBQUNBOztJQUVJLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBOzs7R0FHR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290e1xcclxcbiAgICAtLWNvbG9yLWZnOiAjZWVlO1xcclxcbiAgICAtLWNvbG9yLWJnOiAjMTIxMjEyO1xcclxcbiAgICAtLWhlYWRpbmc6ICM0YmIyZjk7XFxyXFxufVxcclxcbi5maWx0ZXItd2hpdGV7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDM1JSkgaHVlLXJvdGF0ZSg2NWRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCg5NSUpO1xcclxcbn1cXHJcXG4uZmlsdGVyID4gcHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpe1xcclxcbiAgICA6cm9vdHtcXHJcXG4gICAgICAgIC0tY29sb3ItYmc6ICNmZmZmZmY7XFxyXFxuICAgICAgICAtLWNvbG9yLWZnOiAjMUExQzIwO1xcclxcbiAgICB9XFxyXFxuICAgIC5maWx0ZXItd2hpdGV7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDAlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDMxZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZpbHRlciA+IHB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuZGl2LmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgLyogZ2FwOiAzMHB4OyAqL1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDAuMmZyIDNmciAwLjNmcjtcXHJcXG59XFxyXFxuaGVhZGVye1xcclxcbiAgICBncmlkLWFyZWE6IDEvMS8xLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbmhlYWRlciA+IGgxe1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5kaXYubWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuYnV0dG9uLmNsb3NlQWRkLFxcclxcbmJ1dHRvbi5jbG9zZUVkaXQsXFxyXFxuYnV0dG9uLmNsb3NlQnRuLFxcclxcbmJ1dHRvbi5tZW51QnRuLFxcclxcbmJ1dHRvbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmRpdi5tZW51ID4gLmNsb3NlQnRuID4gaW1nLFxcclxcbmRpdi5tZW51ID4gLm1lbnVCdG4gPiBpbWd7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mZyk7XFxyXFxuICAgIHdpZHRoOiAxMiU7XFxyXFxufVxcclxcbmJ1dHRvbiNjbG9zZS5jbG9zZUJ0bntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuZGl2Lm1haW4tY29udGFpbmVye1xcclxcbiAgICBncmlkLWFyZWE6IDMvMS8zLzI7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMmZyIDNmciAwLjJmcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuZGl2Lm1haW4taGVhZGluZ3tcXHJcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8yO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYubWFpbi1oZWFkaW5nID4gaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuXFxyXFxufVxcclxcbmRpdi5tYWluLWNvbnRlbnR7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbmRpdi5hZGQtdGFza2RpdntcXHJcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbmRpdi5hZGQtdGFza2RpdiA+IGJ1dHRvbntcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMmY5O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuZGlhbG9ne1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcbiAgICBsZWZ0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYuYWRkYnRue1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuZGl2LmRhaWxvZy1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5maWx0ZXIgPiBwe1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmRpdi5maWx0ZXItZGl2LCBcXHJcXG5kaXYucHJvamVjdC1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50aGUtcHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZmlsdGVyID4gaW1ne1xcclxcbiAgICB3aWR0aDogMi44cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5kaXYuYWRkLXByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZGl2LmRpYWxvZy1oZWFkaW5nID4gaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcbmJ1dHRvbi5hZGRwcm9qZWN0YnRue1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbn1cXHJcXG5idXR0b24uYWRkcHJvamVjdGJ0biA+IGgze1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbmRpdi5wcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmVkaXQtZGVsZXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiAycHg7XFxyXFxufVxcclxcbmRpdi5lZGl0LWRlbGV0ZSAqe1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5mb3JtLmFkZEZvcm0sXFxyXFxuZm9ybS5lZGl0Rm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5mb3JtLmFkZEZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtLmVkaXRGb3JtID4gaW5wdXR7XFxyXFxuICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1iZyk7XFxyXFxufVxcclxcbmZvcm0uYWRkRm9ybSA+IGJ1dHRvbixcXHJcXG5mb3JtLmVkaXRGb3JtID4gYnV0dG9ue1xcclxcbiAgICAvKiBoZWlnaHQ6IDEuNXJlbTsgKi9cXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIyZjk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5jbG9zZUFkZCxcXHJcXG5idXR0b24uY2xvc2VFZGl0e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMjMwcHg7XFxyXFxufVxcclxcbmJ1dHRvbiNjbG9zZUFkZC5jbG9zZUFkZCA+IGltZyxcXHJcXG5idXR0b24jY2xvc2VFZGl0LmNsb3NlRWRpdCA+IGltZ3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZnKTtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuZGl2LmNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuZGl2Lm5vLXRhc2stZGl2e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuaDQubm8tdGFza3tcXHJcXG4gICAgY29sb3I6ICM0YmIyZjk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuZGl2LnRhc2stZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYzNjO1xcclxcbiAgICBoZWlnaHQ6IDEuN3JlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLyogZGl2LnRhc2stZGl2ICp7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9zIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBub3RlLCBkdWVEYXRlLCAgcHJvamVjdCwgY2hlY2tlZCl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICBpZihwcm9qZWN0ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIGlmKGNoZWNrZWQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICBcclxuICAgIH07XHJcbn07IiwiaW1wb3J0IEZvbGRlciBmcm9tICcuL2ltZy9mb2xkZXIuc3ZnJztcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi9pbWcvZWRpdC5zdmcnO1xyXG5pbXBvcnQgRGVsZXRlIGZyb20gJy4vaW1nL2RlbGV0ZS5zdmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0cywgdGFncyl7XHJcblxyXG4gICAgaWYodGFncy5maXJzdEVsZW1lbnRDaGlsZCl7XHJcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyh0YWdzKTtcclxuICAgIH1cclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdEZpcnN0TGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGVwcm9qZWN0Rmlyc3RMYXllci5jbGFzc05hbWUgPSAndGhlLXByb2plY3RzJztcclxuXHJcbiAgICAgICAgY29uc3QgdGhlcHJvamVjdFNlY29uZExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhlcHJvamVjdFNlY29uZExheWVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0cyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHRoZXByb2plY3RUaGlyZExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhlcHJvamVjdFRoaXJkTGF5ZXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVyJywgJ3Byb2plY3QtZmlsdGVyJylcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWFnZUZvbGRlci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItaWNvbicsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGltYWdlRm9sZGVyLnNyYyA9IEZvbGRlcjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGFncyc7XHJcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0VGhpcmRMYXllci5hcHBlbmRDaGlsZChpbWFnZUZvbGRlcik7XHJcbiAgICAgICAgdGhlcHJvamVjdFRoaXJkTGF5ZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuYXBwZW5kQ2hpbGQodGhlcHJvamVjdFRoaXJkTGF5ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udHJvbERpdi5jbGFzc05hbWUgPSAnZWRpdC1kZWxldGUnO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBlZGl0SW1hZ2UuY2xhc3NMaXN0LmFkZCgnZWRpdCcsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGVkaXRJbWFnZS5zcmMgPSBFZGl0O1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGRlbGV0ZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScsICdmaWx0ZXItd2hpdGUnKVxyXG4gICAgICAgIGRlbGV0ZUltYWdlLnNyYyA9IERlbGV0ZTtcclxuXHJcbiAgICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChlZGl0SW1hZ2UpO1xyXG4gICAgICAgIGNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpO1xyXG5cclxuICAgICAgICB0aGVwcm9qZWN0U2Vjb25kTGF5ZXIuYXBwZW5kQ2hpbGQoY29udHJvbERpdik7XHJcblxyXG4gICAgICAgIHRoZXByb2plY3RGaXJzdExheWVyLmFwcGVuZENoaWxkKHRoZXByb2plY3RTZWNvbmRMYXllcilcclxuICAgICAgICB0YWdzLmFwcGVuZENoaWxkKHRoZXByb2plY3RGaXJzdExheWVyKVxyXG5cclxuICAgIH0pO1xyXG4gICAgfVxyXG5cclxuLy8gcmVtb3ZlcyAgYWxsIGNoaWxkIGVsZW1lbnRzIG9uIHRoZSBzY3JlZW5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpe1xyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVtb3ZlQWxsQ2hpbGROb2RlcywgY3JlYXRlUHJvamVjdH0iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVByb2plY3R9IGZyb20gJy4vY3JlYXRlLmpzJztcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtcImRlZmF1bHRcIl07XHJcblxyXG4vLyBTb3J0IGJ5IFByb2plY3RzXHJcbmZ1bmN0aW9uIHByb2plY3RTb3J0KCl7XHJcbiAgICBcclxuICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgaWYoIXByb2plY3ROYW1lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgcHJvamVjdHMudW5zaGlmdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2tzIGZvciBzcGVjaWZpYyBwcm9qZWN0IGluIHRoZSB0b2RvcyBhcnJheVxyXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JQcm9qZWN0KHRoZVByb2plY3ROYW1lKXtcclxuICAgICAgICBjb25zdCB0b2Rvc0J5UHJvamVjdCA9IFtdO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRvZG8ucHJvamVjdCA9PSB0aGVQcm9qZWN0TmFtZSlcclxuICAgICAgICAgICAgICAgIHRvZG9zQnlQcm9qZWN0LnVuc2hpZnQodG9kbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9zQnlQcm9qZWN0XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KG9sZFByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSl7XHJcbiAgICAgICAgaWYoIW5ld1Byb2plY3ROYW1lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYocHJvamVjdHNbaV0gPT0gb2xkUHJvamVjdE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0gPSBuZXdQcm9qZWN0TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0TmFtZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldID09IHByb2plY3ROYW1lKXtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHRhZ3Mpe1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RzLCB0YWdzKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7ZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3QsIGNoZWNrRm9yUHJvamVjdCwgYWRkUHJvamVjdCwgcmVuZGVyUHJvamVjdHN9XHJcbn1cclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSBwcm9qZWN0U29ydCgpLmFkZFByb2plY3Q7XHJcbmNvbnN0IGNoZWNrRm9yUHJvamVjdCA9IHByb2plY3RTb3J0KCkuY2hlY2tGb3JQcm9qZWN0O1xyXG5jb25zdCByZW5kZXJQcm9qZWN0cyA9IHByb2plY3RTb3J0KCkucmVuZGVyUHJvamVjdHM7XHJcbmNvbnN0IGVkaXRQcm9qZWN0ID0gcHJvamVjdFNvcnQoKS5lZGl0UHJvamVjdDtcclxuY29uc3QgZGVsZXRlUHJvamVjdCA9IHByb2plY3RTb3J0KCkuZGVsZXRlUHJvamVjdDtcclxuXHJcbmV4cG9ydCB7ZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3QsIGNoZWNrRm9yUHJvamVjdCwgYWRkUHJvamVjdCwgcmVuZGVyUHJvamVjdHN9IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vdG9kb3MuanNcIjtcclxuaW1wb3J0IHtpc1RoaXNXZWVrLCBpc1RoaXNNb250aH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5cclxuLy8gc29ydCBieSBEYXRlXHJcblxyXG5mdW5jdGlvbiBkYXRlU29ydCgpe1xyXG4gICAgLy8gc29ydCBieSB3ZWVrXHJcbiAgICBmdW5jdGlvbiB0b2Rvc0ZvckFXZWVrKCl7XHJcbiAgICAgICAgY29uc3QgdGhpc1dlZWsgPSBbXTtcclxuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHJlbmRlcigpO1xyXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVGhpc1dlZWsodG9kby5kdWVEYXRlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzV2Vlay5wdXNoKHRvZG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXNXZWVrO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc29ydCBieSBtb250aFxyXG4gICAgZnVuY3Rpb24gdG9kb3NGb3JNb250aCgpe1xyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcmVuZGVyKCk7XHJcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYoaXNUaGlzTW9udGgodG9kby5kdWVEYXRlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzTW9udGgucHVzaCh0b2RvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzTW9udGg7ICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3RvZG9zRm9yQVdlZWssIHRvZG9zRm9yTW9udGh9XHJcbn1cclxuXHJcbmNvbnN0IHRvZG9zRm9yQVdlZWsgPSBkYXRlU29ydCgpLnRvZG9zRm9yQVdlZWs7XHJcbmNvbnN0IHRvZG9zRm9yTW9udGggPSBkYXRlU29ydCgpLnRvZG9zRm9yTW9udGg7XHJcblxyXG5leHBvcnQge3RvZG9zRm9yQVdlZWssIHRvZG9zRm9yTW9udGh9IiwiaW1wb3J0IFRvZG9zIGZyb20gXCIuL2NsYXNzLmpzXCJcclxuXHJcbmxldCBhbGxUb2RvcyA9IFtdO1xyXG5mdW5jdGlvbiB0b2Rvc0NyZWF0b3IoKSB7XHJcbiAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBub3RlLCBkdWVEYXRlLCBwcm9qZWN0LCBjaGVja2VkKXtcclxuICAgICAgICBjb25zdCB0b2RvcyA9IG5ldyBUb2Rvcyh0aXRsZSwgbm90ZSwgZHVlRGF0ZSwgcHJvamVjdCwgY2hlY2tlZCk7XHJcbiAgICAgICAgYWRkVG9kb3ModG9kb3MpXHJcbiAgICAgICAgcmV0dXJuIHRvZG9zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBhZGRUb2Rvcyh0b2Rvcyl7XHJcbiAgICAgICAgYWxsVG9kb3MudW5zaGlmdCh0b2Rvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2Rvcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb3MudGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWxsVG9kb3MuZmluZEluZGV4KHRoZVRvZG8gPT4gdGhlVG9kby50aXRsZSA9PT0gdG9kb3MudGl0bGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgIGFsbFRvZG9zLnNoaWZ0KGluZGV4KTtcclxuICAgIH0gXHJcbiAgICBmdW5jdGlvbiBlZGl0VG9kbyh0b2RvcywgbmV3VGl0bGUsIG5ld05vdGUsIG5ld0R1ZURhdGUsIG5ld1Byb2plY3Qpe1xyXG4gICAgICAgIGlmKG5ld1RpdGxlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdG9kb3MudGl0bGUgPSBuZXdUaXRsZVxyXG4gICAgICAgIGlmKG5ld05vdGUgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy5ub3RlID0gbmV3Tm90ZVxyXG4gICAgICAgIGlmKG5ld0R1ZURhdGUgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy5kdWVEYXRlID0gbmV3RHVlRGF0ZVxyXG4gICAgICAgIGlmKG5ld1Byb2plY3QgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0b2Rvcy5wcm9qZWN0ID0gbmV3UHJvamVjdDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiBhbGxUb2RvcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2RlbGV0ZVRvZG8sIGNyZWF0ZVRvZG8sIGVkaXRUb2RvLCByZW5kZXJ9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRvZG8gPSB0b2Rvc0NyZWF0b3IoKS5jcmVhdGVUb2RvO1xyXG5jb25zdCBkZWxldGVUb2RvID0gdG9kb3NDcmVhdG9yKCkuZGVsZXRlVG9kbztcclxuY29uc3QgZWRpdFRvZG8gPSB0b2Rvc0NyZWF0b3IoKS5lZGl0VG9kbztcclxuY29uc3QgcmVuZGVyID0gdG9kb3NDcmVhdG9yKCkucmVuZGVyO1xyXG5cclxuZXhwb3J0IHtjcmVhdGVUb2RvLCBkZWxldGVUb2RvLCByZW5kZXIsIGVkaXRUb2RvfSIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZU1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE0LCA4LCAyNSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE1IGluIHRoZSBzYW1lIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiksIG5ldyBEYXRlKDIwMTUsIDgsIDI1KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU1vbnRoKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuICByZXR1cm4gKFxuICAgIF9kYXRlTGVmdC5nZXRGdWxsWWVhcigpID09PSBfZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICBfZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gX2RhdGVSaWdodC5nZXRNb250aCgpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lTW9udGg7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNTYW1lV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGF0ZUxlZnQsIG9wdGlvbnMpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVSaWdodCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZXZWVrID09PSArZGF0ZVJpZ2h0U3RhcnRPZldlZWs7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lV2VlaztcbiIsImltcG9ydCB7IGlzU2FtZU1vbnRoIH0gZnJvbSBcIi4vaXNTYW1lTW9udGgubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIG1vbnRoIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoaXMgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDE1IFNlcHRlbWJlciAyMDE0IGluIHRoaXMgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAxNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUaGlzTW9udGgoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lTW9udGgoRGF0ZS5ub3coKSwgZGF0ZSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUaGlzTW9udGg7XG4iLCJpbXBvcnQgeyBpc1NhbWVXZWVrIH0gZnJvbSBcIi4vaXNTYW1lV2Vlay5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzVGhpc1dlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUaGlzV2VlaztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7Y3JlYXRlVG9kbywgZWRpdFRvZG8sIGRlbGV0ZVRvZG8sIHJlbmRlcn1mcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5pbXBvcnQge3RvZG9zRm9yQVdlZWssIHRvZG9zRm9yTW9udGh9IGZyb20gXCIuL3NvcnQuanNcIjtcclxuaW1wb3J0IHtkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgY2hlY2tGb3JQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0LmpzJztcclxuaW1wb3J0IHtyZW1vdmVBbGxDaGlsZE5vZGVzfSBmcm9tICcuL2NyZWF0ZS5qcyc7XHJcblxyXG5cclxuY29uc3QgdGl0bGUxID0gXCJHZXQgYSBsaWZlXCI7XHJcbmNvbnN0IG5vdGUxID0gXCJUaGlzIGlzIGhvdyB0byBnZXQgIGEgbGlmZVwiO1xyXG5jb25zdCBkdWVEYXRlMSA9IFwiMjAyNC0wMS0xM1wiO1xyXG5jb25zdCBwcm9qZWN0MSA9IFwid29ya1wiO1xyXG5jb25zdCBjaGVja2VkID0gdHJ1ZTtcclxuXHJcblxyXG5jb25zdCB0b2RvczEgPSBjcmVhdGVUb2RvKHRpdGxlMSwgbm90ZTEsIGR1ZURhdGUxLCBwcm9qZWN0MSwgY2hlY2tlZCk7XHJcbi8vIGRlbGV0ZVRvZG8odG9kb3MxKTtcclxuLy8gdG9kb3MgMlxyXG5cclxuY29uc3QgdGl0bGUyID0gXCJHYmFtXCI7XHJcbmNvbnN0IG5vdGUyID0gXCJUaGlzIGlzIGxpZmVcIjtcclxuY29uc3QgZHVlRGF0ZTIgPSBcIjIwMjQtMDMtMjFcIjtcclxuXHJcbmNvbnN0IHRvZG9zMiA9IGNyZWF0ZVRvZG8odGl0bGUyLCBub3RlMiwgZHVlRGF0ZTIpO1xyXG5lZGl0VG9kbyh0b2RvczIsIFwiSGFuZCBvdmVyXCIpXHJcbi8vIGRlbGV0ZVRvZG8odG9kb3MyKTtcclxuXHJcbi8vIG9iamVjdCAzXHJcbmNvbnN0IHRpdGxlMyA9IFwiQWxleFwiO1xyXG5jb25zdCBub3RlMyA9IFwiTXkgbGlmZVwiO1xyXG5jb25zdCBkdWVEYXRlMyA9IFwiMjAyNC0wMS0xOVwiO1xyXG5jb25zdCBwcm9qZWN0MyA9IFwiUGVyc29uYWxcIlxyXG5cclxuY29uc3QgdG9kb3MzID0gY3JlYXRlVG9kbyh0aXRsZTMsIG5vdGUzLCBkdWVEYXRlMywgcHJvamVjdDMpO1xyXG4vLyBkZWxldGVUb2RvKHRvZG9zMyk7XHJcblxyXG5cclxuXHJcblxyXG5hZGRQcm9qZWN0KFwid29ya1wiKTtcclxuYWRkUHJvamVjdChcInBlcnNvbmFsXCIpO1xyXG5hZGRQcm9qZWN0KFwiZnVuXCIpO1xyXG4vLyBjb25zb2xlLnRhYmxlKHRoZXByb2plY3RzKCkpO1xyXG4vLyBjb25zb2xlLnRhYmxlKGNoZWNrRm9yUHJvamVjdChcIlBlcnNvbmFsXCIpKTtcclxuXHJcbi8vRG9tZSBDYWNoZVxyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKTtcclxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcclxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpYmFyRGFpbG9nJyk7XHJcbmNvbnN0IGZpbHRlclRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9zJyk7XHJcbmNvbnN0IHRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlLXByb2plY3RzJyk7XHJcbmNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbG9nLUVkaXQnKTtcclxuY29uc3QgdGV4dElucHV0RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QnKTtcclxuY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0QnRuJyk7XHJcbmNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRGb3JtJyk7XHJcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdGJ0bicpO1xyXG5jb25zdCBhZGRQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHByb2plY3RkaWFsb2cnKTtcclxuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHByb2plY3R0ZXh0Jyk7XHJcbmNvbnN0IGFkZE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nQWRkUHJvamVjdEJ0bicpXHJcbmNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkRm9ybScpO1xyXG5jb25zdCBjbG9zZUFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUFkZCcpO1xyXG5jb25zdCBjbG9zZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VFZGl0JylcclxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuXHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lcnNcclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpYWxvZy5zaG93KCk7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn0pO1xyXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59KTtcclxuZmlsdGVyVG9kb3MuZm9yRWFjaCh0b2RvRmlsdGVyID0+IHtcclxuICAgIFxyXG4gICAgICAgIHRvZG9GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnQWxsJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKHJlbmRlcigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnVG9kYXknKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRvZG9GaWx0ZXIubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PSAnV2Vlaycpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS50YWJsZSh0b2Rvc0ZvckFXZWVrKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKHRvZG9zRm9yTW9udGgoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufSk7XHJcblxyXG50YWdzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0QW5kRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZGVsZXRlJyk7XHJcblxyXG4gICAgaWYoZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID09ICdub25lJylcclxuICAgICAgICBlZGl0QW5kRGVsZXRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZWRpdEFuZERlbGV0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgYWRkUHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcclxufSk7XHJcblxyXG5hZGROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWVcclxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICByZW5kZXJQcm9qZWN0cyh0YWdzKVxyXG4gICAgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xyXG4gICAgZGVsZXRlQnRuLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWwpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0Jyk7XHJcbiAgICBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG4gICAgZWRpdEJ0bi5mb3JFYWNoKGVkaXQgPT4ge1xyXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0TW9kYWwpOyAgICAgXHJcbiAgICB9KTtcclxuICAgIGFkZEZvcm0ucmVzZXQoKTtcclxufSk7XHJcblxyXG5yZW5kZXJQcm9qZWN0cyh0YWdzKVxyXG5cclxuXHJcbmxldCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcclxubGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcclxubGV0IGFsbFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWdzJyk7XHJcbmxldCBjdXJyZW50UHJvamVjdDtcclxuZWRpdEJ0bi5mb3JFYWNoKGVkaXQgPT4ge1xyXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRNb2RhbCk7ICAgICBcclxufSk7XHJcblxyXG5mdW5jdGlvbiBlZGl0TW9kYWwoZSl7XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgZWRpdERpYWxvZy5zaG93TW9kYWwoKVxyXG4gICAgdGV4dElucHV0RWRpdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VycmVudFByb2plY3QpO1xyXG59XHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld05hbWUgPSBlZGl0UHJvamVjdChjdXJyZW50UHJvamVjdCwgdGV4dElucHV0RWRpdC52YWx1ZSk7XHJcbiAgICBhbGxUYWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICBpZih0YWcudGV4dENvbnRlbnQgPT0gY3VycmVudFByb2plY3Qpe1xyXG4gICAgICAgICAgICB0YWcudGV4dENvbnRlbnQgPSBuZXdOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgICAgIGVkaXRGb3JtLnJlc2V0KCk7XHJcbn0pO1xyXG5cclxuZGVsZXRlQnRuLmZvckVhY2goYnRuID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZGVsKGUpe1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHJlbmRlclByb2plY3RzKHRhZ3MpO1xyXG4gICAgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xyXG4gICAgZGVsZXRlQnRuLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWwpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0Jyk7XHJcbiAgICBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFncycpO1xyXG4gICAgZWRpdEJ0bi5mb3JFYWNoKGVkaXQgPT4ge1xyXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0TW9kYWwpOyAgICAgXHJcbiAgICB9KTtcclxufVxyXG5cclxuY2xvc2VBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgYWRkUHJvamVjdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbn0pO1xyXG5cclxuY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGVkaXREaWFsb2cuY2xvc2UoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY2xvc2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==