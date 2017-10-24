/**
 * Created by salim on 20.07.2016.
 */
/**
 * Funktion ausgebenThema gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("Function Constructor");

//----------------------------------------------------------------------------------------------------------------

var countEinnahme = 0;
var countAusgabe = 0;

//----------------------------------------------------------------------------------------------------------------

//function constructor
function Position(artPosition, namePosition, betragPosition){
    this.artPosition = artPosition;
    this.namePosition = namePosition;
    this.betragPosition = betragPosition;
    //console.log("-------------------------------------------------");
};

//----------------------------------------------------------------------------------------------------------------

//prototype gibt Position formatiert aus
Position.prototype.getFullPosition = function() {
    console.log("----------------------------------------");
    return this.artPosition + ": " + this.namePosition + ", " + this.betragPosition.toFixed(2) + " Euro";
};

//------------------------------

//prototype gibt Art der Position aus
Position.prototype.checkPosition = function() {
    console.log("----------------------------------------");
    console.log("CHECK INPUT");
    if(this.artPosition === "Einnahme") {
        countEinnahme++;
        return "Einnahme Nr. " + countEinnahme + ": " + this.betragPosition.toFixed(2) + " Euro";
    }
    if(this.artPosition === "Ausgabe") {
        countAusgabe++;
        return "Ausgabe Nr. " + countAusgabe + ": " + this.betragPosition.toFixed(2) + " Euro";
    }
};

//------------------------------

//prototype gibt Position formatiert mit Namen des Verfassers aus
Position.prototype.addAuthor = function(nameAuthor){
    return this.getFullPosition() + ", eingetragen von: " + nameAuthor;
};

//----------------------------------------------------------------------------------------------------------------

//Objekte erzeugen
var pos_001 = new Position("Einnahme", "Gehalt", 5674.89);
var pos_002 = new Position("Ausgabe", "Miete", 800.00);
var pos_003 = new Position("Einnahme", "Lotto-Gewinn", 2300134.78);
var pos_004 = new Position("Ausgabe", "Strom", 55.00);

//----------------------------------------------------------------------------------------------------------------

//Ausgaben
console.log(pos_001.checkPosition());
console.log(pos_002.checkPosition());
console.log(pos_003.checkPosition());
console.log(pos_004.checkPosition());

console.log(pos_001.getFullPosition());
console.log(pos_001.addAuthor("Salim"));

console.log(pos_002.getFullPosition());
console.log(pos_002.addAuthor("Detlef"));

console.log(pos_003.getFullPosition());
console.log(pos_003.addAuthor("Salim"));

console.log(pos_004.getFullPosition());
console.log(pos_004.addAuthor("Mirinda"));

//----------------------------------------------------------------------------------------------------------------

