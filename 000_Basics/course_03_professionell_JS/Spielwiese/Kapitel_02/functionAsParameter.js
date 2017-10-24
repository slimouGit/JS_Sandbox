/**
 * Created by salim on 18.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("functionAsParameter - Funktions-Fabrik");

function operationenFabrik(name){
    switch(name){
        case "addition": return function(x,y){
            return x+y + " Addition";
        };
        case "substraktion": return function(x,y){
            return x-y + " Substraktion";
        };
        case "multiplikation": return function(x,y){
            return x*y + " Multiplikation";
        };
        case "division": return function(x,y){
            return x/y + " Division";
        };
        default: return function(){
            return NaN;
        }
    }
}

//Aufrufen der Funktionen
var addition = operationenFabrik("addition");
console.log(addition(2,2));

//Kurzschreibweise
console.log(operationenFabrik("addition")(3,3));

var substraktion = operationenFabrik("substraktion");
console.log(substraktion(23,15));

console.log(operationenFabrik("substraktion")(3,3));

console.log(operationenFabrik("multiplikation")(2,4));

console.log(operationenFabrik("division")(9,2));
