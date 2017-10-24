/**
 * Created by Salim on 17.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("checkFunction");

function addition(x,y){
    if((typeof x !== "number") || (typeof y !== "number")){
        throw new TypeError("Parameter müssen Zahlen seien")
    }
    return console.log(x+y);
}

addition(2,3);
//addition("2",3);

function sallary(name,income,outgo){
    if(income <= outgo){
        throw new Error(name + ", Du verdienst zu wenig");
    }

    var solution = income - outgo;

    return console.log(name + ": " + solution + " Euro uebrig");
}

sallary("Salim",5600, 2000);
//sallary("Trottel",1600, 2000);
