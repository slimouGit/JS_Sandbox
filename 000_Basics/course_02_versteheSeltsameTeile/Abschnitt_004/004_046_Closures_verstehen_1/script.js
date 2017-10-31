function greet(whatToSay){
    //weitere Funktion wird zurueckgegeben
    return function(name){
        console.log(whatToSay + " " + name);
    }
}

greet("hi")("Salim"); //zweite () fuer Aufruf der inneren/anonymen Funktion in der Funktion

var sayHi = greet("ey");
sayHi("Du");


greet("willkommen")("Mimi");
let welcome = greet("willkommen");
welcome("Mimi");