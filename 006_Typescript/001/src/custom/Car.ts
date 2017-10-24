/**
 * Created by salim on 23.10.2017.
 */
class Car{
    engineName: string;
    gears: number;
    private speed: number;

    constructor(engineName: string; gears: number; speed: number){
        this.engineName = engineName;
        this.gears = gears;
        this.speed = speed || 0;
}

    accelerate():void{
        this.speed++;
    }

    throttle():void{
        this.speed--;
    }

    static numberOfWheels(): number{
        return 4;
    }

    getSpeed():void{
        console.log(this.speed);
    }

    printCar():void{
        console.log("Engine: " + this.engineName + ", Gears: " + this.gears + ", Speed: " + this.speed);
    }
}

let car = new Car("V8", 5, 0);
car.getSpeed();
car.accelerate();
car.getSpeed();
car.printCar();
car.accelerate();
