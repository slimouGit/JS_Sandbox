"use strict";

let Car = require("./Car.js");

let bmw = new Car("BMW");
console.log("bmw wurde erstellt");
console.log(bmw.name);
bmw.drive();