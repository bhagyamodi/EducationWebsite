'use strict';

const addEventOnElements = function (elements,eventType, callback){
    len=elements.length;
    for (let i=0; i<len; i++) {
        elements[i].addEventListener(eventType,callback);
    }
}
const preloader=document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    circle.style.animation="none";
    document.body.classList.add("loaded");

})
