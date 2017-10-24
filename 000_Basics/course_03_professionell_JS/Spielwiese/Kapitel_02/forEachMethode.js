/**
 * Created by salim on 19.07.2016.
 */
/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("forEach() vs for");

var interpreten = ["Kyuss", "Dozer", "Monster Magnet"];

//imperative Programmierung
//jeder einzelne Schritt muss festgelegt werden
console.log("imperativer for-Schleife");

for(var i =0; i<interpreten.length;i++){
    console.log(interpreten[i]);
};

console.log("------------------------------------");
//Funktionale Iteration mittels forEach()
console.log("funktionale forEach()-Methode");

interpreten.forEach(function(interpret, index, interpreten){//die Parameter index und interpreten sind hier eigentlich nicht notwendig
    console.log(interpret);
});



