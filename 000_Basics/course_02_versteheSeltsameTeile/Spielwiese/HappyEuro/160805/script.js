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
    console.log("-----------------------");
    
    filterDaten();
};//ENDE erzeugeDatenObj

//---------------------------------------------------------------------------------

//Data Objekt filtern
function filterDaten(){
    //das Array positionen wird nach Ausgaben gefiltert
    var gefilterteAusgaben = data.filter(function(ausgabe, index, data){
        return ausgabe.artPosition === "Ausgabe";
    });
    
    if(gefilterteAusgaben.length>0){ 
        anzeigenAusgaben(gefilterteAusgaben); 
    }
    
    //--------------------------------------------------------------------------------- 
    
    //das Array positionen wird nach Einnahmen gefiltert
    var gefilterteEinnahmen = data.filter(function(einnahme, index, data){
        return einnahme.artPosition === "Einnahme";
    });
    
    if(gefilterteEinnahmen.length>0){ 
        anzeigenEinnahmen(gefilterteEinnahmen); 
    }
    
    //---------------------------------------------------------------------------------
    
    //das Array positionen wird nach Konto gefiltert
    var gefilterterKontostand = data.filter(function(konto, index, data){
        return konto.artPosition === "Kontostand";
    });
    
    if(gefilterterKontostand.length>0){ 
        anzeigenKontostand(gefilterterKontostand); 
    }
    
    //---------------------------------------------------------------------------------
    
};//ENDE filterDaten

//---------------------------------------------------------------------------------

//Funktion anzeigenAusgaben nimmt alle als Ausgabe deklarierten Daten entgegen
function anzeigenAusgaben(gefilterteAusgaben){
    console.log("anzeigenAusgaben()");
    console.log("Anzahl: " + gefilterteAusgaben.length);
    console.log(gefilterteAusgaben);
    var counter = 1;
    for(var i = 0; i<gefilterteAusgaben.length;i++){
        console.log(counter++ + ": " + gefilterteAusgaben[i].namePosition + ": " + gefilterteAusgaben[i].betragPosition + " Euro " + gefilterteAusgaben[i].idPosition);
    }
    console.log("-----------------------");
    
    berechneGesamtAusgaben(gefilterteAusgaben);
        
};//ENDE anzeigenAusgaben

//---------------------------------------------------------------------------------

//Funktion anzeigenAusgaben nimmt alle als Einnahme deklarierten Daten entgegen
function anzeigenEinnahmen(gefilterteEinnahmen){
    console.log("anzeigenEinnahmen()");
    console.log("Anzahl: " + gefilterteEinnahmen.length);
    console.log(gefilterteEinnahmen);
    var counter = 1;
    for(var i = 0; i<gefilterteEinnahmen.length;i++){
        console.log(counter++ + ": " + gefilterteEinnahmen[i].namePosition + ": " + gefilterteEinnahmen[i].betragPosition + " Euro");
    }
    console.log("-----------------------");
    
    berechnenGesamtEinnahmen(gefilterteEinnahmen);
    
};//ENDE anzeigenEinnahmen

//---------------------------------------------------------------------------------

function berechneGesamtAusgaben(gefilterteAusgaben){
    console.log("berechneGesamtAusgaben()");
    
    var ausgabeErgebnis = 0;
    
    for(var i = 0; i<gefilterteAusgaben.length; i++){
        var temp = gefilterteAusgaben[i].betragPosition;
        temp = parseFloat(temp);
        ausgabeErgebnis+=temp;
    }
    console.log(ausgabeErgebnis + " Euro");
    ausgabeErgebnis = parseFloat(ausgabeErgebnis);
    berechnenGesamtErgebnis(ausgabeErgebnis, null);
};

//---------------------------------------------------------------------------------

function berechnenGesamtEinnahmen(gefilterteEinnahmen){
    console.log("berechnenGesamtEinnahmen()");
    
    var einnahmeErgebnis = 0;
    
    for(var i = 0; i<gefilterteEinnahmen.length; i++){
        var temp = gefilterteEinnahmen[i].betragPosition;
        temp = parseFloat(temp);
        einnahmeErgebnis+=temp;
    }
    console.log(einnahmeErgebnis + " Euro");
    einnahmeErgebnis = parseFloat(einnahmeErgebnis);
    berechnenGesamtErgebnis(null, einnahmeErgebnis);
};

//---------------------------------------------------------------------------------

function berechnenGesamtErgebnis(ausgabeErgebnis, einnahmeErgebnis){
    console.log("berechnenGesamtErgebnis()");
    
    var ausgabeErgebnisTemp;
    var einnahmeErgebnisTemp;
    
    if(ausgabeErgebnis===null){
        alert("ausgabeErgebnis ist null")
    }else(ausgabeErgebnisTemp = ausgabeErgebnis);
    
    if(einnahmeErgebnis===null){
        alert("einnahmeErgebnis ist null")
    }else(einnahmeErgebnisTemp = einnahmeErgebnis);
    
    console.log("Ausgaben: " + ausgabeErgebnis);
    console.log("Einnahmen: " + einnahmeErgebnis);
    
   var ergebnis = einnahmeErgebnis - ausgabeErgebnis;
   
   console.log(ergebnis + " Euro");
}

//---------------------------------------------------------------------------------

//Funktion anzeigenKontostand nimmt alle als Kontostand deglarierten Daten entgegen
function anzeigenKontostand(gefilterterKontostand){
    console.log("anzeigenKontostand()");
    console.log("Anzahl: " + gefilterterKontostand.length);
    console.log(gefilterterKontostand);
    
    //es soll nur der zuletzt angegebene Kontostand beruecksichtigt werden
    var laengeKonto = gefilterterKontostand.length;
    laengeKonto-=1;
    console.log("aktueller Kontostand: " + gefilterterKontostand[laengeKonto].betragPosition + " Euro");
};//ENDE anzeigenKontostand

//---------------------------------------------------------------------------------

//Pattern zum vergeben der Properties fuer die Sichtbarkeit
function changeVisibility(className, varName){
    var varName = document.getElementById(className);
    varName.classList.remove("hiddenArea");
    varName.classList.add("visibleArea", "heightArea");
};//ENDE changeVisibility

//---------------------------------------------------------------------------------