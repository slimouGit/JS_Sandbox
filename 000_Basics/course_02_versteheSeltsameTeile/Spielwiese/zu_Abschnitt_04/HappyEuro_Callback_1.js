/**
 * Created by salim on 17.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("CALLBACK 1");


var betragGesamt = [];

function addiereEinnahme(betragPosition, callback){
    betragGesamt.push(betragPosition);
    console.log(betragGesamt);
    callback(betragPosition);
};

//diese Funktion wird ueber callback aufgerufen
var ausgabeMeldung = function(betragPosition){
    var einnahmeGesamt = 0;
    
    for(var i = 0; i<betragGesamt.length;i++){
        einnahmeGesamt += betragGesamt[i];
    }
    /*
    betragGesamt.forEach(betragPosition,index,betragGesamt){
        einnahmeGesamt += betragGesamt[i];
    }
    */
    console.log("Der Betrag über " + betragPosition + " Euro wurde hinzugefuegt");
    console.log(einnahmeGesamt + " Euro im Topf");
};

addiereEinnahme(30, ausgabeMeldung);

addiereEinnahme(20, ausgabeMeldung);

addiereEinnahme(80, ausgabeMeldung);

addiereEinnahme(2.45, ausgabeMeldung);

addiereEinnahme(10000, ausgabeMeldung);


