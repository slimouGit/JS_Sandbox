//by value (primitives)

var a = 3;
var b;

b = a;

console.log(a);
console.log(b);

//console.log(a===b);

a = 2;

console.log(a);
console.log(b);

//console.log(a===b);


function inc(c){
    c += 1;
    console.log(c);
}

inc(a);
console.log(a);

//-------------------------------------

//by reference (objects)

var d = {greeting:"Hallo"};
var e;

e = d;

console.log(d);
console.log(e);

//Objekt veraendern
e.greeting = "Hi"; //mutate

console.log(d);
console.log(e);


//-------------------------------------

function changeGreeting(a){
    a.greeting = "Hola";    
}

changeGreeting(e);


console.log(d);
console.log(e);


//-------------------------------------

//neues Object-Literal erzeugen
//neuer Speicherbereich wird erzeugt
d = {greeting:"Salut"};

console.log(d);
console.log(e);






