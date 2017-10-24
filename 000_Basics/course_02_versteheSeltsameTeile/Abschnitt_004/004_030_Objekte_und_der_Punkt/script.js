var person = new Object();

person["vorname"] = "Salim";
person["nachname"] = "Oussayfi";

var nachnameProperty = "nachname";

console.log(person);
console.log(person["vorname"]);
console.log(person[nachnameProperty]);

console.log(person.vorname);
console.log(person.nachname);

//weiteres Objekt in das Objekt stecken
person.adresse = new Object();
person.adresse.strasse = "Antoninusstrasse 64";
person.adresse.stadt = "Frankfurt";
person.adresse.bundesland = "Hessen";

console.log(person);

console.log(person.adresse.strasse);
console.log(person.adresse.stadt);
console.log(person["adresse"]["bundesland"]);

for(var i = 0; i<128; i++){
    person["SomeValue" + i ] = " Irgendein Wert an der Stelle " + i;
}

console.log(person);