/**
 * Created by salim on 03.08.2016.
 */

var id = 0;
var data = [];

//---------------------------------------------------------------------------------

//function Constructor
function Position(namePosition, betragPosition, artPosition, idPosition){
    this.namePosition = namePosition;
    this.betragPosition = betragPosition;
    this.artPosition = artPosition;
    this.idPosition = idPosition;
};//ENDE function Constructor

//---------------------------------------------------------------------------------

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

    erzeugePositionObj(namePosition, betragPosition, artPosition, id);
};//ENDE leseEingabe

//---------------------------------------------------------------------------------

//Object generieren
function erzeugePositionObj(){

    console.log("erzeugePosition()");

    if(artPosition === "Kontostand"){namePosition = "Kontostand"};

    var position = new Position(namePosition, betragPosition, artPosition, id++);
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

    for(var i = 0; i<gefilterteAusgaben.length;i++){
        console.log(gefilterteAusgaben[i].namePosition + ": " + gefilterteAusgaben[i].betragPosition);
    }
};

//---------------------------------------------------------------------------------

//
function anzeigenEinnahmen(gefilterteEinnahmen){
    console.log("anzeigenEinnahmen");
    console.log(gefilterteEinnahmen.length);
    console.log(gefilterteEinnahmen);

    for(var i = 0; i<gefilterteEinnahmen.length;i++){
        console.log(gefilterteEinnahmen[i].namePosition + ": " + gefilterteEinnahmen[i].betragPosition);
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