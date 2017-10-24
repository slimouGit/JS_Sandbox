/**
 * Created by salim on 17.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("CLOSURES");

function erstellePositionen(artPosition){
    
    return function(namePosition, betragPosition) {

        if (artPosition === "Einnahme") {
            console.log("Einnahme" + ": " + namePosition + " - " + betragPosition + " Euro");
        }
        if (artPosition === "Ausgabe") {
            console.log("Ausgabe" + ": " + namePosition + " - " + betragPosition + " Euro");
        }
    }
}

//hier wird der Execution Context jeweils erstellt, durchlaufen
//und wieder vom Stack entfernt
//aber die jeweils uebergebene Variable bleibt im Closures erhalten
var erstelleEinnahme = erstellePositionen("Einnahme");
var erstelleAusgabe = erstellePositionen("Ausgabe");


erstelleEinnahme("Gehalt", "5600.00");
erstelleEinnahme("Gutschrift", "75.16");
erstelleAusgabe("Miete", "2500");
erstelleAusgabe("Strom", "55");