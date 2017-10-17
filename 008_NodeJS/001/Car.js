"use strict";

console.log("car.js wurde ausgefuehrt");

class Car{
    constructor(name){
        this.name = name;
    }
    drive(){
        console.log(this.name + " drives");
    }
}

module.exports = Car;
