function sayHiLater(){

    var greeting = "Hi";

    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}

sayHiLater();


function tellMeWhenDone(callback){
    var a = 1000;
    var b = 2000;

    callback();//mitgegbene Funktion wird ausgefuehrt

    return console.log(a+b);

}

tellMeWhenDone(function(){
    console.log("Bin fertig");
});


tellMeWhenDone(function(){
    alert("Bin fertig");
});

tellMeWhenDone(function(){
    console.log("Bin mit allem fertig");
});

//jQuery benutzt Function Expressions und First-Class.Functions
//$("button").click(function(){
//
//});