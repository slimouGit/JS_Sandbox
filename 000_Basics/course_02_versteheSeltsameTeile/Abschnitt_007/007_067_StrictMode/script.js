//strict modus fuer das gesamte Script
//"use strict";

var person;
persom = {};
console.log(persom);

function logNewPerson(){
    //strict modus nur innerhalb der Funktion
    "use strict";
    var person2;
    persom2 = {};
    console.log(persom2);
}

logNewPerson();

