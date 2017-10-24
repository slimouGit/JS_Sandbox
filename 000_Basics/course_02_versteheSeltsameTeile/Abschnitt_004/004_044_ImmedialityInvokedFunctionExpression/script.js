//function statement
function greet(name){
    console.log("Hallo " + name);
};

greet("Salim");

//---------------------------------------------------

//function expression
var greetFunc = function(name){
    console.log("Hallo " + name);
};

greetFunc("Salim");

//---------------------------------------------------

//immediatly Invoked Function Expression (IIFE)
var greeting = function(name){
        return "Hallo " + name;
}("Salim");

console.log(greeting);


//weiterer Code

3;

"Ich bin ein String";
{
    name: "Hans Wurst";
}

//Anonyme Funktion muss hier innerhalb von () stehen, weil der Parser sonst davon ausgeht, dass ein Statement folgt
//da kein Name angegeben ist, wird ein Fehler ausgegeben

//Diese Funktion wird direkt ausgefuehrt
(function(name){
        var greeting = "Hallo"
        console.log("IIFE: " + greeting + " " + name);
    }
    ("Weihnachsklaus")//invoken
);

(function(vorname, name){
        var greeting = "Hallo"
        console.log("IIFE_2: " + greeting + " " + vorname + " " + name);
    }
    ("Salim", "Oussayfi")//invoken
);