import {Component, OnInit} from '@angular/core';
import {Car} from "./car";
import {CarService} from "./car-service";
import {viewClassName} from "@angular/compiler";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public newCar: string;
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

  onAddCar(newCar: string){
    console.log("car added");
    this.counter++;
    this.cars.push(
      new Car(this.counter, newCar)
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

  changeClass(event){
    let target = event.target;
    let currentClass = target.classList;
    let currentId = target.id;

    let elements = document.getElementsByClassName('selected');

    document.getElementById(currentId).className = 'selected';

    for(let item in elements){
      console.log(item)
      console.log(currentId + " " + currentClass);
      //document.getElementById(currentId).classList.remove(currentClass);
    }

    document.getElementById(currentId).className = 'selected';

    }
}
