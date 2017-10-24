/**
 * Created by salim on 19.07.2016.
 */


/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("Konstruktor-Funktion");

function Album(titel){
    this.titel = titel;
}

var album = new Album("Dj Rush");

console.log(album);
console.log(album.constructor);
