import {render}from "./todos.js";
import {sortToMain} from './index.js';

const menuBtn = document.querySelector('.menuBtn');
const close = document.querySelector('#close');
const dialog = document.querySelector('.sibarDailog');
const mainContent = document.querySelector('.main-container');


//Opens Dialog menu for mobile
function openMenu(){
    dialog.show();
    menuBtn.style.display = "none";
    mainContent.style.display = 'none';
    close.style.display = "flex";
}
// Closes the dialog Menu for Mobile
function closeMenu(){
    dialog.close();
    const thisprojects = render();
    sortToMain(thisprojects);
    menuBtn.style.display = "flex";
    mainContent.style.display = 'grid';
    close.style.display = "none";
}


export{closeMenu, openMenu}