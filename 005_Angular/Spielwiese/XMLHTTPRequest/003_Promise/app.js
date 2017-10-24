
var p = new Promise(function(resolve, reject) {
    window.setTimeout(function() {
        resolve("welt");
    }, 1000);
});

p.then(function(o) {
    return new Promise(function(resolve, reject) {
        window.setTimeout(function() {
            resolve("hallo " + o);
        }, 1000);
    });
}).then(function(o) {
    alert(o)
});

//-------------------------------------------------------------------------

var x = new Promise(function(resolve, relect){
    resolve("Hallo");
});

x.then(function(y){
    alert(y);
});

//--------------------------------------------------------------------------

var illmi = new Promise(function(resolve, relect){
    window.setTimeout(function(){
        resolve("Illmi");
    }, 2500);
});

illmi.then(function(name){
    return new Promise(function(resolve, relect){
        resolve("Mimi" + " " + name);
    })
}).then(function(completeName){
    return new Promise(function(resolve, relect){
        console.log(completeName);
        window.setTimeout(function(){
            resolve("third function");
        }, 1000);
    })
}).then(function(x){
    console.log(x);
})


