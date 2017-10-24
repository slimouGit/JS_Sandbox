/**
 * Created by salim on 06.08.2016.
 */

//---------------------------------------------------------------------------------

//function Constructor
function Position(namePosition, betragPosition, artPosition, idPosition){
    this.namePosition = namePosition;
    this.betragPosition = betragPosition;
    this.artPosition = artPosition;
    this.idPosition = idPosition;
};//ENDE function Constructor

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

    console.log("-----------------------");
    console.log("----- HAPPY--EURO -----");
    console.log("-----------------------");

    data.push(position);

    console.log(data);

    filterDaten();
};//ENDE erzeugeDatenObj

//---------------------------------------------------------------------------------