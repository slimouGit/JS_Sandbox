/**
 * Created by salim on 03.08.2016.
 */

var id = 0;
var xPosition = true;
var data = [];
var ausgaben = [];
var einnahmen = [];

//---------------------------------------------------------------------------------

//function Constructor
function Position(namePosition, betragPosition, artPosition, idPosition, xPosition){
    this.namePosition = namePosition;
    this.betragPosition = betragPosition;
    this.artPosition = artPosition;
    this.idPosition = idPosition;
    this.xPosition = xPosition;
};//ENDE function Constructor

//---------------------------------------------------------------------------------

function reload(){
    console.log("reload");
}

//RadioButton lesen
function auswahlArtPosition(){

    //RadioButtons anwaehlen
    var radiobutton = document.getElementById("radioButtonPosition");
    var radioFeld = radiobutton.getElementsByTagName("input");

    for(var i=0; i<radioFeld.length; i++){
        if(radioFeld[0].checked){
            artPosition = "Ausgabe";
        }else if(radioFeld[1].checked){
            artPosition = "Einnahme";
        }else {
            artPosition = "Kontostand";
        }
    };

    //Pattern fuer einzublendener ID
    changeVisibility("formInput", "formInput");

    console.log(artPosition + " wurde eingegeben");
};//ENDE auswahlArtPosition

//---------------------------------------------------------------------------------

//Formular lesen
function leseEingabe(){

    console.log("leseEingabe()");
    namePosition = document.getElementById("inputNamePosition").value;
    betragPosition = document.getElementById("inputBetragPosition").value;

    erzeugePositionObj(namePosition, betragPosition, artPosition, id, xPosition);
};//ENDE leseEingabe

//---------------------------------------------------------------------------------

//Object generieren
function erzeugePositionObj(){

    console.log("erzeugePosition()");

    if(artPosition === "Kontostand"){namePosition = "Kontostand"};

    var position = new Position(namePosition, betragPosition, artPosition, id++, xPosition);
    console.log(position);

    erzeugeDatenObj(position);
};//ENDE erzeugePositionObj

//---------------------------------------------------------------------------------

//Datenstrukur erzeugen
function erzeugeDatenObj(position){

    data.push(position);

    console.log(data);

    filterDaten();
};//ENDE erzeugeDatenObj

//---------------------------------------------------------------------------------

//Data Objekt filtern
function filterDaten(){
    
        //das Array positionen wird gefiltert
        var gefilterteAusgaben = data.filter(function(ausgabe, index, data){
            return ausgabe.artPosition === "Ausgabe";
        });
        anzeigenAusgaben(gefilterteAusgaben);
    
        //das Array positionen wird gefiltert
        var gefilterteEinnahmen = data.filter(function(einnahme, index, data){
            return einnahme.artPosition === "Einnahme";
        });
    
    anzeigenEinnahmen(gefilterteEinnahmen);
};//ENDE filterDaten

//---------------------------------------------------------------------------------

//
function anzeigenAusgaben(gefilterteAusgaben){
    console.log("anzeigenAusgaben");
    console.log(gefilterteAusgaben.length);
    console.log(gefilterteAusgaben);
    
    counter = 0;
    
    ausgaben = gefilterteAusgaben;
    
    for(var i = 0; i<ausgaben.length;i++){
        console.log(counter++ + ". " + ausgaben[i].namePosition + ": " + ausgaben[i].betragPosition + " - " + "id: " + ausgaben[i].idPosition + "   Index: " + i);
    }
};

//---------------------------------------------------------------------------------

//
function anzeigenEinnahmen(gefilterteEinnahmen){
    console.log("anzeigenEinnahmen");
    console.log(gefilterteEinnahmen.length);
    console.log(gefilterteEinnahmen);
    
    counter = 0;
    
    einnahmen = gefilterteEinnahmen;
    
    for(var i = 0; i<einnahmen.length;i++){
        console.log(counter++ + ". " + einnahmen[i].namePosition + ": " + einnahmen[i].betragPosition + " - " + "id: " + einnahmen[i].idPosition + "   Index: " + i);
    }
};

//---------------------------------------------------------------------------------

//Pattern zum vergeben der Properties fuer die Sichtbarkeit
function changeVisibility(className, varName){
    var varName = document.getElementById(className);
    varName.classList.remove("hiddenArea");
    varName.classList.add("visibleArea", "heightArea");
};//ENDE changeVisibility

//---------------------------------------------------------------------------------