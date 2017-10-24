var person = {
    vorname: "Default",
    nachname: "Default",
    getFullName: function(){
        return this.vorname + " " + this.nachname;
    }
}

var max = {
    vorname: "Max",
    nachname: "Musterman"
}

//Prototyp setzen
//ABER SO NICHT MACHEN!!!
max.__proto__ = person;
console.log(max.getFullName());
console.log(max.vorname);

var julia = {
    vorname: "Julia"
}

julia.__proto__ = person;
console.log(julia.getFullName());
