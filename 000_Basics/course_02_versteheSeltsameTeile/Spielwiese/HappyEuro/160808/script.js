/**
 * Created by salim on 03.08.2016.
 */

//---------------------------------------------------------------------------------
//GLOBALS
//---------------------------------------------------------------------------------

var id = 0;
var data = [];
var ausgabeErgebnis, einnahmeErgebnis, kontoStand;

//---------------------------------------------------------------------------------


//---------------------------------------------------------------------------------
//LISTENER
//---------------------------------------------------------------------------------

window.addEventListener("load", init);

//---------------------------------------------------------------------------------

//die EventListener werden registriert
function init(){
    document.getElementById("buttonEingabe").addEventListener("click", leseEingabe);
    document.getElementById("buttonReload").addEventListener("click", reload);
};//ENDE init

//---------------------------------------------------------------------------------


//---------------------------------------------------------------------------------
//OBJECT
//---------------------------------------------------------------------------------

//function Constructor
function Position(namePosition, betragPosition, artPosition, idPosition){
    this.namePosition = namePosition;
    this.betragPosition = betragPosition;
    this.artPosition = artPosition;
    this.idPosition = idPosition;
};//ENDE function Constructor

//---------------------------------------------------------------------------------



//---------------------------------------------------------------------------------
//INPUT
//---------------------------------------------------------------------------------

// RadioButton lesen
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
            document.getElementById("inputNamePosition").value = "Kontostand";
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

    testeEingabe(namePosition, betragPosition, artPosition, id);
};//ENDE leseEingabe

//---------------------------------------------------------------------------------

//Eingabe testen
function testeEingabe(){

    console.log("testeEingabe()");

    //Regulaerer Ausdruck fuer eingegebenen Betrag
    var pattern_Betrag = /^((-?)[0-9]*)(,?)([0-9]*)$/;

    if(namePosition==="") throw "Position eingeben";
    if(betragPosition==="") throw "Betrag eingeben";
    if(!(betragPosition.match(pattern_Betrag))) throw "falsche Eingabe";

    erzeugePositionObj(namePosition, betragPosition, artPosition, id);

};//ENDE teste Eingabe


//---------------------------------------------------------------------------------


//---------------------------------------------------------------------------------
//OBJECT
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


//---------------------------------------------------------------------------------
//OUTPUT
//---------------------------------------------------------------------------------

//Data Objekt filtern
function filterDaten(){
    
    console.log("filterDaten()");
    
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

};//ENDE filterDaten

//---------------------------------------------------------------------------------

//
function anzeigenAusgaben(gefilterteAusgaben){
    console.log("anzeigenAusgaben()");
    console.log("AUSGABEN");
    console.log("Anzahl: " + gefilterteAusgaben.length);
    console.log(gefilterteAusgaben);

    //Pattern fuer einzublendener ID
    changeVisibility("ausgaben", "ausgaben");
    
    var anzeigenAusgaben = document.getElementById("anzeigenAusgaben");
    var counter = 1;
    
    //---------------------------------------------------------------------------------

    //bevor die Liste neu aufgebaut wird, wird zunaechst das erste Element erntfernt
    while (anzeigenAusgaben.firstChild)
        anzeigenAusgaben.removeChild(anzeigenAusgaben.firstChild);
        
    for(var i = 0; i<gefilterteAusgaben.length;i++){
        
        //---------------------------------------------------------------------------------
        var anzeigenAusgabenListenPunkt = document.createElement("li");
        var span = document.createElement("span");
        var a = document.createElement('a');
        var linkText = document.createTextNode(" X ");
        
        Ausgabe_Id = "out_id_";
        Ausgabe_Id = Ausgabe_Id.concat(data[i].idPosition);
        
        a.appendChild(linkText);
        a.setAttribute("id", Ausgabe_Id);
        a.setAttribute("class", "delete_Link");
        a.title = "Nr.: " + i + ", ID: " + Ausgabe_Id;
        //---------------------------------------------------------------------------------
        
        var formatierteAusgabenID   = gefilterteAusgaben[i].namePosition + ": " + gefilterteAusgaben[i].betragPosition + " Euro " + "id: " + gefilterteAusgaben[i].idPosition;
        var formatierteAusgaben     = counter++ + ". " + gefilterteAusgaben[i].namePosition + ": " + gefilterteAusgaben[i].betragPosition + " Euro ";
        
        console.log(formatierteAusgabenID);
        
        //---------------------------------------------------------------------------------
        anzeigenAusgabenListenPunkt.appendChild(document.createTextNode(formatierteAusgaben));
        anzeigenAusgaben.appendChild(anzeigenAusgabenListenPunkt);
        anzeigenAusgabenListenPunkt.appendChild(span);
        span.appendChild(a);
        //---------------------------------------------------------------------------------
    }
    console.log("-----------------------");
    
    berechneGesamtAusgaben(gefilterteAusgaben);
};//ENDE anzeigenAusgaben

//---------------------------------------------------------------------------------

//
function berechneGesamtAusgaben(gefilterteAusgaben){
    console.log("berechneGesamtAusgaben()");
    console.log("GESAMT-AUSGABEN");
    
    var anzeigenAusgabenGesamt = document.getElementById("anzeigenAusgabenGesamt");
    
    ausgabeErgebnis = 0;
    
    for(var i = 0; i<gefilterteAusgaben.length; i++){
        var temp = gefilterteAusgaben[i].betragPosition;

        //aus dem Komma wird ein Punkt
        temp = temp.replace(",", ".");

        temp = parseFloat(temp);
        ausgabeErgebnis+=temp;

    }

    //---------------------------------------------------------------

    ausgabeErgebnis = ausgabeErgebnis.toString();
    ausgabeErgebnis = ausgabeErgebnis.replace(".", ",");

    console.log(ausgabeErgebnis + " Euro");

    ausgabeErgebnis = ausgabeErgebnis.replace(",", ".");
    ausgabeErgebnis = parseFloat(ausgabeErgebnis);

    //---------------------------------------------------------------
    
    anzeigenAusgabenGesamt.firstChild.nodeValue = ausgabeErgebnis + " Euro";
    
    //---------------------------------------------------------------

    console.log("-----------------------");
    
    berechnenGesamtErgebnis();
};//ENDE berechneGesamtAusgaben

//---------------------------------------------------------------------------------

//
function anzeigenEinnahmen(gefilterteEinnahmen){
    console.log("anzeigenEinnahmen()");
    console.log("EINNAHMEN");
    console.log("Anzahl: " + gefilterteEinnahmen.length);
    console.log(gefilterteEinnahmen);
    
    //Pattern fuer einzublendener ID
    changeVisibility("einnahmen", "einnahmen");
    
    var anzeigenEinnahmen = document.getElementById("anzeigenEinnahmen");
    var counter = 1;
    
    //bevor die Liste neu aufgebaut wird, wird zunaechst das erste Element erntfernt
    while (anzeigenEinnahmen.firstChild)
        anzeigenEinnahmen.removeChild(anzeigenEinnahmen.firstChild);
        
    for(var i = 0; i<gefilterteEinnahmen.length;i++){
        var anzeigenEinnahmenListenPunkt = document.createElement("li");
        
        var formatierteEinnahmenID   = gefilterteEinnahmen[i].namePosition + ": " + gefilterteEinnahmen[i].betragPosition + " Euro " + "id: " + gefilterteEinnahmen[i].idPosition;
        var formatierteEinnahmen     = counter++ + ". " + gefilterteEinnahmen[i].namePosition + ": " + gefilterteEinnahmen[i].betragPosition + " Euro ";
        
        console.log(formatierteEinnahmenID);
        
        anzeigenEinnahmenListenPunkt.appendChild(document.createTextNode(formatierteEinnahmen));
        anzeigenEinnahmen.appendChild(anzeigenEinnahmenListenPunkt);
    }
    console.log("-----------------------");
    
    berechnenGesamtEinnahmen(gefilterteEinnahmen);
};//ENDE anzeigenEinnahmen

//---------------------------------------------------------------------------------

//
function berechnenGesamtEinnahmen(gefilterteEinnahmen){
    console.log("berechnenGesamtEinnahmen()");
    console.log("GESAMT-EINNAHMEN");
    
    einnahmeErgebnis = 0;
    
    for(var i = 0; i<gefilterteEinnahmen.length; i++){
        var temp = gefilterteEinnahmen[i].betragPosition;

        //aus dem Komma wird ein Punkt
        temp = temp.replace(",", ".");

        temp = parseFloat(temp);
        einnahmeErgebnis+=temp;
    }

    //---------------------------------------------------------------

    einnahmeErgebnis = einnahmeErgebnis.toString();
    einnahmeErgebnis = einnahmeErgebnis.replace(".", ",");

    console.log(einnahmeErgebnis + " Euro");

    einnahmeErgebnis = einnahmeErgebnis.replace(",", ".");
    einnahmeErgebnis = parseFloat(einnahmeErgebnis);
    
    //---------------------------------------------------------------
    
    anzeigenEinnahmenGesamt.firstChild.nodeValue = einnahmeErgebnis + " Euro";
    
    //---------------------------------------------------------------

    console.log("-----------------------");
    
    berechnenGesamtErgebnis();
};//ENDE berechnenGesamtEinnahmen

//---------------------------------------------------------------------------------

//Funktion anzeigenKontostand nimmt alle als Kontostand deglarierten Daten entgegen
function anzeigenKontostand(gefilterterKontostand){
    console.log("anzeigenKontostand()");
    console.log("KONTOSTAND");
    console.log("Anzahl: " + gefilterterKontostand.length);
    console.log(gefilterterKontostand);
    
    //Pattern fuer einzublendener ID
    changeVisibility("kontostand", "kontostand");
    
    //es soll nur der zuletzt angegebene Kontostand beruecksichtigt werden
    var laengeKonto = gefilterterKontostand.length;
    laengeKonto-=1;
    console.log("aktueller Kontostand: " + gefilterterKontostand[laengeKonto].betragPosition + " Euro " + "id: " + gefilterterKontostand[laengeKonto].idPosition);
    
    kontoStand = gefilterterKontostand[laengeKonto].betragPosition;

    //---------------------------------------------------------------

    //aus dem Komma wird ein Punkt
    kontoStand = kontoStand.replace(",", ".");

    kontoStand = parseFloat(kontoStand);
    
    //---------------------------------------------------------------
    
    var anzeigenKontostand = document.getElementById("anzeigenKontostand");
    anzeigenKontostand.firstChild.nodeValue = kontoStand + " Euro";
    
    //---------------------------------------------------------------
    
    console.log("-----------------------");
    
    berechnenGesamtErgebnis();
};//ENDE anzeigenKontostand

//---------------------------------------------------------------------------------

//Funktion berechnet das Gesamtergebnis
function berechnenGesamtErgebnis(){
    console.log("berechnenGesamtErgebnis()");
    console.log("GESAMT-Ergebnis");
    
    //Pattern fuer einzublendener ID
    changeVisibility("ergebnis", "ergebnis");
    
    if(!kontoStand){kontoStand=0};
    if(!einnahmeErgebnis){einnahmeErgebnis=0};
    if(!ausgabeErgebnis){ausgabeErgebnis=0};
    
    console.log("berechnenGesamtErgebnis()");
    
    var gesamtErgebnis = kontoStand + einnahmeErgebnis - ausgabeErgebnis;

    //---------------------------------------------------------------

    gesamtErgebnis = gesamtErgebnis.toString();
    gesamtErgebnis = gesamtErgebnis.replace(".", ",");
    
    //---------------------------------------------------------------
    
    var anzeigenErgebnis = document.getElementById("anzeigenErgebnis");
    anzeigenErgebnis.firstChild.nodeValue = gesamtErgebnis + " Euro";
    
    //---------------------------------------------------------------

    console.log("Gesamt: " + gesamtErgebnis + " Euro");
    console.log("-----------------------");
    console.log("-----------------------");
    
};//ENDE berechnenGesamtErgebnis

//---------------------------------------------------------------------------------

//Neuaufbau nach Loeschen eines Elements
function reload(){
    console.log("-----------------------");
    console.log("----- HAPPY--EURO -----");
    console.log("-----------------------");
    filterDaten();
    berechnenGesamtErgebnis();
};

//---------------------------------------------------------------------------------


//---------------------------------------------------------------------------------
//PATTERN
//---------------------------------------------------------------------------------

//Pattern zum vergeben der Properties fuer die Sichtbarkeit
function changeVisibility(className, varName){
    var varName = document.getElementById(className);
    varName.classList.remove("hiddenArea", "noneDisplayed");
    varName.classList.add("visibleArea", "heightArea");
};//ENDE changeVisibility

//---------------------------------------------------------------------------------
