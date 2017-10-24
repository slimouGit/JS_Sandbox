console.log("function borrowing");

var person_1 = {
    vorname: "Salim",
    nachname: "Oussayfi",
    getFullName: function(){
        var fullName = this.vorname + " " + this.nachname;
        return fullName;
    }
};


//function borrowing
var person_2 = {
    vorname: "Dieter",
    nachname: "Waldenstedt"
};

//Methode getFullName aus person_1 fuer person_2 verwenden
console.log(person_1.getFullName.apply(person_2));