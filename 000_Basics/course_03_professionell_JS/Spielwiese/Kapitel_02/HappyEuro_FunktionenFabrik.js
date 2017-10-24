/**
 * Created by salim on 19.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("HappyEuro - Funktions-Fabrik | Funktionen als Parameter");

var arrayEinnahmen = [];
var arrayAusgaben = [];

function ausgebenPosition(artPosition){
    switch(artPosition){
        case "Einnahme": return function(namePosition, betragPosition){

            arrayEinnahmen.push(betragPosition);

            var gesamtEinnahmen = 0;
            for(var i = 0; i<arrayEinnahmen.length;i++){
                gesamtEinnahmen += arrayEinnahmen[i];
            }

            return "Einnahme: " + namePosition + ", " + betragPosition + " Euro" + " | Gesamt-Einahmen: " + gesamtEinnahmen + " Euro";
        };
        case "Ausgabe": return function(namePosition, betragPosition){

            arrayAusgaben.push(betragPosition);

            var gesamtAusgaben = 0;
            for(var i = 0; i<arrayAusgaben.length;i++){
                gesamtAusgaben += arrayAusgaben[i];
            }

            return "Ausgabe: " + namePosition + ", " + betragPosition + " Euro" + " | Gesamt-Ausgaben: " + gesamtAusgaben + " Euro";
        };
        default: return function(){
            return "Fehler bei der Verarbeitung";
        }
    }
}

var einnahme_1 = ausgebenPosition("Einnahme");
console.log(einnahme_1("Gehalt", 5647.23));

console.log(ausgebenPosition("Ausgabe")("Miete",800.00));
console.log(ausgebenPosition("Ausgabe")("Strom",55.00));
console.log(ausgebenPosition("Einnahme")("Gutschrift",8.00));
console.log(ausgebenPosition("Ausgabe")("Fahrkarte",86.50));
