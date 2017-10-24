/**
 * Created by salim on 06.08.2016.
 */

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