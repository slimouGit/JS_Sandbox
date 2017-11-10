import {Component, OnInit, EventEmitter} from '@angular/core';
import {Car} from "./car";
import {CarService} from "./car-service";
import {viewClassName} from "@angular/compiler";
import {forEach} from "@angular/router/src/utils/collection";



let e = new EventEmitter();
e.subscribe(function (param: any) {
  console.log("Ereignis ist aufgetreten " + param);
});

e.subscribe(function (param: any) {
  console.log("Zweites Ereignis ist aufgetreten " + param);
});

e.emit("Parameter");

e.emit("2. Parameter");


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit{

  public brand: string;
  public horsePower: number;
  public counter: number = 0;

  selectedCar: Car;

  cars: Car[];



  showList: boolean = true;
  showDetail: boolean = false;

  constructor(private carService: CarService){}

  ngOnInit(){
    this.carService.getCars().then(cars => this.cars = cars);
  }

  showCarDetails(car: Car){
    console.log(car);
    this.selectedCar = car;
    this.showList = false;
    this.showDetail = true;
  }

  onAddCar(newCar: string, horsePower: number){
    console.log("car added");
    this.counter++;
    this.cars.push(
      new Car(this.counter, newCar, horsePower)
    );
  }

  onDeleteCar(index: number){
    console.log("car deleted " + index);
    this.cars.splice(index, 1)
  }

  back(){
    this.showList = true;
    this.showDetail = false;
  }


  inputValue: string;

  onChangeInput(event: KeyboardEvent){
    let target = <HTMLInputElement> event.target;
    console.log(target.value);
    this.inputValue=target.value;
  }


}
