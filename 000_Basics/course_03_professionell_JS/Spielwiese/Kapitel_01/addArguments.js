/**
 * Created by Salim on 17.07.2016.
 */
/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("addArguments");

function addiereAlle(){
    var ergebnis = 0;
    for(var i = 0; i<arguments.length;i++){
        ergebnis+=arguments[i];
    }
    return console.log(ergebnis);
}

addiereAlle(1,2);
addiereAlle(1);
addiereAlle(1,2,3,4,5,6);