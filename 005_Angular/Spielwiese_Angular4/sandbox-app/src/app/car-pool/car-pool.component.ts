import { Component, OnInit } from '@angular/core';
import {DataService} from "../data-service.service";
import {Cars} from "../models/cars";

@Component({
  selector: 'app-car-pool',
  templateUrl: './car-pool.component.html',
  styleUrls: ['./car-pool.component.css']
})
export class CarPoolComponent implements OnInit {

  cars:Cars[];
  showCars: boolean = false;
  selectedCar;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      result => this.cars = result,
      error => console.log(error),
            () => console.log(this.cars)
    )
  }

  showCarPool(){
    this.showCars = true;
  }
  hideCarPool(){
    this.showCars = false;
  }

  showDetails(car: Cars){
    console.log(car.brand + " " + car.model + " " + car.color + " " + car.hp);
    this.selectedCar = car;
  }

  updateValue;

  showUpdatedCar(val){
    console.log("thrown value: " + val);
    this.updateValue = val;
  }
}
