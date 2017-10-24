var person = {
    vorname: "Salim", 
    nachname: "Oussayfi",
    
    adresse: {
        strasse: "Antoninusstrasse 64",
        stadt: "Frankfurt",
        bundesland: "Hessen"
    }
};

function greet(person){
    console.log("Hallo " + person.vorname + " aus " +person.adresse.stadt);    
}

console.log(person);

greet(person);

greet({
    vorname: "Mimi",
    nachname: "Illmer",
    
    adresse: {
        strasse: "Antoninusstrasse 64",
        stadt: "Frankfurt",
        bundesland: "Hessen"
    }
});