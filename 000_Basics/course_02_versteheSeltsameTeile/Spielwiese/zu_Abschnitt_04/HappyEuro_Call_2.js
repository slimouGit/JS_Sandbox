/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("CALL 2");


var position = {
    
    id: 1,
    
    getEinnahme: function(){
        var ausgebenEinnahme = this.id++ + ". " + "Einnahme";
        return ausgebenEinnahme;
    },
    
    getAusgabe: function(){
        var ausgebenAusgabe = this.id++ + ". " + "Ausgabe";
        return ausgebenAusgabe;
    }
}

var ausgebenPosition = function(artPosition, namePosition, betragPosition){
    
    if(artPosition === "Einnahme"){
    console.log(this.getEinnahme());
    }
    
    if(artPosition === "Ausgabe"){
    console.log(this.getAusgabe());
    }
    
    console.log(namePosition + ": " + betragPosition + " Euro");
    console.log("---------------------------------");
}


ausgebenPosition.call(position, "Einnahme", "Gehalt", "5670.34");

ausgebenPosition.call(position, "Ausgabe", "Miete", "800.00");

ausgebenPosition.call(position, "Ausgabe", "Strom", "55.00");

