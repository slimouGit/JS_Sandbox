/**
 * Created by salim on 18.07.2016.
 */


/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("Objektmethoden");

var operationen = {
    addition: function(x,y){
    return x+y + " Addition";
    },
    substraktion: function(x,y){
        return x+y + " Substraktion";
    },
    multiplikation: function(x,y){
        return x*y + " Multiplikation";
    },
    division: function(x,y){
        return x/y + " Division";
    }
}


console.log(operationen.addition(2,4));
console.log(operationen.addition(234234,4));
console.log(operationen.substraktion(20,4));
console.log(operationen.multiplikation(20,4));
console.log(operationen.division(20,4));