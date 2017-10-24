/**
 * Created by salim on 19.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("apply-Methode");

function gebeNamenAus(){
    Array.prototype.forEach.apply(arguments, [function(argument) {
        console.log(argument);
    }]);
}

gebeNamenAus("Max", "Mustermann");