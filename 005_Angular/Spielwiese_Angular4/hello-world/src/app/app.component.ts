import {Component, OnInit} from '@angular/core';
import {Car} from "./car";
import {CarService} from "./car-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  newCar: String;

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

  onAddCar(newCar: string){
    console.log("car added");
    this.cars.push(
      new Car(8, newCar)
    );
  }

  onDeleteCar(index: number){
    console.log("car deleted " + index);
    this.cars.splice(index, 1)
  }

}
