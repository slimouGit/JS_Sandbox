import { Component } from '@angular/core';
import {Car} from "./car";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedCar;

  cars = [
    new Car(1, 'Toyota'),
    new Car(2, 'Mercedes'),
    new Car(3, 'Porsche'),
    new Car(4, 'Mercedes')
  ];

  title = this.cars[1].brand;

  displayCar(x){
    alert("Car " + x);
  }

  printCar(x){
    console.log(x);
    this.selectedCar = x;
  }
}
