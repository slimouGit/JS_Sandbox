/**
 * Created by salim on 30.08.2016.
 */
ausgebenThema("Kompositionen");

var komposition1 = function(f,g){
  return function(x){
        return f(g(x));
  };
};

var komposition2 = function(f,g){
    return function(){
        return f.call(this, g.apply(this, arguments));
    };
};

var komposition3 = function(){
  var funktionen = arguments;
    return function() {
        var args = arguments;
        for (var i = funktionen.length; i-- > 0;) {
            args = [funktionen[i].apply(this, args)];
        }
        return args[0];
    };
};

function plusVier(x){
    return x + 4;
}

function malSieben(x){
    return x * 7;
}

var plusVierMalSieben = komposition1(malSieben,plusVier);
var malSiebenPlusVier = komposition2(plusVier, malSieben);
var plusAchtMalSieben = komposition3(malSieben, plusVier, plusVier);


console.log(plusVierMalSieben(2));

console.log(malSieben(plusVier(2)));

console.log(malSiebenPlusVier(2));

console.log(plusVier(malSieben(2)));

console.log(plusAchtMalSieben(2));


