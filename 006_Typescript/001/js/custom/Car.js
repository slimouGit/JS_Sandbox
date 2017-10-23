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
    return Car;
}());
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
//# sourceMappingURL=Car.js.map