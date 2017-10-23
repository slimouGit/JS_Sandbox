/**
 * Created by salim on 23.10.2017.
 */
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
car.accelerate();
car.printCar();
//# sourceMappingURL=Car.js.map