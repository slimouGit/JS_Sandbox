"use strict";
window.addEventListener("load", init, false);

let conactData=[];
let contactObj;

class Contact{
    constructor(forename, phone){
        this.forename = forename;
        this.phone = phone;
    }
}
function init(){
    document.getElementById("button").addEventListener("click", function(){
        readInput();
    });
}

function readInput(){
    let forename = document.getElementById('forename');
    let phone = document.getElementById('phone');
    generateObj(forename.value, phone.value)
}

function generateObj(forename, phone) {
    contactObj = new Contact(forename, phone);
    console.log(contactObj);
    addToLocalStorage(contactObj);
}

function addToLocalStorage(contactObj){
    conactData.push(contactObj);
    localStorage.setItem('localData', JSON.stringify(conactData));
    localStorage.getItem('localData');
    printStorage('localData');
}

function printStorage(x){
    for(let i = 0; i<x.length; i++){
        console.log(x[i]);
    }
}