//b() Execution Context => myVar = undefined


//a() Execution Context => myVar = 2
function a(){

    function b(){
        console.log(myVar);
    }

    var myVar = 2;
    b();
}

//Global Execution Context => myVar = 1
var myVar = 1;
a();
