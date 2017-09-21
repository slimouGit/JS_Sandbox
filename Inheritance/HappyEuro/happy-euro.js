"use strict";

window.addEventListener('load', init);

function init(){
    document.getElementById("button").addEventListener("click", function(){
        readInput();
    });
};

function readInput(){
    let error = true;
    let inputValue = document.getElementById("inputValue");
    let inputName = document.getElementById("inputName");
    let selectValue = document.getElementById("selectValue");

    if((selectValue.value == "default")){
        alert("Fehler");
    }else{
        error = false;
        generateObj(inputName.value, inputValue.value, selectValue.value)
    }
}



let counter = 1;
let positionen = [];
let einnahmen = [];
let ausgaben = [];

class Position{
    constructor(id, namePosition, betragPosition){
        this.id = counter++;
        this.namePosition = namePosition;
        this.betragPosition = betragPosition;
    }

    pushPosition(){
        console.log("Position " + this.namePosition);
    }
}

class Eingabe extends Position{
    constructor(id, namePosition, betragPosition, artPosition){
        super(id, namePosition, betragPosition);
        this.artPosition = artPosition;
    }

    pushPosition(x, y){
        let _betragPosition = parseFloat(y);
        if(x==="Ausgabe"){
            pushPosition(ausgaben, _betragPosition);
            getGesamt(ausgaben);
        }else{
            pushPosition(einnahmen, _betragPosition);
            getGesamt(einnahmen);
        }
    }
}

class Ausgabe extends Position{
    constructor(id, namePosition, betragPosition, artPosition){
        super(id, namePosition, betragPosition);
        this.artPosition = "Ausgabe";
    }

    pushPosition(){
        console.log("Ausgabe " + this.namePosition + " " + this.betragPosition);
        let _betragPosition = parseFloat(this.betragPosition);
        pushPosition(ausgaben, _betragPosition);
        getGesamt(ausgaben);
    }
}

class Einnahme extends Position{
    constructor(id, namePosition, betragPosition, artPosition){
        super(id, namePosition, betragPosition);
        this.artPosition = "Einnahme";
    }

    pushPosition(){
        console.log("Einnahmen " + this.namePosition + " " + this.betragPosition);
        let _betragPosition = parseFloat(this.betragPosition);
        pushPosition(einnahmen, _betragPosition);
        getGesamt(einnahmen);
    }
}

function pushPosition(x,y){
    x.push(y);
};

function getGesamt(x){
    let gesamtBetrag = 0;
    for(let item of x){
        let aktIn = item;
        gesamtBetrag+=aktIn;
    }
    console.log(gesamtBetrag + " Gesamt");
}

let miete = new Ausgabe("", "Miete", 800);
miete.pushPosition();

let gehalt = new Einnahme("", "Gehalt", 2134.45);
gehalt.pushPosition();

let strom = new Ausgabe("", "Strom", 60);
strom.pushPosition();


let gewinn = new Einnahme("", "Gewinn", 50000);
gewinn.pushPosition();

let fahrkarte = new Ausgabe("", "Fahrkarte", 78.50);
fahrkarte.pushPosition();

let testEingabe = new Eingabe("", "Test", "8000", "Einnahme")
let testObjekt;

function generateObj(){
    console.log(inputName.value);
    console.log(inputValue.value);
    console.log(selectValue.value);
    let _inputName = inputName.value;
    let _inputValue = inputValue.value;
    let _selectValue = selectValue.value;

    testObjekt = new Eingabe("", _inputName, _inputValue, _selectValue);
    console.log(testObjekt);
    testObjekt.pushPosition(_selectValue, _inputValue);
}
