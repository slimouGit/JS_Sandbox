/**
 * Created by salim on 28.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("map()-Methode");

//--------------------------------------------------------------------------------

//Array initialisieren
var interpreten = [
    {
        name: "Nick Cave"
    },
    {
        name: "Ben Harper"
    }
];

//--------------------------------------------------------------------------------

//Array ausgeben mit der for-Schleife (imperativ)
var namen1 = [];
for(var i=0;i<interpreten.length;i++){
    namen1.push(interpreten[i].name);
}
console.log(namen1);

//--------------------------------------------------------------------------------

//Array ausgeben mit der map()-Methode (funktional)
var namen2 = interpreten.map(function(interpret, index, interpreten){
    return interpret.name;
});
console.log(namen2);

//--------------------------------------------------------------------------------