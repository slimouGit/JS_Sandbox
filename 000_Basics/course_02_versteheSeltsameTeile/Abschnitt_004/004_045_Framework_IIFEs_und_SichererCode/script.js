//var greeting = "Salut";

//IIFE
//die Variable greeting steht im seperaten execution context und kolidiert nicht mit gleichnamiger Variabel aus greet.js
(function(global, name){ //ertser Parameter referenziert das globale Objekt
        var greeting = "Hallo"
        console.log("IIFE: " + greeting + " " + name);
        global.greeting = greeting; //global object manipulieren
    }
    (this, "Salim")//invoken
);

console.log(greeting);//hier wird auf Variable aus greet.js zugegriffen