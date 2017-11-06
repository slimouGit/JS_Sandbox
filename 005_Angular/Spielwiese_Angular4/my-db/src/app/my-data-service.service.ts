import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataServiceService {

  constructor(private http: Http) { }

  /**
  fetchData(){
    this.http.get('src/data/cars.json').subscribe(
      (data) => console.log(data)
    );
  }
  **/

  fetchData(){
    return this.http.get('src/data/cars.json').map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }

}
