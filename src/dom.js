function domManipulation(){
    function myCreateElement(variableName, element){
        variableName = document.createElement(element);
        return variableName;
    }
    return {myCreateElement}
}
const create = domManipulation().myCreateElement;
return {create};