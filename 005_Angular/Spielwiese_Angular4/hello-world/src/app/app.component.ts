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

  constructor(private carService: CarService){}

  ngOnInit(){
    this.carService.getCars().then(cars => this.cars = cars);
  }

  showCarDetails(car: Car){
    console.log(car);
    this.selectedCar = car;
  }

}
