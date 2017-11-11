import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Cars} from "./models/cars";


@Injectable()
  export class DataService {

    constructor(private http: HttpClient){}

    getData(): Observable<Cars[]>{
      return this.http.get<Cars[]>('assets/data/cars.json');
    }

  }


