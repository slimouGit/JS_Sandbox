console.log("------------------------------------")
console.log("function currying");

//function currying
function multiplizieren(a,b){
    return a*b;
}
console.log(multiplizieren(3,5));
/*
geht auch besser
function verdoppeln(b){
    return 2*b;
}
*/

var verdoppeln = multiplizieren.bind(this, 2);
console.log(verdoppeln(4));

var verdreifachen = multiplizieren.bind(this, 3);
console.log(verdreifachen(4));