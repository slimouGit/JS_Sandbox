//var q = jQuery(""); //lange Schreibweise
var q = $("ul.people li");

console.log(q);

var person1 = {
    vorname: "Max"
}

var person2 = $.extend(undefined, person1);

console.log(person1);
console.log(person2);

console.log("-----------");

person1.vorname = "Julia";

console.log(person1);
console.log(person2);

//extend-Methode nicht in eigene Objekte kopieren
//sondern in jQery belassen und von dort aufrufen
var person3 = {};
person3.extend = $.extend;
person3.extend(person1);
