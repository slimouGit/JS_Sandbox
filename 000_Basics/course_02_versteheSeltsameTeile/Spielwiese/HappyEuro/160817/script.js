/**
 * Created by salim on 03.08.2016.
 */

var id = 0;
var xPosition = true;
var ausgabeErgebnis, einnahmeErgebnis, kontoStand;
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

//---------------------------------------------------------------------------------
//LISTENER
//---------------------------------------------------------------------------------

window.addEventListener("load", init);

//---------------------------------------------------------------------------------

//die EventListener werden registriert
function init(){
    document.getElementById("buttonEingabe").addEventListener("click", leseEingabe);
    //document.getElementById("buttonReload").addEventListener("click", reload);
};//ENDE init

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
        if(gefilterteAusgaben.length>0){ 
            anzeigenAusgaben(gefilterteAusgaben);
        }
        
        //---------------------------------------------------------------------------------
        
        //das Array positionen wird gefiltert
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
//---------------------------------------------------------------------------------
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

    ausgaben = gefilterteAusgaben;
    
    //---------------------------------------------------------------------------------

    //bevor die Liste neu aufgebaut wird, wird zunaechst das erste Element erntfernt
    while (anzeigenAusgaben.firstChild)
        anzeigenAusgaben.removeChild(anzeigenAusgaben.firstChild);
        
    for(var i = 0; i<ausgaben.length;i++){

        //---------------------------------------------------------------------------------

        //nach dem Loeschen einer Position, wird die ID fuer die Ausgabe nicht mit runtergezaehlt
        //solange die idPosition >= die Laenge des data-Arrays ist, wird sie dekrementiert

        //DIESE BEDINGUNG KANN NUR NACH DEM LOESCHEN EINER POSITION EINTREFFEN
        if(ausgaben[i].idPosition >= data.length){
            alert("Achtung: ausgaben zu lang");
            ausgaben[i].idPosition -=1;
            alert("Ausgaben(Data_id): " + ausgaben[i].idPosition);
        };

        //---------------------------------------------------------------------------------
        
        var positionContainer = document.createElement("div");
        positionContainer.setAttribute("class", "positionContainer");
        //-----------------------
        var iconContainer = document.createElement("div");
        iconContainer.setAttribute("class", "iconContainer");
        //-----------------------
        var leftSideIcon = document.createElement("div");
        leftSideIcon.setAttribute("class", "leftSideIcon");
        var upArrow = document.createElement("IMG");
        upArrow.setAttribute("src", "img/up.png");
        var change_out_id_ = "change_out_id_";
        change_out_id_ = change_out_id_.concat(data[i].idPosition);
        upArrow.setAttribute("id", change_out_id_);
        upArrow.title = ausgaben[i].namePosition + " zu Einnahme aendern " + ausgaben[i].idPosition;
        //-----------------------
        var rightSideIcon = document.createElement("div");
        rightSideIcon.setAttribute("class", "rightSideIcon");
        var deleteImg = document.createElement("IMG");
        deleteImg.setAttribute("src", "img/delete.png");
        var delete_out_id_ = "delete_out_id_";
        delete_out_id_ = delete_out_id_.concat(data[i].idPosition);
        deleteImg.setAttribute("id", delete_out_id_);
        deleteImg.title = ausgaben[i].namePosition + " loeschen " + ausgaben[i].idPosition;
        
        //---------------------------------------------------------------------------------

        var formatierteAusgabenID = counter + ". " + ausgaben[i].namePosition + ": " + ausgaben[i].betragPosition + " - " + "Data-Index: " + ausgaben[i].idPosition + "   Ausgaben-Index: " + i;
        var formatierteAusgaben = counter + ". " + ausgaben[i].namePosition + ": " + ausgaben[i].betragPosition + " Euro ";

        console.log(formatierteAusgabenID);

        console.log("data.length: " + data.length)

        counter++;
        
        //---------------------------------------------------------------------------------
        
        positionContainer.appendChild(document.createTextNode(formatierteAusgaben));
        anzeigenAusgaben.appendChild(positionContainer);
        positionContainer.appendChild(iconContainer);
        iconContainer.appendChild(leftSideIcon);
        leftSideIcon.appendChild(upArrow);
        iconContainer.appendChild(rightSideIcon);
        rightSideIcon.appendChild(deleteImg);
        
        //---------------------------------------------------------------------------------
        
    }
    console.log("-----------------------");
    
    berechneGesamtAusgaben();
};

//---------------------------------------------------------------------------------

//
function berechneGesamtAusgaben(){
    console.log("berechneGesamtAusgaben()");
    console.log("GESAMT-AUSGABEN");
    
    var anzeigenAusgabenGesamt = document.getElementById("anzeigenAusgabenGesamt");
    
    ausgabeErgebnis = 0;
    
    for(var i = 0; i<ausgaben.length; i++){
        var temp = ausgaben[i].betragPosition;

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
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------


//
function anzeigenEinnahmen(gefilterteEinnahmen){
    console.log("anzeigeneinnahmen()");
    console.log("EINNAHMEN");
    console.log("Anzahl: " + gefilterteEinnahmen.length);
    console.log(gefilterteEinnahmen);

    //Pattern fuer einzublendener ID
    changeVisibility("einnahmen", "einnahmen");
    
    var anzeigenEinnahmen = document.getElementById("anzeigenEinnahmen");
    
    var counter = 1;

    einnahmen = gefilterteEinnahmen;
    
    //---------------------------------------------------------------------------------

    //bevor die Liste neu aufgebaut wird, wird zunaechst das erste Element erntfernt
    while (anzeigenEinnahmen.firstChild)
        anzeigenEinnahmen.removeChild(anzeigenEinnahmen.firstChild);
        
    for(var i = 0; i<einnahmen.length;i++){

        //---------------------------------------------------------------------------------

        //nach dem Loeschen einer Position, wird die ID fuer die Ausgabe nicht mit runtergezaehlt
        //solange die idPosition >= die Laenge des data-Arrays ist, wird sie dekrementiert

        //DIESE BEDINGUNG KANN NUR NACH DEM LOESCHEN EINER POSITION EINTREFFEN
        if(einnahmen[i].idPosition >= data.length){
            alert("Achtung: einnahmen zu lang");
            einnahmen[i].idPosition -=1;
            alert("Einnahmen(Data_id): " + einnahmen[i].idPosition);
        };
        
        //---------------------------------------------------------------------------------
        
        var positionContainer = document.createElement("div");
        positionContainer.setAttribute("class", "positionContainer");
        //-----------------------
        var iconContainer = document.createElement("div");
        iconContainer.setAttribute("class", "iconContainer");
        //-----------------------
        var leftSideIcon = document.createElement("div");
        leftSideIcon.setAttribute("class", "leftSideIcon");
        var downArrow = document.createElement("IMG");
        downArrow.setAttribute("src", "img/down.png");
        var change_in_id_ = "change_in_id_";
        change_in_id_ = change_in_id_.concat(data[i].idPosition);
        downArrow.setAttribute("id", change_in_id_);
        downArrow.title = einnahmen[i].namePosition + " zu Einnahme aendern " + einnahmen[i].idPosition;
        //-----------------------
        var rightSideIcon = document.createElement("div");
        rightSideIcon.setAttribute("class", "rightSideIcon");
        var deleteImg = document.createElement("IMG");
        deleteImg.setAttribute("src", "img/delete.png");
        var delete_in_id_ = "delete_in_id_";
        delete_in_id_ = delete_in_id_.concat(data[i].idPosition);
        deleteImg.setAttribute("id", delete_in_id_);
        deleteImg.title = einnahmen[i].namePosition + " loeschen " + einnahmen[i].idPosition;
        
        //---------------------------------------------------------------------------------

        var formatierteEinnahmenID   = counter + ". " + einnahmen[i].namePosition + ": " + einnahmen[i].betragPosition + " - " + "Data-Index: " + einnahmen[i].idPosition + "   Einnahmen-Index: " + i;
        var formatierteEinnahmen     = counter + ". " + einnahmen[i].namePosition + ": " + einnahmen[i].betragPosition + " Euro ";
        
        console.log(formatierteEinnahmenID);

        counter++;
        
        //---------------------------------------------------------------------------------
        
        positionContainer.appendChild(document.createTextNode(formatierteEinnahmen));
        anzeigenEinnahmen.appendChild(positionContainer);
        positionContainer.appendChild(iconContainer);
        iconContainer.appendChild(leftSideIcon);
        leftSideIcon.appendChild(downArrow);
        iconContainer.appendChild(rightSideIcon);
        rightSideIcon.appendChild(deleteImg);
        
        //---------------------------------------------------------------------------------
        
    }
    console.log("-----------------------");
    
    berechneGesamtEinnahmen();
};

//---------------------------------------------------------------------------------

//
function berechneGesamtEinnahmen(){
    console.log("berechnenGesamtEinnahmen()");
    console.log("GESAMT-EINNAHMEN");
    
    einnahmeErgebnis = 0;
    
    for(var i = 0; i<einnahmen.length; i++){
        var temp = einnahmen[i].betragPosition;

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
//---------------------------------------------------------------------------------
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
    console.log("aktueller Kontostand: " + gefilterterKontostand[laengeKonto].betragPosition + " Euro " + "Data-Index: " + gefilterterKontostand[laengeKonto].idPosition);
    
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
//---------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

//Funktion zum loeschen einer Position aus dem data-Array anhand der id
var deleteData = function(x){
    data.splice(x,1);
    if(data[x].artPosition === "Ausgabe"){
        alert("Ausgabe wurde geloescht");
        ausgaben.pop();
    };
    if(data[x].artPosition === "Einnahme"){
        alert("Einnahme wurde geloescht");
        einnahmen.pop();
    };
    //hier muss das Array neu sortiert werden, alle nach geloeschtem um einen Index nach vorn
    for(var i = x; i<data.length; i++){
        data[i].idPosition -=1;
        
        
    }

    reload();
}.bind(Position);

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

//Pattern zum vergeben der Properties fuer die Sichtbarkeit
function changeVisibility(className, varName){
    var varName = document.getElementById(className);
    varName.classList.remove("hiddenArea", "noneDisplayed");
    varName.classList.add("visibleArea", "heightArea");
};//ENDE changeVisibility

//---------------------------------------------------------------------------------