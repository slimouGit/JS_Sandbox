//schlechte Schreibweise
// var arr = new Array();

//lieber Array-Literals
var arr_1 = [1,2,3];

//viele Typen in ein Array
var arr_2 = [
    1,
    true,   //boolean
    {       //object
        name: "Salim",
        stadt: "Frankfurt"
    },
    function(name, stadt){//function
        var greeting = "Hallo ";
        console.log(greeting + name);
    },
    "Hallo"     //String
];

console.log(arr_2);

//den Index 3 im Array nehmen (Funktion) und ausfuehren mit dem Index 2 im Array (Objekt), und den Wert aus name und stadt mitgeben
arr_2[3](arr_2[2].name + " aus " + arr_2[2].stadt);