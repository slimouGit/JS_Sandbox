/**
 * Created by salim on 06.08.2016.
 */

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

    var counter = 1;

    for(var i = 0; i<gefilterteAusgaben.length;i++){
        console.log(counter++ + ". " + gefilterteAusgaben[i].namePosition + ": " + gefilterteAusgaben[i].betragPosition + " Euro " + "id: " + gefilterteAusgaben[i].idPosition);
    }
    console.log("-----------------------");

    berechneGesamtAusgaben(gefilterteAusgaben);
};//ENDE anzeigenAusgaben

//---------------------------------------------------------------------------------

//
function berechneGesamtAusgaben(gefilterteAusgaben){
    console.log("berechneGesamtAusgaben()");
    console.log("GESAMT-AUSGABEN");

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

    console.log("-----------------------");

    //berechnenGesamtErgebnis();
};//ENDE berechneGesamtAusgaben

//---------------------------------------------------------------------------------

//
function anzeigenEinnahmen(gefilterteEinnahmen){
    console.log("anzeigenEinnahmen()");
    console.log("EINNAHMEN");

    console.log("Anzahl: " + gefilterteEinnahmen.length);
    console.log(gefilterteEinnahmen);

    var counter = 1;

    for(var i = 0; i<gefilterteEinnahmen.length;i++){
        console.log(counter++ + ". " + gefilterteEinnahmen[i].namePosition + ": " + gefilterteEinnahmen[i].betragPosition + " Euro " + "id: " + gefilterteEinnahmen[i].idPosition);
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

    console.log("-----------------------");

    //berechnenGesamtErgebnis();
};//ENDE berechnenGesamtEinnahmen

//---------------------------------------------------------------------------------

//Funktion anzeigenKontostand nimmt alle als Kontostand deglarierten Daten entgegen
function anzeigenKontostand(gefilterterKontostand){
    console.log("anzeigenKontostand()");
    console.log("KONTOSTAND");

    console.log("Anzahl: " + gefilterterKontostand.length);
    console.log(gefilterterKontostand);

    //es soll nur der zuletzt angegebene Kontostand beruecksichtigt werden
    var laengeKonto = gefilterterKontostand.length;
    laengeKonto-=1;
    console.log("aktueller Kontostand: " + gefilterterKontostand[laengeKonto].betragPosition + " Euro " + "id: " + gefilterterKontostand[laengeKonto].idPosition);

    kontoStand = gefilterterKontostand[laengeKonto].betragPosition;

    //---------------------------------------------------------------

    //aus dem Komma wird ein Punkt
    kontoStand = kontoStand.replace(",", ".");

    kontoStand = parseFloat(kontoStand);

    console.log("-----------------------");

    //berechnenGesamtErgebnis();
};//ENDE anzeigenKontostand

//---------------------------------------------------------------------------------

//Funktion berechnet das Gesamtergebnis
function berechnenGesamtErgebnis(){
    console.log("berechnenGesamtErgebnis()");
    console.log("GESAMT-Ergebnis");

    if(!kontoStand){kontoStand=0};
    if(!einnahmeErgebnis){einnahmeErgebnis=0};
    if(!ausgabeErgebnis){ausgabeErgebnis=0};

    console.log("berechnenGesamtErgebnis()");

    var gesamtErgebnis = kontoStand + einnahmeErgebnis - ausgabeErgebnis;

    //---------------------------------------------------------------

    gesamtErgebnis = gesamtErgebnis.toString();
    gesamtErgebnis = gesamtErgebnis.replace(".", ",");

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