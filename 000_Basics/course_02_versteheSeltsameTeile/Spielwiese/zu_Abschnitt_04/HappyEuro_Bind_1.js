/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
 ausgebenThema("BIND");


//Positions-Objekt erstellen
var position = {
    artPosition: "Einnahme",
    namePosition: "Gehalt",
    betragPosition: "5600.54",
    
    getPosition: function(){
       var printFullPosition = this.artPosition + ": " + this.namePosition + " " + this.betragPosition + " Euro";
       return printFullPosition;
    },
    
    getBetrag: function(){
        var printBetrag = this.betragPosition + " Euro";
        return printBetrag;
    }
}

//Ausgabe ueber bind()

//gesamte Position ausgeben
var showPosition = function(){
    console.log("So siehts aus: " + this.getPosition());
}.bind(position);

showPosition();

//nur Betrag ausgeben
var showBetrag = function(){
    console.log("Soviel ist im Pott: " + this.getBetrag());
}.bind(position);

showBetrag();
