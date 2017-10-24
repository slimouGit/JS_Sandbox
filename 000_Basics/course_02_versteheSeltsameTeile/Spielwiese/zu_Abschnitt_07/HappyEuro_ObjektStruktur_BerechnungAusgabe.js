//---------------------------------------------------------------------------------------------------------------------


//Arrays fuer Gesmat-Betraege
var gesamtEinnahmen = [];
var gesamtAusgaben = [];

//counter nummeriert die einzelnen Datensaetze
var counter = 0;


//---------------------------------------------------------------------------------------------------------------------


//Funktion gibt Daten aus
function ausgebenDatensatz(callback){
    for(var i = 0; i<positionen.length;i++){
        counter++;
        console.log(counter + ". " + positionen[i].namePosition + ": " + positionen[i].betragPosition + " Euro" + " | Typ: " 
                    + positionen[i].dataPosition[0] + ", Datum: " + positionen[i].dataPosition[1]);
    }
    callback();
}//ENDE 

//--------------------------------------------------------------------------------

//Funktion erstellenBetraege
//erstellt 2 Arrays mit jeweils nur den Einnahmen und Ausgaben
function erstellenGesamtBetraege(){
    for(var i = 0; i<positionen.length;i++){
        if(positionen[i].dataPosition[0] === "Einnahme"){
            gesamtEinnahmen.push(positionen[i].betragPosition);
        }//ENDE if
        if(positionen[i].dataPosition[0] === "Ausgabe"){
            gesamtAusgaben.push(positionen[i].betragPosition);
        }//ENDE if
    }//ENDE for
    ausgebenGesamtBetraege();
}//ENDE

//--------------------------------------------------------------------------------

//Funktion ausgebenBerechnung
//zeigt das Ergebnis der jeweiligen Berechnung an
function ausgebenBerechnung(text, callFunktion){
    console.log("------------------------------");
    console.log(text + ":");
    console.log(callFunktion + " Euro");
}//ENDE

//--------------------------------------------------------------------------------

//Funktion ausgebenGesamtBetraege
//berechnet die Gesamt-Betraege aus den beiden Arrays: Eingabe und Ausgabe
function ausgebenGesamtBetraege(){
    
    var einnahmenGesamt = 0;
    
    for(var i = 0; i<gesamtEinnahmen.length; i++){
        einnahmenGesamt += gesamtEinnahmen[i];
    }
    einnahmenGesamt = einnahmenGesamt.toFixed(2);
    
    //Ausgabe ueber Funktion ausgebenBerechnung
    ausgebenBerechnung("Einnahmen gesamt", einnahmenGesamt);
    
    //--------------------------------------------------------------------------------
    
    var ausgabenGesamt = 0;
    
    for(var i = 0; i<gesamtAusgaben.length; i++){
        ausgabenGesamt += gesamtAusgaben[i];
    }
    ausgabenGesamt = ausgabenGesamt.toFixed(2);
    
    //Ausgabe ueber Funktion ausgebenBerechnung
    ausgebenBerechnung("Ausgaben gesamt", ausgabenGesamt);
    
    berechneErgebnis(einnahmenGesamt, ausgabenGesamt);
}

//--------------------------------------------------------------------------------

//Funktion berechneErgebnis berechnet die Differenz aus einnahmenGesamt und ausgabenGesamt und gibt das Ergebnis aus 
function berechneErgebnis(einnahmenGesamt, ausgabenGesamt){
    
    var ergebnis = einnahmenGesamt - ausgabenGesamt;
    
    ergebnis = ergebnis.toFixed(2);
    
    //Ausgabe ueber Funktion ausgebenBerechnung
    ausgebenBerechnung("Ergebnis gesamt", ergebnis);
};

//---------------------------------------------------------------------------------------------------------------------

//Ausgeben der Daten
ausgebenDatensatz(erstellenGesamtBetraege);



