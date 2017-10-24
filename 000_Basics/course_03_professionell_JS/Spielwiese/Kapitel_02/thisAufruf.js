/**
 * Created by salim on 18.07.2016.
 */


/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("this in Funktionen");

var person = {
    name: "Max", //Objekteigenschaft
    getName: function(){
        return this.name; //this bezieht sich hier auf das Object
    }
};

console.log(person.name);

//-------------------------------------------

//globale Variable
var name = "Mustermann";

//globale Funktion
function getNameGlobal(){
    //name = "Fritz stört";
    return this.name;   //Mustermann
}

console.log(getNameGlobal());

//-------------------------------------------

//in den Folgenden Objkekten bezieht sich das this auf den Kontext der Funktion getNameGlobal()
var person2 = {
    name: "Moritz",
    getName: getNameGlobal
};

var person3 = {
    name: "Gundula",
    getName: getNameGlobal
};

console.log(person2.getName());
console.log(person3.getName());