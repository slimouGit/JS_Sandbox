/**
 * Created by Salim on 17.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("globalVar");

var wert_1=20;

function add_1(wert_1,y){
    wert_1 = 10;
    return wert_1 + y;
}

console.log(add_1(wert_1, 1))

function add_2(wert_1,y){
    return wert_1 + y;
}

console.log(add_2(this.wert_1, 10))

//ERKENNTNISSE: KEINE!!!