//function contructor
function Person(vorname, nachname){
    this.vorname = vorname;
    this.nachname = nachname;
}

//Prototyp aendern/neue Methode geben
Person.prototype.getFullName = function(){
    return this.vorname + " " + this.nachname;
}

Person.prototype.getFullNameFormal = function(){
    return this.nachname + ", " + this.vorname;
}


//neue Objekte erzeugen
var max = new Person("Max", "Mustermann");
console.log(max);

var julia = new Person("Julia", "Wild");
console.log(julia);

console.log(julia.getFullNameFormal());

