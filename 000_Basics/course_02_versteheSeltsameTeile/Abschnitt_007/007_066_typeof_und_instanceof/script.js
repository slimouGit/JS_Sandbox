var a = 3;
console.log(typeof a);

var b = "Hallo";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); //Seltsam...
console.log(Object.prototype.toString.call(d)); //Besser!

function Person(name) {
    this.name = name;
}

var e = new Person("Julia");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); //Macht Sinn!
console.log(typeof null); //Ein Bug, der nie behoben wurde

var f = function(){};
console.log(typeof f);