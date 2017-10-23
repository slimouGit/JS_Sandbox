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

    accelerate(): void{
        this.speed++;
    }

    throttle(): void{
        this.speed--;
    }
}