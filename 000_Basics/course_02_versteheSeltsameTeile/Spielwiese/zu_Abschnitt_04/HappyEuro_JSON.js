/**
 * Created by salim on 23.07.2016.
 */

/**
 * Funktion ausgebenThema gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("JSON");

var positionen = [
    pos_001 = {
        namePosition: "Gehalt",
        betragPosition: 5674.78,
        artPosition: "Einnahme"
        },

    pos_002 = {
        namePosition: "Miete",
        betragPosition: 800.00,
        artPosition: "Ausgabe"
        }
];

console.log(positionen);

//JSON-String ausgeben
console.log("JSON.stringify: " + JSON.stringify(pos_001));

//Objekt erstellen
console.log("JSON.parse:");
var pos_001_Value = JSON.parse('{"namePosition": "Gehalt", "betragPosition": "5674.78", "artPosition": "Einnahme"}');

//Objekt ausgeben
console.log(pos_001_Value);

console.log("");

console.log(pos_001_Value.namePosition + ": " + pos_001_Value.betragPosition);


console.log(JSON.stringify(pos_002));

var pos_002_Value = JSON.parse('{"namePosition": "Miete", "betragPosition": "800.00", "artPosition": "Ausgabe"}');

//Objekt ausgeben
console.log(pos_002_Value);

function ausgebenDaten(){
    for(var i = 0; i<positionen.length;i++){
        console.log(positionen[i].namePosition + ": " + positionen[i].betragPosition + " Euro" + " | " + positionen[i].artPosition);
    }
}

ausgebenDaten();