console.log(1<2<3);

console.log(3<2<1); // = true, weil zuerst 3<2 = false, dann false = 0 und 0 < 1 = true ==>> Operator precedence / Less Than 	left-to-right

var a = 0;
var b = false;

if(a === b){
    console.log("Die beiden sind gleich");
}else{console.log("Die beiden sind ungleich");}