//greet();

//Function Statement
function greet(){
    console.log("Hallo");
}


//Function Expression
var anonymousGreet = function(){
    console.log("Hallo");
}


//Function Statement
function log(a){
    //console.log(a);
    a();
}

//log(3);


log(
    function(){
        console.log("Hallo");
    }
    );