//function contructor
function Person(vorname, nachname){
    console.log(this);//leeres Objekt ausgeben
    this.vorname = vorname;
    this.nachname = nachname;
    console.log("Diese Funktion wurde incvoked");
}



//new erzeugt ein neues komplett leeres Objekt
//new ruft die Funktion Person() auf
//new setzt this auf das neue komplett leere Objekt
var max = new Person("Max", "Mustermann");
console.log(max);
console.log(max.vorname);

var julia = new Person("Julia", "Wild");
console.log(julia);