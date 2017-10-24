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
