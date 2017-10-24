/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
 ausgebenThema("APPLY");
 
 var position = {
    id: 1,
     
    getEinnahme: function(){
        var ausgebenEinnahme = this.id++  + "." + " Einnahme";
        return ausgebenEinnahme;
    },
     
    getAusgabe: function(){
        var ausgebenAusgabe = this.id++ + "." + " Ausgabe";
        return ausgebenAusgabe;
    }
}
 
var ausgebenPosition = function(artPosition, namePosition, betragPosition){
     
    if(artPosition === "Einnahme"){
        console.log(this.getEinnahme());
    }else{
        console.log(this.getAusgabe());
    }
     
    console.log(namePosition + ": " + betragPosition + " Euro");
    console.log("---------------------------------");
     
}

ausgebenPosition.apply(position, ["Einnahme", "Gehalt", "5670.34"]);
ausgebenPosition.apply(position, ["Einnahme", "Lotto-Gewinn", "5410520.10"]);



//mit IIFE
(function(artPosition, namePosition, betragPosition){
     
    if(artPosition === "Einnahme"){
        console.log(this.getEinnahme());
    }else{
        console.log(this.getAusgabe());
    }
     
    console.log(namePosition + ": " + betragPosition + " Euro");
    console.log("---------------------------------");
     
}).apply(position, ["Ausgabe", "Eigentums-Wohnung", "1200000.25"]);