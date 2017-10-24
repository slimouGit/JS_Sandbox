/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
 ausgebenThema("CALL 1");


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


//Ausgabe ueber call()

//gesamte Position ausgeben
var callPosition = function(){
    console.log("Position: " + this.getPosition());
};

callPosition.call(position);


//nur Betrag ausgeben
var callBetrag = function(){
    console.log("Soviel ist im Pott: " + this.getBetrag());
    console.log("---------------------------------");
};

callBetrag.call(position);

//mit Argumenten ausgeben
var callPosition_mitAuthor = function(vorname, nachname){
    console.log("Author: " + vorname + " " + nachname); 
    console.log("Position: " + this.getPosition());
    console.log("---------------------------------");
}

callPosition_mitAuthor.call(position, "Salim", "Oussayfi");

callPosition_mitAuthor.call(position, "Hans", "Wurst");

