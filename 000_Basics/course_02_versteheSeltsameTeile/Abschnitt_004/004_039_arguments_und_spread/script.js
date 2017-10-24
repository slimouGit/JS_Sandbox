function greet(vorname, nachname, sprache){
    //default Wert fuer Sprache definieren:
    sprache = sprache || "deutsch";

    //Fehler in der Argumenten-Nutzung ausgeben
    if(arguments.length === 0){
        console.log("Parameter fehlen");
        console.log("-----------------");
    }

    //Argumente ausgeben
    console.log(vorname);
    console.log(nachname);
    console.log(sprache);

    console.log(arguments); //keine wirklichen Arrays!!! sieht nur so aus
    console.log("arg 0: " + arguments[0]);
    console.log("arg 3: " + arguments[3]);

    console.log("-----------------");
}

//ohne Parameter
greet();
//nicht alle Parameter
greet("Salim");
//alle Parameter
greet("Salim", "Oussayfi", "deutsch");
//mit mehr als 3 Parameter
greet("Salim", "Oussayfi", "deutsch","60439", "Frankfurt");