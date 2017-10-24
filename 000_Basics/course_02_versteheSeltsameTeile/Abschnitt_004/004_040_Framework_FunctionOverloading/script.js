function greet(vorname, nachname, sprache){
    //Default Sprache:
    sprache = sprache || "en";

    if(sprache === "en"){
        console.log("Hello " + vorname + " " + nachname);
    }
    if(sprache === "de"){
        console.log("Hallo " + vorname + " " + nachname);
    }
}

//Hilfs-Funktionen
function greetEnglish(vorname, nachname){
    greet(vorname, nachname, "en");
}
function greetGerman(vorname, nachname){
    greet(vorname, nachname, "de");
}

/**
greet("Salim", "Oussayfi", "de");
greet("Michael", "Jackson", "en");
**/

greetGerman("Salim", "Oussayfi");
greetEnglish("Michael", "Jackson");