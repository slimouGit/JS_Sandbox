/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("CALLBACK 2");

function addiereEinnahme(betragPosition, callback){
    callback(betragPosition);
    console.log("--------------------------");
};


var pruefeEingabe = function(betragPosition){
    if(betragPosition<1000){
        console.log("Mini-Betrag: " + betragPosition + " Euro");
        console.log("BUUUUUUUUUUUH!!!!!");
    }
    else{
        console.log("XXL-Betrag: " + betragPosition + " Euro");
        console.log("YEEEEAAAAAAAR!!!!!");
    }
}

//Aufruf der Funktion addiereEingabe mit 2 Parameter
addiereEinnahme(50,pruefeEingabe);
addiereEinnahme(1050,pruefeEingabe);
addiereEinnahme(80,pruefeEingabe);
addiereEinnahme(3820,pruefeEingabe);


//Zusammenfassung der Funktionsaufrufe mit festem Bestanteil des Funktionsaufruf
function shortVersion(betragPosition){
    addiereEinnahme(betragPosition, pruefeEingabe);
}

//kuerzerer Aufruf der Funktion addiereEingabe
//nur noch der individuelle Betrag muss mitgegeben werden
shortVersion(80000);

shortVersion(1);