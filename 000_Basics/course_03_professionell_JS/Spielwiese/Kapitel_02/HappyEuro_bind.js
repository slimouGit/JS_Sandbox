/**
 * Created by salim on 19.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("HappyEuro bind()");

var position = {
    
    artPosition: "Einnahme",
    
    namePosition: "Gehalt",
    
    betragPosition: "5673.89",
    
    positionAusgeben: function(){
        var printPosition = this.artPosition + ": " + this.namePosition + ", " + this.betragPosition;
        return printPosition;
    },
    
    tagessatzAusgeben: function(){
        var tagessatz = this.betragPosition/30;
        tagessatz = tagessatz.toFixed(2);
        return tagessatz;
    }
};

//-----------------------------------------------------

var showSalary = function(){
    console.log("Gehalt: " + this.betragPosition);
}.bind(position);

showSalary();

//-----------------------------------------------------

var showComplete = function(){
    console.log(this.positionAusgeben());
}.bind(position);

showComplete();

//-----------------------------------------------------

var showTagessatz = function(){
    console.log(this.tagessatzAusgeben());
}.bind(position);

showTagessatz(betragPosition);

//-----------------------------------------------------
