var Car = (function () {
    function Car(engineName, gears, speed) {
        this.engineName = engineName;
        this.gears = gears;
        this.speed = speed || 0;
    }
    Car.prototype.accelerate = function () {
        this.speed++;
    };
    Car.prototype.throttle = function () {
        this.speed--;
    };
    Car.numberOfWheels = function () {
        return 4;
    };
    Car.prototype.getSpeed = function () {
        console.log(this.speed);
    };
    Car.prototype.printCar = function () {
        console.log("Engine: " + this.engineName + ", Gears: " + this.gears + ", Speed: " + this.speed);
    };
    return Car;
}());
var car = new Car("V8", 5, 0);
car.getSpeed();
car.accelerate();
car.getSpeed();
car.printCar();
var Mfg = (function () {
    function Mfg() {
    }
    Mfg.main = function () {
        var myValue;
        myValue = 'my first TypeScript';
        console.log(myValue);
        Mfg.setDocumentTitle();
    };
    Mfg.setDocumentTitle = function () {
        document.title = "TypeScript Minimal Primer, (c) 2017 Mayflower GmbH, v. 1.0";
    };
    Mfg.styleHtmlBody = function () {
        var style = document.body.style;
        style.backgroundColor = "green;;
        style.textAlign = "center";
        style.margin = "25px";
    };
    return Mfg;
}());
window.onload = function () {
    Mfg.main();
    Mfg.styleHtmlBody();
};
//# sourceMappingURL=Mfg.js.map