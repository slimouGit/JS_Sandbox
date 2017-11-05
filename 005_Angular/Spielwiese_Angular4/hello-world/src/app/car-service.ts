import { Injectable } from '@angular/core';

import {Car} from "./car";
import {CARS} from "./MockCarData";

@Injectable()
  export class CarService{

  getCars(): Promise<Car[]>{
    console.log(CARS);
    return Promise.resolve(CARS);
  }
  /*
  printContacts(): Promise<Car[]>{
    return new Promise(resolve => {
      resolve(this.getCars());
    })
  }
  */
}
