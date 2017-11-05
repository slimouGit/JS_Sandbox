import {Component, OnInit} from '@angular/core';
import {Car} from "./car";
import {CarService} from "./car-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  selectedCar: Car;

  cars: Car[];

  title= "World";

  firstname = "Hans";
  surName;

  constructor(private carService: CarService){}

  ngOnInit(){
    this.carService.getCars().then(cars => this.cars = cars);
  }

  displayCar(x){
    alert("Car " + x);
  }

  printCar(x){
    console.log(x);
    this.selectedCar = x;
  }
}
