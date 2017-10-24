/**
 * Created by salim on 29.07.2016.
 */


var id = 0;
var position;
var ausgabenArray = [];
var gesamtAusgaben = [];
var einnahmenArray = [];
var konto;
var kontoTemp = 0;

var datenObj = [];

//---------------------------------------------------------------------------
//function contructor
function Positionen(namePosition, betragPosition, artPosition, idPosition){
    this.namePosition = namePosition;
    this.betragPosition = betragPosition;
    this.artPosition = artPosition;
    this.idPosition = idPosition+1;
};

//---------------------------------------------------------------------------
//Pattern zum vergeben der Properties fuer die Sichtbarkeit
function changeVisibility(className, varName){
    var varName = document.getElementById(className);
    varName.classList.remove("hiddenArea");
    varName.classList.add("visibleArea", "heightArea");
};

//---------------------------------------------------------------------------
//radiobutton
function auswahlArtPosition(){
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
    }
    //Pattern fuer einzublendener ID
    changeVisibility("formInput", "formInput");
    console.log(artPosition + " wurde eingegeben");
}//ENDE auswahlArtPosition

//---------------------------------------------------------------------------
//
function einlesenDaten() {
    namePosition = document.getElementById("inputNamePosition").value;
    betragPosition = document.getElementById("inputBetragPosition").value;
    
    //neues Objekt
    position = new Positionen(namePosition, betragPosition, artPosition, id++);
    datenObj.push(position);
    console.log("JSON.stringify: " + JSON.stringify(position));
    testenEingabe();
};

//---------------------------------------------------------------------------
 
function testenEingabe() {
    
    betragPosition = parseFloat(betragPosition);
    
    if(artPosition === "Ausgabe"){
        console.log("AUSGABE");
        var ausgabe = (namePosition + ": " +  betragPosition + " Euro");
        ausgabenArray.push(ausgabe);
        
        gesamtAusgaben.push(betragPosition);
        anzeigenAusgaben();
    }
    if(artPosition === "Einnahme"){
        console.log("EINNAHME");
        var einnahme = (namePosition + ": " +  betragPosition + " Euro");
        einnahmenArray.push(einnahme);
        anzeigenEinnahmen();
    }
    if(artPosition === "Kontostand"){
        console.log("KONTOSTAND");
        konto = (betragPosition);
        anzeigenKontostand();
    }
    ausgebenEingabe();
};

//---------------------------------------------------------------------------
 
function ausgebenEingabe(){
    console.log(position.artPosition + " - " + position.namePosition + ": " +  position.betragPosition + " Euro" + " id_" + id);
};

//---------------------------------------------------------------------------
function anzeigenKontostand(){
    
    var kontostandAnzeige = document.getElementById("anzeigenKontostandListe");
    
    while (kontostandAnzeige.firstChild)
        kontostandAnzeige.removeChild(kontostandAnzeige.firstChild);
        
    //Pattern fuer einzublendener ID
    changeVisibility("anzeigenKontostand", "kontoEbene");
    
    //var kontostandEbene = document.getElementById("anzeigenKontostand");
    //kontostandEbene.style.backgroundColor = "red";
    
    var text = document.createTextNode(konto + " Euro");
    kontostandAnzeige.appendChild(text);
}

//---------------------------------------------------------------------------

function anzeigenAusgaben(){
    
    //Pattern fuer einzublendener ID
    changeVisibility("anzeigenAusgaben", "ausgabenEbene");
    
    var anzeigenAusgabenListe = document.getElementById("anzeigenAusgabenListe");
    
    while (anzeigenAusgabenListe.firstChild)
        anzeigenAusgabenListe.removeChild(anzeigenAusgabenListe.firstChild);
    
    for(var i = 0; i<ausgabenArray.length;i++){
        var ausgabenListenPunkt = document.createElement("li");
        ausgabenListenPunkt.appendChild(document.createTextNode((i+1) + ". " + ausgabenArray[i] + "Ausgabe_id_"+i));
        anzeigenAusgabenListe.appendChild(ausgabenListenPunkt);
    }
    
        if(ausgabenArray.length>1){ anzeigenGesamtAusgaben();
    
    };
};

//---------------------------------------------------------------------------

function anzeigenGesamtAusgaben(){
        
        //Pattern fuer einzublendener ID
        changeVisibility("anzeigenAusgabenGesamt", "anzeigenAusgabenGesamt");
        
        var ausgabenGesamt = 0;
        alert(gesamtAusgaben.length);
        
        for(var i = 0; i<gesamtAusgaben.length;i++){
            ausgabenGesamt+=gesamtAusgaben[i];
        }
        
        alert(gesamtAusgaben);
        alert(typeof(gesamtAusgaben[1]));
        
        document.getElementById("anzeigenAusgabenGesamt").innerHTML = ausgabenGesamt;
        //anzeigenAusgabenGesamt.firstChild.nodeValue = gesamtAusgaben + " Euro";
};
    
//---------------------------------------------------------------------------

function anzeigenEinnahmen(){
    
    //Pattern fuer einzublendener ID
    changeVisibility("anzeigenEinnahmen", "einnahmenEbene");
    
    var anzeigenEinnahmenListe = document.getElementById("anzeigenEinnahmenListe");
    
    while (anzeigenEinnahmenListe.firstChild)
        anzeigenEinnahmenListe.removeChild(anzeigenEinnahmenListe.firstChild);
        
    for(var i = 0; i<einnahmenArray.length;i++){
        var einnahmenListenPunkt = document.createElement("li");
        einnahmenListenPunkt.appendChild(document.createTextNode((i+1) + ". " + einnahmenArray[i] + "Einnahme_id_"+i));
        anzeigenEinnahmenListe.appendChild(einnahmenListenPunkt);
    }
};
