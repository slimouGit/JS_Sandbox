//b() Execution Context => myVar = undefined
function b(){
    var myVar;
    console.log(myVar + " in function b / Execution Context");
}

//a() Execution Context => myVar = 2
function a(){
    var myVar = 2;
    console.log(myVar + " in function a / Execution Context");
    b();
}

//Global Execution Context => myVar = 1
var myVar = 1;
console.log(myVar + " in Global Execution Context");
a();
console.log(myVar + " aus dem Global Execution Context");