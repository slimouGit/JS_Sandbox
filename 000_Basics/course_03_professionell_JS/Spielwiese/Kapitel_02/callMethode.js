/**
 * Created by salim on 19.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("call-Methode");

function gebeNamenAus(){
    Array.prototype.forEach.call(arguments, function(argument) {
        console.log(argument);
    });
}

gebeNamenAus("Max", "Mustermann");