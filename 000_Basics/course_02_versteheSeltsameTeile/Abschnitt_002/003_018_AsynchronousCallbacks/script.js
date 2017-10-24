//sehr lange Funktion
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log("Fertig mit der Funktion");
}

function clickHandler(){
    console.log("Klick");
}

//Auf das Click-Event reagieren
document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log("Bin am Ende des Execution Context");